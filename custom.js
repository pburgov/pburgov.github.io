// Register a global action
var action_name = Jupyter.actions.register({
    help: 'hide/show the menubar',
    handler : function(env) {
        $('#menubar').toggle();
        events.trigger('resize-header.Page');
    }
}, 'toggle-menubar', 'jupyter-notebook');
// Add a menu item to the View menu
$('#view_menu').prepend('<li id="toggle_menu" title="Show/Hide the menu bar"><a href="#">Toggle Menu</a></li>').click(function() {
    Jupyter.actions.call(action_name);
});
// Add a shortcut: CMD+M (or CTRL+M on Windows) to toggle menu bar
Jupyter.keyboard_manager.command_shortcuts.add_shortcut('Cmdtrl-M', action_name);