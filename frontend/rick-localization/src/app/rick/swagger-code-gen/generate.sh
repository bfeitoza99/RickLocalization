#!/bin/sh

java -jar swagger-codegen-cli-3.0.24.jar generate \
    -l typescript-angular \
    -i http://e8ce9a7b430c.ngrok.io/swagger/v1/swagger.json \
    -o ../services/swagger-generated






