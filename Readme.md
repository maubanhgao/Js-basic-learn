Learn js basic

**Check validate**

https://www.w3resource.com/javascript/form/email-validation.php

**[a-zA-Z0-9.-]+**: After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-‘).

**\.**: After the second group of characters there must be a period (‘.’). This is to separate domain and subdomain names.

**[a-zA-Z]{2,4}$/**: Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed.
{2,4} indicates the minimum and maximum number of characters. This will allow domain names with 2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz).

**duplicate:	**\\w+

```js
var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return pattern.test(input); //return a boolean
```

