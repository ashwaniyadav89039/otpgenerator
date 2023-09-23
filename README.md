# OTP Verification 

The OTP Verification Web app is a simple yet secure application that allows users to verify their mobile numbers using a One-Time Password (OTP) sent to their mobile devices. This project demonstrates a typical OTP verification workflow with the added challenge of sending real OTPs to users.

## Screenshots
![Screenshot 2023-09-23 at 11 46 07 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/39291cef-6ee6-4c06-88d0-d4590478a248)
![Screenshot 2023-09-23 at 11 46 13 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/7812be92-c7d2-4677-87a4-a5464bc802b8)
![Screenshot 2023-09-23 at 11 46 21 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/2a950af4-d1f4-481d-815e-7f4206fcd202)
![Screenshot 2023-09-23 at 11 46 52 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/6d3b1e80-48e8-458f-a1fc-ad5ef4c21035)
![Screenshot 2023-09-23 at 11 47 19 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/b98a0faf-a557-495a-9fbe-6c00f9406495)
![Screenshot 2023-09-23 at 11 47 10 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/8c5e239e-5687-4450-a2c8-cae46d49fb51)
![Screenshot 2023-09-23 at 11 47 47 PM](https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/d903ba7a-7b39-4d78-9f99-7423031e5247)

## Screen Recording
https://github.com/ashwaniyadav89039/otpgenerator/assets/104669968/1356606c-9530-47bf-be20-bd8df3bc2457


### Screen 1: Mobile Number Entry
- Users can enter their mobile numbers.
- The option to change the country code is available for international users.
- Clicking on "Send OTP" initiates the OTP generation process via a REST API.

### Screen 2: OTP Verification
- Users are prompted to enter the OTP sent to their mobile number.
- At notification displays the OTP generated via the REST API for reference.
- Clicking "Verify OTP" sends the entered OTP to a REST API for validation.
- if validation sucess it go to next page otherwise show an error.

### Screen 3: Success/Failure
- Upon successful OTP verification, users are redirected to the "Success Screen".
- In case of OTP verification failure, a notification informs the user about the failure.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/ashwaniyadav89039/otpgenerator.git
   cd otp-verification-app
2. Install the required dependencies
     npm install
3.Start the development server:
    npm start

## Technology used
1.Node.js
2.Ejs
3.CSS for styling
4.Express

## Set-up of projet
- creation of folder
   1. controller - To write all API
   2. Route - For making routes
   3. View - For frontend files
   4. Image - To store images 
- open the terminal run command npm init
- Install all dependency ejs,express,express-flash,express-session,nexmo,nodemon
    

## Made by
Ashwani yadav

   
