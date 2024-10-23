# Using Power Automate with Contacts Pro

Follow these steps to connect Power Automate with Contacts Pro:

### Prerequisites:

- Contacts Pro application installed
- Platinum version of Contacts Pro
- Power Automate Premium subscription

## 1. Get the Teams Pro Graph API Key

The **Teams Pro Graph API Key** allows users to connect to our API. This is only available if you have a valid Platinum license for Contacts Pro.

1. Visit the [TeamsPro developer page](https://developer.teams-pro.com/).

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image12.png)

2. Log in with the account that holds the license by clicking the **"Sign In"** button.

3. Navigate to the **"Products"** page by clicking the "Products" button.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image13.png)

4. Locate the **Contacts Pro** API in the list of APIs, and click on it.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image14.png)

5. Click the **"Subscribe"** button to subscribe to the API. A loading screen will appear, and once complete, you should see a confirmation.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image15.png)

6. Go to the **"Profile"** page by clicking the "Profile" button.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image16.png)

7. To retrieve your **Teams Pro Graph API Key**, click the **"Show"** button next to **Primary key** in your **Contacts Pro subscription**.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image17.png)

## 2. Retrieve the Contacts Pro Application Identifier

To access data from your Teams Pro applications, you need the application identifier (ID).

1. Open the Contacts Pro application in Teams.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image18.png)

2. Click the information button in the top right-hand corner and select **"About"**.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image19.png)

3. A window will display your application identifier.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image20.png)

## 3. Connect to Power Automate

1. Go to the Power Automate website and create a new flow.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image21.png)

2. Click **"Create"** to start a new flow.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image22.png)

3. Select the flow type you want to use. For this documentation, we'll use **"Instant cloud flow"**.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image23.png)

4. Name your flow and choose a trigger. Here, we'll use **"Manually trigger a flow"**.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image24.png)

5. After selecting and validating, you’ll be redirected to the flow creation canvas. Click **"+"**, then **"Add an action"** to connect your event to the API.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image25.png)

6. In the panel that opens on the left, search for **"Contacts Pro"** and select it.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image26.png)

7. Choose the action you want to perform. Here, we'll use the **"Get all contacts"** action.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image27.png)

8. Enter the **"Contact List ID"**, which is the application identifier retrieved in step 2.

9. Click **"Change connection"** to authenticate with our API.

   ![Start Export Modal](/assets/img/teams-pro/contacts-pro/image28.png)

10. Select **"Add new"** and fill in the fields with the following information:

    - **Connection Name**: Enter a name of your choice.
    - **TeamsPro Graph API Key**: Enter the API key obtained in step 1.

11. Click **"Create New"** to complete the authentication.

Once all these steps are completed, save your flow, and it will be ready to use!

![Start Export Modal](/assets/img/teams-pro/contacts-pro/image29.png)
