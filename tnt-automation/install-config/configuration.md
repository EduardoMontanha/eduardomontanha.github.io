## Environment Variables
<ol>
    <li>
        Search for *Environment variables* on Windows and click on it<br>
        ![Step 1](/images/install-config/step1.png "Step 1")
    </li>
    <li>
        A window called *System Properties* will open.<br>
        Click in the button *Environment Variables...*<br>
        ![Step 2](/images/install-config/step2.png "Step 2")
    </li>
    <li>
        A new window called *Environment Variables* will open.<br>
        Double click on the *Path* variable inside *System variables* section.<br>
        ![Step 3](/images/install-config/step3.png "Step 3")
    </li>
    <li>
        Another window called *Edit environment variable* will open. (Yes, it's a lot of windows).<br>
        Click on *New* button.<br>
        ![Step 4](/images/install-config/step4.png "Step 4")
    </li>
    <li>
        You will add the *npm* location. You might just have to change the user name.<br>
        `C:\Users\eduardo_montanha\AppData\Roaming\npm`<br>
        And click *OK*.<br>
        ![Step 5](/images/install-config/step5.png "Step 5")
    </li>
    <li>
        Click *OK* again.<br>
        ![Step 6](/images/install-config/step6.png "Step 6")
    </li>
    <li>
        And again.<br>
        ![Step 7](/images/install-config/step7.png "Step 7")
    </li>
    <li>
        And it's done!
    </li>
</ol>

## Node.js
<ol>
    <li>Open the *Command Prompt*.</li>
    <li>Type `npm config set proxy http://127.0.0.1:53128`. And press *ENTER*.</li>
    <li>Type `npm config set https-proxy http://127.0.0.1:53128`. And press *ENTER*.</li>
    <li>That's it!</li>
</ol>