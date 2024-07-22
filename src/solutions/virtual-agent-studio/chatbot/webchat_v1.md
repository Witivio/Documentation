# Configuration of the Webchat V1 component (obsolete)

> **Reminder:**  this version is obsolete and will no longer be supported starting from the 1rst October 2019. 
To enable Webchat V1 control on your website, simply add the iframe and replace the settings. 

```
<!DOCTYPE html>
<html>
<head>
    <title>Witivio webchat sample</title>
</head>
<body>
    <script>
        window.webChatSettings = {
            botId: '[BOTID]',
            color: '[COLOR]',
            avatar: '[URL]',
            title: '[TITLE]',
            height: '500px',
            callout: true,
            welcome: true,
            width:'600px',
            user: {
                'id':'userId',
                'name': 'displayName'
            },
            refresh:false,
        };
        !function () { function t() { var t = e.createElement("script"); t.type = "text/javascript", t.async = !0, t.src = "https://webchat.witivio.com/init.js", t.onload = function () { loadWebChat(window.webChatSettings) }; var n = e.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n) } var e = document, n = window; n.attachEvent ? n.attachEvent("onload", t) : n.addEventListener("load", t, !1) }();
    </script>
</body>
</html>
```

<table>
        <tr>
            <td>BotId</td>
            <td>The unique identifier of your chatbot. The ID is available in the settings menu.</td>
        </tr>
        <tr>
            <td>Color</td>
            <td>Primary color in Hexa. </td>
        </tr>
        <tr>
            <td>Avatar</td>
            <td>The URL of the image of your chatbot. </td>
        </tr>
		<tr>
            <td>Title</td>
            <td>The title of the chat window. Usually the name of the chatbot.</td>
        </tr>
		<tr>
            <td>Callout</td>
            <td>Activate the welcome message. (by default: true)</td>
        </tr>
		<tr>
            <td>Welcome</td>
            <td>Enable the display of the welcome message in the chat window. (by default: true)</td>
        </tr>
		 <tr>
            <td>USER</td>
            <td>Not mandatory. You can use it in SharePoint.  
            <pre><code>
{
    'id': _spPageContextInfo.aadUserId,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            ou 
            <pre>
            <code>
{
    'id': _spPageContextInfo.userPrincipalName,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            If no configuration is specified, the component generates a unique identifier that is stored in the browser.
            </td>
        </tr>
        <tr>
            <td>refresh</td>
            <td>Display a botton that refresh the component (by default : false) </td>
        </tr>
         <tr>
            <td>environnement</td>
            <td>Environment of the Knowledge base ('production' or 'integration') (by default: 'production')</td>
        </tr>
<tr>
            <td>triggerableDialogId</td>
            <td>Triggerable Dialog ID (not mandatory)</td>
        </tr>
        <tr>
            <td>triggerableDialogItemId</td>
            <td>Triggerable Item ID to start (not mandatory)</td>
        </tr>
        <tr>
            <td>background</td>
            <td>Background image (default value: square3d). possible value: square3d, communication, square, travel</td>
        </tr>
         <tr>
            <td>autocomplete</td>
            <td>Display question with autocomplete style (par défaut: false)</td>
        </tr>
         <tr>
            <td>autoscroll</td>
            <td>Force the autoscroll when the user go up in the conversation and decide to send a new message in the chat (default value: false).</td>
        </tr>
        <tr>
            <td>buttonDesign.shape</td>
            <td>Choose the shape of the button, possible value: square, circle, chat (default value: circle)</td>
        </tr>
        <tr>
            <td>buttonDesign.icon</td>
            <td>Choose the icon of the button, possible value:: 'bot' (to use the image of your bot from the plateform), 'fa fa-comment'if you want to use a Font Awesome (for instance 'fa fa-quote-right' ou 'fas fa-comment'). You can also add an URL of a image of your choice. (default value: 'fa fa-comment-dots')</td>
        </tr>
        <tr>
            <td>buttonDesign.height</td>
            <td>Button height, advised unit: 'px' (default value: '80px') </td>
        </tr>
        <tr>
            <td>buttonDesign.width</td>
            <td> Button width, advised unit: 'px' (default value: '80px') </td>
        </tr>
        <tr>
            <td>buttonDesign.border</td>
            <td> 6 hexadecimal chararacter for the color of the border or 'none' if you don't want any border (Be aware that the shape 'chat' always need a border) (default value: 'ffffff') </td>
        </tr>
        <tr>
            <td>buttonDesign.text</td>
            <td> The text to display beside the choosen icon.
            If your text has more than 25 character, it will be not displayed entirely. </td>
        </tr>
        <tr>
            <td>headerHeight</td>
            <td> Change the header size. Possible value: small, big (default value: 'big' if unspecified)</td>
        </tr>
        <tr>
            <td>position</td>
            <td> position of the webchat on the page,'top', 'middle' or 'bottom' then 'left' or 'right' followed with a margin of 150px maximum (default value: 'bottom right 10px 10px') </td>
        </tr>
</table>




---


<Intercom />
<Clarity />
<GoogleAnalytics />