# Aide au démarrage

Avant tout, assurez-vous d'avoir Docker d'installé et d'ouvert : https://www.docker.com/

 option 1 :
* Cloner le repo avec la commande dans le terminal de commande : git clone https://github.com/nicolaspoda/SAE-ALT-S3-Dev-22-23-STDS-3B-Equipe-6.git
* Toujours dans le terminal déplacez-vous dans le dossier code : cd code

 option 2 : 
* Télécharger le fichier release.zip
* Le dézipper


Puis :
* Importer le fichier node_modules avec la commande : npm install
* Lancer le projet avec la commande : docker compose up -d
* Vous pourrez ensuite stoper le projet en tapant : docker compose down


Enfin, vous pouvez accéder au site depuis votre localhost : 
* Rendez-vous sur : http://localhost:3000/
* Vous avez également la possibilité d'accéder à la version mobile depuis votre téléphone : ip de votre ordinateur suivi du port :3000 ( Assurez-vous d'être sur le même réseau wifi ) ex: 192.168.0.0:3000
