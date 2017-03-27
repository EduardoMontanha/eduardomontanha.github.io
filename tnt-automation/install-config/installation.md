## Java
<ol>
    <li>Install [Java](https://www.java.com).</li>
</ol>

## CNTLM
1 - Download the [CNTLM](http://cntlm.sourceforge.net/).<br>
2 - Run the file and install on your computer.<br>
3 - Open the *cntlm.ini* file.<br>
4 - Replace the *Username* and *Domain* for your Dell username and server (*americas* for example).<br>
5 - Password must be blank.

```txt
Username	username
Domain		americas
Password	
```

6 - Change the proxy

```txt
Proxy		proxy:80
Proxy		proxy.us.dell.com:80
```

7 - Change *Listen*

```txt
Listen		53128
```

8 - Save the file.<br>
9 - Open the *Command Prompt* and go to the cntlm folder.<br>
10 - Type `cntlm -H` and then put your Dell password.<br>
11 - Copy all the response below *Password:* and replace in the *cntlm.ini* file.

```txt
PassLM          7488525EA80B9BAS93JFEA30F80D7E5D
PassNT          5CF77CC7B88CFB015S8E6FD2D2F2EB51
PassNTLMv2      A1FCA81S532WA4GE50912FB8A2E860CB    # Only for user 'username', domain 'americas'
```

12 - Save and close the file.

## Node.js
<ol>
    <li>Install [Node.js](https://nodejs.org/en/).</li>
</ol>

## Adobe Flash Player
*This step is necessary to see some banners and content on Nightwatch.js*
<ol>
    <li>On Fiferox you will download the [Adobe Flash Player](https://get.adobe.com/br/flashplayer/)</li>
</ol>