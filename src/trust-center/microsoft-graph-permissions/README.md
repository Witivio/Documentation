# Microsoft Graph Permissions

## What is Microsoft Graph?

Microsoft Graph is a RESTful web API that enables applications to access digital work and digital life data across the Microsoft 365 cloud ecosystem. It acts as a unified endpoint (`https://graph.microsoft.com`), allowing for a streamlined way to access data across various Microsoft services, including Office 365, Windows 10, and Enterprise Mobility + Security.

Key Characteristics:
- **Unified API Endpoint**: Microsoft Graph consolidates various Microsoft cloud services' APIs under a single RESTful API endpoint.
- **Rich Data Access**: It provides access to a wealth of resources such as user profiles, emails, calendars, documents, directory, devices, and more.
- **Cross-Platform Nature**: Designed to work across platforms and devices, enhancing interoperability.
- **Real-Time Updates**: Offers capabilities like webhooks for real-time notifications on data changes.

## Integrating with Microsoft Graph

Integration with Microsoft Graph typically involves:
- **Authentication**: Leveraging Azure Active Directory for OAuth 2.0 authentication to ensure secure access.
- **API Queries**: Making HTTP requests to the Graph endpoint to retrieve or manipulate data.
- **Permissions**: Managing application permissions and consent levels to comply with organizational and security policies.

## Security Implications

Understanding the security implications of Microsoft Graph is crucial:

- **Authentication and Authorization**: Utilizes Azure AD for robust authentication and OAuth 2.0 for authorization, ensuring secure access patterns.
- **Data Access Control**: Implement fine-grained control over data access with extensive permission scopes.
- **Compliance and Privacy**: Adherence to global compliance standards and privacy laws, making it suitable for various industries.
- **Audit and Monitoring**: Capabilities to monitor and audit activity, ensuring transparency and aiding in anomaly detection.


## Admin-restricted permissions
Depending on the permission type (Delegated or Application), some high-privilege permissions in the Microsoft ecosystem are set to admin-restricted.  
Examples of these kinds of permissions include the following:
* Read all user's full profiles by using ```User.Read.All```
* Write data to an organization's directory by using ```Directory.ReadWrite.All```
* Read all groups in an organization's directory by using ```Groups.Read.All```

For Witivio soliutions to access data in Microsoft Graph, your administrator must grant it the correct permissions via a consent process.  

Learn more:
* [Azure AD application consent experience...](https://docs.microsoft.com/en-us/azure/active-directory/develop/application-consent-experience)

## Required Permissions

For Witivio solutions to work properly and perform some administrative operations, it requires the following permissions.

### OpenId standard scopes
The OpenID scopes represents the basics required for any OAuth authentication:

| Scope | Description | Justification | Admin Consent Required |
|-------|-------------|---------------|:----------------------:|
| ```email``` | View users' email address. | **Microsoft Teams SSO.** | No |
| ```offline_access``` | Maintain access to data you have given it access to. | **Microsoft Teams SSO.** | No |
| ```openid``` | Sign users in. | **Microsoft Teams SSO.** | No |
| ```profile``` | View users' basic profile. | **Microsoft Teams SSO.** | No |

### Microsoft Graph Scopes
The Microsoft Graph scopes are specific to the Microsoft platform:

Learn more with [Microsoft Graph permissions reference...](https://docs.microsoft.com/en-us/graph/permissions-reference)

Learn more about [Authentication and authorization basics for Microsoft Graph...](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#microsoft-graph-permissions)


#### Calendar Pro

* Learn more for [Calendar Pro...](/architecture-security/calendar-pro/#microsoft-graph)

#### Contact Pro

* Learn more for [Contact Pro...](/architecture-security/contact-pro/#microsoft-graph)

#### Keepass Pro

* Learn more for [Keepass Pro...](/architecture-security/keepass-pro/#microsoft-graph)

#### Map Pro

* Learn more for [Map Pro...](/architecture-security/map-pro/#microsoft-graph)

#### Booking Room Pro

* Learn more for [Booking Room Pro...](/architecture-security/bookingroom-pro/#microsoft-graph)

#### Parking Pro

* Learn more for [Parking Pro...](/architecture-security/parking-pro/#microsoft-graph)


#### Company Communicator Pro

* Learn more for [Company Communicator Pro...](/architecture-security/company-communicator-pro/#microsoft-graph)

#### MetaOffice Pro

* Learn more for [MetaOffice Pro...](/architecture-security/metaoffice-pro/#microsoft-graph)

#### Green Center

* Learn more for [Green Center...](/architecture-security/green-center/#microsoft-graph)

#### GPT Pro

* Learn more for [GPT Pro...](/architecture-security/gpt-pro/#microsoft-graph)

<Classification label="public" />
<Hubspot />