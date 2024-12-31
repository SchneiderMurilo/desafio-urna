<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Barryvdh\Snappy\Facades\SnappyPdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UrnaController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->only('store');
    }

    public function store(Request $request)
    {

        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $data = $request->all();

        Registration::create([
            'urna_id' => $data['urna'],
            'federal_deputy_number' => $data['federalDeputy']['number'],
            'federal_deputy_name' => $data['federalDeputy']['candidate'],
            'federal_deputy_party' => $data['federalDeputy']['party'],
            'federal_deputy_nullOrWhite' => $data['federalDeputy']['nullOrWhite'],

            'state_deputy_number' => $data['stateDeputy']['number'],
            'state_deputy_name' => $data['stateDeputy']['candidate'],
            'state_deputy_party' => $data['stateDeputy']['party'],
            'state_deputy_nullOrWhite' => $data['stateDeputy']['nullOrWhite'],

            'senator_number' => $data['senator']['number'],
            'senator_name' => $data['senator']['candidate'],
            'senator_party' => $data['senator']['party'],
            'senator_nullOrWhite' => $data['senator']['nullOrWhite'],

            'governor_number' => $data['governor']['number'],
            'governor_name' => $data['governor']['candidate'],
            'governor_party' => $data['governor']['party'],
            'governor_nullOrWhite' => $data['governor']['nullOrWhite'],

            'president_number' => $data['president']['number'],
            'president_name' => $data['president']['candidate'],
            'president_party' => $data['president']['party'],
            'president_nullOrWhite' => $data['president']['nullOrWhite'],
        ]);


        return response()->json(['message' => 'Voto registrado com sucesso'], 201);
    }

    public function gerarRelatorio($urnaId)
    {

        $federalVotes = Registration::select(
            'federal_deputy_name as name',
            'federal_deputy_party as party',
            'federal_deputy_number as number'
        )
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereNull('federal_deputy_nullOrWhite')
            ->groupBy('federal_deputy_number', 'federal_deputy_name', 'federal_deputy_party')
            ->orderBy('votes', 'desc')
            ->get();


        $federalNullOrWhite = Registration::select('federal_deputy_nullOrWhite as type')
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereIn('federal_deputy_nullOrWhite', ['Nulo', 'Branco'])
            ->groupBy('federal_deputy_nullOrWhite')
            ->get();

        $stateVotes = Registration::select(
            'state_deputy_name as name',
            'state_deputy_party as party',
            'state_deputy_number as number'
        )
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereNull('state_deputy_nullOrWhite')
            ->groupBy('state_deputy_number', 'state_deputy_name', 'state_deputy_party')
            ->orderBy('votes', 'desc')
            ->get();

        $stateNullOrWhite = Registration::select('state_deputy_nullOrWhite as type')
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereIn('state_deputy_nullOrWhite', ['Nulo', 'Branco'])
            ->groupBy('state_deputy_nullOrWhite')
            ->get();

        $senatorVotes = Registration::select(
            'senator_name as name',
            'senator_party as party',
            'senator_number as number'
        )
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereNull('senator_nullOrWhite')
            ->groupBy('senator_number', 'senator_name', 'senator_party')
            ->orderBy('votes', 'desc')
            ->get();

        $senatorNullOrWhite = Registration::select('senator_nullOrWhite as type')
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereIn('senator_nullOrWhite', ['Nulo', 'Branco'])
            ->groupBy('senator_nullOrWhite')
            ->get();

        $governorVotes = Registration::select(
            'governor_name as name',
            'governor_party as party',
            'governor_number as number'
        )
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereNull('governor_nullOrWhite')
            ->groupBy('governor_number', 'governor_name', 'governor_party')
            ->orderBy('votes', 'desc')
            ->get();

        $governorNullOrWhite = Registration::select('governor_nullOrWhite as type')
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereIn('governor_nullOrWhite', ['Nulo', 'Branco'])
            ->groupBy('governor_nullOrWhite')
            ->get();

        $presidentVotes = Registration::select(
            'president_name as name',
            'president_party as party',
            'president_number as number'
        )
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereNull('president_nullOrWhite')
            ->groupBy('president_number', 'president_name', 'president_party')
            ->orderBy('votes', 'desc')
            ->get();

        $presidentNullOrWhite = Registration::select('president_nullOrWhite as type')
            ->selectRaw('COUNT(*) as votes')
            ->where('urna_id', $urnaId)
            ->whereIn('president_nullOrWhite', ['Nulo', 'Branco'])
            ->groupBy('president_nullOrWhite')
            ->get();


        $data = [
            'urnaId' => $urnaId,
            'federalVotes' => $federalVotes,
            'federalNullOrWhite' => $federalNullOrWhite,
            'stateVotes' => $stateVotes,
            'stateNullOrWhite' => $stateNullOrWhite,
            'senatorVotes' => $senatorVotes,
            'senatorNullOrWhite' => $senatorNullOrWhite,
            'governorVotes' => $governorVotes,
            'governorNullOrWhite' => $governorNullOrWhite,
            'presidentVotes' => $presidentVotes,
            'presidentNullOrWhite' => $presidentNullOrWhite
        ];

        $pdf = SnappyPdf::loadView('urna', compact('data'))
            ->setPaper('a4')
            ->setOrientation('portrait');

        return $pdf->download('relatorio-urna.pdf');
    }


}
