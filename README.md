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
<script>
	filtertable('my-table', 'search');
</script>
```