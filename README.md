# goit-nodejs-hw-01

Получаем и выводим весь список контактов
---
 node index.js --action list
![](https://monosnap.com/file/zZs0SgqhMnf9qUj0TsUm15MvkZjqaT.png)

Получаем контакт по id
---
 node index.js --action get --id 5
![](https://monosnap.com/file/wrpqgcsEPBDMiHRlMsBksko0uXxDa3.png)

Добавялем контакт
---
 node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
 node index.js --action list
![](https://monosnap.com/file/koct2XEEEAeOckzwXzE1e4xBPu9xVI.png)

Удаляем контакт
---
 node index.js --action remove --id=3
 node index.js --action list
![](https://monosnap.com/file/xqOiKiPOCXUlfjwa73eTRpsCteNoKO.png)
