# Uber_Clone

## ScreenShot
#### HomeScreen, SearchScreen, DestinationScreen, Drawer
<img width="150" alt="스크린샷 2021-03-26 오후 2 40 08" src="https://user-images.githubusercontent.com/19744909/112803103-e7f0ec00-90ad-11eb-8ba2-d5a81f7997fe.png">.   <img width="150" alt="스크린샷 2021-03-26 오후 2 40 08" src="https://user-images.githubusercontent.com/19744909/112803282-153d9a00-90ae-11eb-9dcf-08fd9cc2aa1f.png">.   <img width="150" alt="스크린샷 2021-03-26 오후 2 40 08" src="https://user-images.githubusercontent.com/19744909/112803362-27b7d380-90ae-11eb-9382-9cc89cb953b5.png">.   <img width="150" alt="스크린샷 2021-03-26 오후 2 40 08" src="https://user-images.githubusercontent.com/19744909/112803590-6f3e5f80-90ae-11eb-9a91-3103e5375659.png">    
## Usage
- React Native
- React Navigator
- JavaScript
- Vector Icon
- Google Maps


## SetUp

> Run ```npm install``` on terminal

> Enable your google map api
> - Maps SDK for iOS
> - Maps SDK for Android
> - Places API
> - Directions API

> Make ```.env``` File in your proj dir and paste below code
> ```
> GOOGLE_MAPS_APIKEY='''YOUR GOOGLE MAP API KEY'''
> ```

> Follow steps to apply your .env (https://github.com/luggit/react-native-config)

> Paste your GOOGLE_MAPS_APIKEY to ```ios/Uber_Clone/AppDelegate.m``` to enable google_maps on IOS
> ```
> [GMSServices provideAPIKey:@"<INPUT YOUR GOOGLE_MAPS_APIKEY>"];
> ```
