<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries = Storage::json("countries.json");

        foreach ($countries as $country) {
            Country::create([
                'name' => $country['name']['common'],
                'flag' => $country['flags']['svg'],
            ]);
        }
    }
}
