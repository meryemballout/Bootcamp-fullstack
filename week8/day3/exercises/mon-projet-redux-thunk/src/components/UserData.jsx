// src/components/UserData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../userSlice';

export default function UserData() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!data) return <p>Aucune donnée utilisateur.</p>;

  return (
    <div>
      <h2>Utilisateur</h2>
      <p><strong>Nom :</strong> {data.name}</p>
      <p><strong>Email :</strong> {data.email}</p>
      <p><strong>Téléphone :</strong> {data.phone}</p>
    </div>
  );
}
