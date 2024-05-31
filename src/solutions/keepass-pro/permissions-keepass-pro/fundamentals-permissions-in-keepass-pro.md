# Permissions in KeePass Pro

To manage permissions in KeePass Pro:
1. Navigate to the Permissions section via the gear icon.
2. Select "Customize permissions" to modify specific access rights.
3. Use the "Add member" button to include new team members and assign roles.
4. To assign owner rights, select the new owner and confirm the change through the dialog box.
5. Save changes to apply the new permissions.

## Role Clarification
Permissions mention two roles: Owner and Member. These two roles are specific to KeePass and there is no link between the same role in Microsoft Teams team.

## Detailed Permissions:

- **General Permissions Settings**:
  - **Everybody in this channel can add/edit/delete passwords**: This setting allows all members of the channel unrestricted access to manage passwords.
  - **Only the owner(s) of this KeePass Pro can add/edit/delete passwords**: This restricts management capabilities to workspace owners only.
  - **Customize permissions**: Allows the owner to specify which members have certain permissions, such as adding, modifying, or deleting passwords.

- **Add Passwords**: This permission allows a user to create and store new passwords within KeePass Pro. Users granted this permission can add entries but may not be able to modify or delete them unless granted additional permissions.
- **Modify Passwords**: This permission enables a user to edit the details of existing passwords. It includes updating the password, changing notes, and other metadata.
- **Delete/Retrieve Passwords**: Users with this permission can delete passwords permanently or retrieve them from the recycle bin. It is a sensitive permission as it can lead to data loss if misused.
- **Change role to Owner**: This critical permission allows the current owner to give ownership rights of the KeePass Pro tab and vault to another Platinum user. This action is irreversible and must be confirmed before proceeding.


### Coexistence of Different License Levels

In the KeePass Pro app:
- **Free Users**: Cannot modify or manage permissions. They can only view the permissions set by the owner.
- **Premium Users**: Similar to Free users, Premium users cannot modify or manage permissions but can view them.
- **Platinum Users**: Have full access to view permissions, but only owners can modify them or assign ownership. Owners can only customize the permissions if they have a Platinum license and can only customize the permissions of members with a Platinum license allocated.

