#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_button_clicked(widget)
{
    if (revealer.get_reveal_child())
        revealer.set_reveal_child(false);
    else
        revealer.set_reveal_child(true);
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Revealer");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

let box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});
window.add(box);

let revealer = new Gtk.Revealer();
revealer.set_vexpand(true);
box.pack_start(revealer, false, false, 0);

let label = new Gtk.Label({label: "Label contained within\na Revealer"});
revealer.add(label);

let button = new Gtk.Button({label: "Reveal"});
button.connect("clicked", function() {on_button_clicked(button)});
box.pack_start(button, false, false, 0);

window.show_all();

Gtk.main();