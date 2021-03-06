**Listes d'utilisateurs**
==================

Cliquez sur l'onglet « **Communication** » puis « **Listes de diffusion** »


::: warning ⚠️
Cet onglet est disponible uniquement pour les chatbots avec Skype et Microsoft Teams comme canaux de diffusion.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist1.png')" alt="low score">
</div>


Dans un premier temps, vous avez la possibilité de créer une liste de diffusion, c'est-à-dire une liste des destinataires du message dans l'onglet "Listes de diffusion".


Nommez cette liste. La configuration de ces listes peut se faire :

1. **à partir d'un fichier Excel (liste statique)**. Pour connaître le format de ce fichier Excel, cliquez sur [**exemple**](https://witivio.blob.core.windows.net/static/list-sample.xlsx)" (1).

::: warning ⚠️
Ajoutez les adresse **SIP** pour Skype et les adresses **UPN** pour Microsoft Teams.
:::

::: warning ⚠️
Pour que la campagne push fonctionne, toutes les lignes (nom, prénom, adresse SIP/UPN) doivent être remplies.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist2.png')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist3.png')" alt="low score">
</div>

2. **à partir d'un groupe Active Directory (liste dynamique).**

* L’administrateur Client fournit à Witivio le client ID et le Secret d’une application Azure AD. Witivio enregistre ces informations.
* Authentification vers Azure AD pour obtenir un token valide.
* Lors de la configuration d’une campagne push, Witivio recherche et affiche les groupes auxquelles l’utilisateur connecté du back office appartient. L’utilisateur sélectionne un groupe.
* Exécution d’une campagne push. Lecture des membres du groupeLecture de l’adresse SIP des membres. Envoi des messages

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist4.png')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist5.png')" alt="low score">
</div>

::: tip 👉
C’est parti !
:::

En cliquant sur "modifier'" vous pouvez changer le nom de la liste ou la supprimer. Ce bouton permet également d'ajouter des utilisateurs.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist6.jpg')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist7.png')" alt="low score">
</div>

::: danger 🔴
Lorsque vous souhaitez créer une campagne push sur Microsoft Teams, vous avez la possibilité de savoir si vos destinataires ont installé l'application du chatbot dans Microsoft Teams. Tout utilisateur ayant l'icône Teams à droite de son adresse, recevra le message push.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist8.png')" alt="low score">
</div>

::: tip 💾
N’oubliez pas d'enregistrer !
:::



### Commentaires
---

<Commentaire />
