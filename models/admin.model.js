exports.findByEmail = (db, email, callback) => {
  const sql = "SELECT * FROM admins WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      return callback(err);
    }
    
    if (results.length > 0) {
      // --- KOREKSI KRITIS: Hapus spasi dari password yang diambil ---
      const admin = results[0];
      admin.password = admin.password.trim(); 
      callback(null, admin);
    } else {
      callback(null, null);
    }
  });
};