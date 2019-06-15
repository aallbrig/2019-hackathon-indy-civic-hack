Zip up lambda directory

```bash
cd lambda && zip -r ../function.zip . * && cd ..
```

Deploy zipped up code to `soteria-alexa-skill` lambda function

```bash
aws lambda update-function-code --function-name soteria-alexa-skill --zip-file fileb://function.zip
```

One liner

```bash
cd lambda && zip -r ../function.zip . * && cd .. && aws lambda update-function-code --function-name soteria-alexa-skill --zip-file fileb://function.zip && rm function.zip
```