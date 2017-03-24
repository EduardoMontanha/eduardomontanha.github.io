## Java
<ol>
    <li>Install [Java](https://www.java.com).</li>
</ol>

## CNTLM
<ol>
    <li>Download the [CNTLM](http://cntlm.sourceforge.net/).</li>
    <li>Run the file and install on your computer.</li>
    <li>Open the *cntlm.ini* file.</li>
    <li>Replace the *Username* and *Domain* for your Dell username and server (*americas* for example).</li>
    <li>Remove the password.</li>
    <li>
        Change the proxy to:
        ```
        Proxy		proxy:80
        Proxy		proxy.us.dell.com:80
        ```
    </li>
    <li>
        Verify if the *Listen* is like:
        ```
        Listen		53128
        ```
    </li>
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