!/bin/sh

install="N"
build="N"

POSITIONAL=()
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -i|--install)
    install="Y"
    shift # past value
    ;;
    -b|--build)
    build="Y"
    shift # past value
    ;;
    *)    # unknown option
    POSITIONAL+=("$1") # save it in an array for later
    shift # past argument
    ;;
esac
done
set -- "${POSITIONAL[@]}"

if [ "$#" -ne 1 ]; then
  echo "Usage: -i|--install -b|--build $0 MDDS_VERSION" >&2
  exit 1
fi

VERSION=$1
echo "Upgrade to MDDS and MEAN-REST VERSION $VERSION..."
BASEDIR=$PWD

packages=(
  "mean-rest-angular"
  "mean-rest-angular-cli"
  "mdds-angular-composite"
  "mdds-angular-auth"
  "mdds-angular-file"
  "mdds-express-auth-app"
  "mdds-mongoose-express-auth-server"
  "mdds-mongoose-express-file-server"
  "mean-rest-express"
)

BASEDIR=$PWD
folders=(".")

number=0
for fd in "${folders[@]}"
do
  number=$(($number+1))
  echo "=========$number: Processing $fd ..."
  cd $BASEDIR/$fd
  for element in "${packages[@]}"
  do
    sed -i '' -e "s/\"$element\":[[:space:]]*\".*\"/\"$element\": \"$VERSION\"/g" package.json
  done
  if [ $install = "Y" ]; then
    rm -rf node_modules
    npm install
  fi
done
