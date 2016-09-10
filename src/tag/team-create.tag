<!-- var apiService = require('../js/apiService.js'); -->
<team-create>
	<h3>チーム作成</h3>
	<form action="" method="post" accept-charset="utf-8">
		<input type="text" name="team_name">
	</form>
	<script type="babel">
		$.post('http://192.168.33.10/api/v1/team', {name : this.team_name.value});
		// apiService.createTeam(this.team_name.value);
	</script>
	<style type="css">
		team-create{
			
		}
	</style>
</team-create>