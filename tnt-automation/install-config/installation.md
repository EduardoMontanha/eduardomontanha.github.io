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
        
        ```txt
        Proxy		proxy:80
        Proxy		proxy.us.dell.com:80
        ```
    </li>
    <li>
        Verify if the *Listen* is like:
        
        ```txt
        Listen		53128
        ```
    </li>
    <li>Save the file.</li>
    <li>Open the *Command Prompt* and go to the cntlm folder.</li>
    <li>Type `cntlm -H` and then put your Dell password.</li>
    <li>Copy all the response below *Password:* and replace in the *cntlm.ini* file.</li>
    <li>Save and close the file.</li>
</ol>

1 Download the [CNTLM](http://cntlm.sourceforge.net/).
2 Run the file and install on your computer.
3 Open the *cntlm.ini* file.
4 Replace the *Username* and *Domain* for your Dell username and server (*americas* for example).
5 Remove the password.

```txt
Username	eduardo_montanha
Domain		americas
Password	
```

6 Change the proxy

```txt
Proxy		proxy:80
Proxy		proxy.us.dell.com:80
```

7 Change the *Listen*

```txt
Listen		53128
```

8 Save the file.
9 Open the *Command Prompt* and go to the cntlm folder.
10 Type `cntlm -H` and then put your Dell password.
11 Copy all the response below *Password:* and replace in the *cntlm.ini* file.

```txt
PassLM          7488525EA80B9BAS93JFEA30F80D7E5D
PassNT          5CF77CC7B88CFB015S8E6FD2D2F2EB51
PassNTLMv2      A1FCA81S532WA4GE50912FB8A2E860CB    # Only for user 'eduardo_montanha', domain 'americas'
```

12 Save and close the file.

## Node.js
<ol>
    <li>Install [Node.js](https://nodejs.org/en/).</li>
</ol>