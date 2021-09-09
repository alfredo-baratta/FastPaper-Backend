# FastPaper Backend

FastPaper is a service similar to Telegra.ph, which allows users to quickly and efficiently write articles and publish them online.

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
