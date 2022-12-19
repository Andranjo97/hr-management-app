run_localstack:
	docker-compose up -d

create_table:
	aws dynamodb --endpoint-url=http://localhost:4566 create-table \
        --table-name HRApp \
        --attribute-definitions \
            AttributeName=id,AttributeType=S \
            AttributeName=sk,AttributeType=S \
        --key-schema \
            AttributeName=id,KeyType=HASH \
            AttributeName=sk,KeyType=RANGE \
    	--provisioned-throughput \
            ReadCapacityUnits=10,WriteCapacityUnits=5


add_data_to_table:
	aws --endpoint-url=http://localhost:4566 dynamodb put-item --table-name HRApp --item '{"id": {"S": "USR#tEnmsa7Cuhtr"}, "sk": {"S": "USR#tEnmsa7Cuhtr"}, "firstName": {"S": "Astrid"}, "lastName": {"S": "Schneider"}, "dob": {"S": "1988-11-15T00:00:00-05:00"}, "startDate": {"S":"2017-03-12T00:00:00-05:00"}, "position": {"S":"hr"}, "profilePicUrl": {"S":"https://ca.slack-edge.com/T03VCBF1Z-U4ETV7S6N-329d70e36545-512"}, "email": {"S": "aschneider@company.com"}}'

scan_table:
	aws dynamodb scan --endpoint-url=http://localhost:4566 --table-name HRApp

close:
	docker stop hr-management-app_localstack_1