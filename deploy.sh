git push
#ncftpput -R fbilab.org -U "the2018@fbilab.org" -P "dontbeevil" /  /dist
scp -r ./dist/* monoame@140.114.40.21:/var/www/techart.cc/public_html
#scp -r ~/Projects/Techart2018/imagenthu_frontend/dist/*
#scp -r ~/Projects/Techart2018/imagenthu_frontend/dist/* techart:/var/www/html
