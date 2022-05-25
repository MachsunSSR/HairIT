<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use File;

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

    $user = User::findOrFail($id);

    if($request->has('foto'))
        {
            $path = "images/";
            File::delete($path . $user->foto);

            $fileName = time().'.'.$request->foto->extension();
            $request->foto->move(public_path('images'), $fileName);

        $users = [
            'nomer_telefon' => $request->phone,
            'jenis_kelamin' => $request->jenis_kelamin,
            'Tanggal_lahir' => $request->dob,
            'name' => $request->name,
            'email' => $request->email,
            'alamat' => $request->alamat,
            'foto' => $fileName,
        ];
    }else{
        $users = [
            'nomer_telefon' => $request->phone,
            'jenis_kelamin' => $request->jenis_kelamin,
            'Tanggal_lahir' => $request->dob,
            'name' => $request->name,
            'email' => $request->email,
            'alamat' => $request->alamat,
            'foto' => $request->foto,
        ];
    }

        // $user->update([
        //     // 'address' => $request->address,
        //     'nomer_telefon' => $request->phone,
        //     'jenis_kelamin' => $request->jenis_kelamin,
        //     'Tanggal_lahir' => $request->dob,
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'alamat' => $request->alamat,
        //     'foto' => $fileName,
        // ]);
        $user->update($users);

        return redirect()->back()->with('success', 'Profile updated successfully');
    }
}
