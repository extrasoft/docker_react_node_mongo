# BASE IMAGE
FROM mongo:3.4.7

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD 1111
ENV MONGO_INITDB_DATABASE shoppers

# เพิ่มข้อมูลตาราง(Collections) เพื่อจำลองข้อมูลเริ่มต้นเมื่อรันคอนเทนเนอร์
ADD ./data/shoppers.js /docker-entrypoint-initdb.d

# วิธีเชื่อมต่อกับ mongodb โดย bash
# docker exec -it mymongodb bash
# mongo -u "admin" -p "1111" --authenticationDatabase "admin"