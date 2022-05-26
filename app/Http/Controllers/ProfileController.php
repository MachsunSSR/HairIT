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
        return view('dashboard.polluxui.partials.profile', compact('user'));
    }

    public function index_endpoint($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function update_endpoint(Request $request, $id)
    {
        $users = User::find($id);
        $users->name = $request->name;
        $users->alamat = $request->alamat;
        $users->nomer_telefon = $request->nomer_telefon;
        $users->jenis_kelamin = $request->jenis_kelamin;
        $users->Tanggal_lahir = $request->Tanggal_lahir;
        $users->email = $request->email;
        $users->foto = $request->$fileName;
        $users->save();
    }

    public function update(Request $request, $id)
    {

    $user = User::findOrFail($id);
    if($request->has('picture'))
        {
            $path = "images/";
            File::delete($path . $user->foto);

            $fileName = time().'.'.$request->picture->extension();
            $request->picture->move(public_path('images'), $fileName);

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
            'foto' => $request->picture,
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
