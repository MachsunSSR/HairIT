<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    public function index($id)
    {
        $user = \Auth::user();

        // dd($user, $profile);
        return view('dashboard.polluxui.partials.profile', compact('user'));
    }

    public function update(Request $request, $id)
    {
        // $profile = Profile::find($id);
        $user = User::find($id);

        $user->update([
            // 'address' => $request->address,
            'nomer_telefon' => $request->phone,
            'jenis_kelamin' => $request->jenis_kelamin,
            'Tanggal_lahir' => $request->dob,
            'name' => $request->name,
            'email' => $request->email,
            'alamat' => $request->alamat,
        ]);
        $user->save();

        return redirect()->back()->with('success', 'Profile updated successfully');
    }
}
