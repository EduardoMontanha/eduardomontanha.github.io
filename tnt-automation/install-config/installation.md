## CNTLM
<ol>
    <li>Download the [CNTLM](http://cntlm.sourceforge.net/).</li>
    <li>Run the file and install on your computer.</li>
    <li>Open the *cntlm.ini* file.</li>
    <li>Replace the *Username* and *Domain* for your Dell username and server (*americas* for example).</li>
    <li>Remove the password.</li>
    <li>Save the file.</li>
    <li>Open the *Command Prompt* and go to the cntlm folder.</li>
    <li>Type `cntlm -H` and then put your Dell password.</li>
    <li>Copy all the response below *Password:* and replace in the *cntlm.ini* file.</li>
    <li>Save and close the file.</li>
</ol>

## Node.js
<ol>
    <li>Install [Node.js](https://nodejs.org/en/).</li>
</ol>

## Environment Variables
<ol>
    <li>
        Search for *Environment variables* on Windows and click on it<br>
        ![Step 1](/images/install-config/step1.png "Step 1")<br>
    </li>
    <li>
        A window called *System Properties* will open.<br>
        Click in the button *Environment Variables...*<br>
        ![Step 2](/images/install-config/step2.png "Step 2")<br>
    </li>
    <li>
        A new window called *Environment Variables* will open.<br>
        Double click on the *Path* variable inside *System variables* section.<br>
        ![Step 3](/images/install-config/step3.png "Step 3")<br>
    </li>
    <li>
        Another window called *Edit environment variable* will open. (Yes, it's a lot of windows).<br>
        Click on *New* button.<br>
        ![Step 4](/images/install-config/step4.png "Step 4")<br>
    </li>
    <li>
        You will add the *npm* location. You might just have to change the user name.<br>
        `C:\Users\eduardo_montanha\AppData\Roaming\npm`<br>
        And click *OK*.<br>
        ![Step 5](/images/install-config/step5.png "Step 5")<br>
    </li>
    <li>
        Click *OK* again.<br>
        ![Step 6](/images/install-config/step6.png "Step 6")<br>
    </li>
    <li>
        And again.<br>
        ![Step 7](/images/install-config/step7.png "Step 7")<br>
    </li>
    <li>
        And it's done!
    </li>
</ol>