<!-- var apiService = require('../js/apiService.js'); -->
<team-create>
	<header>
		<div class="header_logo">
			<h1>SKILL GRAPH</h1>
			<span>かんたんにスキルを見える化</span>
		</div>
	</header>

	<div class="background-image">
		<p>かんたんにチームメンバーのスキルを把握し、<br>
		チームで不足しているスキルをグラフでみれるサイトです</p>
	</div>

	<form id="team_create" action="" method="post" accept-charset="utf-8" onsubmit={ submit }>
		<div class="wrap center">
			

				<h3 class="clearfix"><span class="requre-tag">必須</span>チーム名を入力</h3>
				<input id="team_name" name="team_name" type="text" placeholder="チーム名を入力">

				<h3 class="clearfix">チームの説明を入力</h3>
				<input id="team_desc" type="text" placeholder="チームの説明を入力" name="team_description">

		</div>

		<!-- <div class="button center">
			<a href="#">チームを作る</a>
		</div> --><!-- /.button -->
		<button class="button center" type="submit" name="チームを作る" style="display: block; font-size: 14px; border: none">チームを作る</button>
	</form>


	<footer>
	</footer>


	<script type="babel">
		// const team_name_post = this.team_name.value;
		$(function(){
			$('form').submit(function() {
				 $.post('http://192.168.33.10:3000/api/v1/team', {name : $('#team_name').val(), description: $('#team_desc').val()});
			});
		});
		// submit(e) {
		// 	alert(this.team_name.value);
		// 	$.post('http://192.168.33.10:3000/api/v1/team', {name : this.team_name.value, description: 'aaaaaaaaaaaa'});
		// };
		// apiService.createTeam(this.team_name.value);
	</script>
	<style type="css">
		team-create{
			
		}
	</style>
</team-create>
