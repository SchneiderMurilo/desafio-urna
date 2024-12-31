<?php

namespace App\Http\Controllers;

use Barryvdh\Snappy\Facades\SnappyPdf;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function generateReport()
    {

        $votes = DB::table('votos')->get();

        // Gere o HTML do relatório usando uma view Blade
        $pdfContent = SnappyPdf::loadView('relatorios.urna', compact('votes'))
            ->setPaper('a4')
            ->setOrientation('portrait')
            ->inline();

        return response($pdfContent)->header('Content-Type', 'application/pdf');
    }
}
