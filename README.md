
# Grocery App Built with NativeScript and Angular for Android and IOS
App templates help you jump start your native cross-platform apps with built-in UI elements and best practices. Save time writing boilerplate code over and over again when you create new apps.

## Quick Start
Clone the repository.
Execute the following command to replicate this app:

- Install required dependencies by running the following command
```
npm install
```
- Add android or IOS platform by running the following command
```
tns platform add android

or 

tns platform add ios
```
- After successful platform setup, build and deploy the app by running the following command
```
tns run android --emulator
```

**NB:** Please, have in mind that deploying on apple devices can only be achieved with a mac

## Walkthrough

### Architecture
The application component:
- `app.component.ts` - sets up a page router outlet that lets you navigate between pages.

There are currently two components that setup a login page and a page which holds a ListView of grocery items:
- `/login`
- `/list`

**Login** page has the following components:
- `ActionBar` - It holds the title of the page.
- `GridLayout` - The main page layout that should contain all the page content.
- `FlexBox` - It holds the form elements whose content would be submitted to a backend service on tap of login button.
- `Button` - Submits page items on tap.

**List** page has the following components:
- `ActionBar` - It holds the title of the page.
- `GridLayout` - The main page layout that should contain all the page content.
- `ListView` - It holds an array of grocery items supplied from a backend service on load of the page.

## Get Help
The NativeScript framework has a vibrant community that can help when you run into problems.

Try [joining the NativeScript community Slack](http://developer.telerik.com/wp-login.php?action=slack-invitation). The Slack channel is a great place to get help troubleshooting problems, as well as connect with other NativeScript developers.

If you have found an issue with this template, please report the problem in the [Grocery App Repository](https://github.com/deytola/grocery-app/issues).

## Contributing

I'd love PRs, and accept them gladly. Feel free to propose changes and new ideas. I'd definitely review and discuss, so that they can be accepted and better integrated.
