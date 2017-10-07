# filtertable
Simple library to implement text-based table filtering.
# Use
The filtertable library just reqires a search box with an id and a table with an id.  Include the filtertable js (or min.js) file and then apply the filter table by passing the table and search box ids to the filtertable function.
```html
<input type="text" id="search" />
<table id="my-table">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Title</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>Smith</td>
      <td>UX Designer</td>
      <td>Acme, Inc.</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>Doe</td>
      <td>Senior Engineer</td>
      <td>Sentinel Corporation</td>
    </tr>
    <tr>
      <td>Amie</td>
      <td>Appleton</td>
      <td>Maketing Specialist</td>
      <td>Acme, Inc.</td>
    </tr>
  </tbody>
</table>
<script type="text/javascript" src="https://cdn.rawgit.com/snapjs/filtertable/075d4ddc/filtertable.min.js"></script>
```

```html
<script>
  filtertable('my-table', 'search');
</script>
```
# The MIT License (MIT)
Copyright © 2017 snapjs

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

