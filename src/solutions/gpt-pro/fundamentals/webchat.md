# Webchat Configuration Guide

## Overview

The **Webchat** is a conversational interface that can be integrated into your website, allowing users to interact with a chatbot in real-time. With its customization and security features, it adapts to your business needs and enhances the user experience.

This section walks you through configuring and installing your Webchat, detailing each step:
- **Access and configuration**: Setting up features and customizing the design.
- **Security**: Managing access and authorized URLs.
- **Installation**: Integrating the script into your site.
- **Usage**: Interacting with the chatbot and handling responses.

Follow these steps to ensure a smooth setup and provide an optimal conversational experience for your users.

---

## 1. Accessing the Webchat

To start configuring your Webchat:  
1. Navigate to the **"Configuration"** tab in your administration interface.  
2. Click on **"Webchat"** in the menu to open the configuration options.

![Webchat configuration](/assets/img/gpt/webchat-configuration.png)

---

## 2. Configuring the Webchat

Once the Webchat is selected, you will have access to four configuration tabs:
- **Settings**: Customize messages and features.
- **Design**: Adjust the appearance.
- **Security**: Manage access and authorized URLs.
- **Installation**: Get instructions for integrating Webchat into your site.

---

### 2.1 Configuring Webchat Settings
In the **Settings** tab, you can customize the Webchat’s behavior.

**Content Customization**
- **Welcome message**: Maximum **500 characters**  
- **Webchat description**: Maximum **300 characters**  
- **Default language**:  
  - Defines the display language and chatbot response language.

**Feature Activation**
You can enable or disable the following features:
- **Slider mode**: Webchat opens in full-screen mode.
- **Refresh option**: Allows users to manually refresh the Webchat.

Once your modifications are complete, click **"Save"** to apply them.

---

### 2.2 Customizing Appearance (Design)
In the **Design** tab, you can personalize the Webchat’s look to match your website.

**Customization Options**
- **Colors**: Use the palette to define your colors.
- **Webchat dimensions**:  
  - Minimum width & height: **300 x 400 pixels**  
- **Webchat button dimensions**:  
  - Minimum size: **50 x 50 pixels**  
- **Display mode**:  
  - Open by default / Closed by default  
- **Positioning**:  
  - **Vertical alignment**: Top / Bottom  
  - **Horizontal alignment**: Left / Right  

After customization, click **"Save"** to store your settings.

---

### 2.3 Configuring Security
The **Security** tab allows you to protect Webchat access and control its usage.

**Security Settings**
- **API Key**:  
  - Enter your API key to secure exchanges with the chatbot.  
- **Authorized URLs**:  
  - Add your authorized website URLs using copy/paste (**CTRL+C / CTRL+V**).  
  - You can add or remove URLs as needed.  

Click **"Save"** to apply security restrictions.  

💡To apply the Webchat to all site pages, add the following to the end of the URL:  
`(\/[\S]*)?`

---

### 2.4 Installing Webchat in a WebPart on a Website
In the **Installation** tab, you will find the script needed to integrate Webchat into your site.

**Installation Instructions**
1. Copy the provided script.  
2. Paste it into your website (**inside a WebPart or another suitable location**).  
3. Ensure your site's URL is authorized in the **Security** tab.  

⚠️ **The script cannot be modified. Any modification may cause malfunctions.**

---

### 2.5 Installing Webchat in SharePoint
To integrate Webchat into **SharePoint** add a personnal app in SharePoint : 

**Step 1: Add custom apps in Sharepoint**
1. Ask to witivio the app package 
2. Go to More features in the [SharePoint admin center](https://go.microsoft.com/fwlink/?linkid=2185077), and sign in with an account that has admin permissions for your organization.
3. Under Apps, select Open.
4. On the Manage apps page, select Upload, and browse to the app you want upload, or drag the app into the library. SharePoint Framework solutions have the file name extension .sppkg.
5. Review the info in the Enable app panel. Depending on the functionality that the app provides, the developer can set a flag that allows you to add the app to all sites in the organization. To do this, select Enable this app and add it to all sites.
[More info here](https://learn.microsoft.com/en-us/sharepoint/use-app-catalog)

And use this **"GPT Pro Witivio"** component, follow these steps:

---
**Step 2: Access the SharePoint Page**
1. Log in to your **SharePoint** workspace.  
2. Navigate to the **page** where you want to add Webchat.  
3. Click **"Edit Page"** (top right).  
---

**Step 3: Add the WebPart at the Top of the Page**
1. **Place your cursor at the top of the page** to add the WebPart in the correct location.  
2. Click the **"+"** button to insert a new element.  
3. In the window that opens, click **"More WebParts"** at the bottom.  
4. In the search bar, type **"GPT Pro Witivio"**.  
5. Select **"GPT Pro Witivio"** and add it at the top of the page.  
---

**Step 4: Configure the WebPart**
1. Click on the WebPart to open its **settings**.  
2. Click **"Edit Properties"**.  
![Properties](/assets/img/gpt/sharepoint-properties.png)
3. A pop-up window will appear.  
![Configuration](/assets/img/gpt/sharepoint-configuration.png)
4. Enter the **GPT ID**, which you can find in the URL of GPT Pro Admin center.  
![GPTPRO ID](/assets/img/gpt/gpt-id.png)
5. Enter the **API Key** from GPT Pro:  
   - Go to **Configuration > Webchat > Security** and copy/paste the API Key.  
   ---

**Step 5: Save and Publish**
1. Click **"Apply"** to save the changes.  
2. Click **"Publish"** to activate Webchat on the page.  

⚠️ **Don’t forget to add your site’s URL in the "Security" tab of GPT Pro to ensure proper functionality.**

---

## 3. Using the Webchat

Once installed, here’s how users interact with Webchat.

### 3.1 General Functionality
1. Click the **Webchat icon** to open or close it.  
2. The **welcome message** appears immediately.  
3. Type your message in the input field.  
4. Send the message by clicking the **"Send"** button or pressing **"Enter"**.  
5. The chatbot responds instantly.  

---

### 3.2 User Interface
When the Webchat is open, several elements are visible:
- **Welcome message** (at the top of the window).  
- **Webchat description** (if configured).  
- **Refresh button** (if enabled in settings).  
- **"-" button** to close the Webchat.  

---

### 3.3 Receiving Chatbot Responses
When the chatbot responds, the user sees:
- A **message** generated by the chatbot or retrieved from the knowledge base.  
- An **interactive card** with options:  

![Webchat](/assets/img/gpt/webchat-gptpro.png)

1. **"References"** button
   - Click to view the response source.  
   - Expand the reference for more details by clicking the **chevron**.  
   - Click on the reference to open the associated document (**local document or SharePoint**).  

2. **"Export"** button
   - Choose between **Excel** and **Word** formats to download the response.  

3. **User feedback**
   - Click the **thumbs-up** for positive feedback.  
   - Click the **thumbs-down** for negative feedback (**comment required**).  

---

## 4. Best Practices

Here are some best practices to optimize your Webchat experience:
- **Before installation**, ensure your site’s URL is added in the **Security** tab in GPT Pro Admin center.  
- **Customize the design** to match your brand identity.  
- **Monitor user feedback** to continuously improve the experience.  
