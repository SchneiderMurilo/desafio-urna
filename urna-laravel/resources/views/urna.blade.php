<!DOCTYPE html>
<html>
<head>
    <title>Relatorio da Urna</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { text-align: center; margin-bottom: 20px; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .table th, .table td { border: 1px solid #000; padding: 8px; text-align: left; }
        .footer { margin-top: 20px; text-align: center; }
    </style>
</head>
<body>
<div class="header">
    <h1>Relatorio da Urna</h1>
    <p>Urna ID: {{$data['urnaId']}}</p>
    <p>Gerado em: {{ now()->format('d/m/Y H:i:s') }}</p>
</div>

<h2>Deputado Federal</h2>
<table class="table">
    <thead>
    <tr>
        <th>Nome</th>
        <th>Partido</th>
        <th>Numero</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['federalVotes'] as $vote)
        <tr>
            <td style="width: 25%;">{{ $vote->name }}</td>
            <td style="width: 25%;">{{ $vote->party }}</td>
            <td style="width: 25%;">{{ $vote->number }}</td>
            <td style="width: 25%;">{{ $vote->votes }}</td>
        </tr>
    @endforeach
    </tbody>
</table>

<table class="table">
    <thead>
    <tr>
        <th>Tipo</th>
        <th>Votos</th>
        <th>Tipo</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['federalNullOrWhite'] as $vote)
            <td style="width: 25%;">{{ $vote->type }}</td>
            <td style="width: 25%;">{{ $vote->votes }}</td>
    @endforeach
    </tbody>
</table>

<h2>Deputado Estadual</h2>
<table class="table">
    <thead>
    <tr>
        <th>Nome</th>
        <th>Partido</th>
        <th>Numero</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['stateVotes'] as $vote)
        <tr>
            <td style="width: 25%;">{{ $vote->name }}</td>
            <td style="width: 25%;">{{ $vote->party }}</td>
            <td style="width: 25%;">{{ $vote->number }}</td>
            <td style="width: 25%;">{{ $vote->votes }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
<table class="table">
    <thead>
    <tr>
        <th>Tipo</th>
        <th>Votos</th>
        <th>Tipo</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['federalNullOrWhite'] as $vote)
        <td style="width: 25%;">{{ $vote->type }}</td>
        <td style="width: 25%;">{{ $vote->votes }}</td>
    @endforeach
    </tbody>
</table>

<h2>Senador</h2>
<table class="table">
    <thead>
    <tr>
        <th>Nome</th>
        <th>Partido</th>
        <th>Numero</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['senatorVotes'] as $vote)
        <tr>
            <td style="width: 25%;">{{ $vote->name }}</td>
            <td style="width: 25%;">{{ $vote->party }}</td>
            <td style="width: 25%;">{{ $vote->number }}</td>
            <td style="width: 25%;">{{ $vote->votes }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
<table class="table">
    <thead>
    <tr>
        <th>Tipo</th>
        <th>Votos</th>
        <th>Tipo</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['senatorNullOrWhite'] as $vote)
        <td style="width: 25%;">{{ $vote->type }}</td>
        <td style="width: 25%;">{{ $vote->votes }}</td>
    @endforeach
    </tbody>
</table>

<h2>Governador</h2>
<table class="table">
    <thead>
    <tr>
        <th>Nome</th>
        <th>Partido</th>
        <th>Numero</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['governorVotes'] as $vote)
        <tr>
            <td style="width: 25%;">{{ $vote->name }}</td>
            <td style="width: 25%;">{{ $vote->party }}</td>
            <td style="width: 25%;">{{ $vote->number }}</td>
            <td style="width: 25%;">{{ $vote->votes }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
<table class="table">
    <thead>
    <tr>
        <th>Tipo</th>
        <th>Votos</th>
        <th>Tipo</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['governorNullOrWhite'] as $vote)
        <td style="width: 25%;">{{ $vote->type }}</td>
        <td style="width: 25%;">{{ $vote->votes }}</td>
    @endforeach
    </tbody>
</table>

<h2>Presidente</h2>
<table class="table">
    <thead>
    <tr>
        <th>Nome</th>
        <th>Partido</th>
        <th>Numero</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['presidentVotes'] as $vote)
        <tr>
            <td style="width: 25%;">{{ $vote->name }}</td>
            <td style="width: 25%;">{{ $vote->party }}</td>
            <td style="width: 25%;">{{ $vote->number }}</td>
            <td style="width: 25%;">{{ $vote->votes }}</td>
        </tr>
    @endforeach
    </tbody>
</table>
<table class="table">
    <thead>
    <tr>
        <th>Tipo</th>
        <th>Votos</th>
        <th>Tipo</th>
        <th>Votos</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($data['presidentNullOrWhite'] as $vote)
        <td style="width: 25%;">{{ $vote->type }}</td>
        <td style="width: 25%;">{{ $vote->votes }}</td>
    @endforeach
    </tbody>
</table>

</body>
</html>
