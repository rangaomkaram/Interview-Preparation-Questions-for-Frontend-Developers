## What is HTML 
 - HTML stands for Hyper Text Markup Language.

 What is HTML element?

 An HTML element is a component of HTML document defined by a start tag, some content and an end tag. Example

 ```html
<p> This is a paragraph </p>
<div></div>
<a></a>
<span></span>

<!-- This are the examples of html tags -->

 ```

What is purpose of <html> tag?

- html tag is root element of the HTML document, where all HTML elements are desecendants of the HTML tag.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <p></p>
    <div></div>
</body>
</html>
```

How to create a hyperlink in the html ?

We use create a hyperlink by using the <a> anchor tag along with the href attribute.

```html
<a href="www.ranga.com">Personal Portfolio</a>
```

What is the difference between block-level and iniline-element ?

Block-level elements uses a full-width avaliable and start on a new line.Examples are <div>,<p>,<h1>.Inline elements are only uses as much as  width neccessary and do not start a new line.The Inline elements are <span>,<a>,<img>.

How to do you create ordered list in HTML?

using the <ol> tag along with <li> tags are list items.

```html
<ol>
    <li>First item </li>
    <li>Second Item</li>
    <li> Third Item</li>
</ol>
```
How to create unordered list in HTML?

using the <ul> tag along with the <li> tags are list items.

``` html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

What is the purpose of the <head> section in  HTML  document ?

The head section provides the information about meta-data of the HTML document.where title,links to stylesheets , meta.

```html
<head>
    <title>Title of the document </title>
    <link rel="stylesheet" href="style.css"/>
    <meta character-set = "utf-8"/>
</head>
```

How do you add comment in HTML ?

<!-- This is the comment in HTML -->


What is the purpose of the title tag?

The title tag provides the title of the HTML document , shown in browser's title bar or tab.

<title> Title of the document </title>

How do you insert the image in HTML ?

We can insert image by using <img> tag along with src attribute which specifically source image.

<img src="image.png" alt = "Description of image"/>

How do you create the table in HTML ? 

using <table> tag , along with <tr> table for row , <th> table for headers , <td> data for the cells.

```html

<table>
<tr>
<th>Heading 1 </th>
<th> Heading 2 </th>
</tr>
<tr>
<td> data cell 1 </td>
<td> data cell 2 </td>
</tr>
</table>

```

What is the purpose of the <meta> tag ?

Meta tag provides the information of the HTML document, such as character-set, author, description and keywords.

How do you create a form in the HTML ?

```html

<form action="/submit_form" method="post">
    <label for = "fname" >First name : </label>
    <input type = "text" name="fname" id="fname" value="fname">
    <label for = "lname" >Last Name : </label>
    <input type = "text" name = "lname" id = "lname" >
    <label for = "email" >Email Address : </label>
    <input type = "email" name = "email" id = "email">
    <input type = "submit" value = "Submit">
</form>

```

What is the purpose of the <input> tag ?

The input tag is a interactive controller in form, which gives text, checkbox and submit.

<input type="text" name ="fname" >

<input type="checkbox" name="fname" >

What is the difference between <div> and <span> ?

<div> is block-level element which is used for grouping element. <span> is inline element which is used for styling the text.

How do you create  a checkbox in HTML ? 

<input type = "checkbox" name = "subscribe" value="newletter">

