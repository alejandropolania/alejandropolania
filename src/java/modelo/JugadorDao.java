/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import config.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import modelo.player;

/**
 *
 * @author elio
 */
public class JugadorDao {

    Connection con;
    Conexion cn = new Conexion();

    PreparedStatement ps;
    ResultSet rs;

    public String guardar(ArrayList<player> py) {
        String sql = "insert into t_players(dorsal, nombre, edad)values (?,?,?)";
        String msg = "Datos guardados";
        con = cn.Conexion();
        for (int i = 0; i < py.size(); i++) {
            try {
                ps = con.prepareStatement(sql);
                ps.setString(1, py.get(i).getDorsal());
                ps.setString(2, py.get(i).getNombre());
                ps.setInt(3, py.get(i).getEdad());
                ps.executeUpdate();
            } catch (Exception e) {
                return "Error al Guardar";
            }
        }
        return msg;
    }

    public String eliminar(int id) {
        String sql = "Delete From t_players where id=" + id;
        String msg = "Datos Eliminados";
        con = cn.Conexion();
        try {
            ps = con.prepareStatement(sql);
            ps.executeUpdate();
        } catch (Exception e) {
            return "Error al ELIMINAR";
        }

        return msg;
    }

    public List listar() {
        String sql = "select * from t_players";
        //String msg = "Datos guardados";
        List<player> lista = new ArrayList<>();
        con = cn.Conexion();
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                player pl = new player();
                pl.setId(rs.getInt(1));
                pl.setDorsal(rs.getString(2));
                pl.setNombre(rs.getString(3));
                pl.setEdad(rs.getInt(4));
                
                lista.add(pl);
            }

        } catch (Exception e) {
        }

        return lista;
    }


 public String actualizar(ArrayList<player> py) {
        //String sql = "insert into players(dorsal, nombre, edad)values (?,?,?)";
         String sql = "UPDATE t_players from SET dorsal = ?, nombre=? edad= ? where id=?";
        String msg = "Datos actualizados";
        con = cn.Conexion();
        for (int i = 0; i < py.size(); i++) {
            try {
                ps = con.prepareStatement(sql);
                ps.setString(1, py.get(i).getDorsal());
                ps.setString(2, py.get(i).getNombre());
                ps.setInt(3, py.get(i).getEdad());
                ps.executeUpdate();
            } catch (Exception e) {
                return "Error al actualizar";
            }
        }
        return msg;
    }
 
}