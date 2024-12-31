<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'registration';

    protected $fillable = [
        'urna_id',
        'federal_deputy_number',
        'federal_deputy_name',
        'federal_deputy_party',
        'federal_deputy_nullOrWhite',
        'state_deputy_number',
        'state_deputy_name',
        'state_deputy_party',
        'state_deputy_nullOrWhite',
        'senator_number',
        'senator_name',
        'senator_party',
        'senator_nullOrWhite',
        'governor_number',
        'governor_name',
        'governor_party',
        'governor_nullOrWhite',
        'president_number',
        'president_name',
        'president_party',
        'president_nullOrWhite'
    ];

}
