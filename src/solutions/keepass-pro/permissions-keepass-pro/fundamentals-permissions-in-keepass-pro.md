# Managing Permissions in KeePass Pro

## Setting Permissions Settings

1. **Open Permissions Menu:**
   - Click on the settings icon located at the top-right corner of the keepass interface.
   - From the dropdown menu, select "Permissions."

<div class="intercom-container"><img src="/assets/img/teams-pro/keepass-pro/perms-1.png"></div>

2. **General Permissions Settings:**

  - In the permissions dialog, you will see the "General permissions settings" section.
  - Choose one of the following options:
    - **Everybody in this channel can add/edit/delete passwords**: This setting allows all members of the channel unrestricted access to manage passwords.
    - **Only the owner(s) of this KeePass Pro can add/edit/delete passwords**: This restricts management capabilities to workspace owners only.
    - **Customize permissions**: Allows the owner to set specific permissions for each member.

## Customizing Permissions

1. **Customize Permissions:**
   - Select the "Customize permissions" option to enable individual permissions settings.
   - In the "Customized permissions settings" section, you can manage permissions for each member.
   
2. **Add Member:**
   - Click on the "Add member" button to add new members to the permissions list.
   - Use the search bar to find and add members.

3. **Set Individual Permissions:**
   - For each member, set the following permissions by checking the appropriate boxes:
     - **Add:** Allows users to create and store new passwords within KeePass Pro. Users granted this permission can add entries but may not be able to modify or delete them unless granted additional permissions.
     - **Modify:** Allows users to edit the details of existing passwords. It includes updating the password, changing notes, and other metadata.
     - **Delete:** Allows Users to delete passwords permanently or retrieve them from the recycle bin. It is a sensitive permission as it can lead to data loss if misused.
   - **Change role to Owner**: This critical permission allows the current owner to give ownership rights of the KeePass Pro tab and vault to another Platinum user. This action is irreversible and must be confirmed before proceeding.
   - You can also view the member's subscription level (e.g., Platinum).

4. **Save Permissions:**
   - After setting the desired permissions, click on the "Save" button to apply the changes.

   <div class="intercom-container"><img src="/assets/img/teams-pro/keepass-pro/perms-2.png"></div>


### Coexistence of Different License Levels

In the KeePass Pro app:
- **Free Users**: Cannot modify or manage permissions. They can only view the permissions set by the owner.
- **Premium Users**: Similar to Free users, Premium users cannot modify or manage permissions but can view them.
- **Platinum Users**: Have full access to view permissions, but only owners can modify them or assign ownership. Owners can only customize the permissions if they have a Platinum license and can only customize the permissions of members with a Platinum license allocated.

### Role Clarification
Permissions mention two roles: Owner and Member. These two roles are specific to KeePass and there is no link between the same role in Microsoft Teams team.

### Managing Permissions Tips

- **Review Regularly:** Regularly review permissions to ensure they align with team roles and responsibilities.
- **Limit Access:** Restrict permissions to essential personnel to maintain control over the calendar.
- **Clear Roles:** Clearly define roles and communicate them to your team to avoid any confusion.

<Intercom />
<Hubspot />
<Clarity />
<GoogleAnalytics />