# Azan_Time
This website is intended to display various prayer times and Iqamat using a TV in Masjids. The website can run completely offline because all the requirement it needs is served offline. I Initially build this site to work with a Rasberrypie connected to a 32-inch LED/LCD TV. Since the features like buzzer and responsiveness didn't work out well and After all, I am a beginner, I abandoned the project. Any of you can restart the project, And it is well appreciated. Thanks to http://praytimes.org for providing prayer time API, which is an important component for this website.

## View Page
Azan_Time: [Here](https://adilayyoob.github.io/Azan_Time/index.html).

## Initial UI/UX
### 32-inch TV view
![screen](https://user-images.githubusercontent.com/67414716/134114411-4688a84c-b82d-4ea9-8af2-d63d8afc58bb.JPG)

## Features
- Azan_Time has Prayer time and Iqamat mentioned in both Arabic and Malayalam.
- An analog and digital clock to display present time.
- An area to display current date.
- A white strip indicating current prayer time
- A Iqamat stop-watch.
- A buzzer to indicate prayer and Iqamat time.
- A button to adjest time.

## Libraries used
- bootstrap
- jquery-3.0.0
- TweenMax.min.js
- [PrayTimes.js](http://praytimes.org/manual).
- google fonts
  - Gayathri-Bold
  - Gayathri-regular
  - Gayathri-Thin
  - Jomhuria-Regular

## How to Use
You can view the page [here](docs/README.md#features). But you want use it in masjids or intended purpose then.

1. Set google chrome to view webpage in full screen.
   - Right click (or tap and hold on tablet) on the Google Chrome icon from my desktop
   - Select Properties
   - Select Shortcut tab
   - In Target box, change path to say "C:\Program Files\Google\Chrome\Application\chrome.exe" --start-fullscreen

2. Set the page you want Chrome to automatically open.
   - Go back to desktop and click/tap Chrome icon (which should now open full screen)
   - Tap and hold finger on screen and then tap the X to temporarily exit the full screen (or if you're using a keyboard, press F11)
   - Select the 3 vertical dots (top right of screen)
   - Select settings
   - Go down to 'On Start-Up' section, check 'Open a specific page or set of pages' and enter the desired website/URL you want Chrome to open

3. Set automatically open Chrome on start up.
   - Press the Windows key and R together to open the run dialog (if using a tablet, search for the word 'run')
   - Type in shell:startup and press OK, an explorer window will open up
   - Copy and paste the Chrome icon from your desktop to this window
   - Restart your device and Chrome should automatically launch (after 10 seconds or so) AND display full screen.
   
     resource from: [here](https://superuser.com/questions/1362929/how-to-set-google-chrome-to-automatically-open-up-and-in-full-screen).

## Faults In Azan_Time
- Buzzer is blocked by brower's autoplay policy.
- Webpage is not responsive.
- Require some more testing.
