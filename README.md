# FastPaper Backend

Discover the freedom of publishing articles with ease and efficiency! FastPaper offers you the ability to publish your articles without the need for registration. With an intuitive interface and a smooth publishing experience, your content will be online in just a few clicks. Try our project now!

## Installation

To use it you need to install package.json packages.

```bash
cd ./fastpaper-backend
yarn
```

##### Database
Next, you need to import the database with the necessary tables through the sql file (fastpaper.sql) present in the repository

##### Environment variables
Finally, in order to interact with the database and to correctly configure the origin property of the cors rules, it is necessary to modify the environment variables in the .env file.

```bash
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD='********'
DB_NAME='fastpaper'
FRONTEND_HOST='http://127.0.0.1:3000'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/alfredobaratta)

## License
[MIT](https://choosealicense.com/licenses/mit/)
