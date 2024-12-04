//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.85;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.85] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 * - This does NOT set the max cap to be lower than the default cap.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <Taller By x: id>
 * 
 * - Used for: Tileset Notetags
 * - Changes any page B, C, D, E tile marked by terrain tag 'id' to be taller
 *   by 'x' tiles.
 *   - Replace 'x' with a number representing the tiles to be taller by.
 *   - Replace 'id' with a number representing the Terrain Tag you will use to
 *     mark this tile with in the Database editor.
 * - When placing these tiles on the map, all you have to do is just place the
 *   bottom tile.
 *   - ie.: For a tree that's one tile taller, just place the tile at the
 *     bottom where you see the trunk.
 *   - Then, in-game, the tree will appear taller by one tile as marked.
 * - Depending on the priority settings, the tile will appear on different
 *   layers.
 *   - O will place the tile on the below player layer.
 *   - X will place the tile on the same level as the player.
 *   - ★ will place the tile on the above player layer.
 *   - O/X layer tiles have a special property where tall sprites standing in
 *     front of it will no longer clip the top of the sprite, while sprites
 *     standing behind it will be covered by it.
 *   - The X layer sprite will only have a hitbox of 1x1 at the base.
 * - This does not work with events using tiles as graphics. Instead, if you
 *   want to do similar, use the Event & Movement Core's <Tile Expand> notetags
 *   for better control.
 * 
 * ---
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGS Volume
 * - Changes the current BGS volume without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Volume:
 *   - Change the current BGS's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGS Pitch
 * - Changes the current BGS pitch without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Pitch:
 *   - Change the current BGS's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGS Pan
 * - Changes the current BGS pan without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Pan:
 *   - Change the current BGS's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 * 
 *   CTRL + n: Quick Load:
 *   - CTRL + a number from 1 to 9 will yield a quick load of that safe file.
 *   - Does not count auto saves.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 * 
 *   State Icons Non-Frame:
 *   - Replace sprite frame system for non-frame.
 *   - Better for any instances where icons are zoomed.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Enable Masking:
 *   - Enable window masking (windows hide other windows behind them)?
 *   - WARNING: Turning it on can obscure data.
 * 
 *   Correct Skin Bleed:
 *   - Allows you to enable/disable the window skin bleeding correction for
 *     those who wish to use the 95 calculator instead of 96 to augment higher
 *     and larger screen resolutions.
 *   - Read the "Bug Fixes" section if you don't understand what the window
 *     skin bleeding problem is.
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 *
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.85: October 17, 2024
 * * Feature Updates!
 * ** Updated to fit RPG Maker MZ's updated 1.8.1 version better.
 * 
 * Version 1.84: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New notetags added by Arisu:
 * *** Tileset Notetag: <Taller By x: id>
 * **** Changes any page B, C, D, E tile marked by terrain tag 'id' to be
 *      taller by 'x' tiles.
 * **** When placing these tiles on the map, all you have to do is just place
 *      the bottom tile.
 * ***** ie.: For a tree that's one tile taller, just place the tile at the
 *       bottom where you see the trunk. Then, in-game, the tree will appear
 *       taller by one tile as marked.
 * **** O/X layer tiles have a special property where tall sprites standing in
 *      front of it will no longer clip the top of the sprite, while sprites
 *      standing behind it will be covered by it.
 * **** This does not work with events using tiles as graphics. Instead, if
 *      you want to do similar, use the Event & Movement Core's <Tile Expand>
 *      notetags for better control.
 * 
 * Version 1.83: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated documentation for <param Max: x> notetag.
 * *** This does not set the max cap to be lower than the default cap.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > UI Settings > State Icons Non-Frame
 * **** Replace sprite frame system for non-frame.
 * **** Better for any instances where icons are zoomed.
 * 
 * Version 1.82: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added failsafe for $textPopup when some windows have not been initialized
 *    and requesting the text popup.
 * * New Feature!
 * ** New Plugin Parameter and playtest shortcut added by Arisu:
 * *** Plugin Parameters > QoL Settings > Playtest > CTRL + n: Quick Load
 * **** CTRL + a number from 1 to 9 will yield a quick load of that save file.
 * **** Does not count auto saves.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.81: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added for future plugin: VisuMZ_2_BattleGridSystem
 * *** <Grid>
 * *** <No Grid>
 * **** Requires the future plugin VisuMZ_2_BattleGridSystem!
 * **** Read the help section for more information on these.
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Window > Correct Skin Bleed
 * **** Allows you to enable/disable the window skin bleeding correction for
 *      those who wish to use the 95 calculator instead of 96 to augment higher
 *      and larger screen resolutions.
 * **** Read the "Bug Fixes" section if you don't understand what the window
 *      skin bleeding problem is.
 * 
 * Version 1.80: January 18, 2024
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param CtrlQuickLoad:eval
 * @text CTRL + n: Quick Load
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc CTRL + a number from 1 to 9 will yield a quick load of
 * that safe file. Does not count auto saves.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * "Don't" will consolidate both into "Escape".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param StateIconsNonFrame:eval
 * @text State Icons Non-Frame
 * @parent UIArea
 * @type boolean
 * @on Non-Frame
 * @off Normal
 * @desc Replace sprite frame system for non-frame.
 * Better for any instances where icons are zoomed.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param CorrectSkinBleeding:eval
 * @text Correct Skin Bleed
 * @parent WindowDefaults
 * @type boolean
 * @on Correct
 * @off Don't Correct
 * @desc Corrects window skin bleeding bug when used with higher
 * screen resolutions?
 * @default true
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x54b1d3=_0x4f22;(function(_0x257b35,_0x48b32d){const _0x158936=_0x4f22,_0x5b6962=_0x257b35();while(!![]){try{const _0x62ee53=-parseInt(_0x158936(0x5ed))/0x1+-parseInt(_0x158936(0x7bf))/0x2+-parseInt(_0x158936(0x814))/0x3*(-parseInt(_0x158936(0x327))/0x4)+parseInt(_0x158936(0x2dd))/0x5*(-parseInt(_0x158936(0x2af))/0x6)+-parseInt(_0x158936(0x471))/0x7*(-parseInt(_0x158936(0x19c))/0x8)+parseInt(_0x158936(0x1e6))/0x9+-parseInt(_0x158936(0x24a))/0xa*(-parseInt(_0x158936(0x3ff))/0xb);if(_0x62ee53===_0x48b32d)break;else _0x5b6962['push'](_0x5b6962['shift']());}catch(_0x561a29){_0x5b6962['push'](_0x5b6962['shift']());}}}(_0x184c,0xb602d));var label='CoreEngine',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x54b1d3(0x7e2)](function(_0x3109e8){const _0x4bb183=_0x54b1d3;return _0x3109e8['status']&&_0x3109e8[_0x4bb183(0x28e)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x54b1d3(0x738)]=VisuMZ[label][_0x54b1d3(0x738)]||{},VisuMZ[_0x54b1d3(0x35a)]=function(_0x5713ba,_0x486ebd){const _0x36bd3d=_0x54b1d3;for(const _0x3fba7e in _0x486ebd){if(_0x3fba7e[_0x36bd3d(0x27a)](/(.*):(.*)/i)){const _0x6177ca=String(RegExp['$1']),_0xf3f67b=String(RegExp['$2'])['toUpperCase']()[_0x36bd3d(0x848)]();let _0x2c2311,_0x370a87,_0x32d026;switch(_0xf3f67b){case _0x36bd3d(0x6ed):_0x2c2311=_0x486ebd[_0x3fba7e]!==''?Number(_0x486ebd[_0x3fba7e]):0x0;break;case _0x36bd3d(0x2fd):_0x370a87=_0x486ebd[_0x3fba7e]!==''?JSON['parse'](_0x486ebd[_0x3fba7e]):[],_0x2c2311=_0x370a87['map'](_0x22fe89=>Number(_0x22fe89));break;case _0x36bd3d(0x753):_0x2c2311=_0x486ebd[_0x3fba7e]!==''?eval(_0x486ebd[_0x3fba7e]):null;break;case _0x36bd3d(0x619):_0x370a87=_0x486ebd[_0x3fba7e]!==''?JSON['parse'](_0x486ebd[_0x3fba7e]):[],_0x2c2311=_0x370a87[_0x36bd3d(0x755)](_0x32a42c=>eval(_0x32a42c));break;case'JSON':_0x2c2311=_0x486ebd[_0x3fba7e]!==''?JSON[_0x36bd3d(0x5e3)](_0x486ebd[_0x3fba7e]):'';break;case _0x36bd3d(0x964):_0x370a87=_0x486ebd[_0x3fba7e]!==''?JSON[_0x36bd3d(0x5e3)](_0x486ebd[_0x3fba7e]):[],_0x2c2311=_0x370a87[_0x36bd3d(0x755)](_0x1f2465=>JSON[_0x36bd3d(0x5e3)](_0x1f2465));break;case _0x36bd3d(0x566):_0x2c2311=_0x486ebd[_0x3fba7e]!==''?new Function(JSON[_0x36bd3d(0x5e3)](_0x486ebd[_0x3fba7e])):new Function(_0x36bd3d(0x5bf));break;case _0x36bd3d(0x624):_0x370a87=_0x486ebd[_0x3fba7e]!==''?JSON['parse'](_0x486ebd[_0x3fba7e]):[],_0x2c2311=_0x370a87[_0x36bd3d(0x755)](_0x497750=>new Function(JSON[_0x36bd3d(0x5e3)](_0x497750)));break;case _0x36bd3d(0x270):_0x2c2311=_0x486ebd[_0x3fba7e]!==''?String(_0x486ebd[_0x3fba7e]):'';break;case _0x36bd3d(0x2a8):_0x370a87=_0x486ebd[_0x3fba7e]!==''?JSON[_0x36bd3d(0x5e3)](_0x486ebd[_0x3fba7e]):[],_0x2c2311=_0x370a87[_0x36bd3d(0x755)](_0xda90ab=>String(_0xda90ab));break;case _0x36bd3d(0x8c9):_0x32d026=_0x486ebd[_0x3fba7e]!==''?JSON['parse'](_0x486ebd[_0x3fba7e]):{},_0x5713ba[_0x6177ca]={},VisuMZ['ConvertParams'](_0x5713ba[_0x6177ca],_0x32d026);continue;case'ARRAYSTRUCT':_0x370a87=_0x486ebd[_0x3fba7e]!==''?JSON['parse'](_0x486ebd[_0x3fba7e]):[],_0x2c2311=_0x370a87['map'](_0xe45d8c=>VisuMZ[_0x36bd3d(0x35a)]({},JSON['parse'](_0xe45d8c)));break;default:continue;}_0x5713ba[_0x6177ca]=_0x2c2311;}}return _0x5713ba;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x44e)]=SceneManager[_0x54b1d3(0x645)],SceneManager['exit']=function(){const _0x56228f=_0x54b1d3;VisuMZ[_0x56228f(0x66d)][_0x56228f(0x44e)]['call'](this);if(Utils[_0x56228f(0x893)]>=_0x56228f(0x2d4)){if(typeof nw===_0x56228f(0x395))nw[_0x56228f(0x550)]['quit']();}},(_0x5d31bc=>{const _0x260ce8=_0x54b1d3,_0x227707=_0x5d31bc[_0x260ce8(0x693)];for(const _0x481dce of dependencies){if(!Imported[_0x481dce]){alert(_0x260ce8(0x5fe)['format'](_0x227707,_0x481dce)),SceneManager['exit']();break;}}const _0xf7517f=_0x5d31bc[_0x260ce8(0x28e)];if(_0xf7517f[_0x260ce8(0x27a)](/\[Version[ ](.*?)\]/i)){const _0x580fd2=Number(RegExp['$1']);_0x580fd2!==VisuMZ[label][_0x260ce8(0x821)]&&(alert(_0x260ce8(0x244)[_0x260ce8(0x892)](_0x227707,_0x580fd2)),SceneManager['exit']());}if(_0xf7517f[_0x260ce8(0x27a)](/\[Tier[ ](\d+)\]/i)){const _0x2c8ceb=Number(RegExp['$1']);_0x2c8ceb<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x260ce8(0x892)](_0x227707,_0x2c8ceb,tier)),SceneManager[_0x260ce8(0x645)]()):tier=Math['max'](_0x2c8ceb,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x260ce8(0x738)],_0x5d31bc[_0x260ce8(0x39a)]);})(pluginData),((()=>{const _0x377827=_0x54b1d3;if(VisuMZ[_0x377827(0x66d)]['Settings'][_0x377827(0x33d)][_0x377827(0x43d)]??!![])for(const _0x3fe3db in $plugins){const _0x1399fd=$plugins[_0x3fe3db];_0x1399fd[_0x377827(0x693)]['match'](/(.*)\/(.*)/i)&&(_0x1399fd['name']=String(RegExp['$2']['trim']()));}})()),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],'AnimationPoint',_0x2007dd=>{const _0x4d2648=_0x54b1d3;if(!SceneManager[_0x4d2648(0x4c4)])return;if(!SceneManager[_0x4d2648(0x4c4)][_0x4d2648(0x622)])return;VisuMZ[_0x4d2648(0x35a)](_0x2007dd,_0x2007dd);const _0x684f23=Math[_0x4d2648(0x48a)](_0x2007dd[_0x4d2648(0x5c4)]),_0x575b78=Math[_0x4d2648(0x48a)](_0x2007dd[_0x4d2648(0x2a3)]);$gameTemp['requestPointAnimation'](_0x684f23,_0x575b78,_0x2007dd[_0x4d2648(0x3b1)],_0x2007dd[_0x4d2648(0x264)],_0x2007dd['Mute']);}),PluginManager['registerCommand'](pluginData['name'],_0x54b1d3(0x72b),_0x4ab91a=>{const _0x110ed2=_0x54b1d3;VisuMZ[_0x110ed2(0x35a)](_0x4ab91a,_0x4ab91a);const _0x4bf4b2=Math[_0x110ed2(0x48a)](_0x4ab91a[_0x110ed2(0x703)])[_0x110ed2(0x285)](0x0,0x64),_0x4971e1=AudioManager[_0x110ed2(0x344)];_0x4971e1&&(_0x4971e1['volume']=_0x4bf4b2,_0x4971e1['pos']=AudioManager['_bgmBuffer'][_0x110ed2(0x215)](),AudioManager[_0x110ed2(0x4ec)](_0x4971e1),AudioManager[_0x110ed2(0x220)](_0x4971e1,_0x4971e1[_0x110ed2(0x582)]),AudioManager[_0x110ed2(0x7a6)][_0x110ed2(0x74d)](_0x4971e1[_0x110ed2(0x582)]));}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x766),_0x4e7638=>{const _0xca49c=_0x54b1d3;VisuMZ['ConvertParams'](_0x4e7638,_0x4e7638);const _0x1a767a=Math[_0xca49c(0x48a)](_0x4e7638['pitch'])['clamp'](0x32,0x96),_0xf6c2e5=AudioManager[_0xca49c(0x344)];_0xf6c2e5&&(_0xf6c2e5[_0xca49c(0x5da)]=_0x1a767a,_0xf6c2e5['pos']=AudioManager[_0xca49c(0x7a6)][_0xca49c(0x215)](),AudioManager[_0xca49c(0x4ec)](_0xf6c2e5),AudioManager[_0xca49c(0x220)](_0xf6c2e5,_0xf6c2e5['pos']),AudioManager[_0xca49c(0x7a6)][_0xca49c(0x74d)](_0xf6c2e5['pos']));}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x764),_0x276a90=>{const _0x432a58=_0x54b1d3;VisuMZ[_0x432a58(0x35a)](_0x276a90,_0x276a90);const _0x3967c8=Math[_0x432a58(0x48a)](_0x276a90['pan'])[_0x432a58(0x285)](-0x64,0x64),_0x5ddd97=AudioManager[_0x432a58(0x344)];_0x5ddd97&&(_0x5ddd97['pan']=_0x3967c8,_0x5ddd97[_0x432a58(0x582)]=AudioManager[_0x432a58(0x7a6)][_0x432a58(0x215)](),AudioManager['updateBgmParameters'](_0x5ddd97),AudioManager['playBgm'](_0x5ddd97,_0x5ddd97['pos']),AudioManager[_0x432a58(0x7a6)][_0x432a58(0x74d)](_0x5ddd97['pos']));}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x6ce),_0x5809e8=>{const _0x13840b=_0x54b1d3;VisuMZ[_0x13840b(0x35a)](_0x5809e8,_0x5809e8);const _0x18dead=Math['round'](_0x5809e8[_0x13840b(0x703)])[_0x13840b(0x285)](0x0,0x64),_0x55c3d9=AudioManager[_0x13840b(0x498)];_0x55c3d9&&(_0x55c3d9['volume']=_0x18dead,_0x55c3d9[_0x13840b(0x582)]=AudioManager[_0x13840b(0x60d)][_0x13840b(0x215)](),AudioManager[_0x13840b(0x49e)](_0x55c3d9),AudioManager[_0x13840b(0x3a3)](_0x55c3d9,_0x55c3d9['pos']),AudioManager[_0x13840b(0x60d)]['_startPlaying'](_0x55c3d9[_0x13840b(0x582)]));}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x5d1),_0x3c3708=>{const _0x46a109=_0x54b1d3;VisuMZ[_0x46a109(0x35a)](_0x3c3708,_0x3c3708);const _0x2b116=Math[_0x46a109(0x48a)](_0x3c3708['pitch'])[_0x46a109(0x285)](0x32,0x96),_0x234525=AudioManager[_0x46a109(0x498)];_0x234525&&(_0x234525[_0x46a109(0x5da)]=_0x2b116,_0x234525[_0x46a109(0x582)]=AudioManager['_bgsBuffer'][_0x46a109(0x215)](),AudioManager['updateBgsParameters'](_0x234525),AudioManager['playBgs'](_0x234525,_0x234525[_0x46a109(0x582)]),AudioManager['_bgsBuffer'][_0x46a109(0x74d)](_0x234525['pos']));}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x730),_0x47b6d6=>{const _0x437c8f=_0x54b1d3;VisuMZ[_0x437c8f(0x35a)](_0x47b6d6,_0x47b6d6);const _0x5085ce=Math[_0x437c8f(0x48a)](_0x47b6d6[_0x437c8f(0x2de)])[_0x437c8f(0x285)](-0x64,0x64),_0x3f1373=AudioManager[_0x437c8f(0x498)];_0x3f1373&&(_0x3f1373[_0x437c8f(0x2de)]=_0x5085ce,_0x3f1373['pos']=AudioManager[_0x437c8f(0x60d)][_0x437c8f(0x215)](),AudioManager[_0x437c8f(0x49e)](_0x3f1373),AudioManager['playBgs'](_0x3f1373,_0x3f1373['pos']),AudioManager[_0x437c8f(0x60d)][_0x437c8f(0x74d)](_0x3f1373[_0x437c8f(0x582)]));}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x387),_0x157f20=>{const _0x5eff8f=_0x54b1d3;if(!$gameTemp[_0x5eff8f(0x833)]())return;const _0x44ceb3=Input[_0x5eff8f(0x822)]();console[_0x5eff8f(0x886)](_0x44ceb3);}),PluginManager['registerCommand'](pluginData['name'],_0x54b1d3(0x809),_0x4c58cb=>{const _0x528e1a=_0x54b1d3;if(!$gameTemp[_0x528e1a(0x833)]())return;if(!Utils[_0x528e1a(0x8a5)]())return;SceneManager[_0x528e1a(0x4c4)][_0x528e1a(0x843)]=![],VisuMZ[_0x528e1a(0x66d)][_0x528e1a(0x6ef)]();}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x315),_0x116afc=>{const _0x14c7a9=_0x54b1d3;if(!$gameTemp[_0x14c7a9(0x833)]())return;if(!Utils[_0x14c7a9(0x8a5)]())return;SceneManager[_0x14c7a9(0x4c4)][_0x14c7a9(0x843)]=![],VisuMZ['CoreEngine'][_0x14c7a9(0x47c)]();}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x60b),_0x17a693=>{const _0x179f61=_0x54b1d3;if(!$gameTemp[_0x179f61(0x833)]())return;if(!Utils['isNwjs']())return;if(!$gameMap)return;if($gameMap[_0x179f61(0x5c8)]()<=0x0)return;VisuMZ['ConvertParams'](_0x17a693,_0x17a693);const _0x3291ab=_0x179f61(0x93f)['format']($gameMap['mapId']()[_0x179f61(0x2e7)](0x3)),_0x4dda93=VisuMZ['CoreEngine'][_0x179f61(0x747)]($gameMap['mapId']());VisuMZ[_0x179f61(0x66d)][_0x179f61(0x7ae)](_0x4dda93,_0x3291ab,!![]);}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x7ea),_0x389699=>{const _0x1b8533=_0x54b1d3;if(!$gameTemp[_0x1b8533(0x833)]())return;if(!Utils[_0x1b8533(0x8a5)]())return;if(!$gameParty[_0x1b8533(0x224)]())return;VisuMZ[_0x1b8533(0x35a)](_0x389699,_0x389699);const _0x1284e9=_0x1b8533(0x345)[_0x1b8533(0x892)]($gameTroop[_0x1b8533(0x67a)][_0x1b8533(0x2e7)](0x4)),_0x4430a5=VisuMZ[_0x1b8533(0x66d)][_0x1b8533(0x2a9)]($gameTroop[_0x1b8533(0x67a)]);VisuMZ[_0x1b8533(0x66d)]['ExportString'](_0x4430a5,_0x1284e9,!![]);}),VisuMZ[_0x54b1d3(0x66d)]['ExportString']=function(_0x548ee8,_0x38b29e,_0x2d3ebe){const _0x51e515=_0x54b1d3,_0x305c59=require('fs');let _0x1d8b5c='Exported_Script_%1.txt'[_0x51e515(0x892)](_0x38b29e||'0');_0x305c59[_0x51e515(0x55e)](_0x1d8b5c,_0x548ee8,_0x15c3ca=>{const _0x27611e=_0x51e515;if(_0x15c3ca)throw err;else _0x2d3ebe&&alert(_0x27611e(0x7ad)[_0x27611e(0x892)](_0x1d8b5c));});},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x6ef)]=function(){const _0x2348d3=_0x54b1d3,_0x52c8e3=[];for(const _0x381c36 of $dataMapInfos){if(!_0x381c36)continue;_0x52c8e3[_0x2348d3(0x3eb)](_0x381c36['id']);}const _0x278cbe=_0x52c8e3[_0x2348d3(0x506)]*0x64+Math[_0x2348d3(0x745)](0x64);alert('Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x2348d3(0x892)](_0x278cbe)),this[_0x2348d3(0x1fb)]=[],this[_0x2348d3(0x7fa)]=$dataMap;for(const _0x4b59b5 of _0x52c8e3){VisuMZ[_0x2348d3(0x66d)][_0x2348d3(0x6c2)](_0x4b59b5);}setTimeout(VisuMZ['CoreEngine']['exportAllMapStrings'][_0x2348d3(0x580)](this),_0x278cbe);},VisuMZ[_0x54b1d3(0x66d)]['loadMapData']=function(_0x47611c){const _0xf339a9=_0x54b1d3,_0x2162b8=_0xf339a9(0x8de)[_0xf339a9(0x892)](_0x47611c[_0xf339a9(0x2e7)](0x3)),_0xbbdda8=new XMLHttpRequest(),_0x4828d7=_0xf339a9(0x73c)+_0x2162b8;_0xbbdda8['open'](_0xf339a9(0x639),_0x4828d7),_0xbbdda8['overrideMimeType'](_0xf339a9(0x34f)),_0xbbdda8[_0xf339a9(0x4f4)]=()=>this[_0xf339a9(0x3a2)](_0xbbdda8,_0x47611c,_0x2162b8,_0x4828d7),_0xbbdda8[_0xf339a9(0x359)]=()=>DataManager[_0xf339a9(0x28c)]('$dataMap',_0x2162b8,_0x4828d7),_0xbbdda8[_0xf339a9(0x8c6)]();},VisuMZ[_0x54b1d3(0x66d)]['storeMapData']=function(_0x3d2832,_0x2d4e1e,_0x4795a5,_0xc1c6cb){const _0x5804fd=_0x54b1d3;$dataMap=JSON[_0x5804fd(0x5e3)](_0x3d2832[_0x5804fd(0x1c9)]),DataManager[_0x5804fd(0x7f6)]($dataMap),this[_0x5804fd(0x1fb)][_0x2d4e1e]=VisuMZ['CoreEngine']['ExtractStrFromMap'](_0x2d4e1e),$dataMap=this[_0x5804fd(0x7fa)];},VisuMZ[_0x54b1d3(0x66d)]['exportAllMapStrings']=function(){const _0x3eafc8=_0x54b1d3,_0x490afb=_0x3eafc8(0x5bc);this[_0x3eafc8(0x1fb)][_0x3eafc8(0x1bf)](undefined)['remove']('')['remove'](null);const _0x797c1e=this[_0x3eafc8(0x1fb)][_0x3eafc8(0x2fb)](_0x3eafc8(0x7d7))[_0x3eafc8(0x848)]();VisuMZ[_0x3eafc8(0x66d)][_0x3eafc8(0x7ae)](_0x797c1e,_0x490afb,!![]),SceneManager['_scene']['_active']=!![];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x747)]=function(_0x3086cd){const _0x4e1fe5=_0x54b1d3;if(!$dataMap)return'';let _0x5c3a02='█'[_0x4e1fe5(0x20f)](0x46)+'\x0a\x0a',_0x49e5f3='═'[_0x4e1fe5(0x20f)](0x46)+'\x0a\x0a',_0x2066d3='';this['_commonEventLayers']=0x0;for(const _0x3cec70 of $dataMap['events']){if(!_0x3cec70)continue;let _0x4929da=_0x3cec70['id'],_0x318db2=_0x3cec70['name'],_0x5b4c49=_0x3cec70[_0x4e1fe5(0x3a4)];for(const _0x1e50bc of _0x5b4c49){const _0x5cb71a=_0x5b4c49[_0x4e1fe5(0x47b)](_0x1e50bc)+0x1;let _0xa0eaa=_0x49e5f3+_0x4e1fe5(0x3a6),_0x1c0ffd=VisuMZ[_0x4e1fe5(0x66d)][_0x4e1fe5(0x82d)](_0x1e50bc['list']);if(_0x1c0ffd[_0x4e1fe5(0x506)]>0x0){if(_0x2066d3[_0x4e1fe5(0x506)]>0x0)_0x2066d3+=_0x49e5f3+_0x4e1fe5(0x7d7);else{const _0x571067=$dataMapInfos[_0x3086cd][_0x4e1fe5(0x693)];_0x2066d3+=_0x5c3a02+'〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x4e1fe5(0x892)](_0x3086cd,_0x571067||_0x4e1fe5(0x673))+_0x5c3a02;}_0x2066d3+=_0xa0eaa[_0x4e1fe5(0x892)](_0x4929da,_0x318db2,_0x5cb71a,_0x1c0ffd);}}}return _0x2066d3[_0x4e1fe5(0x506)]>0x0&&(_0x2066d3+=_0x49e5f3),_0x2066d3;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x47c)]=function(){const _0x3697a3=_0x54b1d3,_0x47933c=$dataTroops[_0x3697a3(0x506)]*0xa+Math[_0x3697a3(0x745)](0xa);alert(_0x3697a3(0x1b9)['format'](_0x47933c));const _0x4473b9=[];for(const _0x1d8ac2 of $dataTroops){if(!_0x1d8ac2)continue;const _0x5595f1=_0x1d8ac2['id'];_0x4473b9[_0x5595f1]=VisuMZ[_0x3697a3(0x66d)][_0x3697a3(0x2a9)](_0x5595f1);}setTimeout(VisuMZ['CoreEngine'][_0x3697a3(0x3b9)][_0x3697a3(0x580)](this,_0x4473b9),_0x47933c);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2a9)]=function(_0x25686d){const _0x4825c1=_0x54b1d3;if(!$dataTroops[_0x25686d])return'';let _0x540223='█'[_0x4825c1(0x20f)](0x46)+'\x0a\x0a',_0x5b9e51='═'[_0x4825c1(0x20f)](0x46)+'\x0a\x0a',_0x284d70='';this[_0x4825c1(0x5ff)]=0x0;const _0x40a7c9=$dataTroops[_0x25686d];let _0x7576bc=_0x40a7c9[_0x4825c1(0x3a4)];for(const _0x4e866a of _0x7576bc){const _0xc79b2=_0x7576bc['indexOf'](_0x4e866a)+0x1;let _0x28d027=_0x5b9e51+_0x4825c1(0x876),_0x14edae=VisuMZ[_0x4825c1(0x66d)][_0x4825c1(0x82d)](_0x4e866a[_0x4825c1(0x2f6)]);_0x14edae[_0x4825c1(0x506)]>0x0&&(_0x284d70['length']>0x0?_0x284d70+=_0x5b9e51+_0x4825c1(0x7d7):_0x284d70+=_0x540223+_0x4825c1(0x396)['format'](_0x25686d,_0x40a7c9[_0x4825c1(0x693)]||'Unnamed')+_0x540223,_0x284d70+=_0x28d027[_0x4825c1(0x892)](_0xc79b2,_0x14edae));}return _0x284d70['length']>0x0&&(_0x284d70+=_0x5b9e51),_0x284d70;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x3b9)]=function(_0x4efcee){const _0x4944da=_0x54b1d3,_0xeffc4f=_0x4944da(0x70c);_0x4efcee[_0x4944da(0x1bf)](undefined)[_0x4944da(0x1bf)]('')[_0x4944da(0x1bf)](null);const _0x2d0153=_0x4efcee[_0x4944da(0x2fb)](_0x4944da(0x7d7))[_0x4944da(0x848)]();VisuMZ[_0x4944da(0x66d)][_0x4944da(0x7ae)](_0x2d0153,_0xeffc4f,!![]),SceneManager['_scene'][_0x4944da(0x843)]=!![];},VisuMZ['CoreEngine'][_0x54b1d3(0x82d)]=function(_0x2431fe){const _0x4acf01=_0x54b1d3;let _0x2ac322='\x0a'+'─'[_0x4acf01(0x20f)](0x46)+'\x0a',_0x560219='\x0a'+'┄'[_0x4acf01(0x20f)](0x46)+'\x0a',_0x48e5dd='';for(const _0x1ad9ef of _0x2431fe){if(!_0x1ad9ef)continue;if(_0x1ad9ef[_0x4acf01(0x826)]===0x65)_0x48e5dd+=_0x2ac322+'\x0a',_0x48e5dd+=_0x4acf01(0x5c3),_0x1ad9ef['parameters'][0x4]!==''&&_0x1ad9ef[_0x4acf01(0x39a)][0x4]!==undefined&&(_0x48e5dd+=_0x4acf01(0x3d0)['format'](_0x1ad9ef['parameters'][0x4]));else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x191)_0x48e5dd+='%1\x0a'[_0x4acf01(0x892)](_0x1ad9ef['parameters'][0x0]);else{if(_0x1ad9ef['code']===0x192)_0x48e5dd+=_0x2ac322,_0x48e5dd+='%1〘Choice\x20%2〙\x20%3%1'[_0x4acf01(0x892)](_0x560219,_0x1ad9ef[_0x4acf01(0x39a)][0x0]+0x1,_0x1ad9ef[_0x4acf01(0x39a)][0x1]);else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x193)_0x48e5dd+=_0x2ac322,_0x48e5dd+=_0x4acf01(0x8a1)[_0x4acf01(0x892)](_0x560219);else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x194)_0x48e5dd+=_0x2ac322,_0x48e5dd+='%1〘End\x20Choice\x20Selection〙%1'[_0x4acf01(0x892)](_0x560219);else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x69)_0x48e5dd+=_0x2ac322+'\x0a',_0x48e5dd+=_0x4acf01(0x656);else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x6c)_0x48e5dd+=_0x2ac322+'\x0a',_0x48e5dd+=_0x4acf01(0x933)[_0x4acf01(0x892)](_0x1ad9ef[_0x4acf01(0x39a)][0x0]);else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x198)_0x48e5dd+='%1\x0a'[_0x4acf01(0x892)](_0x1ad9ef['parameters'][0x0]);else{if(_0x1ad9ef[_0x4acf01(0x826)]===0x75){const _0x58b1ea=$dataCommonEvents[_0x1ad9ef['parameters'][0x0]];if(_0x58b1ea&&this['_commonEventLayers']<=0xa){this['_commonEventLayers']++;let _0x1a01fd=VisuMZ[_0x4acf01(0x66d)]['ExtractStrFromList'](_0x58b1ea[_0x4acf01(0x2f6)]);_0x1a01fd['length']>0x0&&(_0x48e5dd+=_0x2ac322,_0x48e5dd+=_0x560219,_0x48e5dd+=_0x4acf01(0x50e)['format'](_0x58b1ea['id'],_0x58b1ea[_0x4acf01(0x693)]),_0x48e5dd+=_0x560219,_0x48e5dd+=_0x1a01fd,_0x48e5dd+=_0x560219,_0x48e5dd+=_0x4acf01(0x527)[_0x4acf01(0x892)](_0x58b1ea['id'],_0x58b1ea[_0x4acf01(0x693)]),_0x48e5dd+=_0x560219),this['_commonEventLayers']--;}}}}}}}}}}}return _0x48e5dd[_0x4acf01(0x506)]>0x0&&(_0x48e5dd+=_0x2ac322),_0x48e5dd;},PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x2cb),_0x3e7c94=>{const _0x1d0b12=_0x54b1d3;VisuMZ[_0x1d0b12(0x35a)](_0x3e7c94,_0x3e7c94);const _0x465640=_0x3e7c94[_0x1d0b12(0x41c)];VisuMZ[_0x1d0b12(0x3be)](_0x465640);}),PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x7ef),_0x5b7447=>{const _0x4cfc0c=_0x54b1d3;VisuMZ[_0x4cfc0c(0x35a)](_0x5b7447,_0x5b7447);const _0xbd5eef=_0x5b7447[_0x4cfc0c(0x4e3)]||0x0;$gameParty[_0x4cfc0c(0x534)](_0xbd5eef);}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x420),_0x3b1eb6=>{const _0x2ac6fc=_0x54b1d3;if(!SceneManager[_0x2ac6fc(0x555)]())return;VisuMZ[_0x2ac6fc(0x35a)](_0x3b1eb6,_0x3b1eb6);const _0x5a0f20=_0x3b1eb6[_0x2ac6fc(0x586)];SceneManager['_scene'][_0x2ac6fc(0x8a3)](_0x5a0f20);}),PluginManager['registerCommand'](pluginData['name'],_0x54b1d3(0x28b),_0x32aad9=>{const _0x5f3d7e=_0x54b1d3;if(!$gameTemp[_0x5f3d7e(0x833)]())return;if(!Utils[_0x5f3d7e(0x8a5)]())return;VisuMZ[_0x5f3d7e(0x35a)](_0x32aad9,_0x32aad9);const _0x189265=_0x32aad9[_0x5f3d7e(0x31f)]||0x1;$gameTemp[_0x5f3d7e(0x53c)]=_0x189265;}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x71d),_0x80db7b=>{const _0x461df9=_0x54b1d3;VisuMZ[_0x461df9(0x35a)](_0x80db7b,_0x80db7b);const _0x39ea7b=_0x80db7b[_0x461df9(0x6e6)]||0x1,_0x26cf77=_0x80db7b[_0x461df9(0x8aa)]||_0x461df9(0x3aa),_0x3510ee=$gameScreen['picture'](_0x39ea7b);_0x3510ee&&_0x3510ee[_0x461df9(0x19f)](_0x26cf77);}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x718),_0x11c550=>{const _0xb658f2=_0x54b1d3;for(let _0x3d8d8e=0x1;_0x3d8d8e<=0x64;_0x3d8d8e++){$gameScreen[_0xb658f2(0x931)](_0x3d8d8e);}}),PluginManager['registerCommand'](pluginData['name'],'PictureEraseRange',_0x2ace22=>{const _0x3d8af1=_0x54b1d3;VisuMZ[_0x3d8af1(0x35a)](_0x2ace22,_0x2ace22);const _0x183160=Math[_0x3d8af1(0x6c3)](_0x2ace22[_0x3d8af1(0x3fc)],_0x2ace22[_0x3d8af1(0x4dd)]),_0x5d9bbb=Math[_0x3d8af1(0x29f)](_0x2ace22[_0x3d8af1(0x3fc)],_0x2ace22['EndingID']);for(let _0x1cae05=_0x183160;_0x1cae05<=_0x5d9bbb;_0x1cae05++){$gameScreen[_0x3d8af1(0x931)](_0x1cae05);}}),PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x68f),_0x31103e=>{const _0x321c74=_0x54b1d3;VisuMZ[_0x321c74(0x35a)](_0x31103e,_0x31103e);const _0x4ae00b=Math['round'](_0x31103e[_0x321c74(0x31f)])[_0x321c74(0x285)](0x1,0x64),_0x5e81b9=-Number(_0x31103e[_0x321c74(0x3f7)]||0x0),_0x2fba68=Math[_0x321c74(0x29f)](_0x31103e['Duration']||0x0,0x0),_0x7ae0b3=_0x31103e[_0x321c74(0x8aa)]||_0x321c74(0x3aa),_0x266821=_0x31103e[_0x321c74(0x81a)],_0x551a2d=$gameScreen[_0x321c74(0x6da)](_0x4ae00b);if(!_0x551a2d)return;_0x551a2d[_0x321c74(0x6c1)](_0x5e81b9,_0x2fba68,_0x7ae0b3);if(_0x266821){const _0x3f864a=$gameTemp[_0x321c74(0x7ba)]();if(_0x3f864a)_0x3f864a['wait'](_0x2fba68);}}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x707),_0x15b3f4=>{const _0x37101e=_0x54b1d3;VisuMZ[_0x37101e(0x35a)](_0x15b3f4,_0x15b3f4);const _0xf16ebf=Math[_0x37101e(0x48a)](_0x15b3f4['PictureID'])['clamp'](0x1,0x64),_0x48cc9a=-Number(_0x15b3f4[_0x37101e(0x343)]||0x0),_0x1533d0=Math['max'](_0x15b3f4[_0x37101e(0x6a8)]||0x0,0x0),_0x3632f9=_0x15b3f4['easingType']||_0x37101e(0x3aa),_0x57257f=_0x15b3f4['Wait'],_0x13b6fb=$gameScreen[_0x37101e(0x6da)](_0xf16ebf);if(!_0x13b6fb)return;_0x13b6fb['setAnglePlusData'](_0x48cc9a,_0x1533d0,_0x3632f9);if(_0x57257f){const _0x37ac23=$gameTemp[_0x37101e(0x7ba)]();if(_0x37ac23)_0x37ac23[_0x37101e(0x866)](_0x1533d0);}}),PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x64c),_0x467598=>{const _0x91ba0a=_0x54b1d3;VisuMZ[_0x91ba0a(0x35a)](_0x467598,_0x467598);const _0x176b32=Math[_0x91ba0a(0x48a)](_0x467598[_0x91ba0a(0x31f)])[_0x91ba0a(0x285)](0x1,0x64),_0x1ff103=_0x467598['Settings'],_0x80f188=_0x1ff103['Origin'][_0x91ba0a(0x285)](0x0,0x1),_0x453e29=Math[_0x91ba0a(0x48a)](_0x1ff103['PositionX']||0x0),_0x5af80a=Math['round'](_0x1ff103[_0x91ba0a(0x545)]||0x0),_0x45f3fc=Math['round'](_0x1ff103[_0x91ba0a(0x54d)]||0x0),_0x2b2551=Math[_0x91ba0a(0x48a)](_0x1ff103[_0x91ba0a(0x42f)]||0x0),_0x419b56=Math[_0x91ba0a(0x48a)](_0x1ff103[_0x91ba0a(0x4bf)])[_0x91ba0a(0x285)](0x0,0xff),_0x2c99a3=_0x1ff103[_0x91ba0a(0x417)],_0x22fed0='VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2',_0x78e7ab=_0x467598[_0x91ba0a(0x934)]?_0x91ba0a(0x934):'Pixelated',_0x1247eb=_0x22fed0[_0x91ba0a(0x892)](_0x467598[_0x91ba0a(0x5fc)],_0x78e7ab);$gameScreen[_0x91ba0a(0x30f)](_0x176b32,_0x1247eb,_0x80f188,_0x453e29,_0x5af80a,_0x45f3fc,_0x2b2551,_0x419b56,_0x2c99a3);}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x6a5),_0x560c66=>{const _0x1325c1=_0x54b1d3;VisuMZ[_0x1325c1(0x35a)](_0x560c66,_0x560c66);const _0x569c31=_0x560c66[_0x1325c1(0x616)]||_0x1325c1(0x69a),_0x34a20c=_0x560c66[_0x1325c1(0x2ad)][_0x1325c1(0x285)](0x1,0x9),_0x39ff69=_0x560c66['Speed'][_0x1325c1(0x285)](0x1,0x9),_0x5623c9=_0x560c66['Duration']||0x1,_0x27e95c=_0x560c66[_0x1325c1(0x81a)];$gameScreen['setCoreEngineScreenShakeStyle'](_0x569c31),$gameScreen[_0x1325c1(0x557)](_0x34a20c,_0x39ff69,_0x5623c9);if(_0x27e95c){const _0x2bca6c=$gameTemp[_0x1325c1(0x7ba)]();if(_0x2bca6c)_0x2bca6c[_0x1325c1(0x866)](_0x5623c9);}}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x381),_0x152fac=>{const _0x56328a=_0x54b1d3;if($gameParty[_0x56328a(0x224)]())return;VisuMZ[_0x56328a(0x35a)](_0x152fac,_0x152fac);const _0x31e142=_0x152fac[_0x56328a(0x7cd)],_0x5c67d0=(_0x152fac['Chance']||0x0)/0x64;for(const _0x2af5c1 of _0x31e142){const _0x2d5a81=Math[_0x56328a(0x69a)]()<=_0x5c67d0;$gameSwitches[_0x56328a(0x41e)](_0x2af5c1,_0x2d5a81);}}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x6a1),_0x1c5424=>{const _0x5133b0=_0x54b1d3;if($gameParty['inBattle']())return;VisuMZ[_0x5133b0(0x35a)](_0x1c5424,_0x1c5424);const _0x2acf2c=Math[_0x5133b0(0x6c3)](_0x1c5424['StartID'],_0x1c5424[_0x5133b0(0x4dd)]),_0x3cda11=Math[_0x5133b0(0x29f)](_0x1c5424[_0x5133b0(0x3fc)],_0x1c5424[_0x5133b0(0x4dd)]),_0x3279d7=(_0x1c5424[_0x5133b0(0x5d8)]||0x0)/0x64;for(let _0x5c37a0=_0x2acf2c;_0x5c37a0<=_0x3cda11;_0x5c37a0++){const _0x3f9f08=Math[_0x5133b0(0x69a)]()<=_0x3279d7;$gameSwitches['setValue'](_0x5c37a0,_0x3f9f08);}}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x77b),_0x13d874=>{const _0x3e8cc2=_0x54b1d3;if($gameParty['inBattle']())return;VisuMZ[_0x3e8cc2(0x35a)](_0x13d874,_0x13d874);const _0x4b6776=_0x13d874[_0x3e8cc2(0x7cd)];for(const _0x3bd2cf of _0x4b6776){const _0xbac1b3=$gameSwitches[_0x3e8cc2(0x4e3)](_0x3bd2cf);$gameSwitches['setValue'](_0x3bd2cf,!_0xbac1b3);}}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],'SwitchToggleRange',_0xc06d78=>{const _0x65c99=_0x54b1d3;if($gameParty[_0x65c99(0x224)]())return;VisuMZ[_0x65c99(0x35a)](_0xc06d78,_0xc06d78);const _0x1d939c=Math[_0x65c99(0x6c3)](_0xc06d78[_0x65c99(0x3fc)],_0xc06d78['EndingID']),_0x463269=Math[_0x65c99(0x29f)](_0xc06d78['StartID'],_0xc06d78[_0x65c99(0x4dd)]);for(let _0x41ae78=_0x1d939c;_0x41ae78<=_0x463269;_0x41ae78++){const _0x1d1df7=$gameSwitches[_0x65c99(0x4e3)](_0x41ae78);$gameSwitches[_0x65c99(0x41e)](_0x41ae78,!_0x1d1df7);}}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x74a),_0x3e0d43=>{const _0x22aaf7=_0x54b1d3;VisuMZ[_0x22aaf7(0x35a)](_0x3e0d43,_0x3e0d43);const _0x12308e=_0x3e0d43[_0x22aaf7(0x5db)]||0x1;$gameSystem[_0x22aaf7(0x4e5)](_0x12308e);}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],'SystemSetSideView',_0x51a555=>{const _0x84ef5f=_0x54b1d3;if($gameParty[_0x84ef5f(0x224)]())return;VisuMZ['ConvertParams'](_0x51a555,_0x51a555);const _0x5ecadb=_0x51a555[_0x84ef5f(0x5db)];if(_0x5ecadb[_0x84ef5f(0x27a)](/Front/i))$gameSystem[_0x84ef5f(0x945)](![]);else _0x5ecadb[_0x84ef5f(0x27a)](/Side/i)?$gameSystem[_0x84ef5f(0x945)](!![]):$gameSystem[_0x84ef5f(0x945)](!$gameSystem[_0x84ef5f(0x6c7)]());}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x52e),_0x4953cf=>{const _0x1699d4=_0x54b1d3;if($gameParty['inBattle']())return;VisuMZ[_0x1699d4(0x35a)](_0x4953cf,_0x4953cf);const _0x2e650f=['bgm',_0x1699d4(0x42a),'me','se'];for(const _0x270ebc of _0x2e650f){const _0x40b9ee=_0x4953cf[_0x270ebc],_0x229c32=_0x1699d4(0x390)[_0x1699d4(0x892)](_0x270ebc);for(const _0x267c04 of _0x40b9ee){AudioManager[_0x1699d4(0x34e)](_0x229c32,_0x267c04);}}}),PluginManager[_0x54b1d3(0x5b3)](pluginData['name'],_0x54b1d3(0x8d2),_0x3ff5f8=>{const _0x81f209=_0x54b1d3;if($gameParty[_0x81f209(0x224)]())return;VisuMZ[_0x81f209(0x35a)](_0x3ff5f8,_0x3ff5f8);const _0x34cea6=[_0x81f209(0x649),'battlebacks1',_0x81f209(0x78b),_0x81f209(0x92e),_0x81f209(0x786),_0x81f209(0x273),_0x81f209(0x6a0),_0x81f209(0x742),_0x81f209(0x4e7),_0x81f209(0x614),'system',_0x81f209(0x62a),_0x81f209(0x924),_0x81f209(0x274)];for(const _0x6b4527 of _0x34cea6){const _0x39dddb=_0x3ff5f8[_0x6b4527],_0xe0932f=_0x81f209(0x59c)[_0x81f209(0x892)](_0x6b4527);for(const _0x4c1711 of _0x39dddb){ImageManager[_0x81f209(0x908)](_0xe0932f,_0x4c1711);}}}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x77e),_0x2924ee=>{const _0x3b07b7=_0x54b1d3;if($gameParty['inBattle']())return;VisuMZ[_0x3b07b7(0x35a)](_0x2924ee,_0x2924ee);const _0x550b4f=_0x2924ee[_0x3b07b7(0x5db)]['toUpperCase']()[_0x3b07b7(0x848)](),_0x1abe97=VisuMZ[_0x3b07b7(0x66d)][_0x3b07b7(0x5ca)](_0x550b4f);$gameSystem[_0x3b07b7(0x48d)](_0x1abe97);}),VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x5ca)]=function(_0x3a14ad){const _0x4079c3=_0x54b1d3;_0x3a14ad=_0x3a14ad||_0x4079c3(0x6eb),_0x3a14ad=String(_0x3a14ad)[_0x4079c3(0x46a)]()[_0x4079c3(0x848)]();switch(_0x3a14ad){case'DTB':return 0x0;case _0x4079c3(0x510):Imported[_0x4079c3(0x281)]&&(ConfigManager[_0x4079c3(0x67c)]=!![]);return 0x1;case'TPB\x20WAIT':Imported['VisuMZ_1_OptionsCore']&&(ConfigManager[_0x4079c3(0x67c)]=![]);return 0x2;case'CTB':if(Imported[_0x4079c3(0x32d)])return _0x4079c3(0x81d);break;case _0x4079c3(0x335):if(Imported[_0x4079c3(0x5df)])return _0x4079c3(0x335);break;case _0x4079c3(0x625):if(Imported[_0x4079c3(0x763)])return _0x4079c3(0x625);break;case'FTB':if(Imported[_0x4079c3(0x54b)])return _0x4079c3(0x33a);break;case _0x4079c3(0x86d):if(Imported[_0x4079c3(0x8f3)])return _0x4079c3(0x86d);break;case _0x4079c3(0x6a9):if(Imported[_0x4079c3(0x8f2)])return _0x4079c3(0x6a9);break;case'PTB':if(Imported[_0x4079c3(0x721)])return _0x4079c3(0x229);break;}return $dataSystem[_0x4079c3(0x6c0)];},PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x504),_0x1fc93d=>{const _0x359009=_0x54b1d3;VisuMZ['ConvertParams'](_0x1fc93d,_0x1fc93d);const _0x457bd6=_0x1fc93d[_0x359009(0x5db)]||0x1;$gameSystem[_0x359009(0x569)](_0x457bd6);}),PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x22c),_0x403bc4=>{const _0x37006a=_0x54b1d3;VisuMZ[_0x37006a(0x35a)](_0x403bc4,_0x403bc4);const _0x410a90=_0x403bc4['text']||'';$textPopup(_0x410a90);}),PluginManager['registerCommand'](pluginData[_0x54b1d3(0x693)],'VariableEvalReference',_0xf30223=>{const _0x42f901=_0x54b1d3;VisuMZ[_0x42f901(0x35a)](_0xf30223,_0xf30223);const _0x1d28ff=_0xf30223['id']||0x1,_0x138248=_0xf30223[_0x42f901(0x2a4)],_0x1e4ae1=_0xf30223[_0x42f901(0x775)]||0x0;let _0x19ff29=$gameVariables['value'](_0x1d28ff)||0x0;switch(_0x138248){case'=':_0x19ff29=_0x1e4ae1;break;case'+':_0x19ff29+=_0x1e4ae1;break;case'-':_0x19ff29-=_0x1e4ae1;break;case'*':_0x19ff29*=_0x1e4ae1;break;case'/':_0x19ff29/=_0x1e4ae1;break;case'%':_0x19ff29%=_0x1e4ae1;break;}_0x19ff29=_0x19ff29||0x0,$gameVariables['setValue'](_0x1d28ff,_0x19ff29);}),PluginManager[_0x54b1d3(0x5b3)](pluginData[_0x54b1d3(0x693)],_0x54b1d3(0x877),_0x2ce44c=>{const _0x4879d5=_0x54b1d3;VisuMZ[_0x4879d5(0x35a)](_0x2ce44c,_0x2ce44c);const _0x4ec8a1=_0x2ce44c['id']()||0x1,_0x21ddef=_0x2ce44c['operation'],_0x42c55e=_0x2ce44c[_0x4879d5(0x775)]()||0x0;let _0x1da7ba=$gameVariables[_0x4879d5(0x4e3)](_0x4ec8a1)||0x0;switch(_0x21ddef){case'=':_0x1da7ba=_0x42c55e;break;case'+':_0x1da7ba+=_0x42c55e;break;case'-':_0x1da7ba-=_0x42c55e;break;case'*':_0x1da7ba*=_0x42c55e;break;case'/':_0x1da7ba/=_0x42c55e;break;case'%':_0x1da7ba%=_0x42c55e;break;}_0x1da7ba=_0x1da7ba||0x0,$gameVariables[_0x4879d5(0x41e)](_0x4ec8a1,_0x1da7ba);}),VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x729)]=Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x82c)],Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x82c)]=function(){const _0x5aa010=_0x54b1d3;VisuMZ['CoreEngine'][_0x5aa010(0x729)][_0x5aa010(0x816)](this),this[_0x5aa010(0x26e)](),this[_0x5aa010(0x2e5)](),this['process_VisuMZ_CoreEngine_Settings'](),this[_0x5aa010(0x53a)](),this[_0x5aa010(0x752)](),this[_0x5aa010(0x80a)](),VisuMZ[_0x5aa010(0x1d3)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x621)]={},Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x26e)]=function(){const _0x4fec84=_0x54b1d3,_0x17ec3e=[_0x4fec84(0x489),_0x4fec84(0x39e),_0x4fec84(0x6ae),'DEF',_0x4fec84(0x712),_0x4fec84(0x3fe),'AGI',_0x4fec84(0x5f1)],_0x233ea2=['HIT',_0x4fec84(0x3ef),_0x4fec84(0x73a),'CEV',_0x4fec84(0x8ce),_0x4fec84(0x4da),_0x4fec84(0x80c),_0x4fec84(0x28f),_0x4fec84(0x50c),'TRG'],_0x2d57b0=[_0x4fec84(0x64e),'GRD',_0x4fec84(0x1f9),'PHA',_0x4fec84(0x66c),_0x4fec84(0x801),_0x4fec84(0x430),'MDR',_0x4fec84(0x386),'EXR'],_0x51a2f2=[_0x17ec3e,_0x233ea2,_0x2d57b0],_0x557a5e=[_0x4fec84(0x398),_0x4fec84(0x3f3),_0x4fec84(0x413),'Max',_0x4fec84(0x8a0),_0x4fec84(0x204),'Rate2',_0x4fec84(0x813),_0x4fec84(0x1d0),_0x4fec84(0x1ff)];for(const _0x509f11 of _0x51a2f2){let _0x294b1b='';if(_0x509f11===_0x17ec3e)_0x294b1b=_0x4fec84(0x563);if(_0x509f11===_0x233ea2)_0x294b1b=_0x4fec84(0x448);if(_0x509f11===_0x2d57b0)_0x294b1b=_0x4fec84(0x456);for(const _0x5da452 of _0x557a5e){let _0x5aa5ab=_0x4fec84(0x741)[_0x4fec84(0x892)](_0x294b1b,_0x5da452);VisuMZ['CoreEngine']['RegExp'][_0x5aa5ab]=[],VisuMZ[_0x4fec84(0x66d)][_0x4fec84(0x621)][_0x5aa5ab+'JS']=[];let _0x327ea7=_0x4fec84(0x46e);if([_0x4fec84(0x398),_0x4fec84(0x813)][_0x4fec84(0x7f2)](_0x5da452))_0x327ea7+=_0x4fec84(0x906);else{if([_0x4fec84(0x3f3),'Flat1'][_0x4fec84(0x7f2)](_0x5da452))_0x327ea7+=_0x4fec84(0x263);else{if([_0x4fec84(0x413),_0x4fec84(0x1ff)]['includes'](_0x5da452))_0x327ea7+='([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>';else{if(_0x5da452===_0x4fec84(0x331))_0x327ea7+=_0x4fec84(0x694);else{if(_0x5da452===_0x4fec84(0x204))_0x327ea7+=_0x4fec84(0x5ec);else _0x5da452===_0x4fec84(0x393)&&(_0x327ea7+=_0x4fec84(0x267));}}}}for(const _0x521d82 of _0x509f11){let _0x430769=_0x5da452[_0x4fec84(0x362)](/[\d+]/g,'')[_0x4fec84(0x46a)]();const _0x1423c1=_0x327ea7['format'](_0x521d82,_0x430769);VisuMZ[_0x4fec84(0x66d)]['RegExp'][_0x5aa5ab]['push'](new RegExp(_0x1423c1,'i'));const _0x3d4be0='<JS\x20%1\x20%2:[\x20](.*)>'[_0x4fec84(0x892)](_0x521d82,_0x430769);VisuMZ[_0x4fec84(0x66d)][_0x4fec84(0x621)][_0x5aa5ab+'JS'][_0x4fec84(0x3eb)](new RegExp(_0x3d4be0,'i'));}}}},Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x2e5)]=function(){const _0x25c3ee=_0x54b1d3;if(VisuMZ[_0x25c3ee(0x1d3)])return;},Scene_Boot[_0x54b1d3(0x5af)]['process_VisuMZ_CoreEngine_Settings']=function(){const _0x288cd5=_0x54b1d3,_0x3039a7=VisuMZ[_0x288cd5(0x66d)][_0x288cd5(0x738)];_0x3039a7[_0x288cd5(0x33d)][_0x288cd5(0x367)]&&VisuMZ['ShowDevTools'](!![]);_0x3039a7[_0x288cd5(0x33d)][_0x288cd5(0x68d)]&&(Input[_0x288cd5(0x35f)][0x23]='end',Input[_0x288cd5(0x35f)][0x24]=_0x288cd5(0x79a));if(_0x3039a7[_0x288cd5(0x1b7)]){const _0x2b14d3=_0x3039a7[_0x288cd5(0x1b7)];_0x2b14d3[_0x288cd5(0x91c)]=_0x2b14d3[_0x288cd5(0x91c)]||_0x288cd5(0x2f7),_0x2b14d3[_0x288cd5(0x62b)]=_0x2b14d3['KeyTAB']||_0x288cd5(0x5e8);}_0x3039a7[_0x288cd5(0x279)][_0x288cd5(0x785)]&&(Input[_0x288cd5(0x35f)][0x57]='up',Input['keyMapper'][0x41]=_0x288cd5(0x909),Input[_0x288cd5(0x35f)][0x53]=_0x288cd5(0x83d),Input[_0x288cd5(0x35f)][0x44]=_0x288cd5(0x5cd),Input['keyMapper'][0x45]='pagedown'),_0x3039a7[_0x288cd5(0x279)][_0x288cd5(0x3c4)]&&(Input[_0x288cd5(0x35f)][0x52]='dashToggle'),_0x3039a7[_0x288cd5(0x293)]['DisplayedParams']=_0x3039a7[_0x288cd5(0x293)][_0x288cd5(0x2a5)][_0x288cd5(0x755)](_0x8a5cab=>_0x8a5cab[_0x288cd5(0x46a)]()[_0x288cd5(0x848)]()),_0x3039a7[_0x288cd5(0x293)][_0x288cd5(0x6d3)]=_0x3039a7[_0x288cd5(0x293)][_0x288cd5(0x6d3)][_0x288cd5(0x755)](_0x47ff6f=>_0x47ff6f[_0x288cd5(0x46a)]()[_0x288cd5(0x848)]()),_0x3039a7['QoL']['ShiftR_Toggle']=_0x3039a7[_0x288cd5(0x33d)][_0x288cd5(0x40f)]??!![],_0x3039a7[_0x288cd5(0x33d)][_0x288cd5(0x4a1)]=_0x3039a7[_0x288cd5(0x33d)]['ShiftT_Toggle']??!![];},Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x53a)]=function(){const _0x4d0600=_0x54b1d3;this[_0x4d0600(0x3f1)]();},Scene_Boot[_0x54b1d3(0x5af)]['process_VisuMZ_CoreEngine_jsQuickFunctions']=function(){const _0x2f570e=_0x54b1d3,_0x4a1c56=VisuMZ[_0x2f570e(0x66d)][_0x2f570e(0x738)]['jsQuickFunc'];for(const _0x17d3e6 of _0x4a1c56){const _0x3c30cf=_0x17d3e6[_0x2f570e(0x661)]['replace'](/[ ]/g,''),_0x3de800=_0x17d3e6[_0x2f570e(0x5dd)];VisuMZ['CoreEngine'][_0x2f570e(0x1fd)](_0x3c30cf,_0x3de800);}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x1fd)]=function(_0x4e2a1f,_0x9a4173){const _0x184914=_0x54b1d3;if(!!window[_0x4e2a1f]){if($gameTemp[_0x184914(0x833)]())console[_0x184914(0x886)]('WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function'[_0x184914(0x892)](_0x4e2a1f));}const _0x4cfca7='\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'[_0x184914(0x892)](_0x4e2a1f,_0x9a4173);window[_0x4e2a1f]=new Function(_0x4cfca7);},Scene_Boot[_0x54b1d3(0x5af)]['process_VisuMZ_CoreEngine_CustomParameters']=function(){const _0x1d4f6a=_0x54b1d3,_0x90b35d=VisuMZ[_0x1d4f6a(0x66d)][_0x1d4f6a(0x738)][_0x1d4f6a(0x942)];if(!_0x90b35d)return;for(const _0x17a5e0 of _0x90b35d){if(!_0x17a5e0)continue;VisuMZ[_0x1d4f6a(0x66d)]['createCustomParameter'](_0x17a5e0);}},VisuMZ['CoreEngine']['CustomParamNames']={},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x1b5)]={},VisuMZ['CoreEngine'][_0x54b1d3(0x218)]={},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x6c6)]={},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x932)]=function(_0x56e24b){const _0x4c7d3b=_0x54b1d3,_0x46d7d4=_0x56e24b['Abbreviation'],_0x524b79=_0x56e24b[_0x4c7d3b(0x4db)],_0x3244d3=_0x56e24b['Icon'],_0x2ceab0=_0x56e24b['Type'],_0x48c86a=new Function(_0x56e24b[_0x4c7d3b(0x482)]);VisuMZ[_0x4c7d3b(0x66d)]['CustomParamNames'][_0x46d7d4['toUpperCase']()['trim']()]=_0x524b79,VisuMZ['CoreEngine'][_0x4c7d3b(0x1b5)][_0x46d7d4[_0x4c7d3b(0x46a)]()[_0x4c7d3b(0x848)]()]=_0x3244d3,VisuMZ['CoreEngine'][_0x4c7d3b(0x218)][_0x46d7d4[_0x4c7d3b(0x46a)]()['trim']()]=_0x2ceab0,VisuMZ[_0x4c7d3b(0x66d)][_0x4c7d3b(0x6c6)][_0x46d7d4[_0x4c7d3b(0x46a)]()[_0x4c7d3b(0x848)]()]=_0x46d7d4,Object['defineProperty'](Game_BattlerBase[_0x4c7d3b(0x5af)],_0x46d7d4,{'get'(){const _0x4b0c9e=_0x4c7d3b,_0x130e15=_0x48c86a[_0x4b0c9e(0x816)](this);return _0x2ceab0===_0x4b0c9e(0x94b)?Math['round'](_0x130e15):_0x130e15;}});},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x592)]={},VisuMZ['CoreEngine'][_0x54b1d3(0x22f)]={},Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x80a)]=function(){const _0x4eeaa3=_0x54b1d3,_0x3a6c68=VisuMZ['CoreEngine']['Settings'][_0x4eeaa3(0x592)];for(const _0x2d638d of _0x3a6c68){const _0x284540=(_0x2d638d['Name']||'')[_0x4eeaa3(0x73e)]()[_0x4eeaa3(0x848)](),_0x4126e0=(_0x2d638d[_0x4eeaa3(0x8e8)]||'')['toLowerCase']()[_0x4eeaa3(0x848)]();VisuMZ[_0x4eeaa3(0x66d)][_0x4eeaa3(0x592)][_0x284540]=_0x2d638d,VisuMZ['CoreEngine'][_0x4eeaa3(0x22f)][_0x4126e0]=_0x284540;}},VisuMZ[_0x54b1d3(0x1d3)]=function(){const _0x4e8ac4=_0x54b1d3;for(const _0x1bb88f of $dataActors){if(_0x1bb88f)VisuMZ[_0x4e8ac4(0x2b7)](_0x1bb88f);}for(const _0x71c348 of $dataClasses){if(_0x71c348)VisuMZ[_0x4e8ac4(0x955)](_0x71c348);}for(const _0x455400 of $dataSkills){if(_0x455400)VisuMZ['ParseSkillNotetags'](_0x455400);}for(const _0x3336b6 of $dataItems){if(_0x3336b6)VisuMZ['ParseItemNotetags'](_0x3336b6);}for(const _0x42a5cd of $dataWeapons){if(_0x42a5cd)VisuMZ['ParseWeaponNotetags'](_0x42a5cd);}for(const _0x21fc0 of $dataArmors){if(_0x21fc0)VisuMZ[_0x4e8ac4(0x7a5)](_0x21fc0);}for(const _0x1789ca of $dataEnemies){if(_0x1789ca)VisuMZ['ParseEnemyNotetags'](_0x1789ca);}for(const _0x7d78ea of $dataStates){if(_0x7d78ea)VisuMZ[_0x4e8ac4(0x321)](_0x7d78ea);}for(const _0x34775c of $dataTilesets){if(_0x34775c)VisuMZ[_0x4e8ac4(0x428)](_0x34775c);}},VisuMZ['ParseActorNotetags']=function(_0x55c981){},VisuMZ[_0x54b1d3(0x955)]=function(_0x5c551c){},VisuMZ[_0x54b1d3(0x2f9)]=function(_0x2eac95){},VisuMZ[_0x54b1d3(0x743)]=function(_0x5561a8){},VisuMZ[_0x54b1d3(0x38c)]=function(_0x25048b){},VisuMZ[_0x54b1d3(0x7a5)]=function(_0x545282){},VisuMZ['ParseEnemyNotetags']=function(_0x41930b){},VisuMZ[_0x54b1d3(0x321)]=function(_0x13b37b){},VisuMZ[_0x54b1d3(0x428)]=function(_0x28a643){},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2b7)]=VisuMZ[_0x54b1d3(0x2b7)],VisuMZ[_0x54b1d3(0x2b7)]=function(_0x225ee3){const _0x4e369a=_0x54b1d3;VisuMZ[_0x4e369a(0x66d)][_0x4e369a(0x2b7)][_0x4e369a(0x816)](this,_0x225ee3);const _0x173f5f=_0x225ee3[_0x4e369a(0x5e0)];if(_0x173f5f['match'](/<MAX LEVEL:[ ](\d+)>/i)){_0x225ee3[_0x4e369a(0x2f3)]=Number(RegExp['$1']);if(_0x225ee3[_0x4e369a(0x2f3)]===0x0)_0x225ee3[_0x4e369a(0x2f3)]=Number['MAX_SAFE_INTEGER'];}_0x173f5f[_0x4e369a(0x27a)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x225ee3[_0x4e369a(0x651)]=Math[_0x4e369a(0x6c3)](Number(RegExp['$1']),_0x225ee3[_0x4e369a(0x2f3)]));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x955)]=VisuMZ[_0x54b1d3(0x955)],VisuMZ[_0x54b1d3(0x955)]=function(_0x1e7318){const _0xd8770b=_0x54b1d3;VisuMZ[_0xd8770b(0x66d)][_0xd8770b(0x955)][_0xd8770b(0x816)](this,_0x1e7318);if(_0x1e7318[_0xd8770b(0x33b)])for(const _0x14c0c8 of _0x1e7318[_0xd8770b(0x33b)]){_0x14c0c8[_0xd8770b(0x5e0)][_0xd8770b(0x27a)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x14c0c8[_0xd8770b(0x5bd)]=Math[_0xd8770b(0x29f)](Number(RegExp['$1']),0x1));}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x75d)]=VisuMZ[_0x54b1d3(0x75d)],VisuMZ['ParseEnemyNotetags']=function(_0x45f0a3){const _0x3fff2b=_0x54b1d3;VisuMZ[_0x3fff2b(0x66d)]['ParseEnemyNotetags'][_0x3fff2b(0x816)](this,_0x45f0a3),_0x45f0a3[_0x3fff2b(0x5bd)]=0x1;const _0x4461f0=_0x45f0a3[_0x3fff2b(0x5e0)];if(_0x4461f0[_0x3fff2b(0x27a)](/<LEVEL:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x5bd)]=Number(RegExp['$1']);if(_0x4461f0['match'](/<MAXHP:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x0]=Number(RegExp['$1']);if(_0x4461f0[_0x3fff2b(0x27a)](/<MAXMP:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x1]=Number(RegExp['$1']);if(_0x4461f0['match'](/<ATK:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x2]=Number(RegExp['$1']);if(_0x4461f0[_0x3fff2b(0x27a)](/<DEF:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x3]=Number(RegExp['$1']);if(_0x4461f0['match'](/<MAT:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x4]=Number(RegExp['$1']);if(_0x4461f0[_0x3fff2b(0x27a)](/<MDF:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x5]=Number(RegExp['$1']);if(_0x4461f0[_0x3fff2b(0x27a)](/<AGI:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x6]=Number(RegExp['$1']);if(_0x4461f0[_0x3fff2b(0x27a)](/<LUK:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x90c)][0x7]=Number(RegExp['$1']);if(_0x4461f0[_0x3fff2b(0x27a)](/<EXP:[ ](\d+)>/i))_0x45f0a3[_0x3fff2b(0x5de)]=Number(RegExp['$1']);if(_0x4461f0['match'](/<GOLD:[ ](\d+)>/i))_0x45f0a3['gold']=Number(RegExp['$1']);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x3c2)]=Graphics[_0x54b1d3(0x850)],Graphics['_defaultStretchMode']=function(){const _0x3409de=_0x54b1d3;switch(VisuMZ[_0x3409de(0x66d)]['Settings'][_0x3409de(0x33d)]['AutoStretch']){case _0x3409de(0x6d2):return!![];case _0x3409de(0x1bb):return![];default:return VisuMZ['CoreEngine'][_0x3409de(0x3c2)][_0x3409de(0x816)](this);}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x620)]=Graphics[_0x54b1d3(0x58a)],Graphics[_0x54b1d3(0x58a)]=function(_0x2bc01a,_0x55f7b6,_0x4ed3d5=null){const _0x58a93f=_0x54b1d3;VisuMZ['CoreEngine'][_0x58a93f(0x620)]['call'](this,_0x2bc01a,_0x55f7b6,_0x4ed3d5),VisuMZ[_0x58a93f(0x515)](![]);},VisuMZ[_0x54b1d3(0x66d)]['Graphics_centerElement']=Graphics[_0x54b1d3(0x4c3)],Graphics[_0x54b1d3(0x4c3)]=function(_0x1a82d8){const _0x2712bd=_0x54b1d3;VisuMZ['CoreEngine'][_0x2712bd(0x665)][_0x2712bd(0x816)](this,_0x1a82d8),this[_0x2712bd(0x653)](_0x1a82d8);},Graphics[_0x54b1d3(0x653)]=function(_0x45e280){const _0x28d431=_0x54b1d3;VisuMZ[_0x28d431(0x66d)]['Settings'][_0x28d431(0x33d)]['FontSmoothing']&&(_0x45e280[_0x28d431(0x8da)][_0x28d431(0x7dd)]='none');VisuMZ[_0x28d431(0x66d)][_0x28d431(0x738)][_0x28d431(0x33d)]['PixelateImageRendering']&&(_0x45e280[_0x28d431(0x8da)][_0x28d431(0x1f1)]=_0x28d431(0x467));const _0x2e42f0=Math[_0x28d431(0x29f)](0x0,Math[_0x28d431(0x7d9)](_0x45e280[_0x28d431(0x589)]*this['_realScale'])),_0x53a505=Math[_0x28d431(0x29f)](0x0,Math[_0x28d431(0x7d9)](_0x45e280[_0x28d431(0x7c8)]*this['_realScale']));_0x45e280[_0x28d431(0x8da)][_0x28d431(0x589)]=_0x2e42f0+'px',_0x45e280[_0x28d431(0x8da)][_0x28d431(0x7c8)]=_0x53a505+'px';},VisuMZ['CoreEngine'][_0x54b1d3(0x48e)]=Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)],Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(_0x4ae158,_0x2522c4){const _0x3c69cc=_0x54b1d3;VisuMZ[_0x3c69cc(0x66d)][_0x3c69cc(0x48e)][_0x3c69cc(0x816)](this,_0x4ae158,_0x2522c4),this['_smooth']=!(VisuMZ[_0x3c69cc(0x66d)][_0x3c69cc(0x738)][_0x3c69cc(0x33d)][_0x3c69cc(0x3f9)]??!![]);},Bitmap[_0x54b1d3(0x5af)]['markCoreEngineModified']=function(){const _0x3bf3ae=_0x54b1d3;this[_0x3bf3ae(0x895)]=!![];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x530)]=Sprite['prototype']['destroy'],Sprite['prototype'][_0x54b1d3(0x5ad)]=function(){const _0x57c2ad=_0x54b1d3;if(this['_texture'])VisuMZ[_0x57c2ad(0x66d)][_0x57c2ad(0x530)]['call'](this);this['destroyCoreEngineMarkedBitmaps']();},Sprite[_0x54b1d3(0x5af)]['destroyCoreEngineMarkedBitmaps']=function(){const _0x2283d1=_0x54b1d3;if(!this['bitmap'])return;if(!this['bitmap']['_customModified'])return;this['bitmap']['_baseTexture']&&!this['_bitmap'][_0x2283d1(0x70b)][_0x2283d1(0x1d9)]&&this[_0x2283d1(0x290)]['destroy']();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x4b5)]=Bitmap['prototype'][_0x54b1d3(0x45a)],Bitmap['prototype'][_0x54b1d3(0x45a)]=function(_0x369cc6,_0x4ff8cf){const _0x17711c=_0x54b1d3;VisuMZ[_0x17711c(0x66d)]['Bitmap_resize'][_0x17711c(0x816)](this,_0x369cc6,_0x4ff8cf),this[_0x17711c(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)]['Bitmap_blt']=Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x954)],Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x954)]=function(_0x5abe44,_0x3bfc8f,_0x4778d1,_0x4fd39a,_0x347c9b,_0x1946a3,_0x218d4f,_0x1c364e,_0x3613d5){const _0x175c71=_0x54b1d3;_0x3bfc8f=Math[_0x175c71(0x48a)](_0x3bfc8f),_0x4778d1=Math[_0x175c71(0x48a)](_0x4778d1),_0x4fd39a=Math[_0x175c71(0x48a)](_0x4fd39a),_0x347c9b=Math[_0x175c71(0x48a)](_0x347c9b),_0x1946a3=Math[_0x175c71(0x48a)](_0x1946a3),_0x218d4f=Math[_0x175c71(0x48a)](_0x218d4f),VisuMZ[_0x175c71(0x66d)][_0x175c71(0x7b6)][_0x175c71(0x816)](this,_0x5abe44,_0x3bfc8f,_0x4778d1,_0x4fd39a,_0x347c9b,_0x1946a3,_0x218d4f,_0x1c364e,_0x3613d5),this[_0x175c71(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x7b3)]=Bitmap['prototype'][_0x54b1d3(0x22d)],Bitmap[_0x54b1d3(0x5af)]['clearRect']=function(_0x11128c,_0x24201b,_0x45a538,_0x3bea8c){const _0x348690=_0x54b1d3;VisuMZ[_0x348690(0x66d)]['Bitmap_clearRect']['call'](this,_0x11128c,_0x24201b,_0x45a538,_0x3bea8c),this[_0x348690(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x913)]=Bitmap[_0x54b1d3(0x5af)]['fillRect'],Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x277)]=function(_0x163ff3,_0x42feff,_0x5d2761,_0x35d86e,_0x4b4acc){const _0xa208a9=_0x54b1d3;VisuMZ['CoreEngine'][_0xa208a9(0x913)][_0xa208a9(0x816)](this,_0x163ff3,_0x42feff,_0x5d2761,_0x35d86e,_0x4b4acc),this[_0xa208a9(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x306)]=Bitmap[_0x54b1d3(0x5af)]['strokeRect'],Bitmap['prototype'][_0x54b1d3(0x512)]=function(_0x4e25fd,_0x543fb1,_0x199bb0,_0x3d0483,_0x9aad33){const _0x591751=_0x54b1d3;VisuMZ[_0x591751(0x66d)][_0x591751(0x306)][_0x591751(0x816)](this,_0x4e25fd,_0x543fb1,_0x199bb0,_0x3d0483,_0x9aad33),this[_0x591751(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x39d)]=Bitmap[_0x54b1d3(0x5af)]['gradientFillRect'],Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x632)]=function(_0x4904cc,_0x59b10f,_0x453a2d,_0x420cd9,_0x49495b,_0x3a1b73,_0x343237){const _0x5dab61=_0x54b1d3;VisuMZ[_0x5dab61(0x66d)][_0x5dab61(0x39d)][_0x5dab61(0x816)](this,_0x4904cc,_0x59b10f,_0x453a2d,_0x420cd9,_0x49495b,_0x3a1b73,_0x343237),this[_0x5dab61(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x5e4)]=Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x6e3)],Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x6e3)]=function(_0x6d1b1d,_0x585744,_0x162995,_0x31a42c){const _0x3dee4b=_0x54b1d3;_0x6d1b1d=Math['round'](_0x6d1b1d),_0x585744=Math[_0x3dee4b(0x48a)](_0x585744),_0x162995=Math[_0x3dee4b(0x48a)](_0x162995),VisuMZ[_0x3dee4b(0x66d)][_0x3dee4b(0x5e4)]['call'](this,_0x6d1b1d,_0x585744,_0x162995,_0x31a42c),this[_0x3dee4b(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x330)]=Bitmap[_0x54b1d3(0x5af)]['measureTextWidth'],Bitmap['prototype']['measureTextWidth']=function(_0x1f237d){const _0x1399f6=_0x54b1d3;return Math[_0x1399f6(0x8ff)](VisuMZ['CoreEngine'][_0x1399f6(0x330)][_0x1399f6(0x816)](this,_0x1f237d));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x705)]=Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x2b9)],Bitmap['prototype'][_0x54b1d3(0x2b9)]=function(_0x2fc23f,_0x32aad2,_0x36af66,_0x296090,_0x10b3ba,_0x497434){const _0x6d75aa=_0x54b1d3;_0x32aad2=Math['round'](_0x32aad2),_0x36af66=Math['round'](_0x36af66),_0x296090=Math[_0x6d75aa(0x8ff)](_0x296090),_0x10b3ba=Math[_0x6d75aa(0x8ff)](_0x10b3ba),VisuMZ[_0x6d75aa(0x66d)][_0x6d75aa(0x705)][_0x6d75aa(0x816)](this,_0x2fc23f,_0x32aad2,_0x36af66,_0x296090,_0x10b3ba,_0x497434),this[_0x6d75aa(0x8d4)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x460)]=Bitmap['prototype'][_0x54b1d3(0x43c)],Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x43c)]=function(_0x3dbada,_0x2b122f,_0x8ef8b4,_0x49f2d0){const _0x47c6f2=_0x54b1d3;VisuMZ[_0x47c6f2(0x66d)][_0x47c6f2(0x738)][_0x47c6f2(0x33d)][_0x47c6f2(0x8b1)]?this[_0x47c6f2(0x80e)](_0x3dbada,_0x2b122f,_0x8ef8b4,_0x49f2d0):VisuMZ[_0x47c6f2(0x66d)][_0x47c6f2(0x460)][_0x47c6f2(0x816)](this,_0x3dbada,_0x2b122f,_0x8ef8b4,_0x49f2d0);},Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x80e)]=function(_0x105924,_0x54fdf5,_0x42d6d7,_0x4fe09b){const _0x2f0d0e=_0x54b1d3,_0x47a867=this[_0x2f0d0e(0x4b2)];_0x47a867['fillStyle']=this[_0x2f0d0e(0x961)],_0x47a867[_0x2f0d0e(0x851)](_0x105924,_0x54fdf5+0x2,_0x42d6d7+0x2,_0x4fe09b);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x57c)]=Input[_0x54b1d3(0x1cb)],Input[_0x54b1d3(0x1cb)]=function(){const _0x159165=_0x54b1d3;VisuMZ[_0x159165(0x66d)][_0x159165(0x57c)][_0x159165(0x816)](this),this[_0x159165(0x3b0)]=undefined,this[_0x159165(0x37d)]=undefined,this[_0x159165(0x4f6)]=Input[_0x159165(0x6f1)];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2aa)]=Input['update'],Input[_0x54b1d3(0x71b)]=function(){const _0x350e2b=_0x54b1d3;VisuMZ['CoreEngine'][_0x350e2b(0x2aa)]['call'](this);if(this['_gamepadWait'])this['_gamepadWait']--;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x63b)]=Input[_0x54b1d3(0x20e)],Input[_0x54b1d3(0x20e)]=function(){const _0x41a0f2=_0x54b1d3;if(this[_0x41a0f2(0x4f6)])return;VisuMZ[_0x41a0f2(0x66d)][_0x41a0f2(0x63b)][_0x41a0f2(0x816)](this);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x1a5)]=Input[_0x54b1d3(0x664)],Input[_0x54b1d3(0x664)]=function(){const _0x19766a=_0x54b1d3;VisuMZ['CoreEngine'][_0x19766a(0x1a5)][_0x19766a(0x816)](this),document[_0x19766a(0x685)](_0x19766a(0x728),this[_0x19766a(0x79f)][_0x19766a(0x580)](this));},VisuMZ['CoreEngine'][_0x54b1d3(0x389)]=Input[_0x54b1d3(0x339)],Input[_0x54b1d3(0x339)]=function(_0xdd39ae){const _0x3a521e=_0x54b1d3;this[_0x3a521e(0x37d)]=_0xdd39ae[_0x3a521e(0x8ad)],VisuMZ['CoreEngine'][_0x3a521e(0x389)]['call'](this,_0xdd39ae),this[_0x3a521e(0x8b8)](null);},Input['_onKeyPress']=function(_0x581aad){const _0x260534=_0x54b1d3;this[_0x260534(0x2ff)](_0x581aad);},Input[_0x54b1d3(0x2ff)]=function(_0x5bfccc){const _0x1210b0=_0x54b1d3;this['_inputSpecialKeyCode']=_0x5bfccc[_0x1210b0(0x8ad)];let _0x53cbc7=String[_0x1210b0(0x2dc)](_0x5bfccc['charCode']);this[_0x1210b0(0x3b0)]===undefined?this[_0x1210b0(0x3b0)]=_0x53cbc7:this['_inputString']+=_0x53cbc7;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x910)]=Input[_0x54b1d3(0x63a)],Input['_shouldPreventDefault']=function(_0x11e301){const _0x23314f=_0x54b1d3;if(_0x11e301===0x8)return![];return VisuMZ['CoreEngine'][_0x23314f(0x910)][_0x23314f(0x816)](this,_0x11e301);},Input[_0x54b1d3(0x24b)]=function(_0x5d336b){const _0x500c00=_0x54b1d3;if(_0x5d336b[_0x500c00(0x27a)](/backspace/i))return this[_0x500c00(0x37d)]===0x8;if(_0x5d336b[_0x500c00(0x27a)](/enter/i))return this[_0x500c00(0x37d)]===0xd;if(_0x5d336b[_0x500c00(0x27a)](/escape/i))return this[_0x500c00(0x37d)]===0x1b;},Input[_0x54b1d3(0x788)]=function(){const _0x1e78f5=_0x54b1d3;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x1e78f5(0x28a)](this[_0x1e78f5(0x37d)]);},Input[_0x54b1d3(0x2ae)]=function(){const _0x36ca4d=_0x54b1d3;return[0x25,0x26,0x27,0x28][_0x36ca4d(0x28a)](this[_0x36ca4d(0x37d)]);},Input[_0x54b1d3(0x921)]=function(){const _0x1351f0=_0x54b1d3;if(navigator['getGamepads']){const _0xe55a11=navigator[_0x1351f0(0x4fc)]();if(_0xe55a11)for(const _0x4c4d12 of _0xe55a11){if(_0x4c4d12&&_0x4c4d12[_0x1351f0(0x76a)])return!![];}}return![];},Input[_0x54b1d3(0x46f)]=function(){const _0x26776a=_0x54b1d3;if(navigator[_0x26776a(0x4fc)]){const _0x10b674=navigator[_0x26776a(0x4fc)]();if(_0x10b674)for(const _0x2d0054 of _0x10b674){if(_0x2d0054&&_0x2d0054['connected']){if(this[_0x26776a(0x227)](_0x2d0054))return!![];if(this[_0x26776a(0x354)](_0x2d0054))return!![];}}}return![];},Input['isGamepadButtonPressed']=function(_0x3d0581){const _0x2e590d=_0x54b1d3,_0xd9e316=_0x3d0581[_0x2e590d(0x296)];for(let _0x12f24e=0x0;_0x12f24e<_0xd9e316[_0x2e590d(0x506)];_0x12f24e++){if(_0xd9e316[_0x12f24e]['pressed'])return!![];}return![];},Input[_0x54b1d3(0x354)]=function(_0x139745){const _0x5219f5=_0x139745['axes'],_0x4003d7=0.5;if(_0x5219f5[0x0]<-_0x4003d7)return!![];if(_0x5219f5[0x0]>_0x4003d7)return!![];if(_0x5219f5[0x1]<-_0x4003d7)return!![];if(_0x5219f5[0x1]>_0x4003d7)return!![];return![];},Input['getLastGamepadUsed']=function(){const _0x47096b=_0x54b1d3;return this[_0x47096b(0x91d)]||null;},Input['setLastGamepadUsed']=function(_0x501c32){const _0x4df643=_0x54b1d3;this[_0x4df643(0x91d)]=_0x501c32;},VisuMZ['CoreEngine']['Input_updateGamepadState']=Input[_0x54b1d3(0x670)],Input[_0x54b1d3(0x670)]=function(_0x545214){const _0x2be736=_0x54b1d3;VisuMZ[_0x2be736(0x66d)][_0x2be736(0x95d)][_0x2be736(0x816)](this,_0x545214),(this['isGamepadButtonPressed'](_0x545214)||this['isGamepadAxisMoved'](_0x545214))&&this[_0x2be736(0x8b8)](_0x545214);},Input[_0x54b1d3(0x822)]=function(){const _0x3e24c0=_0x54b1d3;return this[_0x3e24c0(0x91d)]?this[_0x3e24c0(0x91d)]['id']:_0x3e24c0(0x2a1);},VisuMZ['CoreEngine']['Tilemap_addShadow']=Tilemap[_0x54b1d3(0x5af)][_0x54b1d3(0x449)],Tilemap[_0x54b1d3(0x5af)]['_addShadow']=function(_0x2a6dd1,_0x5f025b,_0x4bdd46,_0x418bf0){const _0x527c64=_0x54b1d3;if($gameMap&&$gameMap[_0x527c64(0x610)]())return;VisuMZ['CoreEngine'][_0x527c64(0x67b)]['call'](this,_0x2a6dd1,_0x5f025b,_0x4bdd46,_0x418bf0);},Tilemap[_0x54b1d3(0x308)][_0x54b1d3(0x5af)][_0x54b1d3(0x1a7)]=function(){const _0x24d46d=_0x54b1d3;this[_0x24d46d(0x783)]();for(let _0xbb995d=0x0;_0xbb995d<Tilemap[_0x24d46d(0x90b)]['MAX_GL_TEXTURES'];_0xbb995d++){const _0x4c11d7=new PIXI[(_0x24d46d(0x212))]();_0x4c11d7[_0x24d46d(0x6af)](0x800,0x800),VisuMZ[_0x24d46d(0x66d)][_0x24d46d(0x738)][_0x24d46d(0x33d)][_0x24d46d(0x3f9)]&&(_0x4c11d7[_0x24d46d(0x3dd)]=PIXI[_0x24d46d(0x3fa)][_0x24d46d(0x373)]),this['_internalTextures'][_0x24d46d(0x3eb)](_0x4c11d7);}},WindowLayer[_0x54b1d3(0x5af)]['isMaskingEnabled']=function(){const _0x4af42b=_0x54b1d3;return SceneManager&&SceneManager[_0x4af42b(0x4c4)]?SceneManager[_0x4af42b(0x4c4)][_0x4af42b(0x7d8)]():!![];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x205)]=WindowLayer[_0x54b1d3(0x5af)][_0x54b1d3(0x2b2)],WindowLayer[_0x54b1d3(0x5af)][_0x54b1d3(0x2b2)]=function render(_0x1835e0){const _0x3b00b3=_0x54b1d3;this[_0x3b00b3(0x6c4)]()?VisuMZ['CoreEngine'][_0x3b00b3(0x205)][_0x3b00b3(0x816)](this,_0x1835e0):this[_0x3b00b3(0x52b)](_0x1835e0);},WindowLayer[_0x54b1d3(0x5af)][_0x54b1d3(0x52b)]=function render(_0x519f26){const _0x562033=_0x54b1d3;if(!this[_0x562033(0x900)])return;const _0x32de84=new PIXI[(_0x562033(0x236))](),_0x82acd9=_0x519f26['gl'],_0x427818=this[_0x562033(0x1ae)][_0x562033(0x846)]();_0x519f26['framebuffer'][_0x562033(0x6a2)](),_0x32de84[_0x562033(0x5f6)]=this[_0x562033(0x5f6)],_0x519f26['batch']['flush'](),_0x82acd9[_0x562033(0x772)](_0x82acd9[_0x562033(0x8bc)]);while(_0x427818['length']>0x0){const _0x2a8210=_0x427818[_0x562033(0x416)]();_0x2a8210[_0x562033(0x3ac)]&&_0x2a8210[_0x562033(0x900)]&&_0x2a8210[_0x562033(0x41f)]>0x0&&(_0x82acd9[_0x562033(0x42b)](_0x82acd9[_0x562033(0x949)],0x0,~0x0),_0x82acd9['stencilOp'](_0x82acd9[_0x562033(0x33c)],_0x82acd9[_0x562033(0x33c)],_0x82acd9[_0x562033(0x33c)]),_0x2a8210[_0x562033(0x2b2)](_0x519f26),_0x519f26[_0x562033(0x88c)][_0x562033(0x90d)](),_0x32de84['clear'](),_0x82acd9['stencilFunc'](_0x82acd9[_0x562033(0x642)],0x1,~0x0),_0x82acd9[_0x562033(0x203)](_0x82acd9[_0x562033(0x1ca)],_0x82acd9[_0x562033(0x1ca)],_0x82acd9[_0x562033(0x1ca)]),_0x82acd9['blendFunc'](_0x82acd9[_0x562033(0x266)],_0x82acd9[_0x562033(0x587)]),_0x32de84[_0x562033(0x2b2)](_0x519f26),_0x519f26[_0x562033(0x88c)][_0x562033(0x90d)](),_0x82acd9[_0x562033(0x8e1)](_0x82acd9['ONE'],_0x82acd9[_0x562033(0x5ef)]));}_0x82acd9[_0x562033(0x1d5)](_0x82acd9[_0x562033(0x8bc)]),_0x82acd9['clear'](_0x82acd9['STENCIL_BUFFER_BIT']),_0x82acd9[_0x562033(0x6c9)](0x0),_0x519f26[_0x562033(0x88c)]['flush']();for(const _0x30d186 of this['children']){!_0x30d186[_0x562033(0x3ac)]&&_0x30d186[_0x562033(0x900)]&&_0x30d186[_0x562033(0x2b2)](_0x519f26);}_0x519f26['batch']['flush']();},DataManager[_0x54b1d3(0x337)]=function(_0x5efaa0){const _0x15aac5=_0x54b1d3;return this['isItem'](_0x5efaa0)&&_0x5efaa0[_0x15aac5(0x67d)]===0x2;},VisuMZ['CoreEngine']['DataManager_setupNewGame']=DataManager[_0x54b1d3(0x51b)],DataManager[_0x54b1d3(0x51b)]=function(){const _0x2bd8eb=_0x54b1d3;VisuMZ[_0x2bd8eb(0x66d)][_0x2bd8eb(0x6aa)][_0x2bd8eb(0x816)](this),this['reservePlayTestNewGameCommonEvent'](),this[_0x2bd8eb(0x209)]();},DataManager[_0x54b1d3(0x2cf)]=function(){const _0x2afb78=_0x54b1d3;if($gameTemp['isPlaytest']()){const _0x5b5215=VisuMZ['CoreEngine'][_0x2afb78(0x738)][_0x2afb78(0x33d)]['NewGameCommonEvent'];if(_0x5b5215>0x0)$gameTemp['reserveCommonEvent'](_0x5b5215);}},DataManager['reserveNewGameCommonEvent']=function(){const _0x4ad9ee=_0x54b1d3,_0x561d22=VisuMZ[_0x4ad9ee(0x66d)][_0x4ad9ee(0x738)][_0x4ad9ee(0x33d)]['NewGameCommonEventAll']||0x0;if(_0x561d22>0x0)$gameTemp[_0x4ad9ee(0x38e)](_0x561d22);},DataManager[_0x54b1d3(0x30c)]=function(_0x19cff7){const _0x11bb71=_0x54b1d3,_0x850e41=$dataTroops[_0x19cff7];if(!_0x850e41)return'';let _0x573d94='';_0x573d94+=_0x850e41['name'];for(const _0x5b6598 of _0x850e41[_0x11bb71(0x3a4)]){for(const _0x2f9670 of _0x5b6598[_0x11bb71(0x2f6)]){[0x6c,0x198]['includes'](_0x2f9670[_0x11bb71(0x826)])&&(_0x573d94+='\x0a',_0x573d94+=_0x2f9670['parameters'][0x0]);}}return _0x573d94;};(VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x33d)][_0x54b1d3(0x62c)]??!![])&&($scene=null,VisuMZ['CoreEngine']['Scene_Base_create']=Scene_Base[_0x54b1d3(0x5af)]['create'],Scene_Base['prototype'][_0x54b1d3(0x37e)]=function(){const _0x8f592b=_0x54b1d3;VisuMZ[_0x8f592b(0x66d)][_0x8f592b(0x4f2)][_0x8f592b(0x816)](this),$scene=this;},$spriteset=null,VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x70d)]=Scene_Map[_0x54b1d3(0x5af)]['createSpriteset'],Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x492)]=function(){const _0x370abd=_0x54b1d3;VisuMZ[_0x370abd(0x66d)][_0x370abd(0x70d)][_0x370abd(0x816)](this),$spriteset=this[_0x370abd(0x622)];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x30d)]=Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x492)],Scene_Battle[_0x54b1d3(0x5af)]['createSpriteset']=function(){const _0x1d0be1=_0x54b1d3;VisuMZ['CoreEngine'][_0x1d0be1(0x30d)][_0x1d0be1(0x816)](this),$spriteset=this[_0x1d0be1(0x622)];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x751)]=Scene_Base[_0x54b1d3(0x5af)]['terminate'],Scene_Base['prototype'][_0x54b1d3(0x597)]=function(){const _0x1f464b=_0x54b1d3;VisuMZ[_0x1f464b(0x66d)]['Scene_Base_terminate'][_0x1f464b(0x816)](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ['CoreEngine'][_0x54b1d3(0x1a3)]=BattleManager['update'],BattleManager[_0x54b1d3(0x71b)]=function(_0x12eb33){const _0x2a21e2=_0x54b1d3;VisuMZ['CoreEngine'][_0x2a21e2(0x1a3)]['call'](this,_0x12eb33),$subject=this[_0x2a21e2(0x7bd)],$targets=this[_0x2a21e2(0x424)],$target=this[_0x2a21e2(0x450)]||this[_0x2a21e2(0x424)][0x0];},$event=null,VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x480)]=Game_Event['prototype'][_0x54b1d3(0x304)],Game_Event[_0x54b1d3(0x5af)][_0x54b1d3(0x304)]=function(){const _0x195a14=_0x54b1d3;VisuMZ[_0x195a14(0x66d)][_0x195a14(0x480)]['call'](this),$event=this;},VisuMZ['CoreEngine'][_0x54b1d3(0x4de)]=Scene_Map['prototype'][_0x54b1d3(0x71b)],Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x104345=_0x54b1d3;VisuMZ[_0x104345(0x66d)][_0x104345(0x4de)][_0x104345(0x816)](this),$gameMap[_0x104345(0x53e)]();},Game_Map[_0x54b1d3(0x5af)]['updateCurrentEvent']=function(){!this['isEventRunning']()&&$event!==null&&($event=null);},$commonEvent=function(_0x559207){const _0xdb1cd9=_0x54b1d3;if($gameTemp)$gameTemp[_0xdb1cd9(0x38e)](_0x559207);});;$onceParallel=function(_0x50188e,_0x4d578d){const _0x492262=_0x54b1d3;if(SceneManager[_0x492262(0x555)]())SceneManager[_0x492262(0x4c4)][_0x492262(0x8a3)](_0x50188e,_0x4d578d);else{if(SceneManager[_0x492262(0x1c3)]()){if(Imported[_0x492262(0x455)])SceneManager[_0x492262(0x4c4)][_0x492262(0x8a3)](_0x50188e);else $gameTemp&&$gameTemp[_0x492262(0x833)]()&&alert('Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!');}else $gameTemp&&$gameTemp[_0x492262(0x833)]()&&alert('This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!');}},StorageManager[_0x54b1d3(0x78c)]=function(_0x354124){return new Promise((_0x2b1875,_0x10a91f)=>{const _0x1ff4f1=_0x4f22;try{const _0x6071d2=pako['deflate'](_0x354124,{'to':_0x1ff4f1(0x559),'level':0x1});if(_0x6071d2[_0x1ff4f1(0x506)]>=0xc350){}_0x2b1875(_0x6071d2);}catch(_0x3f1a34){_0x10a91f(_0x3f1a34);}});},TextManager[_0x54b1d3(0x4fe)]=['','','',_0x54b1d3(0x5e5),'','',_0x54b1d3(0x291),'',_0x54b1d3(0x31e),_0x54b1d3(0x5c7),'','',_0x54b1d3(0x518),'ENTER',_0x54b1d3(0x6fb),'',_0x54b1d3(0x30a),_0x54b1d3(0x929),_0x54b1d3(0x7e5),'PAUSE','CAPSLOCK',_0x54b1d3(0x4f0),_0x54b1d3(0x272),'JUNJA',_0x54b1d3(0x8fc),'HANJA','','ESC',_0x54b1d3(0x473),_0x54b1d3(0x507),'ACCEPT',_0x54b1d3(0x612),_0x54b1d3(0x6fd),_0x54b1d3(0x571),_0x54b1d3(0x920),_0x54b1d3(0x7f9),_0x54b1d3(0x4f8),_0x54b1d3(0x8ca),'UP','RIGHT',_0x54b1d3(0x5a7),_0x54b1d3(0x7e4),_0x54b1d3(0x79d),'EXECUTE',_0x54b1d3(0x4f5),_0x54b1d3(0x7f1),_0x54b1d3(0x51c),'','0','1','2','3','4','5','6','7','8','9',_0x54b1d3(0x355),_0x54b1d3(0x601),_0x54b1d3(0x5e2),'EQUALS',_0x54b1d3(0x68a),_0x54b1d3(0x70f),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x54b1d3(0x481),'',_0x54b1d3(0x792),'',_0x54b1d3(0x7c7),'NUMPAD0',_0x54b1d3(0x278),_0x54b1d3(0x7db),_0x54b1d3(0x771),_0x54b1d3(0x698),_0x54b1d3(0x918),'NUMPAD6','NUMPAD7',_0x54b1d3(0x3dc),_0x54b1d3(0x683),'MULTIPLY',_0x54b1d3(0x8b5),_0x54b1d3(0x7d1),_0x54b1d3(0x24d),_0x54b1d3(0x56a),_0x54b1d3(0x5b5),'F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x54b1d3(0x8be),_0x54b1d3(0x71f),_0x54b1d3(0x1ed),_0x54b1d3(0x2c9),'F14',_0x54b1d3(0x6d8),_0x54b1d3(0x4d6),'F17',_0x54b1d3(0x4e0),_0x54b1d3(0x370),'F20',_0x54b1d3(0x2b5),_0x54b1d3(0x2d8),_0x54b1d3(0x21a),'F24','','','','','','','','',_0x54b1d3(0x53b),'SCROLL_LOCK',_0x54b1d3(0x3c7),'WIN_OEM_FJ_MASSHOU',_0x54b1d3(0x6b7),_0x54b1d3(0x3ce),_0x54b1d3(0x6e2),'','','','','','','','','',_0x54b1d3(0x88b),_0x54b1d3(0x8b4),'DOUBLE_QUOTE','HASH',_0x54b1d3(0x1ee),'PERCENT',_0x54b1d3(0x5a8),_0x54b1d3(0x303),_0x54b1d3(0x646),_0x54b1d3(0x7d0),_0x54b1d3(0x6b3),_0x54b1d3(0x869),'PIPE',_0x54b1d3(0x4ca),_0x54b1d3(0x769),'CLOSE_CURLY_BRACKET',_0x54b1d3(0x54a),'','','','',_0x54b1d3(0x840),'VOLUME_DOWN',_0x54b1d3(0x711),'','',_0x54b1d3(0x601),'EQUALS',_0x54b1d3(0x85c),_0x54b1d3(0x52d),_0x54b1d3(0x31b),_0x54b1d3(0x29a),_0x54b1d3(0x444),'','','','','','','','','','','','','','','','','','','','','','','','','','',_0x54b1d3(0x702),_0x54b1d3(0x84f),_0x54b1d3(0x372),_0x54b1d3(0x326),'',_0x54b1d3(0x385),'ALTGR','',_0x54b1d3(0x39f),_0x54b1d3(0x556),'','WIN_ICO_CLEAR','','',_0x54b1d3(0x254),_0x54b1d3(0x3e7),_0x54b1d3(0x31c),_0x54b1d3(0x8ee),_0x54b1d3(0x271),_0x54b1d3(0x316),_0x54b1d3(0x464),_0x54b1d3(0x521),_0x54b1d3(0x47f),'WIN_OEM_COPY',_0x54b1d3(0x80b),_0x54b1d3(0x45d),_0x54b1d3(0x83c),_0x54b1d3(0x86a),_0x54b1d3(0x42d),_0x54b1d3(0x626),_0x54b1d3(0x2ed),'PLAY',_0x54b1d3(0x6d0),'',_0x54b1d3(0x211),'WIN_OEM_CLEAR',''],TextManager[_0x54b1d3(0x2e9)]=VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x1b7)]['OkText'],TextManager[_0x54b1d3(0x358)]=VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x1b7)]['CancelText'],TextManager[_0x54b1d3(0x85a)]=VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x1b7)][_0x54b1d3(0x8ea)],VisuMZ[_0x54b1d3(0x66d)]['TextManager_param']=TextManager['param'],TextManager[_0x54b1d3(0x563)]=function(_0x195ffe){const _0xf9328d=_0x54b1d3;return typeof _0x195ffe===_0xf9328d(0x61d)?VisuMZ[_0xf9328d(0x66d)]['TextManager_param'][_0xf9328d(0x816)](this,_0x195ffe):this['paramName'](_0x195ffe);},TextManager[_0x54b1d3(0x832)]=function(_0xdd2861){const _0xe844c5=_0x54b1d3;_0xdd2861=String(_0xdd2861||'')['toUpperCase']();const _0xf1831d=VisuMZ[_0xe844c5(0x66d)][_0xe844c5(0x738)][_0xe844c5(0x293)];if(_0xdd2861===_0xe844c5(0x489))return $dataSystem[_0xe844c5(0x26b)][_0xe844c5(0x90c)][0x0];if(_0xdd2861===_0xe844c5(0x39e))return $dataSystem[_0xe844c5(0x26b)]['params'][0x1];if(_0xdd2861===_0xe844c5(0x6ae))return $dataSystem[_0xe844c5(0x26b)][_0xe844c5(0x90c)][0x2];if(_0xdd2861===_0xe844c5(0x7af))return $dataSystem[_0xe844c5(0x26b)]['params'][0x3];if(_0xdd2861==='MAT')return $dataSystem[_0xe844c5(0x26b)][_0xe844c5(0x90c)][0x4];if(_0xdd2861===_0xe844c5(0x3fe))return $dataSystem[_0xe844c5(0x26b)][_0xe844c5(0x90c)][0x5];if(_0xdd2861===_0xe844c5(0x935))return $dataSystem[_0xe844c5(0x26b)][_0xe844c5(0x90c)][0x6];if(_0xdd2861===_0xe844c5(0x5f1))return $dataSystem[_0xe844c5(0x26b)][_0xe844c5(0x90c)][0x7];if(_0xdd2861===_0xe844c5(0x84c))return _0xf1831d[_0xe844c5(0x4b8)];if(_0xdd2861===_0xe844c5(0x3ef))return _0xf1831d[_0xe844c5(0x799)];if(_0xdd2861==='CRI')return _0xf1831d[_0xe844c5(0x4ff)];if(_0xdd2861===_0xe844c5(0x838))return _0xf1831d[_0xe844c5(0x615)];if(_0xdd2861===_0xe844c5(0x8ce))return _0xf1831d[_0xe844c5(0x433)];if(_0xdd2861===_0xe844c5(0x4da))return _0xf1831d['XParamVocab5'];if(_0xdd2861==='CNT')return _0xf1831d[_0xe844c5(0x8c0)];if(_0xdd2861===_0xe844c5(0x28f))return _0xf1831d[_0xe844c5(0x525)];if(_0xdd2861===_0xe844c5(0x50c))return _0xf1831d[_0xe844c5(0x855)];if(_0xdd2861==='TRG')return _0xf1831d[_0xe844c5(0x637)];if(_0xdd2861===_0xe844c5(0x64e))return _0xf1831d[_0xe844c5(0x862)];if(_0xdd2861==='GRD')return _0xf1831d['SParamVocab1'];if(_0xdd2861===_0xe844c5(0x1f9))return _0xf1831d[_0xe844c5(0x29c)];if(_0xdd2861===_0xe844c5(0x4b4))return _0xf1831d[_0xe844c5(0x312)];if(_0xdd2861===_0xe844c5(0x66c))return _0xf1831d['SParamVocab4'];if(_0xdd2861===_0xe844c5(0x801))return _0xf1831d[_0xe844c5(0x37b)];if(_0xdd2861===_0xe844c5(0x430))return _0xf1831d[_0xe844c5(0x828)];if(_0xdd2861==='MDR')return _0xf1831d[_0xe844c5(0x1a9)];if(_0xdd2861===_0xe844c5(0x386))return _0xf1831d[_0xe844c5(0x320)];if(_0xdd2861===_0xe844c5(0x641))return _0xf1831d[_0xe844c5(0x5fd)];if(VisuMZ[_0xe844c5(0x66d)][_0xe844c5(0x4c7)][_0xdd2861])return VisuMZ[_0xe844c5(0x66d)][_0xe844c5(0x4c7)][_0xdd2861];return'';},TextManager[_0x54b1d3(0x4cb)]=function(_0x493e0d){const _0x3a10f5=_0x54b1d3,_0x4f4dbb=Input[_0x3a10f5(0x822)]();return _0x4f4dbb===_0x3a10f5(0x2a1)?this['getKeyboardInputButtonString'](_0x493e0d):this[_0x3a10f5(0x736)](_0x4f4dbb,_0x493e0d);},TextManager[_0x54b1d3(0x879)]=function(_0x30e1be){const _0x9c46aa=_0x54b1d3,_0x2dbe08=VisuMZ[_0x9c46aa(0x66d)]['Settings'][_0x9c46aa(0x1b7)][_0x9c46aa(0x48f)];if(!_0x2dbe08){if(_0x30e1be===_0x9c46aa(0x6f8))_0x30e1be=_0x9c46aa(0x857);if(_0x30e1be===_0x9c46aa(0x439))_0x30e1be=_0x9c46aa(0x857);}let _0x374010=[];for(let _0x42c80e in Input[_0x9c46aa(0x35f)]){_0x42c80e=Number(_0x42c80e);if(_0x42c80e>=0x60&&_0x42c80e<=0x69)continue;if([0x12,0x20]['includes'](_0x42c80e))continue;_0x30e1be===Input['keyMapper'][_0x42c80e]&&_0x374010[_0x9c46aa(0x3eb)](_0x42c80e);}for(let _0x1c0f86=0x0;_0x1c0f86<_0x374010['length'];_0x1c0f86++){_0x374010[_0x1c0f86]=TextManager[_0x9c46aa(0x4fe)][_0x374010[_0x1c0f86]];}return this[_0x9c46aa(0x679)](_0x374010);},TextManager[_0x54b1d3(0x679)]=function(_0x4a446e){const _0x1cee7b=_0x54b1d3,_0x5b432b=VisuMZ[_0x1cee7b(0x66d)][_0x1cee7b(0x738)][_0x1cee7b(0x1b7)],_0x545699=_0x5b432b[_0x1cee7b(0x3e5)],_0x36cfaa=_0x4a446e[_0x1cee7b(0x40d)](),_0x3ce669=_0x1cee7b(0x392)[_0x1cee7b(0x892)](_0x36cfaa);return _0x5b432b[_0x3ce669]?_0x5b432b[_0x3ce669]:_0x545699['format'](_0x36cfaa);},TextManager['getInputMultiButtonStrings']=function(_0x459547,_0x42df3b){const _0x4d1ff3=_0x54b1d3,_0x1c3766=VisuMZ[_0x4d1ff3(0x66d)][_0x4d1ff3(0x738)]['ButtonAssist'],_0x9dcad6=_0x1c3766[_0x4d1ff3(0x1e2)],_0x988242=this[_0x4d1ff3(0x4cb)](_0x459547),_0x422dee=this[_0x4d1ff3(0x4cb)](_0x42df3b);return _0x9dcad6[_0x4d1ff3(0x892)](_0x988242,_0x422dee);},TextManager[_0x54b1d3(0x736)]=function(_0x23983c,_0x5ec4e8){const _0xe81827=_0x54b1d3,_0x256277=_0x23983c[_0xe81827(0x73e)]()[_0xe81827(0x848)](),_0xb26618=VisuMZ[_0xe81827(0x66d)][_0xe81827(0x592)][_0x256277];if(!_0xb26618)return this[_0xe81827(0x4e9)](_0x23983c,_0x5ec4e8);return _0xb26618[_0x5ec4e8]||this['getKeyboardInputButtonString'](_0x23983c,_0x5ec4e8);},TextManager[_0x54b1d3(0x4e9)]=function(_0x29e1df,_0x1f1e2e){const _0x47f324=_0x54b1d3,_0x179567=_0x29e1df['toLowerCase']()[_0x47f324(0x848)]();for(const _0x5a26ab in VisuMZ[_0x47f324(0x66d)][_0x47f324(0x22f)]){if(_0x179567['includes'](_0x5a26ab)){const _0x16514c=VisuMZ[_0x47f324(0x66d)]['ControllerMatches'][_0x5a26ab],_0x50b8c4=VisuMZ[_0x47f324(0x66d)][_0x47f324(0x592)][_0x16514c];return _0x50b8c4[_0x1f1e2e]||this[_0x47f324(0x879)](_0x1f1e2e);}}return this[_0x47f324(0x879)](_0x1f1e2e);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x94e)]=ColorManager[_0x54b1d3(0x25a)],ColorManager[_0x54b1d3(0x25a)]=function(){const _0x4a5c26=_0x54b1d3;VisuMZ[_0x4a5c26(0x66d)][_0x4a5c26(0x94e)][_0x4a5c26(0x816)](this),this[_0x4a5c26(0x3c3)]=this[_0x4a5c26(0x3c3)]||{};},ColorManager[_0x54b1d3(0x4a7)]=function(_0xec56d4,_0x43f6b1){const _0x4cfe3f=_0x54b1d3;return _0x43f6b1=String(_0x43f6b1),this['_colorCache']=this[_0x4cfe3f(0x3c3)]||{},_0x43f6b1[_0x4cfe3f(0x27a)](/#(.*)/i)?this['_colorCache'][_0xec56d4]='#%1'[_0x4cfe3f(0x892)](String(RegExp['$1'])):this[_0x4cfe3f(0x3c3)][_0xec56d4]=this[_0x4cfe3f(0x499)](Number(_0x43f6b1)),this[_0x4cfe3f(0x3c3)][_0xec56d4];},ColorManager['getColor']=function(_0x2844ed){const _0x2fe029=_0x54b1d3;return _0x2844ed=String(_0x2844ed),_0x2844ed['match'](/#(.*)/i)?_0x2fe029(0x568)[_0x2fe029(0x892)](String(RegExp['$1'])):this[_0x2fe029(0x499)](Number(_0x2844ed));},ColorManager[_0x54b1d3(0x5b4)]=function(){const _0xb61441=_0x54b1d3;this[_0xb61441(0x3c3)]={};},ColorManager[_0x54b1d3(0x258)]=function(){const _0x3662e3=_0x54b1d3,_0x31a2e7=_0x3662e3(0x216);this[_0x3662e3(0x3c3)]=this[_0x3662e3(0x3c3)]||{};if(this[_0x3662e3(0x3c3)][_0x31a2e7])return this[_0x3662e3(0x3c3)][_0x31a2e7];const _0x4e6ab7=VisuMZ[_0x3662e3(0x66d)][_0x3662e3(0x738)][_0x3662e3(0x863)][_0x3662e3(0x4d5)];return this['getColorDataFromPluginParameters'](_0x31a2e7,_0x4e6ab7);},ColorManager['systemColor']=function(){const _0x4ae914=_0x54b1d3,_0x1ec5ee='_stored_systemColor';this[_0x4ae914(0x3c3)]=this['_colorCache']||{};if(this[_0x4ae914(0x3c3)][_0x1ec5ee])return this[_0x4ae914(0x3c3)][_0x1ec5ee];const _0x299afa=VisuMZ[_0x4ae914(0x66d)][_0x4ae914(0x738)]['Color'][_0x4ae914(0x85b)];return this[_0x4ae914(0x4a7)](_0x1ec5ee,_0x299afa);},ColorManager['crisisColor']=function(){const _0x5373c4=_0x54b1d3,_0xb10978=_0x5373c4(0x1b8);this[_0x5373c4(0x3c3)]=this['_colorCache']||{};if(this['_colorCache'][_0xb10978])return this[_0x5373c4(0x3c3)][_0xb10978];const _0xc698a3=VisuMZ[_0x5373c4(0x66d)][_0x5373c4(0x738)]['Color'][_0x5373c4(0x2a6)];return this['getColorDataFromPluginParameters'](_0xb10978,_0xc698a3);},ColorManager[_0x54b1d3(0x313)]=function(){const _0xf3658e=_0x54b1d3,_0x150103=_0xf3658e(0x611);this[_0xf3658e(0x3c3)]=this[_0xf3658e(0x3c3)]||{};if(this['_colorCache'][_0x150103])return this[_0xf3658e(0x3c3)][_0x150103];const _0x1d0f69=VisuMZ[_0xf3658e(0x66d)][_0xf3658e(0x738)][_0xf3658e(0x863)][_0xf3658e(0x897)];return this[_0xf3658e(0x4a7)](_0x150103,_0x1d0f69);},ColorManager['gaugeBackColor']=function(){const _0x4c189a=_0x54b1d3,_0x448101=_0x4c189a(0x494);this[_0x4c189a(0x3c3)]=this[_0x4c189a(0x3c3)]||{};if(this[_0x4c189a(0x3c3)][_0x448101])return this[_0x4c189a(0x3c3)][_0x448101];const _0x4deac5=VisuMZ[_0x4c189a(0x66d)]['Settings'][_0x4c189a(0x863)][_0x4c189a(0x2a0)];return this[_0x4c189a(0x4a7)](_0x448101,_0x4deac5);},ColorManager[_0x54b1d3(0x7c1)]=function(){const _0x1dd68e=_0x54b1d3,_0x488ae4=_0x1dd68e(0x8ba);this[_0x1dd68e(0x3c3)]=this[_0x1dd68e(0x3c3)]||{};if(this[_0x1dd68e(0x3c3)][_0x488ae4])return this['_colorCache'][_0x488ae4];const _0x2377df=VisuMZ[_0x1dd68e(0x66d)][_0x1dd68e(0x738)][_0x1dd68e(0x863)]['ColorHPGauge1'];return this[_0x1dd68e(0x4a7)](_0x488ae4,_0x2377df);},ColorManager['hpGaugeColor2']=function(){const _0x5a6b80=_0x54b1d3,_0x37edbd=_0x5a6b80(0x2c7);this['_colorCache']=this[_0x5a6b80(0x3c3)]||{};if(this['_colorCache'][_0x37edbd])return this['_colorCache'][_0x37edbd];const _0x5414d2=VisuMZ[_0x5a6b80(0x66d)][_0x5a6b80(0x738)][_0x5a6b80(0x863)][_0x5a6b80(0x59e)];return this['getColorDataFromPluginParameters'](_0x37edbd,_0x5414d2);},ColorManager[_0x54b1d3(0x24c)]=function(){const _0x589af3=_0x54b1d3,_0x183888='_stored_mpGaugeColor1';this[_0x589af3(0x3c3)]=this[_0x589af3(0x3c3)]||{};if(this[_0x589af3(0x3c3)][_0x183888])return this[_0x589af3(0x3c3)][_0x183888];const _0x5882d3=VisuMZ['CoreEngine'][_0x589af3(0x738)][_0x589af3(0x863)]['ColorMPGauge1'];return this[_0x589af3(0x4a7)](_0x183888,_0x5882d3);},ColorManager[_0x54b1d3(0x727)]=function(){const _0x23b88e=_0x54b1d3,_0x2e979d='_stored_mpGaugeColor2';this[_0x23b88e(0x3c3)]=this[_0x23b88e(0x3c3)]||{};if(this[_0x23b88e(0x3c3)][_0x2e979d])return this[_0x23b88e(0x3c3)][_0x2e979d];const _0x5a27a0=VisuMZ[_0x23b88e(0x66d)]['Settings'][_0x23b88e(0x863)][_0x23b88e(0x847)];return this[_0x23b88e(0x4a7)](_0x2e979d,_0x5a27a0);},ColorManager[_0x54b1d3(0x57e)]=function(){const _0x5a592f=_0x54b1d3,_0x4cec8f=_0x5a592f(0x6f9);this['_colorCache']=this[_0x5a592f(0x3c3)]||{};if(this[_0x5a592f(0x3c3)][_0x4cec8f])return this[_0x5a592f(0x3c3)][_0x4cec8f];const _0xe7666e=VisuMZ['CoreEngine'][_0x5a592f(0x738)][_0x5a592f(0x863)][_0x5a592f(0x1c5)];return this['getColorDataFromPluginParameters'](_0x4cec8f,_0xe7666e);},ColorManager[_0x54b1d3(0x7cb)]=function(){const _0x3285ef=_0x54b1d3,_0x24870a=_0x3285ef(0x4d9);this[_0x3285ef(0x3c3)]=this[_0x3285ef(0x3c3)]||{};if(this['_colorCache'][_0x24870a])return this[_0x3285ef(0x3c3)][_0x24870a];const _0xf56ce6=VisuMZ[_0x3285ef(0x66d)][_0x3285ef(0x738)][_0x3285ef(0x863)][_0x3285ef(0x95a)];return this[_0x3285ef(0x4a7)](_0x24870a,_0xf56ce6);},ColorManager[_0x54b1d3(0x549)]=function(){const _0x3cf37b=_0x54b1d3,_0x563b44='_stored_powerDownColor';this[_0x3cf37b(0x3c3)]=this['_colorCache']||{};if(this[_0x3cf37b(0x3c3)][_0x563b44])return this[_0x3cf37b(0x3c3)][_0x563b44];const _0x23d5d5=VisuMZ[_0x3cf37b(0x66d)]['Settings'][_0x3cf37b(0x863)][_0x3cf37b(0x926)];return this[_0x3cf37b(0x4a7)](_0x563b44,_0x23d5d5);},ColorManager['ctGaugeColor1']=function(){const _0x4abed7=_0x54b1d3,_0x30a38a=_0x4abed7(0x29b);this['_colorCache']=this[_0x4abed7(0x3c3)]||{};if(this[_0x4abed7(0x3c3)][_0x30a38a])return this[_0x4abed7(0x3c3)][_0x30a38a];const _0x59eab3=VisuMZ[_0x4abed7(0x66d)]['Settings'][_0x4abed7(0x863)][_0x4abed7(0x89a)];return this['getColorDataFromPluginParameters'](_0x30a38a,_0x59eab3);},ColorManager[_0x54b1d3(0x7a8)]=function(){const _0x4d6a94=_0x54b1d3,_0x33d728=_0x4d6a94(0x38b);this[_0x4d6a94(0x3c3)]=this[_0x4d6a94(0x3c3)]||{};if(this[_0x4d6a94(0x3c3)][_0x33d728])return this[_0x4d6a94(0x3c3)][_0x33d728];const _0x1df4f0=VisuMZ[_0x4d6a94(0x66d)][_0x4d6a94(0x738)][_0x4d6a94(0x863)]['ColorCTGauge2'];return this[_0x4d6a94(0x4a7)](_0x33d728,_0x1df4f0);},ColorManager[_0x54b1d3(0x26a)]=function(){const _0x2316d9=_0x54b1d3,_0x199a61=_0x2316d9(0x529);this[_0x2316d9(0x3c3)]=this[_0x2316d9(0x3c3)]||{};if(this[_0x2316d9(0x3c3)][_0x199a61])return this[_0x2316d9(0x3c3)][_0x199a61];const _0x539ce6=VisuMZ[_0x2316d9(0x66d)][_0x2316d9(0x738)]['Color'][_0x2316d9(0x75a)];return this[_0x2316d9(0x4a7)](_0x199a61,_0x539ce6);},ColorManager['tpGaugeColor2']=function(){const _0x201d83=_0x54b1d3,_0x3b6977=_0x201d83(0x676);this[_0x201d83(0x3c3)]=this[_0x201d83(0x3c3)]||{};if(this[_0x201d83(0x3c3)][_0x3b6977])return this[_0x201d83(0x3c3)][_0x3b6977];const _0x339e86=VisuMZ[_0x201d83(0x66d)][_0x201d83(0x738)][_0x201d83(0x863)]['ColorTPGauge2'];return this['getColorDataFromPluginParameters'](_0x3b6977,_0x339e86);},ColorManager[_0x54b1d3(0x903)]=function(){const _0x412732=_0x54b1d3,_0x10e4cb='_stored_tpCostColor';this['_colorCache']=this[_0x412732(0x3c3)]||{};if(this[_0x412732(0x3c3)][_0x10e4cb])return this['_colorCache'][_0x10e4cb];const _0x577b17=VisuMZ[_0x412732(0x66d)]['Settings'][_0x412732(0x863)][_0x412732(0x5a4)];return this[_0x412732(0x4a7)](_0x10e4cb,_0x577b17);},ColorManager[_0x54b1d3(0x20b)]=function(){const _0x529442=_0x54b1d3,_0x357e86=_0x529442(0x749);this[_0x529442(0x3c3)]=this[_0x529442(0x3c3)]||{};if(this['_colorCache'][_0x357e86])return this[_0x529442(0x3c3)][_0x357e86];const _0x2c2da6=VisuMZ[_0x529442(0x66d)][_0x529442(0x738)][_0x529442(0x863)][_0x529442(0x5a4)];return this[_0x529442(0x4a7)](_0x357e86,_0x2c2da6);},ColorManager['expGaugeColor1']=function(){const _0x283af3=_0x54b1d3,_0x5623ef=_0x283af3(0x44d);this[_0x283af3(0x3c3)]=this[_0x283af3(0x3c3)]||{};if(this[_0x283af3(0x3c3)][_0x5623ef])return this[_0x283af3(0x3c3)][_0x5623ef];const _0x1541c0=VisuMZ['CoreEngine']['Settings']['Color']['ColorExpGauge1'];return this[_0x283af3(0x4a7)](_0x5623ef,_0x1541c0);},ColorManager[_0x54b1d3(0x5dc)]=function(){const _0x412d70=_0x54b1d3,_0x4fbf94=_0x412d70(0x904);this[_0x412d70(0x3c3)]=this[_0x412d70(0x3c3)]||{};if(this[_0x412d70(0x3c3)][_0x4fbf94])return this['_colorCache'][_0x4fbf94];const _0x5d2693=VisuMZ['CoreEngine'][_0x412d70(0x738)][_0x412d70(0x863)][_0x412d70(0x560)];return this[_0x412d70(0x4a7)](_0x4fbf94,_0x5d2693);},ColorManager[_0x54b1d3(0x2da)]=function(){const _0x335e19=_0x54b1d3,_0x4faf23='_stored_maxLvGaugeColor1';this[_0x335e19(0x3c3)]=this[_0x335e19(0x3c3)]||{};if(this['_colorCache'][_0x4faf23])return this[_0x335e19(0x3c3)][_0x4faf23];const _0x234aa0=VisuMZ[_0x335e19(0x66d)][_0x335e19(0x738)][_0x335e19(0x863)][_0x335e19(0x329)];return this[_0x335e19(0x4a7)](_0x4faf23,_0x234aa0);},ColorManager[_0x54b1d3(0x65c)]=function(){const _0x1e8e79=_0x54b1d3,_0x3f8cca=_0x1e8e79(0x239);this[_0x1e8e79(0x3c3)]=this['_colorCache']||{};if(this[_0x1e8e79(0x3c3)][_0x3f8cca])return this['_colorCache'][_0x3f8cca];const _0x591025=VisuMZ[_0x1e8e79(0x66d)][_0x1e8e79(0x738)][_0x1e8e79(0x863)][_0x1e8e79(0x6d4)];return this[_0x1e8e79(0x4a7)](_0x3f8cca,_0x591025);},ColorManager[_0x54b1d3(0x3c1)]=function(_0x54a7a9){const _0x373964=_0x54b1d3;return VisuMZ[_0x373964(0x66d)]['Settings'][_0x373964(0x863)]['ActorHPColor'][_0x373964(0x816)](this,_0x54a7a9);},ColorManager[_0x54b1d3(0x5c9)]=function(_0x592999){const _0x20b12d=_0x54b1d3;return VisuMZ['CoreEngine'][_0x20b12d(0x738)][_0x20b12d(0x863)][_0x20b12d(0x234)][_0x20b12d(0x816)](this,_0x592999);},ColorManager[_0x54b1d3(0x88f)]=function(_0x2484a1){const _0x2b3320=_0x54b1d3;return VisuMZ['CoreEngine'][_0x2b3320(0x738)][_0x2b3320(0x863)][_0x2b3320(0x21c)][_0x2b3320(0x816)](this,_0x2484a1);},ColorManager[_0x54b1d3(0x475)]=function(_0x506e75){const _0x47e34d=_0x54b1d3;return VisuMZ[_0x47e34d(0x66d)][_0x47e34d(0x738)][_0x47e34d(0x863)][_0x47e34d(0x817)][_0x47e34d(0x816)](this,_0x506e75);},ColorManager[_0x54b1d3(0x899)]=function(_0x4aebef){const _0x57a444=_0x54b1d3;return VisuMZ[_0x57a444(0x66d)][_0x57a444(0x738)]['Color']['DamageColor'][_0x57a444(0x816)](this,_0x4aebef);},ColorManager[_0x54b1d3(0x961)]=function(){const _0x4019dd=_0x54b1d3;return VisuMZ[_0x4019dd(0x66d)][_0x4019dd(0x738)][_0x4019dd(0x863)][_0x4019dd(0x2ee)];},ColorManager[_0x54b1d3(0x47d)]=function(){const _0x49679a=_0x54b1d3;return VisuMZ[_0x49679a(0x66d)]['Settings'][_0x49679a(0x863)][_0x49679a(0x3d4)]||_0x49679a(0x888);},ColorManager['outlineColorGauge']=function(){const _0x59b441=_0x54b1d3;return VisuMZ[_0x59b441(0x66d)]['Settings'][_0x59b441(0x863)][_0x59b441(0x328)]||_0x59b441(0x84e);},ColorManager[_0x54b1d3(0x6d9)]=function(){const _0x29f2fa=_0x54b1d3;return VisuMZ[_0x29f2fa(0x66d)]['Settings'][_0x29f2fa(0x863)][_0x29f2fa(0x85e)];},ColorManager['dimColor2']=function(){const _0xd2ad74=_0x54b1d3;return VisuMZ[_0xd2ad74(0x66d)][_0xd2ad74(0x738)][_0xd2ad74(0x863)][_0xd2ad74(0x415)];},ColorManager[_0x54b1d3(0x8d9)]=function(){const _0x5da0c5=_0x54b1d3;return VisuMZ[_0x5da0c5(0x66d)][_0x5da0c5(0x738)][_0x5da0c5(0x863)][_0x5da0c5(0x60c)];},ColorManager[_0x54b1d3(0x3b2)]=function(){const _0x9830c=_0x54b1d3;return VisuMZ['CoreEngine'][_0x9830c(0x738)][_0x9830c(0x863)]['ItemBackColor2'];},SceneManager[_0x54b1d3(0x6f4)]=[],SceneManager[_0x54b1d3(0x1c3)]=function(){const _0x4e6162=_0x54b1d3;return this['_scene']&&this['_scene'][_0x4e6162(0x62f)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x2c7755=_0x54b1d3;return this['_scene']&&this[_0x2c7755(0x4c4)][_0x2c7755(0x62f)]===Scene_Map;},SceneManager[_0x54b1d3(0x3e8)]=function(){const _0x2b6703=_0x54b1d3;return this[_0x2b6703(0x4c4)]&&this[_0x2b6703(0x4c4)]instanceof Scene_Map;},VisuMZ['CoreEngine'][_0x54b1d3(0x782)]=SceneManager[_0x54b1d3(0x68b)],SceneManager['initialize']=function(){const _0x3c951c=_0x54b1d3;VisuMZ[_0x3c951c(0x66d)][_0x3c951c(0x782)][_0x3c951c(0x816)](this),this['initVisuMZCoreEngine']();},VisuMZ[_0x54b1d3(0x66d)]['SceneManager_onKeyDown']=SceneManager[_0x54b1d3(0x962)],SceneManager[_0x54b1d3(0x962)]=function(_0xec888d){const _0x132786=_0x54b1d3;if($gameTemp)this[_0x132786(0x226)](_0xec888d);VisuMZ[_0x132786(0x66d)][_0x132786(0x401)][_0x132786(0x816)](this,_0xec888d);},SceneManager[_0x54b1d3(0x226)]=function(_0x447dbd){const _0x301dbb=_0x54b1d3;if(!_0x447dbd['ctrlKey']&&!_0x447dbd['altKey'])switch(_0x447dbd['keyCode']){case 0x52:this[_0x301dbb(0x1d2)]();break;case 0x54:this[_0x301dbb(0x708)]();break;case 0x75:this[_0x301dbb(0x32e)]();break;case 0x76:if(Input['isPressed'](_0x301dbb(0x416))||Input[_0x301dbb(0x682)]('ctrl'))return;this[_0x301dbb(0x4c0)]();break;}else{if(_0x447dbd[_0x301dbb(0x4ee)]){let _0x3964fd=_0x447dbd[_0x301dbb(0x8ad)];if(_0x3964fd>=0x31&&_0x3964fd<=0x39){const _0x2557e1=_0x3964fd-0x30;return SceneManager[_0x301dbb(0x25e)](_0x2557e1);}else{if(_0x3964fd>=0x61&&_0x3964fd<=0x69){const _0x412e84=_0x3964fd-0x60;return SceneManager['playtestQuickLoad'](_0x412e84);}}}}},SceneManager[_0x54b1d3(0x32e)]=function(){const _0x450c43=_0x54b1d3;if($gameTemp[_0x450c43(0x833)]()&&VisuMZ[_0x450c43(0x66d)][_0x450c43(0x738)][_0x450c43(0x33d)][_0x450c43(0x5d6)]){ConfigManager[_0x450c43(0x374)]!==0x0?(ConfigManager[_0x450c43(0x5c6)]=0x0,ConfigManager[_0x450c43(0x7a9)]=0x0,ConfigManager[_0x450c43(0x6f5)]=0x0,ConfigManager['seVolume']=0x0):(ConfigManager['bgmVolume']=0x64,ConfigManager['bgsVolume']=0x64,ConfigManager['meVolume']=0x64,ConfigManager[_0x450c43(0x374)]=0x64);ConfigManager['save']();if(this[_0x450c43(0x4c4)][_0x450c43(0x62f)]===Scene_Options){if(this[_0x450c43(0x4c4)]['_optionsWindow'])this[_0x450c43(0x4c4)][_0x450c43(0x31a)][_0x450c43(0x7c4)]();if(this['_scene'][_0x450c43(0x61a)])this[_0x450c43(0x4c4)]['_listWindow'][_0x450c43(0x7c4)]();}}},SceneManager[_0x54b1d3(0x4c0)]=function(){const _0x54b6c9=_0x54b1d3;$gameTemp['isPlaytest']()&&VisuMZ[_0x54b6c9(0x66d)][_0x54b6c9(0x738)][_0x54b6c9(0x33d)][_0x54b6c9(0x1bc)]&&($gameTemp[_0x54b6c9(0x73b)]=!$gameTemp[_0x54b6c9(0x73b)]);},SceneManager[_0x54b1d3(0x1d2)]=function(){const _0x424490=_0x54b1d3;if(!VisuMZ[_0x424490(0x66d)][_0x424490(0x738)][_0x424490(0x33d)][_0x424490(0x40f)])return;if(!$gameTemp[_0x424490(0x833)]())return;if(!SceneManager['isSceneBattle']())return;if(!Input[_0x424490(0x682)](_0x424490(0x416)))return;for(const _0x37cff0 of $gameParty[_0x424490(0x61e)]()){if(!_0x37cff0)continue;_0x37cff0[_0x424490(0x880)]();}},SceneManager[_0x54b1d3(0x708)]=function(){const _0x3da88f=_0x54b1d3;if(!VisuMZ[_0x3da88f(0x66d)][_0x3da88f(0x738)][_0x3da88f(0x33d)]['ShiftT_Toggle'])return;if(!$gameTemp['isPlaytest']())return;if(!SceneManager[_0x3da88f(0x1c3)]())return;if(!Input[_0x3da88f(0x682)](_0x3da88f(0x416)))return;for(const _0x1bdf1f of $gameParty[_0x3da88f(0x61e)]()){if(!_0x1bdf1f)continue;_0x1bdf1f[_0x3da88f(0x6d6)](_0x1bdf1f[_0x3da88f(0x3e2)]());}},SceneManager[_0x54b1d3(0x25e)]=function(_0x4b7e3e){const _0x42458f=_0x54b1d3;if(!$gameTemp[_0x42458f(0x833)]())return;if(!DataManager[_0x42458f(0x7a1)](_0x4b7e3e))return;if(!(VisuMZ[_0x42458f(0x66d)][_0x42458f(0x738)][_0x42458f(0x33d)][_0x42458f(0x543)]??!![]))return;this[_0x42458f(0x3eb)](Scene_QuickLoad),this['prepareNextScene'](_0x4b7e3e);},SceneManager[_0x54b1d3(0x5f4)]=function(){const _0x4e3937=_0x54b1d3;this['_sideButtonLayout']=![],this[_0x4e3937(0x427)]=!VisuMZ[_0x4e3937(0x66d)]['Settings']['UI'][_0x4e3937(0x6bf)];},SceneManager[_0x54b1d3(0x74c)]=function(_0x4412ed){const _0x2b8588=_0x54b1d3;VisuMZ[_0x2b8588(0x66d)][_0x2b8588(0x738)]['UI'][_0x2b8588(0x735)]&&(this['_sideButtonLayout']=_0x4412ed);},SceneManager[_0x54b1d3(0x257)]=function(){return this['_sideButtonLayout'];},SceneManager[_0x54b1d3(0x288)]=function(){const _0x38936a=_0x54b1d3;return this[_0x38936a(0x427)];},SceneManager[_0x54b1d3(0x75f)]=function(){const _0x4f77d3=_0x54b1d3;return this[_0x4f77d3(0x288)]()||this[_0x4f77d3(0x257)]();},VisuMZ['CoreEngine'][_0x54b1d3(0x36b)]=SceneManager[_0x54b1d3(0x501)],SceneManager[_0x54b1d3(0x501)]=function(){const _0x37be3a=_0x54b1d3;return VisuMZ['CoreEngine'][_0x37be3a(0x738)][_0x37be3a(0x33d)][_0x37be3a(0x4af)]?VisuMZ[_0x37be3a(0x66d)][_0x37be3a(0x36b)][_0x37be3a(0x816)](this):!![];},SceneManager['catchException']=function(_0x5975f5){const _0x4a190c=_0x54b1d3;if(_0x5975f5 instanceof Error)this[_0x4a190c(0x1de)](_0x5975f5);else _0x5975f5 instanceof Array&&_0x5975f5[0x0]===_0x4a190c(0x4d8)?this[_0x4a190c(0x262)](_0x5975f5):this[_0x4a190c(0x672)](_0x5975f5);this[_0x4a190c(0x90e)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x8c5)]=BattleManager[_0x54b1d3(0x674)],BattleManager[_0x54b1d3(0x674)]=function(){const _0x3e8c09=_0x54b1d3;return VisuMZ[_0x3e8c09(0x66d)][_0x3e8c09(0x738)][_0x3e8c09(0x33d)]['EscapeAlways']?this[_0x3e8c09(0x4d0)]():VisuMZ[_0x3e8c09(0x66d)][_0x3e8c09(0x8c5)][_0x3e8c09(0x816)](this);},BattleManager[_0x54b1d3(0x4d0)]=function(){const _0x2d0114=_0x54b1d3;return $gameParty[_0x2d0114(0x74b)](),SoundManager[_0x2d0114(0x3ba)](),this['onEscapeSuccess'](),!![];},BattleManager['isTpb']=function(){const _0x2d8fce=_0x54b1d3;return $gameSystem[_0x2d8fce(0x7d6)]()>=0x1;},BattleManager[_0x54b1d3(0x5a2)]=function(){const _0x3bf998=_0x54b1d3;return $gameSystem[_0x3bf998(0x7d6)]()===0x1;},VisuMZ[_0x54b1d3(0x66d)]['Game_Temp_initialize']=Game_Temp[_0x54b1d3(0x5af)]['initialize'],Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(){const _0xb42335=_0x54b1d3;VisuMZ[_0xb42335(0x66d)][_0xb42335(0x3cd)][_0xb42335(0x816)](this),this[_0xb42335(0x7f0)](),this['createFauxAnimationQueue'](),this[_0xb42335(0x6be)]();},Game_Temp[_0x54b1d3(0x5af)]['forceOutOfPlaytest']=function(){const _0x24fb9e=_0x54b1d3;VisuMZ[_0x24fb9e(0x66d)][_0x24fb9e(0x738)][_0x24fb9e(0x33d)][_0x24fb9e(0x5a3)]&&(this[_0x24fb9e(0x342)]=![]);},Game_Temp['prototype'][_0x54b1d3(0x429)]=function(_0x1278ed){const _0x3fd33b=_0x54b1d3;this[_0x3fd33b(0x7c5)]=_0x1278ed;},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x7ba)]=function(){const _0x4326c9=_0x54b1d3;return this[_0x4326c9(0x7c5)];},Game_Temp['prototype'][_0x54b1d3(0x52c)]=function(){const _0x1ba545=_0x54b1d3;this[_0x1ba545(0x3f0)]=undefined,this[_0x1ba545(0x540)]=undefined,this[_0x1ba545(0x598)]=undefined;},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x411)]=function(_0x48586f){const _0x2b2604=_0x54b1d3;$gameMap&&$dataMap&&$dataMap[_0x2b2604(0x5e0)]&&this[_0x2b2604(0x466)]($dataMap[_0x2b2604(0x5e0)]);const _0x2fca81=$dataTroops[_0x48586f];if(_0x2fca81){let _0xcc0bf6=DataManager['createTroopNote'](_0x2fca81['id']);this['parseForcedGameTroopSettingsCoreEngine'](_0xcc0bf6);}},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x466)]=function(_0x3b4aa1){const _0x485cdc=_0x54b1d3;if(!_0x3b4aa1)return;if(_0x3b4aa1['match'](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this[_0x485cdc(0x3f0)]='FV';else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))this[_0x485cdc(0x3f0)]='SV';else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x5d5d49=String(RegExp['$1']);if(_0x5d5d49[_0x485cdc(0x27a)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x485cdc(0x3f0)]='FV';else _0x5d5d49['match'](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x485cdc(0x3f0)]='SV');}}}if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:DTB)>/i))this[_0x485cdc(0x540)]=0x0;else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x485cdc(0x540)]=0x1;else{if(_0x3b4aa1['match'](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0x485cdc(0x540)]=0x2;else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:TPB|ATB)>/i))this[_0x485cdc(0x540)]=0x2;else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:CTB)>/i))Imported[_0x485cdc(0x32d)]&&(this['_forcedBattleSys']=_0x485cdc(0x81d));else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:STB)>/i))Imported[_0x485cdc(0x5df)]&&(this[_0x485cdc(0x540)]=_0x485cdc(0x335));else{if(_0x3b4aa1['match'](/<(?:BTB)>/i))Imported[_0x485cdc(0x763)]&&(this[_0x485cdc(0x540)]=_0x485cdc(0x625));else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:FTB)>/i))Imported[_0x485cdc(0x54b)]&&(this['_forcedBattleSys']=_0x485cdc(0x33a));else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:OTB)>/i))Imported['VisuMZ_2_BattleSystemOTB']&&(this['_forcedBattleSys']='OTB');else{if(_0x3b4aa1['match'](/<(?:ETB)>/i))Imported[_0x485cdc(0x8f2)]&&(this['_forcedBattleSys']=_0x485cdc(0x6a9));else{if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:PTB)>/i))Imported[_0x485cdc(0x721)]&&(this[_0x485cdc(0x540)]=_0x485cdc(0x229));else{if(_0x3b4aa1['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x293646=String(RegExp['$1']);if(_0x293646[_0x485cdc(0x27a)](/DTB/i))this[_0x485cdc(0x540)]=0x0;else{if(_0x293646[_0x485cdc(0x27a)](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x485cdc(0x540)]=0x1;else{if(_0x293646[_0x485cdc(0x27a)](/(?:TPB|ATB)[ ]WAIT/i))this['_forcedBattleSys']=0x2;else{if(_0x293646['match'](/CTB/i))Imported[_0x485cdc(0x32d)]&&(this[_0x485cdc(0x540)]='CTB');else{if(_0x293646[_0x485cdc(0x27a)](/STB/i))Imported[_0x485cdc(0x5df)]&&(this[_0x485cdc(0x540)]='STB');else{if(_0x293646[_0x485cdc(0x27a)](/BTB/i))Imported['VisuMZ_2_BattleSystemBTB']&&(this[_0x485cdc(0x540)]=_0x485cdc(0x625));else{if(_0x293646['match'](/FTB/i))Imported[_0x485cdc(0x54b)]&&(this[_0x485cdc(0x540)]=_0x485cdc(0x33a));else{if(_0x293646['match'](/OTB/i))Imported[_0x485cdc(0x8f3)]&&(this['_forcedBattleSys']='OTB');else{if(_0x293646[_0x485cdc(0x27a)](/ETB/i))Imported[_0x485cdc(0x8f2)]&&(this[_0x485cdc(0x540)]=_0x485cdc(0x6a9));else _0x293646['match'](/PTB/i)&&(Imported['VisuMZ_2_BattleSystemPTB']&&(this[_0x485cdc(0x540)]=_0x485cdc(0x229)));}}}}}}}}}}}}}}}}}}}}if(_0x3b4aa1[_0x485cdc(0x27a)](/<(?:|BATTLE )GRID>/i))this[_0x485cdc(0x598)]=!![];else _0x3b4aa1[_0x485cdc(0x27a)](/<NO (?:|BATTLE )GRID>/i)&&(this[_0x485cdc(0x598)]=![]);},Game_Temp['prototype']['createFauxAnimationQueue']=function(){const _0x2c448c=_0x54b1d3;this[_0x2c448c(0x701)]=[];},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x4f3)]=function(_0x4995d6,_0x505157,_0x223ae8,_0x2b86d1){const _0x3f6f8d=_0x54b1d3;if(!this[_0x3f6f8d(0x583)]())return;_0x223ae8=_0x223ae8||![],_0x2b86d1=_0x2b86d1||![];if($dataAnimations[_0x505157]){const _0x26c09f={'targets':_0x4995d6,'animationId':_0x505157,'mirror':_0x223ae8,'mute':_0x2b86d1};this[_0x3f6f8d(0x701)]['push'](_0x26c09f);for(const _0x5d7236 of _0x4995d6){_0x5d7236[_0x3f6f8d(0x3d6)]&&_0x5d7236[_0x3f6f8d(0x3d6)]();}}},Game_Temp[_0x54b1d3(0x5af)]['showFauxAnimations']=function(){return!![];},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x1fa)]=function(){const _0x57aba6=_0x54b1d3;return this[_0x57aba6(0x701)][_0x57aba6(0x416)]();},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x6be)]=function(){const _0x2dd18f=_0x54b1d3;this[_0x2dd18f(0x435)]=[];},Game_Temp['prototype'][_0x54b1d3(0x361)]=function(_0x2e838e,_0xb58ace,_0x3a6eee,_0x2bfb07,_0xadc3e){const _0x3e1e2f=_0x54b1d3;if(!this[_0x3e1e2f(0x2eb)]())return;_0x2bfb07=_0x2bfb07||![],_0xadc3e=_0xadc3e||![];if($dataAnimations[_0x3a6eee]){const _0x640ded={'x':_0x2e838e,'y':_0xb58ace,'animationId':_0x3a6eee,'mirror':_0x2bfb07,'mute':_0xadc3e};this[_0x3e1e2f(0x435)][_0x3e1e2f(0x3eb)](_0x640ded);}},Game_Temp[_0x54b1d3(0x5af)]['showPointAnimations']=function(){return!![];},Game_Temp[_0x54b1d3(0x5af)][_0x54b1d3(0x4d7)]=function(){const _0x34c86b=_0x54b1d3;return this[_0x34c86b(0x435)]['shift']();},VisuMZ['CoreEngine'][_0x54b1d3(0x36c)]=Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)],Game_System['prototype'][_0x54b1d3(0x68b)]=function(){const _0x4812a5=_0x54b1d3;VisuMZ[_0x4812a5(0x66d)][_0x4812a5(0x36c)][_0x4812a5(0x816)](this),this['initCoreEngine']();},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x81e)]=function(){const _0x558e38=_0x54b1d3;this[_0x558e38(0x830)]={'SideView':$dataSystem['optSideView'],'BattleSystem':this[_0x558e38(0x90f)](),'FontSize':$dataSystem[_0x558e38(0x7f4)][_0x558e38(0x21f)],'Padding':0xc};},Game_System['prototype'][_0x54b1d3(0x6c7)]=function(){const _0x2e2789=_0x54b1d3;if($gameTemp['_forcedTroopView']==='SV')return!![];else{if($gameTemp[_0x2e2789(0x3f0)]==='FV')return![];}if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();if(this[_0x2e2789(0x830)][_0x2e2789(0x8d3)]===undefined)this[_0x2e2789(0x81e)]();return this[_0x2e2789(0x830)][_0x2e2789(0x8d3)];},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x945)]=function(_0x2924eb){const _0xbddc8=_0x54b1d3;if(this[_0xbddc8(0x830)]===undefined)this[_0xbddc8(0x81e)]();if(this[_0xbddc8(0x830)]['SideView']===undefined)this[_0xbddc8(0x81e)]();this['_CoreEngineSettings'][_0xbddc8(0x8d3)]=_0x2924eb;},Game_System[_0x54b1d3(0x5af)]['resetBattleSystem']=function(){const _0x153e09=_0x54b1d3;if(this[_0x153e09(0x830)]===undefined)this['initCoreEngine']();this[_0x153e09(0x830)][_0x153e09(0x3f5)]=this[_0x153e09(0x90f)]();},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x90f)]=function(){const _0x4a3d16=_0x54b1d3,_0x54c173=(VisuMZ[_0x4a3d16(0x66d)][_0x4a3d16(0x738)]['BattleSystem']||_0x4a3d16(0x6eb))[_0x4a3d16(0x46a)]()[_0x4a3d16(0x848)]();return VisuMZ[_0x4a3d16(0x66d)][_0x4a3d16(0x5ca)](_0x54c173);},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x7d6)]=function(){const _0x523513=_0x54b1d3;if($gameTemp[_0x523513(0x540)]!==undefined)return $gameTemp[_0x523513(0x540)];if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();if(this[_0x523513(0x830)][_0x523513(0x3f5)]===undefined)this['resetBattleSystem']();return this[_0x523513(0x830)]['BattleSystem'];},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x48d)]=function(_0x4de60e){const _0x238623=_0x54b1d3;if(this[_0x238623(0x830)]===undefined)this[_0x238623(0x81e)]();if(this[_0x238623(0x830)][_0x238623(0x3f5)]===undefined)this['resetBattleSystem']();this['_CoreEngineSettings'][_0x238623(0x3f5)]=_0x4de60e;},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x418)]=function(){const _0x1e0098=_0x54b1d3;if(this['_CoreEngineSettings']===undefined)this[_0x1e0098(0x81e)]();if(this[_0x1e0098(0x830)]['FontSize']===undefined)this[_0x1e0098(0x81e)]();return this['_CoreEngineSettings'][_0x1e0098(0x1e0)];},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x4e5)]=function(_0x4634de){const _0x21f0fc=_0x54b1d3;if(this[_0x21f0fc(0x830)]===undefined)this[_0x21f0fc(0x81e)]();if(this[_0x21f0fc(0x830)][_0x21f0fc(0x95b)]===undefined)this[_0x21f0fc(0x81e)]();this[_0x21f0fc(0x830)][_0x21f0fc(0x1e0)]=_0x4634de;},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x269)]=function(){const _0xcd8ca6=_0x54b1d3;if(this[_0xcd8ca6(0x830)]===undefined)this[_0xcd8ca6(0x81e)]();if(this[_0xcd8ca6(0x830)][_0xcd8ca6(0x834)]===undefined)this['initCoreEngine']();return this[_0xcd8ca6(0x830)][_0xcd8ca6(0x834)];},Game_System[_0x54b1d3(0x5af)][_0x54b1d3(0x569)]=function(_0x18ff86){const _0x2e149a=_0x54b1d3;if(this['_CoreEngineSettings']===undefined)this[_0x2e149a(0x81e)]();if(this['_CoreEngineSettings'][_0x2e149a(0x95b)]===undefined)this[_0x2e149a(0x81e)]();this[_0x2e149a(0x830)]['Padding']=_0x18ff86;},VisuMZ['CoreEngine'][_0x54b1d3(0x33e)]=Game_Screen[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)],Game_Screen[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(){const _0x393127=_0x54b1d3;VisuMZ[_0x393127(0x66d)][_0x393127(0x33e)][_0x393127(0x816)](this),this[_0x393127(0x283)]();},Game_Screen['prototype'][_0x54b1d3(0x283)]=function(){const _0x256325=_0x54b1d3,_0x429b36=VisuMZ['CoreEngine']['Settings'][_0x256325(0x6a5)];this[_0x256325(0x8cb)]=_0x429b36?.['DefaultStyle']||_0x256325(0x69a);},Game_Screen[_0x54b1d3(0x5af)][_0x54b1d3(0x946)]=function(){const _0x36f228=_0x54b1d3;if(this['_coreEngineShakeStyle']===undefined)this[_0x36f228(0x283)]();return this['_coreEngineShakeStyle'];},Game_Screen['prototype'][_0x54b1d3(0x3e4)]=function(_0x956eed){const _0x1674d2=_0x54b1d3;if(this['_coreEngineShakeStyle']===undefined)this[_0x1674d2(0x283)]();this['_coreEngineShakeStyle']=_0x956eed[_0x1674d2(0x73e)]()[_0x1674d2(0x848)]();},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x1f5)]=function(){const _0x359eda=_0x54b1d3;if($gameParty['inBattle']())return![];return this[_0x359eda(0x54c)]()&&this[_0x359eda(0x54c)]()[_0x359eda(0x825)](0x0)==='!';},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x54c)]=function(){const _0xa7bbbe=_0x54b1d3;return this[_0xa7bbbe(0x5c2)][_0xa7bbbe(0x92c)]('/')[_0xa7bbbe(0x40d)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x3af)]=Game_Picture[_0x54b1d3(0x5af)]['x'],Game_Picture['prototype']['x']=function(){const _0x5c97db=_0x54b1d3;return this[_0x5c97db(0x1f5)]()?this[_0x5c97db(0x4c6)]():VisuMZ['CoreEngine'][_0x5c97db(0x3af)]['call'](this);},Game_Picture[_0x54b1d3(0x5af)]['xScrollLinkedOffset']=function(){const _0x4dd71b=_0x54b1d3,_0x20c009=$gameMap[_0x4dd71b(0x77f)]()*$gameMap[_0x4dd71b(0x483)]();return(this['_x']-_0x20c009)*$gameScreen[_0x4dd71b(0x7e0)]();},VisuMZ['CoreEngine'][_0x54b1d3(0x5ba)]=Game_Picture[_0x54b1d3(0x5af)]['y'],Game_Picture[_0x54b1d3(0x5af)]['y']=function(){const _0x1e60cb=_0x54b1d3;return this[_0x1e60cb(0x1f5)]()?this[_0x1e60cb(0x831)]():VisuMZ[_0x1e60cb(0x66d)][_0x1e60cb(0x5ba)][_0x1e60cb(0x816)](this);},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x831)]=function(){const _0x3b7f9b=_0x54b1d3,_0x21c992=$gameMap[_0x3b7f9b(0x6dc)]()*$gameMap['tileHeight']();return(this['_y']-_0x21c992)*$gameScreen['zoomScale']();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x231)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x74f)],Game_Picture[_0x54b1d3(0x5af)]['scaleX']=function(){const _0x59b72e=_0x54b1d3;let _0x257fab=VisuMZ[_0x59b72e(0x66d)][_0x59b72e(0x231)][_0x59b72e(0x816)](this);return this[_0x59b72e(0x1f5)]()&&(_0x257fab*=$gameScreen['zoomScale']()),_0x257fab;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x8df)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x7ac)],Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x7ac)]=function(){const _0x2ef2a1=_0x54b1d3;let _0x5232e1=VisuMZ[_0x2ef2a1(0x66d)][_0x2ef2a1(0x8df)]['call'](this);return this[_0x2ef2a1(0x1f5)]()&&(_0x5232e1*=$gameScreen[_0x2ef2a1(0x7e0)]()),_0x5232e1;},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x19f)]=function(_0x59e357){const _0x5b4824=_0x54b1d3;this[_0x5b4824(0x794)]=_0x59e357;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x912)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x870)],Game_Picture['prototype'][_0x54b1d3(0x870)]=function(_0x3d7957){const _0x4e3aa8=_0x54b1d3;return this[_0x4e3aa8(0x794)]=this['_coreEasingType']||0x0,[0x0,0x1,0x2,0x3][_0x4e3aa8(0x7f2)](this[_0x4e3aa8(0x794)])?VisuMZ[_0x4e3aa8(0x66d)]['Game_Picture_calcEasing'][_0x4e3aa8(0x816)](this,_0x3d7957):VisuMZ[_0x4e3aa8(0x235)](_0x3d7957,this[_0x4e3aa8(0x794)]);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x757)]=Game_Picture['prototype']['initRotation'],Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x1c1)]=function(){const _0x434af7=_0x54b1d3;VisuMZ[_0x434af7(0x66d)][_0x434af7(0x757)][_0x434af7(0x816)](this),this['initRotationCoreEngine']();},Game_Picture['prototype']['initRotationCoreEngine']=function(){const _0x509df2=_0x54b1d3;this[_0x509df2(0x963)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':'Linear'};},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x19e)]=Game_Picture['prototype'][_0x54b1d3(0x5d9)],Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x5d9)]=function(){const _0xe71e1c=_0x54b1d3;let _0x484a90=VisuMZ['CoreEngine']['Game_Picture_angle'][_0xe71e1c(0x816)](this);return _0x484a90+=this[_0xe71e1c(0x522)](),_0x484a90;},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x522)]=function(){const _0xcab7f8=_0x54b1d3;if(this[_0xcab7f8(0x963)]===undefined)this[_0xcab7f8(0x72e)]();return this[_0xcab7f8(0x963)]['current']||0x0;},Game_Picture['prototype'][_0x54b1d3(0x27b)]=function(_0x50da3f,_0x20791a,_0x310cea){const _0x126e68=_0x54b1d3;if(this['_anglePlus']===undefined)this['initRotationCoreEngine']();this[_0x126e68(0x963)]['target']=_0x50da3f||0x0,this[_0x126e68(0x963)][_0x126e68(0x644)]=_0x20791a||0x0,this[_0x126e68(0x963)][_0x126e68(0x259)]=_0x20791a||0x0,this[_0x126e68(0x963)]['easingType']=_0x310cea||_0x126e68(0x3aa),_0x20791a<=0x0&&(this[_0x126e68(0x963)]['current']=this[_0x126e68(0x963)][_0x126e68(0x7ed)]);},Game_Picture['prototype'][_0x54b1d3(0x6c1)]=function(_0x354c5b,_0x3a43c5,_0x20b55b){const _0x17abf9=_0x54b1d3;if(this['_anglePlus']===undefined)this[_0x17abf9(0x72e)]();this[_0x17abf9(0x963)][_0x17abf9(0x7ed)]+=_0x354c5b||0x0,this[_0x17abf9(0x963)][_0x17abf9(0x644)]=_0x3a43c5||0x0,this['_anglePlus'][_0x17abf9(0x259)]=_0x3a43c5||0x0,this['_anglePlus'][_0x17abf9(0x8aa)]=_0x20b55b||_0x17abf9(0x3aa),_0x3a43c5<=0x0&&(this[_0x17abf9(0x963)][_0x17abf9(0x594)]=this[_0x17abf9(0x963)]['target']);},VisuMZ['CoreEngine'][_0x54b1d3(0x818)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x737)],Game_Picture[_0x54b1d3(0x5af)]['updateRotation']=function(){const _0x35b9fc=_0x54b1d3;VisuMZ[_0x35b9fc(0x66d)][_0x35b9fc(0x818)]['call'](this),this[_0x35b9fc(0x4eb)]();},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x4eb)]=function(){const _0x553a40=_0x54b1d3;if(this[_0x553a40(0x963)]===undefined)this['initRotationCoreEngine']();const _0x183754=this[_0x553a40(0x963)];if(_0x183754[_0x553a40(0x644)]<=0x0)return;_0x183754[_0x553a40(0x594)]=this[_0x553a40(0x4b6)](_0x183754[_0x553a40(0x594)],_0x183754[_0x553a40(0x7ed)]),_0x183754[_0x553a40(0x644)]--,_0x183754[_0x553a40(0x644)]<=0x0&&(_0x183754[_0x553a40(0x594)]=_0x183754[_0x553a40(0x7ed)]);},Game_Picture['prototype'][_0x54b1d3(0x4b6)]=function(_0x103f9e,_0x1fddc2){const _0x164c66=_0x54b1d3,_0x775ee0=this[_0x164c66(0x963)],_0x279ed4=_0x775ee0[_0x164c66(0x8aa)],_0x335545=_0x775ee0[_0x164c66(0x644)],_0x2708dc=_0x775ee0['wholeDuration'],_0x1e4d5c=VisuMZ[_0x164c66(0x235)]((_0x2708dc-_0x335545)/_0x2708dc,_0x279ed4),_0xcff1c7=VisuMZ[_0x164c66(0x235)]((_0x2708dc-_0x335545+0x1)/_0x2708dc,_0x279ed4),_0x31b34e=(_0x103f9e-_0x1fddc2*_0x1e4d5c)/(0x1-_0x1e4d5c);return _0x31b34e+(_0x1fddc2-_0x31b34e)*_0xcff1c7;},VisuMZ['CoreEngine'][_0x54b1d3(0x8e2)]=Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x576)],Game_Action['prototype'][_0x54b1d3(0x576)]=function(_0x11c8a2){const _0x5515ec=_0x54b1d3;return VisuMZ[_0x5515ec(0x66d)][_0x5515ec(0x738)][_0x5515ec(0x33d)][_0x5515ec(0x5e7)]?this[_0x5515ec(0x5ac)](_0x11c8a2):VisuMZ['CoreEngine'][_0x5515ec(0x8e2)][_0x5515ec(0x816)](this,_0x11c8a2);},Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x5ac)]=function(_0x3c181d){const _0x9cbe68=_0x54b1d3,_0xf223df=this['itemSuccessRate'](_0x3c181d),_0x4fe9b5=this['subjectHitRate'](_0x3c181d),_0x1f09f1=this[_0x9cbe68(0x75b)](_0x3c181d);return _0xf223df*(_0x4fe9b5-_0x1f09f1);},VisuMZ['CoreEngine'][_0x54b1d3(0x7e8)]=Game_Action['prototype'][_0x54b1d3(0x380)],Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x380)]=function(_0x3c1ce7){const _0x51e8ff=_0x54b1d3;return VisuMZ[_0x51e8ff(0x66d)][_0x51e8ff(0x738)][_0x51e8ff(0x33d)][_0x51e8ff(0x5e7)]?0x0:VisuMZ['CoreEngine'][_0x51e8ff(0x7e8)][_0x51e8ff(0x816)](this,_0x3c1ce7);},Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x65a)]=function(_0xf49807){const _0x263594=_0x54b1d3;return this[_0x263594(0x4bb)]()[_0x263594(0x2e0)]*0.01;},Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x431)]=function(_0x3816f9){const _0x5c3759=_0x54b1d3;if(VisuMZ[_0x5c3759(0x66d)][_0x5c3759(0x738)][_0x5c3759(0x33d)]['AccuracyBoost']&&this[_0x5c3759(0x535)]())return 0x1;return this[_0x5c3759(0x486)]()?VisuMZ[_0x5c3759(0x66d)][_0x5c3759(0x738)][_0x5c3759(0x33d)][_0x5c3759(0x20c)]&&this[_0x5c3759(0x69e)]()[_0x5c3759(0x868)]()?this[_0x5c3759(0x69e)]()['hit']+0.05:this[_0x5c3759(0x69e)]()[_0x5c3759(0x8b3)]:0x1;},Game_Action['prototype'][_0x54b1d3(0x75b)]=function(_0x512693){const _0x49a17f=_0x54b1d3;if(this[_0x49a17f(0x69e)]()[_0x49a17f(0x868)]()===_0x512693[_0x49a17f(0x868)]())return 0x0;if(this['isPhysical']())return VisuMZ[_0x49a17f(0x66d)][_0x49a17f(0x738)]['QoL']['AccuracyBoost']&&_0x512693['isEnemy']()?_0x512693['eva']-0.05:_0x512693['eva'];else return this[_0x49a17f(0x275)]()?_0x512693[_0x49a17f(0x554)]:0x0;},VisuMZ[_0x54b1d3(0x66d)]['Game_Action_updateLastTarget']=Game_Action[_0x54b1d3(0x5af)]['updateLastTarget'],Game_Action[_0x54b1d3(0x5af)]['updateLastTarget']=function(_0x1773c4){const _0xcfe4c0=_0x54b1d3;VisuMZ['CoreEngine']['Game_Action_updateLastTarget'][_0xcfe4c0(0x816)](this,_0x1773c4);if(VisuMZ[_0xcfe4c0(0x66d)][_0xcfe4c0(0x738)][_0xcfe4c0(0x33d)][_0xcfe4c0(0x5e7)])return;const _0x4a3d06=_0x1773c4['result']();_0x4a3d06['missed']&&(0x1-this[_0xcfe4c0(0x380)](_0x1773c4)>this[_0xcfe4c0(0x576)](_0x1773c4)&&(_0x4a3d06[_0xcfe4c0(0x3d1)]=![],_0x4a3d06[_0xcfe4c0(0x7b9)]=!![]));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x436)]=Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x40a)],Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x40a)]=function(){const _0x38c425=_0x54b1d3;this[_0x38c425(0x378)]={},VisuMZ[_0x38c425(0x66d)][_0x38c425(0x436)]['call'](this);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x297)]=Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x7c4)],Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x7c4)]=function(){const _0x10361c=_0x54b1d3;this[_0x10361c(0x378)]={},VisuMZ['CoreEngine']['Game_BattlerBase_refresh']['call'](this);},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x607)]=function(_0x3fe0bb){const _0x9cb7e1=_0x54b1d3;return this['_cache']=this[_0x9cb7e1(0x378)]||{},this[_0x9cb7e1(0x378)][_0x3fe0bb]!==undefined;},Game_BattlerBase['prototype']['paramPlus']=function(_0x397531){const _0x516c69=_0x54b1d3,_0x53681b=(_0xbe960,_0x2cd8be)=>{const _0x834ed8=_0x4f22;if(!_0x2cd8be)return _0xbe960;if(_0x2cd8be['note']['match'](VisuMZ[_0x834ed8(0x66d)]['RegExp'][_0x834ed8(0x733)][_0x397531])){var _0x5df4e5=Number(RegExp['$1']);_0xbe960+=_0x5df4e5;}if(_0x2cd8be[_0x834ed8(0x5e0)][_0x834ed8(0x27a)](VisuMZ['CoreEngine'][_0x834ed8(0x621)][_0x834ed8(0x305)][_0x397531])){var _0x56528c=String(RegExp['$1']);try{_0xbe960+=eval(_0x56528c);}catch(_0x4183b3){if($gameTemp[_0x834ed8(0x833)]())console[_0x834ed8(0x886)](_0x4183b3);}}return _0xbe960;};return this[_0x516c69(0x77a)]()[_0x516c69(0x547)](_0x53681b,this['_paramPlus'][_0x397531]);},Game_BattlerBase[_0x54b1d3(0x5af)]['paramMax']=function(_0x4fa071){const _0xf8084f=_0x54b1d3;var _0x54e7e0=_0xf8084f(0x30e)+(this[_0xf8084f(0x868)]()?_0xf8084f(0x5ce):_0xf8084f(0x347))+'ParamMax'+_0x4fa071;if(this[_0xf8084f(0x607)](_0x54e7e0))return this[_0xf8084f(0x378)][_0x54e7e0];this[_0xf8084f(0x378)][_0x54e7e0]=eval(VisuMZ[_0xf8084f(0x66d)][_0xf8084f(0x738)]['Param'][_0x54e7e0]);const _0x1303cc=(_0x41f666,_0x40cc21)=>{const _0x293170=_0xf8084f;if(!_0x40cc21)return _0x41f666;if(_0x40cc21[_0x293170(0x5e0)]['match'](VisuMZ['CoreEngine'][_0x293170(0x621)][_0x293170(0x2c2)][_0x4fa071])){var _0x3d6269=Number(RegExp['$1']);if(_0x3d6269===0x0)_0x3d6269=Number[_0x293170(0x26c)];_0x41f666=Math['max'](_0x41f666,_0x3d6269);}if(_0x40cc21[_0x293170(0x5e0)][_0x293170(0x27a)](VisuMZ['CoreEngine'][_0x293170(0x621)]['paramMaxJS'][_0x4fa071])){var _0x3c6975=String(RegExp['$1']);try{_0x41f666=Math[_0x293170(0x29f)](_0x41f666,Number(eval(_0x3c6975)));}catch(_0x3cb838){if($gameTemp[_0x293170(0x833)]())console['log'](_0x3cb838);}}return _0x41f666;};if(this[_0xf8084f(0x378)][_0x54e7e0]===0x0)this[_0xf8084f(0x378)][_0x54e7e0]=Number[_0xf8084f(0x26c)];return this[_0xf8084f(0x378)][_0x54e7e0]=this['traitObjects']()['reduce'](_0x1303cc,this[_0xf8084f(0x378)][_0x54e7e0]),this[_0xf8084f(0x378)][_0x54e7e0];},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x667)]=function(_0x4142b5){const _0x4416a2=_0x54b1d3,_0x256170=this[_0x4416a2(0x746)](Game_BattlerBase['TRAIT_PARAM'],_0x4142b5),_0xd22077=(_0x3e64dd,_0x485934)=>{const _0x1bf0f5=_0x4416a2;if(!_0x485934)return _0x3e64dd;if(_0x485934[_0x1bf0f5(0x5e0)][_0x1bf0f5(0x27a)](VisuMZ['CoreEngine']['RegExp'][_0x1bf0f5(0x6d5)][_0x4142b5])){var _0x149a25=Number(RegExp['$1'])/0x64;_0x3e64dd*=_0x149a25;}if(_0x485934[_0x1bf0f5(0x5e0)][_0x1bf0f5(0x27a)](VisuMZ['CoreEngine']['RegExp']['paramRate2'][_0x4142b5])){var _0x149a25=Number(RegExp['$1']);_0x3e64dd*=_0x149a25;}if(_0x485934['note'][_0x1bf0f5(0x27a)](VisuMZ[_0x1bf0f5(0x66d)]['RegExp'][_0x1bf0f5(0x7cf)][_0x4142b5])){var _0x42f711=String(RegExp['$1']);try{_0x3e64dd*=eval(_0x42f711);}catch(_0xdfa4e7){if($gameTemp[_0x1bf0f5(0x833)]())console[_0x1bf0f5(0x886)](_0xdfa4e7);}}return _0x3e64dd;};return this[_0x4416a2(0x77a)]()['reduce'](_0xd22077,_0x256170);},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x341)]=function(_0x2caf02){const _0x4522c6=_0x54b1d3,_0x5ddb74=(_0x1b6c9f,_0x56e70c)=>{const _0x378337=_0x4f22;if(!_0x56e70c)return _0x1b6c9f;if(_0x56e70c[_0x378337(0x5e0)][_0x378337(0x27a)](VisuMZ[_0x378337(0x66d)][_0x378337(0x621)]['paramFlat'][_0x2caf02])){var _0x36152f=Number(RegExp['$1']);_0x1b6c9f+=_0x36152f;}if(_0x56e70c[_0x378337(0x5e0)]['match'](VisuMZ[_0x378337(0x66d)][_0x378337(0x621)]['paramFlatJS'][_0x2caf02])){var _0x1046e8=String(RegExp['$1']);try{_0x1b6c9f+=eval(_0x1046e8);}catch(_0x3c87b2){if($gameTemp[_0x378337(0x833)]())console[_0x378337(0x886)](_0x3c87b2);}}return _0x1b6c9f;};return this[_0x4522c6(0x77a)]()['reduce'](_0x5ddb74,0x0);},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x563)]=function(_0x2fd1cf){const _0x12eb56=_0x54b1d3;let _0x42ffe8='param'+_0x2fd1cf+'Total';if(this[_0x12eb56(0x607)](_0x42ffe8))return this['_cache'][_0x42ffe8];return this[_0x12eb56(0x378)][_0x42ffe8]=Math[_0x12eb56(0x48a)](VisuMZ[_0x12eb56(0x66d)][_0x12eb56(0x738)]['Param'][_0x12eb56(0x7ff)]['call'](this,_0x2fd1cf)),this[_0x12eb56(0x378)][_0x42ffe8];},Game_BattlerBase['prototype'][_0x54b1d3(0x91e)]=function(_0x167485){const _0x643259=_0x54b1d3,_0x3c5263=(_0x5709d8,_0x4b1b50)=>{const _0x644c0e=_0x4f22;if(!_0x4b1b50)return _0x5709d8;if(_0x4b1b50['note'][_0x644c0e(0x27a)](VisuMZ['CoreEngine']['RegExp']['xparamPlus1'][_0x167485])){var _0x58fcf6=Number(RegExp['$1'])/0x64;_0x5709d8+=_0x58fcf6;}if(_0x4b1b50[_0x644c0e(0x5e0)][_0x644c0e(0x27a)](VisuMZ[_0x644c0e(0x66d)][_0x644c0e(0x621)]['xparamPlus2'][_0x167485])){var _0x58fcf6=Number(RegExp['$1']);_0x5709d8+=_0x58fcf6;}if(_0x4b1b50[_0x644c0e(0x5e0)]['match'](VisuMZ['CoreEngine']['RegExp'][_0x644c0e(0x2b0)][_0x167485])){var _0x62019b=String(RegExp['$1']);try{_0x5709d8+=eval(_0x62019b);}catch(_0x18070a){if($gameTemp[_0x644c0e(0x833)]())console[_0x644c0e(0x886)](_0x18070a);}}return _0x5709d8;};return this[_0x643259(0x77a)]()['reduce'](_0x3c5263,0x0);},Game_BattlerBase['prototype'][_0x54b1d3(0x4b3)]=function(_0x5ab6b3){const _0x408e6=(_0x573335,_0x1802fa)=>{const _0x3ef12b=_0x4f22;if(!_0x1802fa)return _0x573335;if(_0x1802fa[_0x3ef12b(0x5e0)]['match'](VisuMZ[_0x3ef12b(0x66d)][_0x3ef12b(0x621)]['xparamRate1'][_0x5ab6b3])){var _0x3503e8=Number(RegExp['$1'])/0x64;_0x573335*=_0x3503e8;}if(_0x1802fa[_0x3ef12b(0x5e0)][_0x3ef12b(0x27a)](VisuMZ[_0x3ef12b(0x66d)][_0x3ef12b(0x621)]['xparamRate2'][_0x5ab6b3])){var _0x3503e8=Number(RegExp['$1']);_0x573335*=_0x3503e8;}if(_0x1802fa[_0x3ef12b(0x5e0)][_0x3ef12b(0x27a)](VisuMZ[_0x3ef12b(0x66d)][_0x3ef12b(0x621)][_0x3ef12b(0x356)][_0x5ab6b3])){var _0x3bb117=String(RegExp['$1']);try{_0x573335*=eval(_0x3bb117);}catch(_0x34fdf1){if($gameTemp[_0x3ef12b(0x833)]())console[_0x3ef12b(0x886)](_0x34fdf1);}}return _0x573335;};return this['traitObjects']()['reduce'](_0x408e6,0x1);},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x865)]=function(_0x34fc91){const _0x218ebd=_0x54b1d3,_0x1a28a8=(_0x49e5f4,_0x14924a)=>{const _0x2ebd40=_0x4f22;if(!_0x14924a)return _0x49e5f4;if(_0x14924a[_0x2ebd40(0x5e0)]['match'](VisuMZ[_0x2ebd40(0x66d)][_0x2ebd40(0x621)][_0x2ebd40(0x687)][_0x34fc91])){var _0x2af2a2=Number(RegExp['$1'])/0x64;_0x49e5f4+=_0x2af2a2;}if(_0x14924a[_0x2ebd40(0x5e0)][_0x2ebd40(0x27a)](VisuMZ['CoreEngine'][_0x2ebd40(0x621)][_0x2ebd40(0x6d1)][_0x34fc91])){var _0x2af2a2=Number(RegExp['$1']);_0x49e5f4+=_0x2af2a2;}if(_0x14924a[_0x2ebd40(0x5e0)]['match'](VisuMZ[_0x2ebd40(0x66d)][_0x2ebd40(0x621)][_0x2ebd40(0x27e)][_0x34fc91])){var _0x2f5dff=String(RegExp['$1']);try{_0x49e5f4+=eval(_0x2f5dff);}catch(_0x1b8d9a){if($gameTemp[_0x2ebd40(0x833)]())console[_0x2ebd40(0x886)](_0x1b8d9a);}}return _0x49e5f4;};return this[_0x218ebd(0x77a)]()[_0x218ebd(0x547)](_0x1a28a8,0x0);},Game_BattlerBase[_0x54b1d3(0x5af)]['xparam']=function(_0x118a9c){const _0x81cd42=_0x54b1d3;let _0x32e529='xparam'+_0x118a9c+'Total';if(this['checkCacheKey'](_0x32e529))return this[_0x81cd42(0x378)][_0x32e529];return this[_0x81cd42(0x378)][_0x32e529]=VisuMZ[_0x81cd42(0x66d)]['Settings'][_0x81cd42(0x293)]['XParameterFormula'][_0x81cd42(0x816)](this,_0x118a9c),this[_0x81cd42(0x378)][_0x32e529];},Game_BattlerBase['prototype'][_0x54b1d3(0x5be)]=function(_0x2ea0da){const _0x235692=_0x54b1d3,_0x34e69f=(_0x181925,_0x9b6764)=>{const _0xc67f=_0x4f22;if(!_0x9b6764)return _0x181925;if(_0x9b6764[_0xc67f(0x5e0)][_0xc67f(0x27a)](VisuMZ[_0xc67f(0x66d)][_0xc67f(0x621)][_0xc67f(0x57b)][_0x2ea0da])){var _0x202efc=Number(RegExp['$1'])/0x64;_0x181925+=_0x202efc;}if(_0x9b6764[_0xc67f(0x5e0)]['match'](VisuMZ['CoreEngine'][_0xc67f(0x621)][_0xc67f(0x709)][_0x2ea0da])){var _0x202efc=Number(RegExp['$1']);_0x181925+=_0x202efc;}if(_0x9b6764['note'][_0xc67f(0x27a)](VisuMZ[_0xc67f(0x66d)][_0xc67f(0x621)][_0xc67f(0x3fd)][_0x2ea0da])){var _0x5606f8=String(RegExp['$1']);try{_0x181925+=eval(_0x5606f8);}catch(_0x48875b){if($gameTemp['isPlaytest']())console[_0xc67f(0x886)](_0x48875b);}}return _0x181925;};return this[_0x235692(0x77a)]()['reduce'](_0x34e69f,0x0);},Game_BattlerBase['prototype'][_0x54b1d3(0x434)]=function(_0x69432d){const _0x323f0b=_0x54b1d3,_0x2f26c1=(_0xeb7dac,_0x2890b6)=>{const _0x5e03be=_0x4f22;if(!_0x2890b6)return _0xeb7dac;if(_0x2890b6[_0x5e03be(0x5e0)]['match'](VisuMZ[_0x5e03be(0x66d)]['RegExp']['sparamRate1'][_0x69432d])){var _0x31f7e1=Number(RegExp['$1'])/0x64;_0xeb7dac*=_0x31f7e1;}if(_0x2890b6[_0x5e03be(0x5e0)][_0x5e03be(0x27a)](VisuMZ[_0x5e03be(0x66d)][_0x5e03be(0x621)][_0x5e03be(0x807)][_0x69432d])){var _0x31f7e1=Number(RegExp['$1']);_0xeb7dac*=_0x31f7e1;}if(_0x2890b6[_0x5e03be(0x5e0)][_0x5e03be(0x27a)](VisuMZ[_0x5e03be(0x66d)][_0x5e03be(0x621)]['sparamRateJS'][_0x69432d])){var _0x5a232d=String(RegExp['$1']);try{_0xeb7dac*=eval(_0x5a232d);}catch(_0x5e15aa){if($gameTemp[_0x5e03be(0x833)]())console[_0x5e03be(0x886)](_0x5e15aa);}}return _0xeb7dac;};return this['traitObjects']()[_0x323f0b(0x547)](_0x2f26c1,0x1);},Game_BattlerBase[_0x54b1d3(0x5af)]['sparamFlatBonus']=function(_0x147d8c){const _0x193b77=_0x54b1d3,_0x26eabd=(_0x3e1d7f,_0x2ba947)=>{const _0x48ac69=_0x4f22;if(!_0x2ba947)return _0x3e1d7f;if(_0x2ba947[_0x48ac69(0x5e0)][_0x48ac69(0x27a)](VisuMZ[_0x48ac69(0x66d)][_0x48ac69(0x621)]['sparamFlat1'][_0x147d8c])){var _0x248445=Number(RegExp['$1'])/0x64;_0x3e1d7f+=_0x248445;}if(_0x2ba947['note'][_0x48ac69(0x27a)](VisuMZ[_0x48ac69(0x66d)][_0x48ac69(0x621)][_0x48ac69(0x210)][_0x147d8c])){var _0x248445=Number(RegExp['$1']);_0x3e1d7f+=_0x248445;}if(_0x2ba947[_0x48ac69(0x5e0)][_0x48ac69(0x27a)](VisuMZ[_0x48ac69(0x66d)]['RegExp'][_0x48ac69(0x1d6)][_0x147d8c])){var _0x40010e=String(RegExp['$1']);try{_0x3e1d7f+=eval(_0x40010e);}catch(_0xea9fb1){if($gameTemp[_0x48ac69(0x833)]())console[_0x48ac69(0x886)](_0xea9fb1);}}return _0x3e1d7f;};return this[_0x193b77(0x77a)]()[_0x193b77(0x547)](_0x26eabd,0x0);},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x456)]=function(_0x105a6f){const _0x55e341=_0x54b1d3;let _0x13f27b='sparam'+_0x105a6f+_0x55e341(0x307);if(this['checkCacheKey'](_0x13f27b))return this[_0x55e341(0x378)][_0x13f27b];return this[_0x55e341(0x378)][_0x13f27b]=VisuMZ[_0x55e341(0x66d)][_0x55e341(0x738)][_0x55e341(0x293)][_0x55e341(0x465)][_0x55e341(0x816)](this,_0x105a6f),this['_cache'][_0x13f27b];},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x7d3)]=function(_0x565a24,_0x2b1167){const _0x44cf1a=_0x54b1d3;if(typeof paramId===_0x44cf1a(0x61d))return this['param'](_0x565a24);_0x565a24=String(_0x565a24||'')[_0x44cf1a(0x46a)]();if(_0x565a24===_0x44cf1a(0x489))return this[_0x44cf1a(0x563)](0x0);if(_0x565a24===_0x44cf1a(0x39e))return this[_0x44cf1a(0x563)](0x1);if(_0x565a24===_0x44cf1a(0x6ae))return this[_0x44cf1a(0x563)](0x2);if(_0x565a24===_0x44cf1a(0x7af))return this[_0x44cf1a(0x563)](0x3);if(_0x565a24===_0x44cf1a(0x712))return this[_0x44cf1a(0x563)](0x4);if(_0x565a24==='MDF')return this[_0x44cf1a(0x563)](0x5);if(_0x565a24===_0x44cf1a(0x935))return this[_0x44cf1a(0x563)](0x6);if(_0x565a24==='LUK')return this[_0x44cf1a(0x563)](0x7);if(_0x565a24===_0x44cf1a(0x84c))return _0x2b1167?String(Math['round'](this[_0x44cf1a(0x448)](0x0)*0x64))+'%':this[_0x44cf1a(0x448)](0x0);if(_0x565a24===_0x44cf1a(0x3ef))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x448)](0x1)*0x64))+'%':this[_0x44cf1a(0x448)](0x1);if(_0x565a24===_0x44cf1a(0x73a))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x448)](0x2)*0x64))+'%':this[_0x44cf1a(0x448)](0x2);if(_0x565a24===_0x44cf1a(0x838))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x448)](0x3)*0x64))+'%':this[_0x44cf1a(0x448)](0x3);if(_0x565a24===_0x44cf1a(0x8ce))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x448)](0x4)*0x64))+'%':this[_0x44cf1a(0x448)](0x4);if(_0x565a24==='MRF')return _0x2b1167?String(Math['round'](this[_0x44cf1a(0x448)](0x5)*0x64))+'%':this[_0x44cf1a(0x448)](0x5);if(_0x565a24==='CNT')return _0x2b1167?String(Math['round'](this['xparam'](0x6)*0x64))+'%':this[_0x44cf1a(0x448)](0x6);if(_0x565a24===_0x44cf1a(0x28f))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x448)](0x7)*0x64))+'%':this[_0x44cf1a(0x448)](0x7);if(_0x565a24===_0x44cf1a(0x50c))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x448)](0x8)*0x64))+'%':this[_0x44cf1a(0x448)](0x8);if(_0x565a24===_0x44cf1a(0x894))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this['xparam'](0x9)*0x64))+'%':this[_0x44cf1a(0x448)](0x9);if(_0x565a24===_0x44cf1a(0x64e))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x0)*0x64))+'%':this['sparam'](0x0);if(_0x565a24===_0x44cf1a(0x41a))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this['sparam'](0x1)*0x64))+'%':this[_0x44cf1a(0x456)](0x1);if(_0x565a24===_0x44cf1a(0x1f9))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x2)*0x64))+'%':this['sparam'](0x2);if(_0x565a24===_0x44cf1a(0x4b4))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x3)*0x64))+'%':this[_0x44cf1a(0x456)](0x3);if(_0x565a24===_0x44cf1a(0x66c))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x4)*0x64))+'%':this[_0x44cf1a(0x456)](0x4);if(_0x565a24==='TCR')return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x5)*0x64))+'%':this['sparam'](0x5);if(_0x565a24==='PDR')return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x6)*0x64))+'%':this[_0x44cf1a(0x456)](0x6);if(_0x565a24===_0x44cf1a(0x53f))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this['sparam'](0x7)*0x64))+'%':this[_0x44cf1a(0x456)](0x7);if(_0x565a24===_0x44cf1a(0x386))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this[_0x44cf1a(0x456)](0x8)*0x64))+'%':this[_0x44cf1a(0x456)](0x8);if(_0x565a24===_0x44cf1a(0x641))return _0x2b1167?String(Math[_0x44cf1a(0x48a)](this['sparam'](0x9)*0x64))+'%':this[_0x44cf1a(0x456)](0x9);if(VisuMZ[_0x44cf1a(0x66d)][_0x44cf1a(0x6c6)][_0x565a24]){const _0x311cf0=VisuMZ[_0x44cf1a(0x66d)][_0x44cf1a(0x6c6)][_0x565a24],_0x128f42=this[_0x311cf0];return VisuMZ[_0x44cf1a(0x66d)]['CustomParamType'][_0x565a24]===_0x44cf1a(0x94b)?_0x128f42:_0x2b1167?String(Math[_0x44cf1a(0x48a)](_0x128f42*0x64))+'%':_0x128f42;}return'';},Game_BattlerBase[_0x54b1d3(0x5af)][_0x54b1d3(0x797)]=function(){const _0xae9cf6=_0x54b1d3;return this['isAlive']()&&this[_0xae9cf6(0x952)]<this['mhp']*VisuMZ[_0xae9cf6(0x66d)][_0xae9cf6(0x738)][_0xae9cf6(0x293)][_0xae9cf6(0x63f)];},Game_Battler['prototype']['performMiss']=function(){const _0x58a68a=_0x54b1d3;SoundManager['playMiss'](),this[_0x58a68a(0x669)](_0x58a68a(0x8cf));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x72f)]=Game_Actor[_0x54b1d3(0x5af)]['paramBase'],Game_Actor['prototype'][_0x54b1d3(0x8f7)]=function(_0x2d40c1){const _0xab1024=_0x54b1d3;if(this['level']>0x63)return this[_0xab1024(0x2a7)](_0x2d40c1);return VisuMZ[_0xab1024(0x66d)][_0xab1024(0x72f)][_0xab1024(0x816)](this,_0x2d40c1);},Game_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x2a7)]=function(_0x4283b4){const _0x57e578=_0x54b1d3,_0x34d852=this[_0x57e578(0x2cd)]()[_0x57e578(0x90c)][_0x4283b4][0x63],_0x59a4df=this[_0x57e578(0x2cd)]()[_0x57e578(0x90c)][_0x4283b4][0x62];return _0x34d852+(_0x34d852-_0x59a4df)*(this[_0x57e578(0x5bd)]-0x63);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x671)]=Game_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x3de)],Game_Actor['prototype'][_0x54b1d3(0x3de)]=function(_0x413763,_0x39f86){const _0x4190dc=_0x54b1d3;$gameTemp[_0x4190dc(0x37a)]=!![],VisuMZ['CoreEngine'][_0x4190dc(0x671)]['call'](this,_0x413763,_0x39f86),$gameTemp[_0x4190dc(0x37a)]=undefined;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x64b)]=Game_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x808)],Game_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x808)]=function(){const _0x5532a3=_0x54b1d3;VisuMZ[_0x5532a3(0x66d)]['Game_Actor_levelUp'][_0x5532a3(0x816)](this);if(!$gameTemp[_0x5532a3(0x37a)])this[_0x5532a3(0x951)]();},Game_Actor['prototype']['levelUpRecovery']=function(){const _0x360f8e=_0x54b1d3;this[_0x360f8e(0x378)]={};if(VisuMZ['CoreEngine'][_0x360f8e(0x738)][_0x360f8e(0x33d)]['LevelUpFullHp'])this[_0x360f8e(0x952)]=this[_0x360f8e(0x302)];if(VisuMZ[_0x360f8e(0x66d)][_0x360f8e(0x738)][_0x360f8e(0x33d)][_0x360f8e(0x91a)])this['_mp']=this[_0x360f8e(0x8eb)];},Game_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x88e)]=function(){const _0x3d0bdd=_0x54b1d3;if(this[_0x3d0bdd(0x410)]())return 0x1;const _0xbe9a39=this[_0x3d0bdd(0x1b2)]()-this[_0x3d0bdd(0x7fe)](),_0x29cb91=this[_0x3d0bdd(0x241)]()-this[_0x3d0bdd(0x7fe)]();return(_0x29cb91/_0xbe9a39)[_0x3d0bdd(0x285)](0x0,0x1);},Game_Actor['prototype'][_0x54b1d3(0x77a)]=function(){const _0x527c6e=_0x54b1d3,_0x45db9b=Game_Battler['prototype'][_0x527c6e(0x77a)][_0x527c6e(0x816)](this);for(const _0x518171 of this['equips']()){_0x518171&&_0x45db9b['push'](_0x518171);}return _0x45db9b['push'](this[_0x527c6e(0x2cd)](),this[_0x527c6e(0x1e4)]()),_0x45db9b;},Object['defineProperty'](Game_Enemy['prototype'],_0x54b1d3(0x5bd),{'get':function(){const _0x118c7b=_0x54b1d3;return this[_0x118c7b(0x1ab)]();},'configurable':!![]}),Game_Enemy[_0x54b1d3(0x5af)][_0x54b1d3(0x1ab)]=function(){const _0x3536da=_0x54b1d3;return this[_0x3536da(0x451)]()[_0x3536da(0x5bd)];},Game_Enemy[_0x54b1d3(0x5af)]['moveRelativeToResolutionChange']=function(){const _0x485ebc=_0x54b1d3;!this[_0x485ebc(0x551)]&&(this['_screenY']+=Math[_0x485ebc(0x48a)]((Graphics['height']-0x270)/0x2),this[_0x485ebc(0x459)]-=Math['floor']((Graphics['height']-Graphics[_0x485ebc(0x67f)])/0x2),$gameSystem['isSideView']()?this[_0x485ebc(0x230)]-=Math[_0x485ebc(0x7d9)]((Graphics['width']-Graphics[_0x485ebc(0x46b)])/0x2):this[_0x485ebc(0x230)]+=Math[_0x485ebc(0x48a)]((Graphics[_0x485ebc(0x46b)]-0x330)/0x2)),this[_0x485ebc(0x551)]=!![];},Game_Party[_0x54b1d3(0x5af)][_0x54b1d3(0x80f)]=function(){const _0x6373e7=_0x54b1d3;return VisuMZ['CoreEngine'][_0x6373e7(0x738)]['Gold'][_0x6373e7(0x4ef)];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x402)]=Game_Party[_0x54b1d3(0x5af)][_0x54b1d3(0x8a4)],Game_Party[_0x54b1d3(0x5af)][_0x54b1d3(0x8a4)]=function(_0x598f30){const _0x1ab8fe=_0x54b1d3;if(VisuMZ[_0x1ab8fe(0x66d)]['Settings'][_0x1ab8fe(0x33d)][_0x1ab8fe(0x7a0)]&&DataManager[_0x1ab8fe(0x337)](_0x598f30))return;VisuMZ[_0x1ab8fe(0x66d)][_0x1ab8fe(0x402)][_0x1ab8fe(0x816)](this,_0x598f30);},Game_Party[_0x54b1d3(0x5af)][_0x54b1d3(0x2e2)]=function(){const _0x127b5a=_0x54b1d3,_0x5e64a2=VisuMZ['CoreEngine'][_0x127b5a(0x738)][_0x127b5a(0x33d)],_0x52cc1f=_0x5e64a2['BTestAddedQuantity']??0x63;let _0x32bd41=[];(_0x5e64a2[_0x127b5a(0x914)]??!![])&&(_0x32bd41=_0x32bd41['concat']($dataItems));(_0x5e64a2['BTestWeapons']??!![])&&(_0x32bd41=_0x32bd41['concat']($dataWeapons));(_0x5e64a2[_0x127b5a(0x3df)]??!![])&&(_0x32bd41=_0x32bd41[_0x127b5a(0x6ad)]($dataArmors));for(const _0x1a7e8c of _0x32bd41){if(!_0x1a7e8c)continue;if(_0x1a7e8c['name']['trim']()<=0x0)continue;if(_0x1a7e8c['name'][_0x127b5a(0x27a)](/-----/i))continue;this[_0x127b5a(0x4cd)](_0x1a7e8c,_0x52cc1f);}},VisuMZ['CoreEngine'][_0x54b1d3(0x377)]=Game_Troop['prototype'][_0x54b1d3(0x70a)],Game_Troop['prototype'][_0x54b1d3(0x70a)]=function(_0x59dfa5){const _0x50113d=_0x54b1d3;$gameTemp[_0x50113d(0x52c)](),$gameTemp['applyForcedGameTroopSettingsCoreEngine'](_0x59dfa5),VisuMZ['CoreEngine'][_0x50113d(0x377)]['call'](this,_0x59dfa5);},VisuMZ['CoreEngine']['Game_Map_setup']=Game_Map[_0x54b1d3(0x5af)]['setup'],Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x70a)]=function(_0x241148){const _0x2df367=_0x54b1d3;VisuMZ[_0x2df367(0x66d)][_0x2df367(0x3ad)][_0x2df367(0x816)](this,_0x241148),this[_0x2df367(0x858)](),this[_0x2df367(0x79e)](_0x241148),this[_0x2df367(0x1af)]();},Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x79e)]=function(){const _0x6a795e=_0x54b1d3;this[_0x6a795e(0x3e1)]=VisuMZ['CoreEngine'][_0x6a795e(0x738)][_0x6a795e(0x33d)][_0x6a795e(0x8b6)]||![];const _0x4207b4=VisuMZ[_0x6a795e(0x66d)][_0x6a795e(0x738)][_0x6a795e(0x26f)],_0x58aebe=$dataMap?$dataMap[_0x6a795e(0x5e0)]||'':'';if(_0x58aebe[_0x6a795e(0x27a)](/<SHOW TILE SHADOWS>/i))this['_hideTileShadows']=![];else _0x58aebe[_0x6a795e(0x27a)](/<HIDE TILE SHADOWS>/i)&&(this[_0x6a795e(0x3e1)]=!![]);if(_0x58aebe[_0x6a795e(0x27a)](/<SCROLL LOCK X>/i))this[_0x6a795e(0x84d)]()[_0x6a795e(0x5a5)]=!![],this[_0x6a795e(0x84d)]()['displayX']=_0x4207b4[_0x6a795e(0x722)];else _0x58aebe[_0x6a795e(0x27a)](/<SCROLL LOCK X: (.*?)>/i)&&(this[_0x6a795e(0x84d)]()[_0x6a795e(0x5a5)]=!![],this[_0x6a795e(0x84d)]()[_0x6a795e(0x77f)]=Number(RegExp['$1']));if(_0x58aebe[_0x6a795e(0x27a)](/<SCROLL LOCK Y>/i))this[_0x6a795e(0x84d)]()[_0x6a795e(0x706)]=!![],this[_0x6a795e(0x84d)]()[_0x6a795e(0x6dc)]=_0x4207b4[_0x6a795e(0x713)];else _0x58aebe['match'](/<SCROLL LOCK Y: (.*?)>/i)&&(this['centerCameraCheckData']()[_0x6a795e(0x706)]=!![],this[_0x6a795e(0x84d)]()[_0x6a795e(0x6dc)]=Number(RegExp['$1']));},Game_Map[_0x54b1d3(0x5af)]['areTileShadowsHidden']=function(){const _0x21977c=_0x54b1d3;if(this[_0x21977c(0x3e1)]===undefined)this[_0x21977c(0x79e)]();return this[_0x21977c(0x3e1)];},Game_Map[_0x54b1d3(0x5af)]['checkCoreEngineDisplayCenter']=function(){const _0x4e343a=_0x54b1d3,_0x40b4bc=VisuMZ[_0x4e343a(0x66d)][_0x4e343a(0x738)][_0x4e343a(0x26f)];this[_0x4e343a(0x675)]={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0x40b4bc[_0x4e343a(0x7c6)]){const _0x286139=Graphics[_0x4e343a(0x589)]/this[_0x4e343a(0x483)]();_0x286139%0x1!==0x0&&Math[_0x4e343a(0x8ff)](_0x286139)===this[_0x4e343a(0x589)]()&&!this[_0x4e343a(0x1c4)]()&&(this[_0x4e343a(0x675)][_0x4e343a(0x5a5)]=!![],this[_0x4e343a(0x675)][_0x4e343a(0x77f)]=_0x40b4bc[_0x4e343a(0x722)]||0x0);}if(_0x40b4bc['AutoScrollLockY']){const _0x4db092=Graphics['height']/this[_0x4e343a(0x5a6)]();_0x4db092%0x1!==0x0&&Math['ceil'](_0x4db092)===this[_0x4e343a(0x7c8)]()&&!this['isLoopVertical']()&&(this[_0x4e343a(0x675)]['centerY']=!![],this[_0x4e343a(0x675)][_0x4e343a(0x6dc)]=_0x40b4bc[_0x4e343a(0x713)]||0x0);}$gameScreen[_0x4e343a(0x7e0)]()===0x1&&(this['centerCameraCheckData']()['centerX']&&(this['_displayX']=this[_0x4e343a(0x84d)]()['displayX']),this[_0x4e343a(0x84d)]()['centerY']&&(this['_displayY']=this[_0x4e343a(0x84d)]()['displayY']));},VisuMZ['CoreEngine'][_0x54b1d3(0x901)]=Game_Map[_0x54b1d3(0x5af)]['setDisplayPos'],Game_Map['prototype'][_0x54b1d3(0x3bc)]=function(_0x4b9bf6,_0x9b0292){const _0xc7ff33=_0x54b1d3;VisuMZ[_0xc7ff33(0x66d)][_0xc7ff33(0x901)]['call'](this,_0x4b9bf6,_0x9b0292),$gameScreen['zoomScale']()===0x1&&(!this['isLoopHorizontal']()&&this[_0xc7ff33(0x84d)]()['centerX']&&(this[_0xc7ff33(0x318)]=this[_0xc7ff33(0x84d)]()[_0xc7ff33(0x77f)]),!this[_0xc7ff33(0x930)]()&&this[_0xc7ff33(0x84d)]()[_0xc7ff33(0x706)]&&(this[_0xc7ff33(0x686)]=this[_0xc7ff33(0x84d)]()[_0xc7ff33(0x6dc)]));},Game_Map[_0x54b1d3(0x5af)]['centerCameraCheckData']=function(){const _0x3a9dce=_0x54b1d3;if(this[_0x3a9dce(0x675)]===undefined)this[_0x3a9dce(0x858)]();return this[_0x3a9dce(0x675)];},VisuMZ['CoreEngine'][_0x54b1d3(0x91b)]=Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x734)],Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x734)]=function(_0x27038f){const _0x2d66d6=_0x54b1d3;if(this[_0x2d66d6(0x84d)]()[_0x2d66d6(0x706)]&&$gameScreen[_0x2d66d6(0x7e0)]()===0x1){this[_0x2d66d6(0x686)]=this['centerCameraCheckData']()[_0x2d66d6(0x6dc)];return;}VisuMZ['CoreEngine'][_0x2d66d6(0x91b)][_0x2d66d6(0x816)](this,_0x27038f);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x44f)]=Game_Map['prototype'][_0x54b1d3(0x593)],Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x593)]=function(_0x30f6df){const _0xf0dd77=_0x54b1d3;if(this[_0xf0dd77(0x84d)]()['centerX']&&$gameScreen[_0xf0dd77(0x7e0)]()===0x1){this[_0xf0dd77(0x318)]=this[_0xf0dd77(0x84d)]()['displayX'];return;}VisuMZ['CoreEngine'][_0xf0dd77(0x44f)]['call'](this,_0x30f6df);},VisuMZ['CoreEngine'][_0x54b1d3(0x692)]=Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x2fe)],Game_Map['prototype'][_0x54b1d3(0x2fe)]=function(_0x22e4f5){const _0x3e1535=_0x54b1d3;if(this[_0x3e1535(0x84d)]()['centerX']&&$gameScreen[_0x3e1535(0x7e0)]()===0x1){this[_0x3e1535(0x318)]=this[_0x3e1535(0x84d)]()[_0x3e1535(0x77f)];return;}VisuMZ[_0x3e1535(0x66d)][_0x3e1535(0x692)][_0x3e1535(0x816)](this,_0x22e4f5);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x202)]=Game_Map['prototype'][_0x54b1d3(0x61f)],Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x61f)]=function(_0x435e42){const _0x28cb5b=_0x54b1d3;if(this['centerCameraCheckData']()[_0x28cb5b(0x706)]&&$gameScreen[_0x28cb5b(0x7e0)]()===0x1){this[_0x28cb5b(0x686)]=this[_0x28cb5b(0x84d)]()[_0x28cb5b(0x6dc)];return;}VisuMZ[_0x28cb5b(0x66d)][_0x28cb5b(0x202)][_0x28cb5b(0x816)](this,_0x435e42);},Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x1af)]=function(){const _0x544962=_0x54b1d3;this[_0x544962(0x591)]={};const _0x291591=this[_0x544962(0x371)]();if(!_0x291591)return{};const _0x4de029=_0x291591['note']||'',_0x1d2183=/<(?:TALLER|EXT|EXTEND|RAISE)[ ]BY[ ](\d+):[ ](.*)>/gi;let _0xfa2e29={};const _0x38fc94=_0x4de029[_0x544962(0x27a)](_0x1d2183);if(_0x38fc94)for(const _0xa4c593 of _0x38fc94){_0xa4c593[_0x544962(0x27a)](_0x1d2183);const _0x599c0a=Number(RegExp['$1'])[_0x544962(0x285)](0x1,0x10),_0x512a05=String(RegExp['$2'])[_0x544962(0x92c)](',')[_0x544962(0x755)](_0x387741=>Number(_0x387741)[_0x544962(0x285)](0x1,0x7));for(const _0x3b4a17 of _0x512a05){_0xfa2e29[_0x3b4a17]=_0x599c0a;}}this[_0x544962(0x591)]=_0xfa2e29;},Game_Map[_0x54b1d3(0x5af)]['getTileExtendTerrainTags']=function(){const _0x10930e=_0x54b1d3;if(this[_0x10930e(0x591)]===undefined)this[_0x10930e(0x1af)]();return this[_0x10930e(0x591)];},Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x606)]=function(_0x160eb2){const _0x24dddf=_0x54b1d3;if(_0x160eb2>=0x400)return![];const _0x420eef=$gameMap['getTileExtendTerrainTags']();if(Object[_0x24dddf(0x839)](_0x420eef)[_0x24dddf(0x506)]<=0x0)return![];const _0x1e8e66=this[_0x24dddf(0x505)](),_0x423587=_0x1e8e66[_0x160eb2]>>0xc,_0x1411da=_0x420eef[_0x423587]||0x0;return _0x1411da>0x0;},VisuMZ['CoreEngine'][_0x54b1d3(0x575)]=Game_Map['prototype'][_0x54b1d3(0x760)],Game_Map['prototype'][_0x54b1d3(0x760)]=function(_0x34c988){const _0x23fa80=_0x54b1d3;VisuMZ[_0x23fa80(0x66d)][_0x23fa80(0x575)][_0x23fa80(0x816)](this,_0x34c988),this[_0x23fa80(0x57a)](),SceneManager[_0x23fa80(0x4c4)][_0x23fa80(0x622)][_0x23fa80(0x71b)]();},Game_Map['prototype'][_0x54b1d3(0x57a)]=function(){const _0xeb1a2d=_0x54b1d3,_0x161259=this['getTileExtendTerrainTags']();if(Object[_0xeb1a2d(0x839)](_0x161259)[_0xeb1a2d(0x506)]<=0x0)return;const _0x3af0a7=SceneManager[_0xeb1a2d(0x4c4)][_0xeb1a2d(0x622)];_0x3af0a7&&(_0x3af0a7[_0xeb1a2d(0x699)]&&_0x3af0a7[_0xeb1a2d(0x699)](),_0x3af0a7[_0xeb1a2d(0x334)]&&_0x3af0a7[_0xeb1a2d(0x334)]());},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x22b)]=Game_Character[_0x54b1d3(0x5af)][_0x54b1d3(0x87b)],Game_Character[_0x54b1d3(0x5af)][_0x54b1d3(0x87b)]=function(_0x24e16a){const _0x583166=_0x54b1d3;try{VisuMZ['CoreEngine'][_0x583166(0x22b)][_0x583166(0x816)](this,_0x24e16a);}catch(_0x5e9cf7){if($gameTemp[_0x583166(0x833)]())console[_0x583166(0x886)](_0x5e9cf7);}},Game_Player[_0x54b1d3(0x5af)][_0x54b1d3(0x352)]=function(){const _0x327df9=_0x54b1d3,_0x335775=$gameMap[_0x327df9(0x871)]();this[_0x327df9(0x4a8)]=Math[_0x327df9(0x745)](_0x335775)+Math['randomInt'](_0x335775)+this[_0x327df9(0x5e1)]();},Game_Player['prototype'][_0x54b1d3(0x5e1)]=function(){const _0x4a4603=_0x54b1d3;return $dataMap&&$dataMap['note']&&$dataMap[_0x4a4603(0x5e0)][_0x4a4603(0x27a)](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?Number(RegExp['$1']):VisuMZ[_0x4a4603(0x66d)][_0x4a4603(0x738)]['QoL']['EncounterRateMinimum'];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x63d)]=Game_Event[_0x54b1d3(0x5af)]['isCollidedWithEvents'],Game_Event[_0x54b1d3(0x5af)][_0x54b1d3(0x243)]=function(_0x1decbe,_0x2348e5){const _0x58e1fc=_0x54b1d3;return this[_0x58e1fc(0x2ab)]()?this['checkSmartEventCollision'](_0x1decbe,_0x2348e5):VisuMZ[_0x58e1fc(0x66d)][_0x58e1fc(0x63d)][_0x58e1fc(0x816)](this,_0x1decbe,_0x2348e5);},Game_Event[_0x54b1d3(0x5af)][_0x54b1d3(0x2ab)]=function(){const _0xdd0b28=_0x54b1d3;return VisuMZ['CoreEngine'][_0xdd0b28(0x738)]['QoL']['SmartEventCollisionPriority'];},Game_Event[_0x54b1d3(0x5af)][_0x54b1d3(0x7ca)]=function(_0x3de519,_0x558b72){const _0xc67bd3=_0x54b1d3;if(!this[_0xc67bd3(0x1ba)]())return![];else{const _0x495499=$gameMap[_0xc67bd3(0x253)](_0x3de519,_0x558b72)[_0xc67bd3(0x7e2)](_0x321441=>_0x321441['isNormalPriority']());return _0x495499[_0xc67bd3(0x506)]>0x0;}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x5f0)]=Game_Interpreter[_0x54b1d3(0x5af)][_0x54b1d3(0x8c2)],Game_Interpreter[_0x54b1d3(0x5af)][_0x54b1d3(0x8c2)]=function(_0xa59aab){const _0x301913=_0x54b1d3,_0x2598c1=this['getCombinedScrollingText']();return _0x2598c1[_0x301913(0x27a)](/\/\/[ ]SCRIPT[ ]CALL/i)?this[_0x301913(0x532)](_0x2598c1):VisuMZ[_0x301913(0x66d)]['Game_Interpreter_command105'][_0x301913(0x816)](this,_0xa59aab);},Game_Interpreter[_0x54b1d3(0x5af)]['getCombinedScrollingText']=function(){const _0x365427=_0x54b1d3;let _0x4ddf88='',_0x15d35a=this[_0x365427(0x4e1)]+0x1;while(this[_0x365427(0x78e)][_0x15d35a]&&this[_0x365427(0x78e)][_0x15d35a][_0x365427(0x826)]===0x195){_0x4ddf88+=this[_0x365427(0x78e)][_0x15d35a]['parameters'][0x0]+'\x0a',_0x15d35a++;}return _0x4ddf88;},Game_Interpreter['prototype'][_0x54b1d3(0x532)]=function(_0x4ecaf4){const _0x3cfc41=_0x54b1d3;try{eval(_0x4ecaf4);}catch(_0x3085c1){$gameTemp[_0x3cfc41(0x833)]()&&(console[_0x3cfc41(0x886)](_0x3cfc41(0x789)),console[_0x3cfc41(0x886)](_0x3085c1));}return!![];},VisuMZ['CoreEngine']['Game_Interpreter_command111']=Game_Interpreter[_0x54b1d3(0x5af)][_0x54b1d3(0x286)],Game_Interpreter['prototype'][_0x54b1d3(0x286)]=function(_0x4704f1){const _0x19501f=_0x54b1d3;try{VisuMZ[_0x19501f(0x66d)][_0x19501f(0x2ce)][_0x19501f(0x816)](this,_0x4704f1);}catch(_0x374282){$gameTemp[_0x19501f(0x833)]()&&(console['log'](_0x19501f(0x717)),console[_0x19501f(0x886)](_0x374282)),this[_0x19501f(0x3bb)]();}return!![];},VisuMZ[_0x54b1d3(0x66d)]['Game_Interpreter_command122']=Game_Interpreter['prototype'][_0x54b1d3(0x333)],Game_Interpreter['prototype']['command122']=function(_0x31b795){const _0x41e241=_0x54b1d3;try{VisuMZ[_0x41e241(0x66d)][_0x41e241(0x49c)]['call'](this,_0x31b795);}catch(_0x5e3906){$gameTemp[_0x41e241(0x833)]()&&(console[_0x41e241(0x886)]('Control\x20Variables\x20Script\x20Error'),console['log'](_0x5e3906));}return!![];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x8fa)]=Game_Interpreter['prototype'][_0x54b1d3(0x33f)],Game_Interpreter[_0x54b1d3(0x5af)][_0x54b1d3(0x33f)]=function(){const _0x342dcd=_0x54b1d3;try{VisuMZ[_0x342dcd(0x66d)][_0x342dcd(0x8fa)][_0x342dcd(0x816)](this);}catch(_0xe17185){$gameTemp['isPlaytest']()&&(console['log'](_0x342dcd(0x301)),console[_0x342dcd(0x886)](_0xe17185));}return!![];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x6f6)]=Game_Interpreter[_0x54b1d3(0x5af)]['command357'],Game_Interpreter['prototype'][_0x54b1d3(0x666)]=function(_0x8e573f){const _0x56d62a=_0x54b1d3;return $gameTemp[_0x56d62a(0x429)](this),VisuMZ[_0x56d62a(0x66d)][_0x56d62a(0x6f6)][_0x56d62a(0x816)](this,_0x8e573f);},Scene_Base[_0x54b1d3(0x5af)]['fadeSpeed']=function(){const _0x30f0f7=_0x54b1d3;return VisuMZ[_0x30f0f7(0x66d)][_0x30f0f7(0x738)]['UI'][_0x30f0f7(0x484)];},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x4bc)]=function(){const _0x54d082=_0x54b1d3;return VisuMZ[_0x54d082(0x66d)]['Settings']['UI']['BottomHelp'];},Scene_Base[_0x54b1d3(0x5af)]['isBottomButtonMode']=function(){const _0x2f1df6=_0x54b1d3;return VisuMZ[_0x2f1df6(0x66d)]['Settings']['UI'][_0x2f1df6(0x803)];},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x2bd)]=function(){const _0x23ee21=_0x54b1d3;return VisuMZ[_0x23ee21(0x66d)][_0x23ee21(0x738)]['UI'][_0x23ee21(0x242)];},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x854)]=function(){const _0x43f46b=_0x54b1d3;return VisuMZ[_0x43f46b(0x66d)][_0x43f46b(0x738)]['UI']['CommandWidth'];},Scene_Base['prototype']['buttonAreaHeight']=function(){const _0x2be62d=_0x54b1d3;return VisuMZ[_0x2be62d(0x66d)]['Settings']['UI'][_0x2be62d(0x915)];},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7d8)]=function(){const _0x2add61=_0x54b1d3;return VisuMZ[_0x2add61(0x66d)][_0x2add61(0x738)][_0x2add61(0x1f2)][_0x2add61(0x8a6)];},VisuMZ['CoreEngine']['Scene_Base_createWindowLayer']=Scene_Base['prototype']['createWindowLayer'],Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x6bb)]=function(){const _0x52d362=_0x54b1d3;VisuMZ[_0x52d362(0x66d)][_0x52d362(0x574)]['call'](this),this[_0x52d362(0x58b)](),this[_0x52d362(0x1c8)](),this['_windowLayer']['x']=Math[_0x52d362(0x48a)](this[_0x52d362(0x93d)]['x']),this['_windowLayer']['y']=Math[_0x52d362(0x48a)](this['_windowLayer']['y']);},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x58b)]=function(){},Scene_Base['prototype'][_0x54b1d3(0x1c8)]=function(){const _0x190d1e=_0x54b1d3;this[_0x190d1e(0x82b)]=new Window_TextPopup(),this[_0x190d1e(0x8a8)](this[_0x190d1e(0x82b)]);},$textPopup=function(_0x7ffed7){const _0x49e47f=_0x54b1d3,_0x567e6b=SceneManager[_0x49e47f(0x4c4)]['_textPopupWindow'];_0x567e6b&&_0x567e6b[_0x49e47f(0x4ab)](_0x7ffed7);},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x1da)]=function(){const _0x3db477=_0x54b1d3;return TextManager[_0x3db477(0x1cd)](_0x3db477(0x940),_0x3db477(0x590));},Scene_Base[_0x54b1d3(0x5af)]['buttonAssistKey2']=function(){const _0x483dc3=_0x54b1d3;return TextManager['getInputButtonString'](_0x483dc3(0x7de));},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7b4)]=function(){const _0x1c725c=_0x54b1d3;return TextManager['getInputButtonString'](_0x1c725c(0x416));},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x3ed)]=function(){return TextManager['getInputButtonString']('ok');},Scene_Base['prototype'][_0x54b1d3(0x72a)]=function(){const _0x3f582d=_0x54b1d3;return TextManager[_0x3f582d(0x4cb)](_0x3f582d(0x6f8));},Scene_Base['prototype'][_0x54b1d3(0x5e6)]=function(){const _0x3218a1=_0x54b1d3;return this['_pageupButton']&&this[_0x3218a1(0x6f7)][_0x3218a1(0x900)]?TextManager[_0x3218a1(0x85a)]:'';},Scene_Base[_0x54b1d3(0x5af)]['buttonAssistText2']=function(){return'';},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x64f)]=function(){return'';},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x85d)]=function(){const _0x30173c=_0x54b1d3;return TextManager[_0x30173c(0x2e9)];},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x452)]=function(){return TextManager['buttonAssistCancel'];},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x1e1)]=function(){return 0x0;},Scene_Base['prototype'][_0x54b1d3(0x7c2)]=function(){return 0x0;},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x3bf)]=function(){return 0x0;},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x219)]=function(){return 0x0;},Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x542)]=function(){return 0x0;},VisuMZ[_0x54b1d3(0x66d)]['Scene_Boot_loadSystemImages']=Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x68c)],Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x68c)]=function(){const _0x61a782=_0x54b1d3;VisuMZ[_0x61a782(0x66d)]['Scene_Boot_loadSystemImages'][_0x61a782(0x816)](this),this['loadGameImagesCoreEngine']();},Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x875)]=function(){const _0x70e7fa=_0x54b1d3,_0x37c374=['animations',_0x70e7fa(0x45f),'battlebacks2',_0x70e7fa(0x92e),'enemies','faces',_0x70e7fa(0x6a0),_0x70e7fa(0x742),_0x70e7fa(0x4e7),_0x70e7fa(0x614),_0x70e7fa(0x927),_0x70e7fa(0x62a),_0x70e7fa(0x924),'titles2'];for(const _0x40cc2e of _0x37c374){const _0x396938=VisuMZ['CoreEngine'][_0x70e7fa(0x738)][_0x70e7fa(0x67e)][_0x40cc2e],_0x4aa0e5=_0x70e7fa(0x59c)[_0x70e7fa(0x892)](_0x40cc2e);for(const _0x6323c of _0x396938){ImageManager[_0x70e7fa(0x908)](_0x4aa0e5,_0x6323c);}}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x660)]=Scene_Boot[_0x54b1d3(0x5af)]['startNormalGame'],Scene_Boot['prototype'][_0x54b1d3(0x50d)]=function(){const _0x27af62=_0x54b1d3;Utils[_0x27af62(0x841)](_0x27af62(0x829))&&VisuMZ['CoreEngine']['Settings']['QoL'][_0x27af62(0x83f)]?this[_0x27af62(0x891)]():VisuMZ[_0x27af62(0x66d)][_0x27af62(0x660)][_0x27af62(0x816)](this);},Scene_Boot['prototype']['startAutoNewGame']=function(){const _0x65de15=_0x54b1d3;this['checkPlayerLocation'](),DataManager[_0x65de15(0x51b)](),SceneManager[_0x65de15(0x32c)](Scene_Map);},Scene_Boot[_0x54b1d3(0x5af)]['adjustBoxSize']=function(){const _0x6277ff=_0x54b1d3,_0x4803fc=$dataSystem[_0x6277ff(0x7f4)][_0x6277ff(0x58e)],_0x9e5ee6=$dataSystem[_0x6277ff(0x7f4)][_0x6277ff(0x79b)],_0xd9960a=VisuMZ['CoreEngine'][_0x6277ff(0x738)]['UI'][_0x6277ff(0x564)];Graphics[_0x6277ff(0x46b)]=_0x4803fc-_0xd9960a*0x2,Graphics[_0x6277ff(0x67f)]=_0x9e5ee6-_0xd9960a*0x2,this['determineSideButtonLayoutValid']();},VisuMZ['CoreEngine']['Scene_Boot_updateDocumentTitle']=Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x4cf)],Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x4cf)]=function(){const _0x2bc44e=_0x54b1d3;this['isFullDocumentTitle']()?this['makeDocumentTitle']():VisuMZ['CoreEngine'][_0x2bc44e(0x86b)][_0x2bc44e(0x816)](this);},Scene_Boot[_0x54b1d3(0x5af)][_0x54b1d3(0x255)]=function(){const _0x102ec5=_0x54b1d3;if(Scene_Title[_0x102ec5(0x696)]==='')return![];if(Scene_Title[_0x102ec5(0x696)]==='Subtitle')return![];if(Scene_Title[_0x102ec5(0x821)]==='')return![];if(Scene_Title[_0x102ec5(0x821)]===_0x102ec5(0x69d))return![];return!![];},Scene_Boot['prototype'][_0x54b1d3(0x861)]=function(){const _0x40053f=_0x54b1d3,_0x9184f5=$dataSystem[_0x40053f(0x34a)],_0xe19216=Scene_Title[_0x40053f(0x696)]||'',_0x2fa678=Scene_Title['version']||'',_0x224c81=VisuMZ[_0x40053f(0x66d)][_0x40053f(0x738)][_0x40053f(0x351)][_0x40053f(0x704)]['DocumentTitleFmt'],_0x4f21a5=_0x224c81[_0x40053f(0x892)](_0x9184f5,_0xe19216,_0x2fa678);document[_0x40053f(0x8a7)]=_0x4f21a5;},Scene_Boot['prototype']['determineSideButtonLayoutValid']=function(){const _0x245999=_0x54b1d3;if(VisuMZ[_0x245999(0x66d)][_0x245999(0x738)]['UI']['SideButtons']){const _0x5bb010=Graphics[_0x245999(0x589)]-Graphics[_0x245999(0x46b)]-VisuMZ[_0x245999(0x66d)][_0x245999(0x738)]['UI'][_0x245999(0x564)]*0x2,_0x41ac8c=Sprite_Button[_0x245999(0x5af)]['blockWidth'][_0x245999(0x816)](this)*0x4;if(_0x5bb010>=_0x41ac8c)SceneManager[_0x245999(0x74c)](!![]);}},Scene_Title[_0x54b1d3(0x696)]=VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x351)][_0x54b1d3(0x704)][_0x54b1d3(0x27f)],Scene_Title[_0x54b1d3(0x821)]=VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x351)][_0x54b1d3(0x704)]['Version'],Scene_Title[_0x54b1d3(0x8b2)]=VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)]['TitlePicButtons'],VisuMZ['CoreEngine']['Scene_Title_drawGameTitle']=Scene_Title[_0x54b1d3(0x5af)][_0x54b1d3(0x647)],Scene_Title[_0x54b1d3(0x5af)]['drawGameTitle']=function(){const _0x2aa034=_0x54b1d3;VisuMZ['CoreEngine'][_0x2aa034(0x738)][_0x2aa034(0x351)]['Title'][_0x2aa034(0x647)]['call'](this);if(Scene_Title['subtitle']!==''&&Scene_Title[_0x2aa034(0x696)]!=='Subtitle')this[_0x2aa034(0x487)]();if(Scene_Title[_0x2aa034(0x821)]!==''&&Scene_Title['version']!==_0x2aa034(0x69d))this['drawGameVersion']();},Scene_Title[_0x54b1d3(0x5af)]['drawGameSubtitle']=function(){const _0xf6de2c=_0x54b1d3;VisuMZ[_0xf6de2c(0x66d)]['Settings'][_0xf6de2c(0x351)][_0xf6de2c(0x704)][_0xf6de2c(0x487)]['call'](this);},Scene_Title[_0x54b1d3(0x5af)][_0x54b1d3(0x6c8)]=function(){const _0x1632e6=_0x54b1d3;VisuMZ['CoreEngine'][_0x1632e6(0x738)][_0x1632e6(0x351)][_0x1632e6(0x704)][_0x1632e6(0x6c8)][_0x1632e6(0x816)](this);},Scene_Title[_0x54b1d3(0x5af)][_0x54b1d3(0x200)]=function(){const _0x23403e=_0x54b1d3;this[_0x23403e(0x4c1)]();const _0x535175=$dataSystem['titleCommandWindow'][_0x23403e(0x5d3)],_0x1fdba5=this['commandWindowRect']();this['_commandWindow']=new Window_TitleCommand(_0x1fdba5),this[_0x23403e(0x412)][_0x23403e(0x7b5)](_0x535175);const _0x2f3c12=this['commandWindowRect']();this[_0x23403e(0x412)][_0x23403e(0x3b3)](_0x2f3c12['x'],_0x2f3c12['y'],_0x2f3c12[_0x23403e(0x589)],_0x2f3c12[_0x23403e(0x7c8)]),this['_commandWindow'][_0x23403e(0x21d)](),this[_0x23403e(0x412)][_0x23403e(0x7c4)](),this[_0x23403e(0x412)][_0x23403e(0x298)](),this[_0x23403e(0x2d9)](this['_commandWindow']);},Scene_Title['prototype'][_0x54b1d3(0x60e)]=function(){const _0x57baf5=_0x54b1d3;return this[_0x57baf5(0x412)]?this[_0x57baf5(0x412)][_0x57baf5(0x89d)]():VisuMZ[_0x57baf5(0x66d)][_0x57baf5(0x738)]['TitleCommandList'][_0x57baf5(0x506)];},Scene_Title[_0x54b1d3(0x5af)][_0x54b1d3(0x51e)]=function(){const _0x31c846=_0x54b1d3;return VisuMZ[_0x31c846(0x66d)][_0x31c846(0x738)][_0x31c846(0x351)]['Title'][_0x31c846(0x7c0)][_0x31c846(0x816)](this);},Scene_Title[_0x54b1d3(0x5af)]['createTitleButtons']=function(){const _0x5cb69f=_0x54b1d3;for(const _0x36b005 of Scene_Title['pictureButtons']){const _0x355810=new Sprite_TitlePictureButton(_0x36b005);this[_0x5cb69f(0x8a8)](_0x355810);}},VisuMZ[_0x54b1d3(0x66d)]['Scene_Map_initialize']=Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)],Scene_Map[_0x54b1d3(0x5af)]['initialize']=function(){const _0x33224d=_0x54b1d3;VisuMZ[_0x33224d(0x66d)][_0x33224d(0x66f)]['call'](this),$gameTemp['clearForcedGameTroopSettingsCoreEngine'](),this['clearOnceParallelInterpreters']();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x5c1)]=Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x837)],Scene_Map[_0x54b1d3(0x5af)]['updateMainMultiply']=function(){const _0x419c64=_0x54b1d3;VisuMZ[_0x419c64(0x66d)][_0x419c64(0x5c1)]['call'](this),$gameTemp['_playTestFastMode']&&!$gameMessage['isBusy']()&&(this[_0x419c64(0x1ad)](),SceneManager[_0x419c64(0x806)]());},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x597)]=function(){const _0x741b5d=_0x54b1d3;Scene_Message['prototype'][_0x741b5d(0x597)][_0x741b5d(0x816)](this),!SceneManager[_0x741b5d(0x1dc)](Scene_Battle)&&(this[_0x741b5d(0x622)]['update'](),this[_0x741b5d(0x3d2)][_0x741b5d(0x3c0)](),this[_0x741b5d(0x93d)][_0x741b5d(0x900)]=![],SceneManager[_0x741b5d(0x8ae)]()),$gameScreen[_0x741b5d(0x21b)](),this['clearOnceParallelInterpreters']();},VisuMZ['CoreEngine'][_0x54b1d3(0x89c)]=Scene_Map['prototype']['createMenuButton'],Scene_Map[_0x54b1d3(0x5af)]['createMenuButton']=function(){const _0x28dcd1=_0x54b1d3;VisuMZ[_0x28dcd1(0x66d)][_0x28dcd1(0x89c)]['call'](this),SceneManager[_0x28dcd1(0x257)]()&&this[_0x28dcd1(0x56b)]();},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x56b)]=function(){const _0x4db4af=_0x54b1d3;this[_0x4db4af(0x824)]['x']=Graphics[_0x4db4af(0x46b)]+0x4;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x485)]=Scene_Map[_0x54b1d3(0x5af)]['updateScene'],Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x249)]=function(){const _0x28aa09=_0x54b1d3;VisuMZ[_0x28aa09(0x66d)][_0x28aa09(0x485)][_0x28aa09(0x816)](this),this['updateDashToggle']();},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x488)]=function(){const _0x21a64f=_0x54b1d3;Input['isTriggered'](_0x21a64f(0x422))&&(ConfigManager['alwaysDash']=!ConfigManager[_0x21a64f(0x3ec)],ConfigManager[_0x21a64f(0x2c8)]());},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x1d1)]=Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x1ad)],Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x1ad)]=function(){const _0x32a688=_0x54b1d3;VisuMZ[_0x32a688(0x66d)]['Scene_Map_updateMain'][_0x32a688(0x816)](this),this['updateOnceParallelInterpreters']();},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x2bb)]=function(){const _0x4509b5=_0x54b1d3;this[_0x4509b5(0x2ac)]=[];},Scene_Map[_0x54b1d3(0x5af)]['updateOnceParallelInterpreters']=function(){const _0x2cfcf9=_0x54b1d3;if(!this[_0x2cfcf9(0x2ac)])return;for(const _0x30e267 of this[_0x2cfcf9(0x2ac)]){_0x30e267&&_0x30e267[_0x2cfcf9(0x71b)]();}},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x8a3)]=function(_0x487283,_0x40072f){const _0x7ddf2a=_0x54b1d3,_0x35b1cc=$dataCommonEvents[_0x487283];if(!_0x35b1cc)return;const _0x3e1650=new Game_OnceParallelInterpreter();this[_0x7ddf2a(0x810)](_0x3e1650),_0x3e1650[_0x7ddf2a(0x43a)](_0x487283),_0x3e1650['setEvent'](_0x40072f);},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x810)]=function(_0x164620){const _0x5556c0=_0x54b1d3;this[_0x5556c0(0x2ac)]=this[_0x5556c0(0x2ac)]||[],this[_0x5556c0(0x2ac)][_0x5556c0(0x3eb)](_0x164620);},Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x4c5)]=function(_0x1ee7d8){const _0x56a82a=_0x54b1d3;this[_0x56a82a(0x2ac)]=this[_0x56a82a(0x2ac)]||[],this['_onceParallelInterpreters'][_0x56a82a(0x1bf)](_0x1ee7d8);};function Game_OnceParallelInterpreter(){const _0x3a6943=_0x54b1d3;this[_0x3a6943(0x68b)](...arguments);}Game_OnceParallelInterpreter['prototype']=Object[_0x54b1d3(0x37e)](Game_Interpreter[_0x54b1d3(0x5af)]),Game_OnceParallelInterpreter['prototype']['constructor']=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x54b1d3(0x5af)][_0x54b1d3(0x43a)]=function(_0x2a1a51){const _0x17f199=_0x54b1d3,_0x5c86b0=$dataCommonEvents[_0x2a1a51];_0x5c86b0?this[_0x17f199(0x70a)](_0x5c86b0[_0x17f199(0x2f6)],0x0):this['terminate']();},Game_OnceParallelInterpreter['prototype']['setEvent']=function(_0x2c5bbe){const _0xf52e16=_0x54b1d3;this[_0xf52e16(0x648)]=_0x2c5bbe||0x0;},Game_OnceParallelInterpreter['prototype'][_0x54b1d3(0x597)]=function(){const _0x2a4590=_0x54b1d3;if(!SceneManager[_0x2a4590(0x555)]())return;SceneManager['_scene'][_0x2a4590(0x4c5)](this),Game_Interpreter[_0x2a4590(0x5af)]['terminate']['call'](this);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x251)]=Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x421)],Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x421)]=function(){const _0x2b4100=_0x54b1d3;let _0x29a739=0x0;return SceneManager[_0x2b4100(0x75f)]()?_0x29a739=this[_0x2b4100(0x804)]():_0x29a739=VisuMZ[_0x2b4100(0x66d)]['Scene_MenuBase_helpAreaTop'][_0x2b4100(0x816)](this),_0x29a739;},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x804)]=function(){const _0x34cf41=_0x54b1d3;return this[_0x34cf41(0x4bc)]()?this[_0x34cf41(0x3da)]():0x0;},VisuMZ['CoreEngine'][_0x54b1d3(0x1e8)]=Scene_MenuBase['prototype']['mainAreaTop'],Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x92d)]=function(){const _0x7f781=_0x54b1d3;return SceneManager['areButtonsOutsideMainUI']()?this[_0x7f781(0x4d1)]():VisuMZ[_0x7f781(0x66d)]['Scene_MenuBase_mainAreaTop']['call'](this);},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x4d1)]=function(){const _0x437c75=_0x54b1d3;if(!this[_0x437c75(0x4bc)]())return this['helpAreaBottom']();else return this['isMenuButtonAssistEnabled']()&&this[_0x437c75(0x89e)]()===_0x437c75(0x1d8)?Window_ButtonAssist[_0x437c75(0x5af)][_0x437c75(0x939)]():0x0;},VisuMZ['CoreEngine'][_0x54b1d3(0x732)]=Scene_MenuBase['prototype'][_0x54b1d3(0x404)],Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x404)]=function(){const _0xaa381c=_0x54b1d3;let _0x30f2d2=0x0;return SceneManager[_0xaa381c(0x75f)]()?_0x30f2d2=this[_0xaa381c(0x58f)]():_0x30f2d2=VisuMZ[_0xaa381c(0x66d)][_0xaa381c(0x732)]['call'](this),this[_0xaa381c(0x6f2)]()&&this[_0xaa381c(0x89e)]()!==_0xaa381c(0x798)&&(_0x30f2d2-=Window_ButtonAssist['prototype']['lineHeight']()),_0x30f2d2;},Scene_MenuBase[_0x54b1d3(0x5af)]['mainAreaHeightSideButtonLayout']=function(){const _0x427a5f=_0x54b1d3;return Graphics[_0x427a5f(0x67f)]-this[_0x427a5f(0x4ae)]();},VisuMZ[_0x54b1d3(0x66d)]['Scene_MenuBase_createBackground']=Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x5a1)],Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x5a1)]=function(){const _0x3bcfa9=_0x54b1d3,_0x2921ef=VisuMZ[_0x3bcfa9(0x66d)][_0x3bcfa9(0x738)][_0x3bcfa9(0x6fe)]['BlurStrength']??0x8;this['_backgroundFilter']=new PIXI[(_0x3bcfa9(0x7c9))][(_0x3bcfa9(0x659))](_0x2921ef),this[_0x3bcfa9(0x819)]=new Sprite(),this[_0x3bcfa9(0x819)][_0x3bcfa9(0x290)]=SceneManager['backgroundBitmap'](),this[_0x3bcfa9(0x819)][_0x3bcfa9(0x7c9)]=[this[_0x3bcfa9(0x497)]],this[_0x3bcfa9(0x8a8)](this['_backgroundSprite']),this[_0x3bcfa9(0x201)](0xc0),this[_0x3bcfa9(0x201)](this[_0x3bcfa9(0x7bc)]()),this[_0x3bcfa9(0x76c)]();},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x7bc)]=function(){const _0x279c28=_0x54b1d3,_0x13e255=String(this[_0x279c28(0x62f)][_0x279c28(0x693)]),_0x3a5777=this[_0x279c28(0x633)](_0x13e255);return _0x3a5777?_0x3a5777[_0x279c28(0x36a)]:0xc0;},Scene_MenuBase['prototype'][_0x54b1d3(0x76c)]=function(){const _0x492464=_0x54b1d3,_0x208bbb=String(this[_0x492464(0x62f)][_0x492464(0x693)]),_0x481d7f=this[_0x492464(0x633)](_0x208bbb);_0x481d7f&&(_0x481d7f[_0x492464(0x83a)]!==''||_0x481d7f[_0x492464(0x414)]!=='')&&(this[_0x492464(0x88a)]=new Sprite(ImageManager[_0x492464(0x65d)](_0x481d7f['BgFilename1'])),this['_backSprite2']=new Sprite(ImageManager['loadTitle2'](_0x481d7f[_0x492464(0x414)])),this['addChild'](this[_0x492464(0x88a)]),this[_0x492464(0x8a8)](this[_0x492464(0x714)]),this[_0x492464(0x88a)][_0x492464(0x290)][_0x492464(0x3f4)](this[_0x492464(0x60f)][_0x492464(0x580)](this,this['_backSprite1'])),this[_0x492464(0x714)][_0x492464(0x290)][_0x492464(0x3f4)](this['adjustSprite']['bind'](this,this[_0x492464(0x714)])));},Scene_MenuBase['prototype']['getCustomBackgroundSettings']=function(_0x1ba95f){const _0x465e55=_0x54b1d3;return VisuMZ['CoreEngine'][_0x465e55(0x738)]['MenuBg'][_0x1ba95f]||VisuMZ['CoreEngine'][_0x465e55(0x738)]['MenuBg']['Scene_Unlisted'];},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x60f)]=function(_0xe72876){this['scaleSprite'](_0xe72876),this['centerSprite'](_0xe72876);},VisuMZ[_0x54b1d3(0x66d)]['Scene_MenuBase_createCancelButton']=Scene_MenuBase['prototype'][_0x54b1d3(0x8c4)],Scene_MenuBase[_0x54b1d3(0x5af)]['createCancelButton']=function(){const _0x38eb26=_0x54b1d3;VisuMZ[_0x38eb26(0x66d)][_0x38eb26(0x604)][_0x38eb26(0x816)](this),SceneManager[_0x38eb26(0x257)]()&&this['moveCancelButtonSideButtonLayout']();},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x64a)]=function(){const _0x112985=_0x54b1d3;this[_0x112985(0x348)]['x']=Graphics[_0x112985(0x46b)]+0x4;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x781)]=Scene_MenuBase['prototype'][_0x54b1d3(0x3b6)],Scene_MenuBase['prototype'][_0x54b1d3(0x3b6)]=function(){const _0x1414a2=_0x54b1d3;VisuMZ[_0x1414a2(0x66d)][_0x1414a2(0x781)][_0x1414a2(0x816)](this),SceneManager[_0x1414a2(0x257)]()&&this[_0x1414a2(0x87d)]();},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x87d)]=function(){const _0x28500b=_0x54b1d3;this[_0x28500b(0x6f7)]['x']=-0x1*(this[_0x28500b(0x6f7)]['width']+this[_0x28500b(0x92a)][_0x28500b(0x589)]+0x8),this['_pagedownButton']['x']=-0x1*(this[_0x28500b(0x92a)]['width']+0x4);},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x6f2)]=function(){const _0x52c9f6=_0x54b1d3;return VisuMZ['CoreEngine'][_0x52c9f6(0x738)]['ButtonAssist']['Enable'];},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x89e)]=function(){const _0x35f0ac=_0x54b1d3;return SceneManager[_0x35f0ac(0x257)]()||SceneManager[_0x35f0ac(0x288)]()?VisuMZ[_0x35f0ac(0x66d)][_0x35f0ac(0x738)]['ButtonAssist'][_0x35f0ac(0x2f8)]:_0x35f0ac(0x798);},Scene_MenuBase[_0x54b1d3(0x5af)][_0x54b1d3(0x58b)]=function(){const _0x7c10a1=_0x54b1d3;if(!this[_0x7c10a1(0x6f2)]())return;const _0x4ab118=this['buttonAssistWindowRect']();this['_buttonAssistWindow']=new Window_ButtonAssist(_0x4ab118),this[_0x7c10a1(0x2d9)](this[_0x7c10a1(0x55f)]);},Scene_MenuBase[_0x54b1d3(0x5af)]['buttonAssistWindowRect']=function(){const _0x1786f9=_0x54b1d3;return this[_0x1786f9(0x89e)]()===_0x1786f9(0x798)?this[_0x1786f9(0x3e9)]():this[_0x1786f9(0x36e)]();},Scene_MenuBase[_0x54b1d3(0x5af)]['buttonAssistWindowButtonRect']=function(){const _0x3e9635=_0x54b1d3,_0x19ee73=ConfigManager[_0x3e9635(0x76f)]?(Sprite_Button[_0x3e9635(0x5af)][_0x3e9635(0x5cc)]()+0x6)*0x2:0x0,_0xd777e3=this[_0x3e9635(0x585)](),_0x1d289b=Graphics[_0x3e9635(0x46b)]-_0x19ee73*0x2,_0x393c6a=this[_0x3e9635(0x5d7)]();return new Rectangle(_0x19ee73,_0xd777e3,_0x1d289b,_0x393c6a);},Scene_MenuBase['prototype']['buttonAssistWindowSideRect']=function(){const _0x3761d0=_0x54b1d3,_0x4c6796=Graphics[_0x3761d0(0x46b)],_0x2ce694=Window_ButtonAssist[_0x3761d0(0x5af)][_0x3761d0(0x939)](),_0x2f8e73=0x0;let _0x3f5c74=0x0;return this[_0x3761d0(0x89e)]()===_0x3761d0(0x1d8)?_0x3f5c74=0x0:_0x3f5c74=Graphics[_0x3761d0(0x67f)]-_0x2ce694,new Rectangle(_0x2f8e73,_0x3f5c74,_0x4c6796,_0x2ce694);},Scene_Menu[_0x54b1d3(0x364)]=VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x351)]['MainMenu'],VisuMZ[_0x54b1d3(0x66d)]['Scene_Menu_create']=Scene_Menu[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)],Scene_Menu[_0x54b1d3(0x5af)]['create']=function(){const _0x5679d6=_0x54b1d3;VisuMZ[_0x5679d6(0x66d)]['Scene_Menu_create']['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Menu[_0x54b1d3(0x5af)][_0x54b1d3(0x7e9)]=function(){const _0xeb77f0=_0x54b1d3;this['_commandWindow']&&this[_0xeb77f0(0x412)][_0xeb77f0(0x7b5)](Scene_Menu[_0xeb77f0(0x364)][_0xeb77f0(0x650)]),this[_0xeb77f0(0x49a)]&&this['_goldWindow']['setBackgroundType'](Scene_Menu['layoutSettings'][_0xeb77f0(0x4f9)]),this['_statusWindow']&&this['_statusWindow'][_0xeb77f0(0x7b5)](Scene_Menu['layoutSettings']['StatusBgType']);},Scene_Menu[_0x54b1d3(0x5af)]['commandWindowRect']=function(){const _0xd6efb0=_0x54b1d3;return Scene_Menu[_0xd6efb0(0x364)][_0xd6efb0(0x7c0)][_0xd6efb0(0x816)](this);},Scene_Menu['prototype'][_0x54b1d3(0x35d)]=function(){const _0x39e062=_0x54b1d3;return Scene_Menu[_0x39e062(0x364)][_0x39e062(0x56c)][_0x39e062(0x816)](this);},Scene_Menu[_0x54b1d3(0x5af)][_0x54b1d3(0x92b)]=function(){const _0x3ab908=_0x54b1d3;return Scene_Menu[_0x3ab908(0x364)]['StatusRect'][_0x3ab908(0x816)](this);},Scene_Item['layoutSettings']=VisuMZ['CoreEngine']['Settings'][_0x54b1d3(0x351)][_0x54b1d3(0x8b7)],VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2d6)]=Scene_Item['prototype'][_0x54b1d3(0x37e)],Scene_Item[_0x54b1d3(0x5af)]['create']=function(){const _0x19d54e=_0x54b1d3;VisuMZ[_0x19d54e(0x66d)][_0x19d54e(0x2d6)]['call'](this),this[_0x19d54e(0x7e9)]();},Scene_Item[_0x54b1d3(0x5af)][_0x54b1d3(0x7e9)]=function(){const _0x32f008=_0x54b1d3;this[_0x32f008(0x867)]&&this[_0x32f008(0x867)][_0x32f008(0x7b5)](Scene_Item[_0x32f008(0x364)][_0x32f008(0x366)]),this[_0x32f008(0x8ed)]&&this[_0x32f008(0x8ed)]['setBackgroundType'](Scene_Item['layoutSettings'][_0x32f008(0x252)]),this[_0x32f008(0x8d5)]&&this[_0x32f008(0x8d5)][_0x32f008(0x7b5)](Scene_Item[_0x32f008(0x364)]['ItemBgType']),this['_actorWindow']&&this[_0x32f008(0x1ea)]['setBackgroundType'](Scene_Item[_0x32f008(0x364)][_0x32f008(0x35b)]);},Scene_Item[_0x54b1d3(0x5af)][_0x54b1d3(0x3c9)]=function(){const _0x55bb9a=_0x54b1d3;return Scene_Item[_0x55bb9a(0x364)][_0x55bb9a(0x776)][_0x55bb9a(0x816)](this);},Scene_Item[_0x54b1d3(0x5af)][_0x54b1d3(0x1b3)]=function(){const _0x1414d0=_0x54b1d3;return Scene_Item['layoutSettings']['CategoryRect'][_0x1414d0(0x816)](this);},Scene_Item[_0x54b1d3(0x5af)][_0x54b1d3(0x502)]=function(){const _0x5ce010=_0x54b1d3;return Scene_Item['layoutSettings'][_0x5ce010(0x468)][_0x5ce010(0x816)](this);},Scene_Item['prototype'][_0x54b1d3(0x45e)]=function(){const _0xc6bfaa=_0x54b1d3;return Scene_Item[_0xc6bfaa(0x364)][_0xc6bfaa(0x1df)][_0xc6bfaa(0x816)](this);},Scene_Skill[_0x54b1d3(0x364)]=VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x351)][_0x54b1d3(0x78f)],VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x3d3)]=Scene_Skill[_0x54b1d3(0x5af)]['create'],Scene_Skill['prototype'][_0x54b1d3(0x37e)]=function(){const _0x3cd55b=_0x54b1d3;VisuMZ['CoreEngine'][_0x3cd55b(0x3d3)]['call'](this),this[_0x3cd55b(0x7e9)]();},Scene_Skill[_0x54b1d3(0x5af)]['setCoreEngineUpdateWindowBg']=function(){const _0x3187b3=_0x54b1d3;this[_0x3187b3(0x867)]&&this[_0x3187b3(0x867)]['setBackgroundType'](Scene_Skill[_0x3187b3(0x364)][_0x3187b3(0x366)]),this[_0x3187b3(0x1c6)]&&this[_0x3187b3(0x1c6)][_0x3187b3(0x7b5)](Scene_Skill[_0x3187b3(0x364)]['SkillTypeBgType']),this[_0x3187b3(0x4c2)]&&this['_statusWindow'][_0x3187b3(0x7b5)](Scene_Skill[_0x3187b3(0x364)][_0x3187b3(0x2f0)]),this[_0x3187b3(0x8d5)]&&this[_0x3187b3(0x8d5)][_0x3187b3(0x7b5)](Scene_Skill[_0x3187b3(0x364)][_0x3187b3(0x8bb)]),this['_actorWindow']&&this[_0x3187b3(0x1ea)][_0x3187b3(0x7b5)](Scene_Skill[_0x3187b3(0x364)]['ActorBgType']);},Scene_Skill[_0x54b1d3(0x5af)][_0x54b1d3(0x3c9)]=function(){const _0x311e3d=_0x54b1d3;return Scene_Skill[_0x311e3d(0x364)]['HelpRect'][_0x311e3d(0x816)](this);},Scene_Skill[_0x54b1d3(0x5af)][_0x54b1d3(0x44a)]=function(){const _0x35845c=_0x54b1d3;return Scene_Skill[_0x35845c(0x364)][_0x35845c(0x8cc)][_0x35845c(0x816)](this);},Scene_Skill[_0x54b1d3(0x5af)][_0x54b1d3(0x92b)]=function(){const _0x48b4ff=_0x54b1d3;return Scene_Skill[_0x48b4ff(0x364)][_0x48b4ff(0x1e9)][_0x48b4ff(0x816)](this);},Scene_Skill['prototype'][_0x54b1d3(0x502)]=function(){const _0x1d5b7d=_0x54b1d3;return Scene_Skill[_0x1d5b7d(0x364)][_0x1d5b7d(0x468)][_0x1d5b7d(0x816)](this);},Scene_Skill[_0x54b1d3(0x5af)]['actorWindowRect']=function(){const _0xc72624=_0x54b1d3;return Scene_Skill[_0xc72624(0x364)][_0xc72624(0x1df)]['call'](this);},Scene_Equip[_0x54b1d3(0x364)]=VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x351)][_0x54b1d3(0x668)],VisuMZ[_0x54b1d3(0x66d)]['Scene_Equip_create']=Scene_Equip[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)],Scene_Equip[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)]=function(){const _0x2a0278=_0x54b1d3;VisuMZ[_0x2a0278(0x66d)][_0x2a0278(0x3b5)]['call'](this),this[_0x2a0278(0x7e9)]();},Scene_Equip['prototype'][_0x54b1d3(0x7e9)]=function(){const _0x5e2910=_0x54b1d3;this[_0x5e2910(0x867)]&&this[_0x5e2910(0x867)][_0x5e2910(0x7b5)](Scene_Equip[_0x5e2910(0x364)]['HelpBgType']),this['_statusWindow']&&this['_statusWindow'][_0x5e2910(0x7b5)](Scene_Equip[_0x5e2910(0x364)][_0x5e2910(0x2f0)]),this[_0x5e2910(0x412)]&&this['_commandWindow'][_0x5e2910(0x7b5)](Scene_Equip[_0x5e2910(0x364)][_0x5e2910(0x650)]),this[_0x5e2910(0x353)]&&this[_0x5e2910(0x353)][_0x5e2910(0x7b5)](Scene_Equip[_0x5e2910(0x364)][_0x5e2910(0x4ac)]),this[_0x5e2910(0x8d5)]&&this[_0x5e2910(0x8d5)][_0x5e2910(0x7b5)](Scene_Equip[_0x5e2910(0x364)][_0x5e2910(0x8bb)]);},Scene_Equip[_0x54b1d3(0x5af)][_0x54b1d3(0x3c9)]=function(){const _0x56d186=_0x54b1d3;return Scene_Equip[_0x56d186(0x364)]['HelpRect'][_0x56d186(0x816)](this);},Scene_Equip[_0x54b1d3(0x5af)]['statusWindowRect']=function(){const _0x4ac95e=_0x54b1d3;return Scene_Equip[_0x4ac95e(0x364)][_0x4ac95e(0x1e9)][_0x4ac95e(0x816)](this);},Scene_Equip[_0x54b1d3(0x5af)]['commandWindowRect']=function(){const _0x391b50=_0x54b1d3;return Scene_Equip[_0x391b50(0x364)][_0x391b50(0x7c0)][_0x391b50(0x816)](this);},Scene_Equip[_0x54b1d3(0x5af)][_0x54b1d3(0x3bd)]=function(){const _0xba0dab=_0x54b1d3;return Scene_Equip['layoutSettings'][_0xba0dab(0x317)][_0xba0dab(0x816)](this);},Scene_Equip[_0x54b1d3(0x5af)]['itemWindowRect']=function(){const _0x17e3e8=_0x54b1d3;return Scene_Equip[_0x17e3e8(0x364)][_0x17e3e8(0x468)][_0x17e3e8(0x816)](this);},Scene_Status['layoutSettings']=VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x351)][_0x54b1d3(0x44c)],VisuMZ['CoreEngine'][_0x54b1d3(0x76b)]=Scene_Status['prototype']['create'],Scene_Status[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)]=function(){const _0x2663a4=_0x54b1d3;VisuMZ['CoreEngine'][_0x2663a4(0x76b)][_0x2663a4(0x816)](this),this[_0x2663a4(0x7e9)]();},Scene_Status[_0x54b1d3(0x5af)][_0x54b1d3(0x7e9)]=function(){const _0x5e8d61=_0x54b1d3;this['_profileWindow']&&this[_0x5e8d61(0x66b)]['setBackgroundType'](Scene_Status[_0x5e8d61(0x364)]['ProfileBgType']),this[_0x5e8d61(0x4c2)]&&this[_0x5e8d61(0x4c2)][_0x5e8d61(0x7b5)](Scene_Status['layoutSettings'][_0x5e8d61(0x2f0)]),this[_0x5e8d61(0x75c)]&&this[_0x5e8d61(0x75c)][_0x5e8d61(0x7b5)](Scene_Status[_0x5e8d61(0x364)][_0x5e8d61(0x23d)]),this['_statusEquipWindow']&&this[_0x5e8d61(0x5f3)][_0x5e8d61(0x7b5)](Scene_Status[_0x5e8d61(0x364)][_0x5e8d61(0x363)]);},Scene_Status[_0x54b1d3(0x5af)][_0x54b1d3(0x71e)]=function(){const _0x377478=_0x54b1d3;return Scene_Status[_0x377478(0x364)][_0x377478(0x7e1)]['call'](this);},Scene_Status[_0x54b1d3(0x5af)][_0x54b1d3(0x92b)]=function(){const _0x205dd0=_0x54b1d3;return Scene_Status[_0x205dd0(0x364)][_0x205dd0(0x1e9)]['call'](this);},Scene_Status[_0x54b1d3(0x5af)]['statusParamsWindowRect']=function(){const _0x3c2448=_0x54b1d3;return Scene_Status[_0x3c2448(0x364)][_0x3c2448(0x7da)][_0x3c2448(0x816)](this);},Scene_Status[_0x54b1d3(0x5af)][_0x54b1d3(0x823)]=function(){const _0x270f74=_0x54b1d3;return Scene_Status[_0x270f74(0x364)][_0x270f74(0x960)][_0x270f74(0x816)](this);},Scene_Options[_0x54b1d3(0x364)]=VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x351)][_0x54b1d3(0x802)],VisuMZ['CoreEngine'][_0x54b1d3(0x30b)]=Scene_Options[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)],Scene_Options[_0x54b1d3(0x5af)]['create']=function(){const _0x2c10ec=_0x54b1d3;VisuMZ[_0x2c10ec(0x66d)]['Scene_Options_create']['call'](this),this[_0x2c10ec(0x7e9)]();},Scene_Options[_0x54b1d3(0x5af)][_0x54b1d3(0x7e9)]=function(){const _0x5747dd=_0x54b1d3;this[_0x5747dd(0x31a)]&&this[_0x5747dd(0x31a)][_0x5747dd(0x7b5)](Scene_Options[_0x5747dd(0x364)][_0x5747dd(0x7ee)]);},Scene_Options[_0x54b1d3(0x5af)][_0x54b1d3(0x7c3)]=function(){const _0x3db692=_0x54b1d3;return Scene_Options['layoutSettings'][_0x3db692(0x7e3)][_0x3db692(0x816)](this);},Scene_Save[_0x54b1d3(0x364)]=VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x351)]['SaveMenu'],Scene_Save[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)]=function(){const _0x3e1021=_0x54b1d3;Scene_File[_0x3e1021(0x5af)][_0x3e1021(0x37e)][_0x3e1021(0x816)](this),this[_0x3e1021(0x7e9)]();},Scene_Save['prototype'][_0x54b1d3(0x7e9)]=function(){const _0x902fd4=_0x54b1d3;this[_0x902fd4(0x867)]&&this['_helpWindow'][_0x902fd4(0x7b5)](Scene_Save['layoutSettings'][_0x902fd4(0x366)]),this[_0x902fd4(0x61a)]&&this[_0x902fd4(0x61a)]['setBackgroundType'](Scene_Save[_0x902fd4(0x364)][_0x902fd4(0x50b)]);},Scene_Save[_0x54b1d3(0x5af)][_0x54b1d3(0x3c9)]=function(){const _0x3d794a=_0x54b1d3;return Scene_Save[_0x3d794a(0x364)][_0x3d794a(0x776)][_0x3d794a(0x816)](this);},Scene_Save['prototype'][_0x54b1d3(0x37f)]=function(){const _0x2f1daa=_0x54b1d3;return Scene_Save['layoutSettings'][_0x2f1daa(0x23c)][_0x2f1daa(0x816)](this);},Scene_Load[_0x54b1d3(0x364)]=VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x351)]['LoadMenu'],Scene_Load['prototype']['create']=function(){const _0x31c15c=_0x54b1d3;Scene_File['prototype'][_0x31c15c(0x37e)][_0x31c15c(0x816)](this),this[_0x31c15c(0x7e9)]();},Scene_Load[_0x54b1d3(0x5af)][_0x54b1d3(0x7e9)]=function(){const _0x2b5f94=_0x54b1d3;this[_0x2b5f94(0x867)]&&this[_0x2b5f94(0x867)][_0x2b5f94(0x7b5)](Scene_Load[_0x2b5f94(0x364)][_0x2b5f94(0x366)]),this[_0x2b5f94(0x61a)]&&this[_0x2b5f94(0x61a)][_0x2b5f94(0x7b5)](Scene_Load[_0x2b5f94(0x364)][_0x2b5f94(0x50b)]);},Scene_Load[_0x54b1d3(0x5af)]['helpWindowRect']=function(){const _0x468d73=_0x54b1d3;return Scene_Load[_0x468d73(0x364)][_0x468d73(0x776)][_0x468d73(0x816)](this);},Scene_Load[_0x54b1d3(0x5af)]['listWindowRect']=function(){const _0xf58368=_0x54b1d3;return Scene_Load[_0xf58368(0x364)][_0xf58368(0x23c)][_0xf58368(0x816)](this);};function Scene_QuickLoad(){const _0x201fb5=_0x54b1d3;this[_0x201fb5(0x68b)](...arguments);}Scene_QuickLoad[_0x54b1d3(0x5af)]=Object[_0x54b1d3(0x37e)](Scene_Load[_0x54b1d3(0x5af)]),Scene_QuickLoad['prototype'][_0x54b1d3(0x62f)]=Scene_QuickLoad,Scene_QuickLoad[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(){const _0x4790fb=_0x54b1d3;Scene_Load[_0x4790fb(0x5af)][_0x4790fb(0x68b)][_0x4790fb(0x816)](this);},Scene_QuickLoad['prototype'][_0x54b1d3(0x37e)]=function(){const _0x184db1=_0x54b1d3;this[_0x184db1(0x959)](this[_0x184db1(0x70e)]);},Scene_QuickLoad['prototype'][_0x54b1d3(0x27c)]=function(_0x3bde8b){this['_saveFileID']=_0x3bde8b;},Scene_QuickLoad[_0x54b1d3(0x5af)][_0x54b1d3(0x304)]=function(){const _0x177926=_0x54b1d3;Scene_MenuBase[_0x177926(0x5af)][_0x177926(0x304)][_0x177926(0x816)](this);},Scene_GameEnd[_0x54b1d3(0x364)]=VisuMZ[_0x54b1d3(0x66d)]['Settings']['MenuLayout'][_0x54b1d3(0x7b1)],VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x770)]=Scene_GameEnd[_0x54b1d3(0x5af)][_0x54b1d3(0x5a1)],Scene_GameEnd[_0x54b1d3(0x5af)]['createBackground']=function(){const _0x3545eb=_0x54b1d3;Scene_MenuBase[_0x3545eb(0x5af)][_0x3545eb(0x5a1)][_0x3545eb(0x816)](this);},Scene_GameEnd['prototype'][_0x54b1d3(0x200)]=function(){const _0xef6b88=_0x54b1d3,_0x3b78f5=this['commandWindowRect']();this[_0xef6b88(0x412)]=new Window_GameEnd(_0x3b78f5),this[_0xef6b88(0x412)][_0xef6b88(0x1aa)](_0xef6b88(0x6f8),this['popScene'][_0xef6b88(0x580)](this)),this[_0xef6b88(0x2d9)](this[_0xef6b88(0x412)]),this[_0xef6b88(0x412)][_0xef6b88(0x7b5)](Scene_GameEnd[_0xef6b88(0x364)][_0xef6b88(0x650)]);},Scene_GameEnd[_0x54b1d3(0x5af)][_0x54b1d3(0x51e)]=function(){const _0x2360f7=_0x54b1d3;return Scene_GameEnd[_0x2360f7(0x364)][_0x2360f7(0x7c0)][_0x2360f7(0x816)](this);},Scene_Shop[_0x54b1d3(0x364)]=VisuMZ['CoreEngine']['Settings']['MenuLayout']['ShopMenu'],VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x92f)]=Scene_Shop[_0x54b1d3(0x5af)][_0x54b1d3(0x37e)],Scene_Shop['prototype']['create']=function(){const _0x5f1c87=_0x54b1d3;VisuMZ['CoreEngine']['Scene_Shop_create'][_0x5f1c87(0x816)](this),this[_0x5f1c87(0x7e9)]();},Scene_Shop['prototype'][_0x54b1d3(0x7e9)]=function(){const _0x1d3ba1=_0x54b1d3;this[_0x1d3ba1(0x867)]&&this[_0x1d3ba1(0x867)][_0x1d3ba1(0x7b5)](Scene_Shop[_0x1d3ba1(0x364)][_0x1d3ba1(0x366)]),this[_0x1d3ba1(0x49a)]&&this['_goldWindow'][_0x1d3ba1(0x7b5)](Scene_Shop[_0x1d3ba1(0x364)][_0x1d3ba1(0x4f9)]),this[_0x1d3ba1(0x412)]&&this['_commandWindow']['setBackgroundType'](Scene_Shop['layoutSettings'][_0x1d3ba1(0x650)]),this[_0x1d3ba1(0x8fd)]&&this[_0x1d3ba1(0x8fd)][_0x1d3ba1(0x7b5)](Scene_Shop['layoutSettings'][_0x1d3ba1(0x400)]),this['_numberWindow']&&this[_0x1d3ba1(0x584)][_0x1d3ba1(0x7b5)](Scene_Shop[_0x1d3ba1(0x364)][_0x1d3ba1(0x496)]),this['_statusWindow']&&this[_0x1d3ba1(0x4c2)][_0x1d3ba1(0x7b5)](Scene_Shop[_0x1d3ba1(0x364)][_0x1d3ba1(0x2f0)]),this['_buyWindow']&&this[_0x1d3ba1(0x53d)][_0x1d3ba1(0x7b5)](Scene_Shop[_0x1d3ba1(0x364)][_0x1d3ba1(0x72c)]),this[_0x1d3ba1(0x8ed)]&&this[_0x1d3ba1(0x8ed)][_0x1d3ba1(0x7b5)](Scene_Shop['layoutSettings']['CategoryBgType']),this[_0x1d3ba1(0x874)]&&this['_sellWindow'][_0x1d3ba1(0x7b5)](Scene_Shop[_0x1d3ba1(0x364)][_0x1d3ba1(0x35e)]);},Scene_Shop['prototype'][_0x54b1d3(0x3c9)]=function(){const _0x11a01a=_0x54b1d3;return Scene_Shop[_0x11a01a(0x364)][_0x11a01a(0x776)][_0x11a01a(0x816)](this);},Scene_Shop[_0x54b1d3(0x5af)][_0x54b1d3(0x35d)]=function(){const _0x57a9a2=_0x54b1d3;return Scene_Shop[_0x57a9a2(0x364)][_0x57a9a2(0x56c)][_0x57a9a2(0x816)](this);},Scene_Shop['prototype']['commandWindowRect']=function(){const _0x692f05=_0x54b1d3;return Scene_Shop[_0x692f05(0x364)][_0x692f05(0x7c0)][_0x692f05(0x816)](this);},Scene_Shop['prototype']['dummyWindowRect']=function(){const _0x273586=_0x54b1d3;return Scene_Shop['layoutSettings']['DummyRect'][_0x273586(0x816)](this);},Scene_Shop['prototype']['numberWindowRect']=function(){const _0x582a3c=_0x54b1d3;return Scene_Shop[_0x582a3c(0x364)][_0x582a3c(0x1e7)][_0x582a3c(0x816)](this);},Scene_Shop[_0x54b1d3(0x5af)][_0x54b1d3(0x92b)]=function(){const _0x12eeb7=_0x54b1d3;return Scene_Shop['layoutSettings'][_0x12eeb7(0x1e9)][_0x12eeb7(0x816)](this);},Scene_Shop['prototype'][_0x54b1d3(0x8d1)]=function(){const _0x59f85f=_0x54b1d3;return Scene_Shop[_0x59f85f(0x364)][_0x59f85f(0x4f7)][_0x59f85f(0x816)](this);},Scene_Shop[_0x54b1d3(0x5af)][_0x54b1d3(0x1b3)]=function(){return Scene_Shop['layoutSettings']['CategoryRect']['call'](this);},Scene_Shop['prototype']['sellWindowRect']=function(){const _0x55a9cb=_0x54b1d3;return Scene_Shop['layoutSettings'][_0x55a9cb(0x59b)][_0x55a9cb(0x816)](this);},Scene_Name[_0x54b1d3(0x364)]=VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x351)][_0x54b1d3(0x1c2)],VisuMZ[_0x54b1d3(0x66d)]['Scene_Name_create']=Scene_Name[_0x54b1d3(0x5af)]['create'],Scene_Name[_0x54b1d3(0x5af)]['create']=function(){const _0x380fc4=_0x54b1d3;VisuMZ[_0x380fc4(0x66d)][_0x380fc4(0x222)]['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Name[_0x54b1d3(0x5af)]['setCoreEngineUpdateWindowBg']=function(){const _0x3645b4=_0x54b1d3;this[_0x3645b4(0x882)]&&this[_0x3645b4(0x882)][_0x3645b4(0x7b5)](Scene_Name[_0x3645b4(0x364)][_0x3645b4(0x784)]),this['_inputWindow']&&this[_0x3645b4(0x6ac)][_0x3645b4(0x7b5)](Scene_Name[_0x3645b4(0x364)]['InputBgType']);},Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x4ae)]=function(){return 0x0;},Scene_Name['prototype']['editWindowRect']=function(){const _0x2c2a21=_0x54b1d3;return Scene_Name[_0x2c2a21(0x364)][_0x2c2a21(0x5fa)][_0x2c2a21(0x816)](this);},Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x5b2)]=function(){const _0x73e1ca=_0x54b1d3;return Scene_Name[_0x73e1ca(0x364)][_0x73e1ca(0x774)][_0x73e1ca(0x816)](this);},Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x6d7)]=function(){const _0x559ea2=_0x54b1d3;if(!this['_inputWindow'])return![];return VisuMZ['CoreEngine'][_0x559ea2(0x738)][_0x559ea2(0x279)]['EnableNameInput'];},Scene_Name[_0x54b1d3(0x5af)]['buttonAssistKey1']=function(){const _0x1c55b2=_0x54b1d3;if(this['EnableNameInput']()&&this[_0x1c55b2(0x6ac)][_0x1c55b2(0x3d8)]!=='keyboard')return TextManager[_0x1c55b2(0x1cd)](_0x1c55b2(0x940),_0x1c55b2(0x590));return Scene_MenuBase['prototype'][_0x1c55b2(0x1da)][_0x1c55b2(0x816)](this);},Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x7b4)]=function(){const _0x40fb45=_0x54b1d3;return this[_0x40fb45(0x6d7)]()?TextManager[_0x40fb45(0x4cb)](_0x40fb45(0x7de)):Scene_MenuBase[_0x40fb45(0x5af)][_0x40fb45(0x7b4)][_0x40fb45(0x816)](this);},Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x3ed)]=function(){const _0x5a0182=_0x54b1d3;if(this[_0x5a0182(0x6d7)]()&&this['_inputWindow'][_0x5a0182(0x3d8)]==='keyboard')return TextManager[_0x5a0182(0x679)]([_0x5a0182(0x391)]);return Scene_MenuBase['prototype'][_0x5a0182(0x3ed)][_0x5a0182(0x816)](this);},Scene_Name['prototype']['buttonAssistKey5']=function(){const _0x8127bc=_0x54b1d3;if(this['EnableNameInput']()&&this[_0x8127bc(0x6ac)]['_mode']==='keyboard')return TextManager[_0x8127bc(0x679)](['BKSP']);return Scene_MenuBase[_0x8127bc(0x5af)][_0x8127bc(0x72a)][_0x8127bc(0x816)](this);},Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x5e6)]=function(){const _0x38c8e7=_0x54b1d3;if(this[_0x38c8e7(0x6d7)]()&&this[_0x38c8e7(0x6ac)]['_mode']!==_0x38c8e7(0x2d0)){const _0x1f826a=VisuMZ['CoreEngine'][_0x38c8e7(0x738)][_0x38c8e7(0x279)];return _0x1f826a[_0x38c8e7(0x1f8)]||_0x38c8e7(0x83e);}return Scene_MenuBase[_0x38c8e7(0x5af)][_0x38c8e7(0x5e6)]['call'](this);},Scene_Name[_0x54b1d3(0x5af)]['buttonAssistText3']=function(){const _0x2f8015=_0x54b1d3;if(this[_0x2f8015(0x6d7)]()){const _0x54ae36=VisuMZ[_0x2f8015(0x66d)][_0x2f8015(0x738)]['KeyboardInput'];return this[_0x2f8015(0x6ac)][_0x2f8015(0x3d8)]===_0x2f8015(0x2d0)?_0x54ae36[_0x2f8015(0x2a1)]||_0x2f8015(0x2a1):_0x54ae36['Manual']||_0x2f8015(0x6b9);}else return Scene_MenuBase[_0x2f8015(0x5af)][_0x2f8015(0x64f)][_0x2f8015(0x816)](this);},Scene_Name['prototype'][_0x54b1d3(0x85d)]=function(){const _0x2ef7a3=_0x54b1d3;if(this[_0x2ef7a3(0x6d7)]()){const _0x49d665=VisuMZ['CoreEngine'][_0x2ef7a3(0x738)][_0x2ef7a3(0x279)];if(this['_inputWindow'][_0x2ef7a3(0x3d8)]===_0x2ef7a3(0x2d0))return _0x49d665[_0x2ef7a3(0x881)]||_0x2ef7a3(0x881);}return Scene_MenuBase['prototype'][_0x2ef7a3(0x85d)][_0x2ef7a3(0x816)](this);},VisuMZ['CoreEngine'][_0x54b1d3(0x8ab)]=Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x503)],Scene_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x503)]=function(){const _0x225e95=_0x54b1d3;this[_0x225e95(0x761)]()?this['onInputBannedWords']():VisuMZ[_0x225e95(0x66d)][_0x225e95(0x8ab)][_0x225e95(0x816)](this);},Scene_Name['prototype']['doesNameContainBannedWords']=function(){const _0x399733=_0x54b1d3,_0x25208d=VisuMZ[_0x399733(0x66d)][_0x399733(0x738)]['KeyboardInput'];if(!_0x25208d)return![];const _0x1558ff=_0x25208d[_0x399733(0x6ba)];if(!_0x1558ff)return![];const _0x962f05=this[_0x399733(0x882)][_0x399733(0x693)]()[_0x399733(0x73e)]();for(const _0x3b52cc of _0x1558ff){if(_0x962f05['includes'](_0x3b52cc[_0x399733(0x73e)]()))return!![];}return![];},Scene_Name['prototype'][_0x54b1d3(0x8cd)]=function(){const _0xa24d72=_0x54b1d3;SoundManager[_0xa24d72(0x558)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x938)]=Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)],Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x2e5e40=_0x54b1d3;VisuMZ[_0x2e5e40(0x66d)][_0x2e5e40(0x938)]['call'](this);if($gameTemp[_0x2e5e40(0x73b)])this[_0x2e5e40(0x7e7)]();},Scene_Battle['prototype']['updatePlayTestF7']=function(){const _0x135d4c=_0x54b1d3;!BattleManager[_0x135d4c(0x2f4)]()&&!this[_0x135d4c(0x3fb)]&&!$gameMessage['isBusy']()&&(this[_0x135d4c(0x3fb)]=!![],this[_0x135d4c(0x71b)](),SceneManager[_0x135d4c(0x806)](),this[_0x135d4c(0x3fb)]=![]);},VisuMZ['CoreEngine'][_0x54b1d3(0x295)]=Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x8c4)],Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x8c4)]=function(){const _0x2865c1=_0x54b1d3;VisuMZ[_0x2865c1(0x66d)][_0x2865c1(0x295)][_0x2865c1(0x816)](this),SceneManager[_0x2865c1(0x257)]()&&this['repositionCancelButtonSideButtonLayout']();},Scene_Battle['prototype'][_0x54b1d3(0x93a)]=function(){const _0x1163e3=_0x54b1d3;this[_0x1163e3(0x348)]['x']=Graphics[_0x1163e3(0x46b)]+0x4,this[_0x1163e3(0x548)]()?this[_0x1163e3(0x348)]['y']=Graphics[_0x1163e3(0x67f)]-this[_0x1163e3(0x5d7)]():this[_0x1163e3(0x348)]['y']=0x0;},VisuMZ[_0x54b1d3(0x66d)]['Sprite_Button_initialize']=Sprite_Button['prototype'][_0x54b1d3(0x68b)],Sprite_Button[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(_0x79ba89){const _0xf5471a=_0x54b1d3;VisuMZ[_0xf5471a(0x66d)][_0xf5471a(0x65f)][_0xf5471a(0x816)](this,_0x79ba89),this[_0xf5471a(0x461)]();},Sprite_Button['prototype'][_0x54b1d3(0x461)]=function(){const _0x2c969d=_0x54b1d3,_0x8f2200=VisuMZ[_0x2c969d(0x66d)][_0x2c969d(0x738)]['UI'];this[_0x2c969d(0x3f6)]=![];switch(this['_buttonType']){case _0x2c969d(0x6f8):this[_0x2c969d(0x3f6)]=!_0x8f2200[_0x2c969d(0x3e6)];break;case _0x2c969d(0x940):case _0x2c969d(0x590):this['_isButtonHidden']=!_0x8f2200[_0x2c969d(0x759)];break;case _0x2c969d(0x83d):case'up':case'down2':case _0x2c969d(0x47e):case'ok':this[_0x2c969d(0x3f6)]=!_0x8f2200[_0x2c969d(0x513)];break;case _0x2c969d(0x439):this['_isButtonHidden']=!_0x8f2200[_0x2c969d(0x793)];break;}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2d5)]=Sprite_Button['prototype'][_0x54b1d3(0x907)],Sprite_Button[_0x54b1d3(0x5af)][_0x54b1d3(0x907)]=function(){const _0x1dd2ea=_0x54b1d3;SceneManager['areButtonsHidden']()||this['_isButtonHidden']?this[_0x1dd2ea(0x4be)]():VisuMZ[_0x1dd2ea(0x66d)]['Sprite_Button_updateOpacity'][_0x1dd2ea(0x816)](this);},Sprite_Button[_0x54b1d3(0x5af)]['hideButtonFromView']=function(){const _0x36828=_0x54b1d3;this['visible']=![],this[_0x36828(0x78d)]=0x0,this['x']=Graphics[_0x36828(0x589)]*0xa,this['y']=Graphics['height']*0xa;},VisuMZ[_0x54b1d3(0x66d)]['Sprite_Battler_startMove']=Sprite_Battler[_0x54b1d3(0x5af)][_0x54b1d3(0x2f5)],Sprite_Battler[_0x54b1d3(0x5af)]['startMove']=function(_0x24044e,_0x41095b,_0x2ed03f){const _0x440cd6=_0x54b1d3;(this[_0x440cd6(0x27d)]!==_0x24044e||this[_0x440cd6(0x1e3)]!==_0x41095b)&&(this[_0x440cd6(0x5f7)](_0x440cd6(0x3aa)),this[_0x440cd6(0x4a0)]=_0x2ed03f),VisuMZ[_0x440cd6(0x66d)][_0x440cd6(0x78a)][_0x440cd6(0x816)](this,_0x24044e,_0x41095b,_0x2ed03f);},Sprite_Battler[_0x54b1d3(0x5af)]['setMoveEasingType']=function(_0x5c20c3){const _0x4d99f2=_0x54b1d3;this[_0x4d99f2(0x2b8)]=_0x5c20c3;},Sprite_Battler[_0x54b1d3(0x5af)][_0x54b1d3(0x6b6)]=function(){const _0x3b80ff=_0x54b1d3;if(this[_0x3b80ff(0x3f2)]<=0x0)return;const _0x5dcaea=this[_0x3b80ff(0x3f2)],_0x6dcbc=this['_movementWholeDuration'],_0x3822b0=this['_moveEasingType'];this[_0x3b80ff(0x6dd)]=this['applyEasing'](this[_0x3b80ff(0x6dd)],this[_0x3b80ff(0x27d)],_0x5dcaea,_0x6dcbc,_0x3822b0),this[_0x3b80ff(0x681)]=this['applyEasing'](this[_0x3b80ff(0x681)],this[_0x3b80ff(0x1e3)],_0x5dcaea,_0x6dcbc,_0x3822b0),this['_movementDuration']--;if(this['_movementDuration']<=0x0)this[_0x3b80ff(0x7d2)]();},Sprite_Battler['prototype'][_0x54b1d3(0x20d)]=function(_0x288983,_0x48487c,_0x3f3841,_0x11ec62,_0x25534d){const _0x1a51aa=_0x54b1d3,_0x129da8=VisuMZ['ApplyEasing']((_0x11ec62-_0x3f3841)/_0x11ec62,_0x25534d||_0x1a51aa(0x3aa)),_0x385670=VisuMZ[_0x1a51aa(0x235)]((_0x11ec62-_0x3f3841+0x1)/_0x11ec62,_0x25534d||_0x1a51aa(0x3aa)),_0x221d61=(_0x288983-_0x48487c*_0x129da8)/(0x1-_0x129da8);return _0x221d61+(_0x48487c-_0x221d61)*_0x385670;},VisuMZ['CoreEngine'][_0x54b1d3(0x695)]=Sprite_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x294)],Sprite_Actor['prototype'][_0x54b1d3(0x294)]=function(_0x503d32){const _0x2451e6=_0x54b1d3;VisuMZ[_0x2451e6(0x66d)][_0x2451e6(0x738)]['UI']['RepositionActors']?this[_0x2451e6(0x7e6)](_0x503d32):VisuMZ['CoreEngine'][_0x2451e6(0x695)][_0x2451e6(0x816)](this,_0x503d32);},Sprite_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x7e6)]=function(_0x123887){const _0x8c18f9=_0x54b1d3;let _0x28eeef=Math[_0x8c18f9(0x48a)](Graphics[_0x8c18f9(0x589)]/0x2+0xc0);_0x28eeef-=Math[_0x8c18f9(0x7d9)]((Graphics['width']-Graphics['boxWidth'])/0x2),_0x28eeef+=_0x123887*0x20;let _0x41ff0f=Graphics[_0x8c18f9(0x7c8)]-0xc8-$gameParty[_0x8c18f9(0x86f)]()*0x30;_0x41ff0f-=Math[_0x8c18f9(0x7d9)]((Graphics[_0x8c18f9(0x7c8)]-Graphics[_0x8c18f9(0x67f)])/0x2),_0x41ff0f+=_0x123887*0x30,this['setHome'](_0x28eeef,_0x41ff0f);},Sprite_Actor['prototype']['retreat']=function(){const _0x5edf19=_0x54b1d3;this[_0x5edf19(0x2f5)](0x4b0,0x0,0x78);},Sprite_Animation[_0x54b1d3(0x5af)]['setMute']=function(_0x5dd4f4){this['_muteSound']=_0x5dd4f4;},VisuMZ['CoreEngine'][_0x54b1d3(0x19d)]=Sprite_Animation['prototype'][_0x54b1d3(0x256)],Sprite_Animation['prototype']['processSoundTimings']=function(){const _0x16ece2=_0x54b1d3;if(this[_0x16ece2(0x6a4)])return;VisuMZ[_0x16ece2(0x66d)]['Sprite_Animation_processSoundTimings'][_0x16ece2(0x816)](this);},VisuMZ['CoreEngine'][_0x54b1d3(0x552)]=Sprite_Animation[_0x54b1d3(0x5af)][_0x54b1d3(0x454)],Sprite_Animation[_0x54b1d3(0x5af)]['setViewport']=function(_0x392eb9){const _0x94011a=_0x54b1d3;this[_0x94011a(0x72d)]()?this['setViewportCoreEngineFix'](_0x392eb9):VisuMZ[_0x94011a(0x66d)][_0x94011a(0x552)][_0x94011a(0x816)](this,_0x392eb9);},Sprite_Animation[_0x54b1d3(0x5af)][_0x54b1d3(0x72d)]=function(){const _0xc47cfd=_0x54b1d3;if(!this['_animation'])return![];const _0x517f53=this[_0xc47cfd(0x3db)]['name']||'';if(_0x517f53['match'](/<MIRROR OFFSET X>/i))return!![];if(_0x517f53[_0xc47cfd(0x27a)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0xc47cfd(0x66d)][_0xc47cfd(0x738)][_0xc47cfd(0x33d)][_0xc47cfd(0x441)];},Sprite_Animation[_0x54b1d3(0x5af)][_0x54b1d3(0x5d0)]=function(_0x491291){const _0x3df200=_0x54b1d3,_0x557007=this[_0x3df200(0x419)],_0x7b84f8=this['_viewportSize'],_0x274a5c=this[_0x3df200(0x3db)][_0x3df200(0x59f)]*(this[_0x3df200(0x1dd)]?-0x1:0x1)-_0x557007/0x2,_0x5b56e2=this[_0x3df200(0x3db)][_0x3df200(0x613)]-_0x7b84f8/0x2,_0x4ee31d=this[_0x3df200(0x791)](_0x491291);_0x491291['gl']['viewport'](_0x274a5c+_0x4ee31d['x'],_0x5b56e2+_0x4ee31d['y'],_0x557007,_0x7b84f8);},Sprite_Animation[_0x54b1d3(0x5af)][_0x54b1d3(0x700)]=function(_0x1e80be){const _0x3c05f5=_0x54b1d3;if(_0x1e80be[_0x3c05f5(0x3b8)]){}const _0x1663bf=this[_0x3c05f5(0x3db)]['name'];let _0x342869=_0x1e80be['height']*_0x1e80be[_0x3c05f5(0x6ff)]['y'],_0x2224b4=0x0,_0x45d8ab=-_0x342869/0x2;if(_0x1663bf[_0x3c05f5(0x27a)](/<(?:HEAD|HEADER|TOP)>/i))_0x45d8ab=-_0x342869;if(_0x1663bf[_0x3c05f5(0x27a)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x45d8ab=0x0;if(this[_0x3c05f5(0x3db)]['alignBottom'])_0x45d8ab=0x0;if(_0x1663bf[_0x3c05f5(0x27a)](/<(?:LEFT)>/i))_0x2224b4=-_0x1e80be[_0x3c05f5(0x589)]/0x2;if(_0x1663bf['match'](/<(?:RIGHT)>/i))_0x2224b4=_0x1e80be[_0x3c05f5(0x589)]/0x2;_0x1663bf['match'](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x2224b4=Number(RegExp['$1'])*_0x1e80be[_0x3c05f5(0x589)]);_0x1663bf[_0x3c05f5(0x27a)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x45d8ab=(0x1-Number(RegExp['$1']))*-_0x342869);_0x1663bf['match'](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x2224b4=Number(RegExp['$1'])*_0x1e80be['width'],_0x45d8ab=(0x1-Number(RegExp['$2']))*-_0x342869);if(_0x1663bf['match'](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x2224b4+=Number(RegExp['$1']);if(_0x1663bf[_0x3c05f5(0x27a)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x45d8ab+=Number(RegExp['$1']);_0x1663bf[_0x3c05f5(0x27a)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x2224b4+=Number(RegExp['$1']),_0x45d8ab+=Number(RegExp['$2']));const _0x59f8e5=new Point(_0x2224b4,_0x45d8ab);return _0x1e80be[_0x3c05f5(0x63e)](),_0x1e80be[_0x3c05f5(0x478)]['apply'](_0x59f8e5);},Sprite_AnimationMV[_0x54b1d3(0x5af)][_0x54b1d3(0x68e)]=function(){const _0x4c5c9b=_0x54b1d3;this[_0x4c5c9b(0x7cc)]=VisuMZ[_0x4c5c9b(0x66d)][_0x4c5c9b(0x738)][_0x4c5c9b(0x33d)][_0x4c5c9b(0x1a2)]??0x4,this['setupCustomRateCoreEngine'](),this['_rate']=this[_0x4c5c9b(0x7cc)]['clamp'](0x1,0xa);},Sprite_AnimationMV[_0x54b1d3(0x5af)][_0x54b1d3(0x8af)]=function(){const _0x4692c9=_0x54b1d3;if(!this[_0x4692c9(0x3db)]);const _0x330684=this[_0x4692c9(0x3db)][_0x4692c9(0x693)]||'';_0x330684[_0x4692c9(0x27a)](/<RATE:[ ](\d+)>/i)&&(this[_0x4692c9(0x7cc)]=(Number(RegExp['$1'])||0x1)[_0x4692c9(0x285)](0x1,0xa));},Sprite_AnimationMV[_0x54b1d3(0x5af)][_0x54b1d3(0x8ec)]=function(_0x38b9aa){this['_muteSound']=_0x38b9aa;},VisuMZ['CoreEngine'][_0x54b1d3(0x4b9)]=Sprite_AnimationMV['prototype'][_0x54b1d3(0x936)],Sprite_AnimationMV[_0x54b1d3(0x5af)][_0x54b1d3(0x936)]=function(_0x576369){const _0x56c209=_0x54b1d3;this[_0x56c209(0x6a4)]&&(_0x576369=JsonEx[_0x56c209(0x62d)](_0x576369),_0x576369['se']&&(_0x576369['se'][_0x56c209(0x703)]=0x0)),VisuMZ[_0x56c209(0x66d)][_0x56c209(0x4b9)][_0x56c209(0x816)](this,_0x576369);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2fa)]=Sprite_AnimationMV[_0x54b1d3(0x5af)][_0x54b1d3(0x437)],Sprite_AnimationMV[_0x54b1d3(0x5af)][_0x54b1d3(0x437)]=function(){const _0x537257=_0x54b1d3;VisuMZ[_0x537257(0x66d)]['Sprite_AnimationMV_updatePosition'][_0x537257(0x816)](this);if(this['_animation'][_0x537257(0x228)]===0x3){if(this['x']===0x0)this['x']=Math['round'](Graphics[_0x537257(0x589)]/0x2);if(this['y']===0x0)this['y']=Math['round'](Graphics[_0x537257(0x7c8)]/0x2);}},Sprite_Damage['prototype']['createDigits']=function(_0x1d86b5){const _0x9802b4=_0x54b1d3;let _0x1a3533=Math[_0x9802b4(0x1f7)](_0x1d86b5)[_0x9802b4(0x221)]();this[_0x9802b4(0x623)]()&&(_0x1a3533=VisuMZ['GroupDigits'](_0x1a3533));const _0x4bb796=this[_0x9802b4(0x21f)](),_0xc0e3ce=Math[_0x9802b4(0x7d9)](_0x4bb796*0.75);for(let _0x2310bc=0x0;_0x2310bc<_0x1a3533[_0x9802b4(0x506)];_0x2310bc++){const _0x13e42f=this['createChildSprite'](_0xc0e3ce,_0x4bb796);_0x13e42f['bitmap'][_0x9802b4(0x2b9)](_0x1a3533[_0x2310bc],0x0,0x0,_0xc0e3ce,_0x4bb796,_0x9802b4(0x2c3)),_0x13e42f['x']=(_0x2310bc-(_0x1a3533['length']-0x1)/0x2)*_0xc0e3ce,_0x13e42f['dy']=-_0x2310bc;}},Sprite_Damage[_0x54b1d3(0x5af)]['useDigitGrouping']=function(){const _0x196d0d=_0x54b1d3;return VisuMZ[_0x196d0d(0x66d)][_0x196d0d(0x738)]['QoL'][_0x196d0d(0x634)];},Sprite_Damage[_0x54b1d3(0x5af)][_0x54b1d3(0x636)]=function(){const _0x581c55=_0x54b1d3;return ColorManager[_0x581c55(0x47d)]();},VisuMZ[_0x54b1d3(0x66d)]['Sprite_Gauge_gaugeRate']=Sprite_Gauge[_0x54b1d3(0x5af)][_0x54b1d3(0x8e9)],Sprite_Gauge[_0x54b1d3(0x5af)][_0x54b1d3(0x8e9)]=function(){const _0x2894f3=_0x54b1d3;return VisuMZ[_0x2894f3(0x66d)][_0x2894f3(0x3d5)][_0x2894f3(0x816)](this)[_0x2894f3(0x285)](0x0,0x1);},VisuMZ['CoreEngine'][_0x54b1d3(0x472)]=Sprite_Gauge[_0x54b1d3(0x5af)][_0x54b1d3(0x5aa)],Sprite_Gauge[_0x54b1d3(0x5af)][_0x54b1d3(0x5aa)]=function(){const _0x1aa886=_0x54b1d3;let _0x4f1a43=VisuMZ[_0x1aa886(0x66d)][_0x1aa886(0x472)][_0x1aa886(0x816)](this);return _0x4f1a43;},Sprite_Gauge[_0x54b1d3(0x5af)]['drawValue']=function(){const _0x2fcf2e=_0x54b1d3;let _0x382348=this['currentValue']();this[_0x2fcf2e(0x623)]()&&(_0x382348=VisuMZ[_0x2fcf2e(0x8f9)](_0x382348));const _0x13807c=this[_0x2fcf2e(0x1f6)]()-0x1,_0x388ffe=this[_0x2fcf2e(0x490)]?this['textHeight']():this['bitmapHeight']();this[_0x2fcf2e(0x800)](),this[_0x2fcf2e(0x290)]['drawText'](_0x382348,0x0,0x0,_0x13807c,_0x388ffe,_0x2fcf2e(0x5cd));},Sprite_Gauge[_0x54b1d3(0x5af)][_0x54b1d3(0x82e)]=function(){return 0x3;},Sprite_Gauge[_0x54b1d3(0x5af)][_0x54b1d3(0x623)]=function(){const _0x38bbc0=_0x54b1d3;return VisuMZ[_0x38bbc0(0x66d)][_0x38bbc0(0x738)][_0x38bbc0(0x33d)][_0x38bbc0(0x85f)];},Sprite_Gauge['prototype'][_0x54b1d3(0x636)]=function(){const _0x402a67=_0x54b1d3;return ColorManager[_0x402a67(0x65b)]();},Sprite_StateIcon[_0x54b1d3(0x61c)]=VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)]['UI'][_0x54b1d3(0x842)]??!![],VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x246)]=Sprite_StateIcon[_0x54b1d3(0x5af)][_0x54b1d3(0x908)],Sprite_StateIcon[_0x54b1d3(0x5af)][_0x54b1d3(0x908)]=function(){const _0x18051f=_0x54b1d3;Sprite_StateIcon[_0x18051f(0x61c)]?this['loadBitmapCoreEngine']():VisuMZ[_0x18051f(0x66d)]['Sprite_StateIcon_loadBitmap'][_0x18051f(0x816)](this);},Sprite_StateIcon['prototype'][_0x54b1d3(0x3b7)]=function(){const _0x13de8b=_0x54b1d3;this['bitmap']=new Bitmap(ImageManager[_0x13de8b(0x6b5)],ImageManager[_0x13de8b(0x663)]),this['_srcBitmap']=ImageManager[_0x13de8b(0x1f4)](_0x13de8b(0x309));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x4d3)]=Sprite_StateIcon[_0x54b1d3(0x5af)][_0x54b1d3(0x5b0)],Sprite_StateIcon[_0x54b1d3(0x5af)][_0x54b1d3(0x5b0)]=function(){const _0x21c87e=_0x54b1d3;Sprite_StateIcon[_0x21c87e(0x61c)]?this['updateFrameCoreEngine']():VisuMZ['CoreEngine'][_0x21c87e(0x4d3)]['call'](this);},Sprite_StateIcon['prototype'][_0x54b1d3(0x2c4)]=function(){const _0x260143=_0x54b1d3;if(this[_0x260143(0x596)]===this[_0x260143(0x517)])return;this[_0x260143(0x596)]=this[_0x260143(0x517)];const _0x11565f=ImageManager[_0x260143(0x6b5)],_0x481f8c=ImageManager[_0x260143(0x663)],_0x2567d0=this[_0x260143(0x517)]%0x10*_0x11565f,_0x3f94e0=Math[_0x260143(0x7d9)](this[_0x260143(0x517)]/0x10)*_0x481f8c,_0x34503c=this[_0x260143(0x500)],_0x30c532=this[_0x260143(0x290)];_0x30c532[_0x260143(0x1cb)](),_0x30c532[_0x260143(0x954)](_0x34503c,_0x2567d0,_0x3f94e0,_0x11565f,_0x481f8c,0x0,0x0,_0x30c532[_0x260143(0x589)],_0x30c532[_0x260143(0x7c8)]);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x55c)]=Sprite_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x908)],Sprite_Picture[_0x54b1d3(0x5af)]['loadBitmap']=function(){const _0x2c95be=_0x54b1d3;this[_0x2c95be(0x261)]&&this[_0x2c95be(0x261)]['match'](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x2c95be(0x5bb)](Number(RegExp['$1'])):VisuMZ[_0x2c95be(0x66d)]['Sprite_Picture_loadBitmap']['call'](this);},Sprite_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x5bb)]=function(_0x453d0b){const _0x5ddd32=_0x54b1d3,_0xfda17b=ImageManager[_0x5ddd32(0x6b5)],_0x142c7e=ImageManager['iconHeight'],_0x2036ec=this[_0x5ddd32(0x261)]['match'](/SMOOTH/i);this[_0x5ddd32(0x290)]=new Bitmap(_0xfda17b,_0x142c7e);const _0x179a76=ImageManager[_0x5ddd32(0x1f4)](_0x5ddd32(0x309)),_0xcd8ed7=_0x453d0b%0x10*_0xfda17b,_0x10174f=Math['floor'](_0x453d0b/0x10)*_0x142c7e;this[_0x5ddd32(0x290)][_0x5ddd32(0x3a5)]=_0x2036ec,this[_0x5ddd32(0x290)]['blt'](_0x179a76,_0xcd8ed7,_0x10174f,_0xfda17b,_0x142c7e,0x0,0x0,_0xfda17b,_0x142c7e);};function Sprite_TitlePictureButton(){const _0x52df35=_0x54b1d3;this[_0x52df35(0x68b)](...arguments);}Sprite_TitlePictureButton[_0x54b1d3(0x5af)]=Object[_0x54b1d3(0x37e)](Sprite_Clickable[_0x54b1d3(0x5af)]),Sprite_TitlePictureButton[_0x54b1d3(0x5af)][_0x54b1d3(0x62f)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(_0x1693e3){const _0x43a978=_0x54b1d3;Sprite_Clickable['prototype']['initialize']['call'](this),this[_0x43a978(0x2f2)]=_0x1693e3,this[_0x43a978(0x245)]=null,this[_0x43a978(0x70a)]();},Sprite_TitlePictureButton[_0x54b1d3(0x5af)]['setup']=function(){const _0x4d9f8e=_0x54b1d3;this['x']=Graphics[_0x4d9f8e(0x589)],this['y']=Graphics[_0x4d9f8e(0x7c8)],this[_0x4d9f8e(0x900)]=![],this[_0x4d9f8e(0x948)]();},Sprite_TitlePictureButton[_0x54b1d3(0x5af)][_0x54b1d3(0x948)]=function(){const _0x14815d=_0x54b1d3;this[_0x14815d(0x290)]=ImageManager[_0x14815d(0x1b0)](this['_data'][_0x14815d(0x691)]),this[_0x14815d(0x290)][_0x14815d(0x3f4)](this[_0x14815d(0x919)]['bind'](this));},Sprite_TitlePictureButton[_0x54b1d3(0x5af)][_0x54b1d3(0x919)]=function(){const _0x1976bd=_0x54b1d3;this[_0x1976bd(0x2f2)][_0x1976bd(0x323)][_0x1976bd(0x816)](this),this[_0x1976bd(0x2f2)][_0x1976bd(0x8f0)][_0x1976bd(0x816)](this),this['setClickHandler'](this[_0x1976bd(0x2f2)][_0x1976bd(0x29e)][_0x1976bd(0x580)](this));},Sprite_TitlePictureButton['prototype'][_0x54b1d3(0x71b)]=function(){const _0x5c3ebf=_0x54b1d3;Sprite_Clickable[_0x5c3ebf(0x5af)]['update'][_0x5c3ebf(0x816)](this),this[_0x5c3ebf(0x907)](),this[_0x5c3ebf(0x237)]();},Sprite_TitlePictureButton[_0x54b1d3(0x5af)][_0x54b1d3(0x7fd)]=function(){const _0x12a292=_0x54b1d3;return VisuMZ[_0x12a292(0x66d)][_0x12a292(0x738)][_0x12a292(0x351)][_0x12a292(0x704)][_0x12a292(0x54e)];},Sprite_TitlePictureButton['prototype'][_0x54b1d3(0x907)]=function(){const _0x146f53=_0x54b1d3;this[_0x146f53(0x902)]||this['_hovered']?this[_0x146f53(0x78d)]=0xff:(this[_0x146f53(0x78d)]+=this['visible']?this[_0x146f53(0x7fd)]():-0x1*this['fadeSpeed'](),this[_0x146f53(0x78d)]=Math[_0x146f53(0x6c3)](0xc0,this[_0x146f53(0x78d)]));},Sprite_TitlePictureButton[_0x54b1d3(0x5af)][_0x54b1d3(0x953)]=function(_0x4416ea){const _0x172165=_0x54b1d3;this[_0x172165(0x245)]=_0x4416ea;},Sprite_TitlePictureButton['prototype'][_0x54b1d3(0x4dc)]=function(){const _0x2bc426=_0x54b1d3;this[_0x2bc426(0x245)]&&this[_0x2bc426(0x245)]();};function Sprite_ExtendedTile(){this['initialize'](...arguments);}Sprite_ExtendedTile[_0x54b1d3(0x5af)]=Object['create'](Sprite['prototype']),Sprite_ExtendedTile[_0x54b1d3(0x5af)]['constructor']=Sprite_ExtendedTile,Sprite_ExtendedTile[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(_0x17587d,_0x498beb,_0x4cee5c,_0x46c130){const _0x43b89c=_0x54b1d3;this[_0x43b89c(0x754)]=Game_CharacterBase[_0x43b89c(0x577)]||-0x6,this[_0x43b89c(0x282)]=_0x17587d,this['_mapY']=_0x498beb,this[_0x43b89c(0x795)]=_0x4cee5c,this[_0x43b89c(0x1d4)]=_0x46c130,Sprite[_0x43b89c(0x5af)][_0x43b89c(0x68b)][_0x43b89c(0x816)](this),this[_0x43b89c(0x567)](),this[_0x43b89c(0x1c7)](),this[_0x43b89c(0x69f)](),this[_0x43b89c(0x71b)]();},Sprite_ExtendedTile[_0x54b1d3(0x5af)]['createSubSprite']=function(){const _0x414b39=_0x54b1d3;this[_0x414b39(0x32f)]=new Sprite(),this[_0x414b39(0x32f)][_0x414b39(0x223)]['x']=0.5,this[_0x414b39(0x32f)][_0x414b39(0x223)]['y']=0x1,this[_0x414b39(0x32f)]['y']=-this[_0x414b39(0x754)]+0x1,this[_0x414b39(0x8a8)](this[_0x414b39(0x32f)]);},Sprite_ExtendedTile['prototype'][_0x54b1d3(0x1c7)]=function(){const _0xbcc062=_0x54b1d3,_0x8d45b1=$gameMap[_0xbcc062(0x371)](),_0x22c7e5=0x5+Math['floor'](this[_0xbcc062(0x795)]/0x100);this[_0xbcc062(0x32f)][_0xbcc062(0x290)]=ImageManager[_0xbcc062(0x1a0)](_0x8d45b1[_0xbcc062(0x884)][_0x22c7e5]);},Sprite_ExtendedTile[_0x54b1d3(0x5af)]['setTileFrame']=function(){const _0x1a8e10=_0x54b1d3,_0x2cd1da=this[_0x1a8e10(0x795)],_0x13f650=$gameMap[_0x1a8e10(0x483)](),_0x46adbc=$gameMap[_0x1a8e10(0x5a6)](),_0x1b7591=(Math[_0x1a8e10(0x7d9)](_0x2cd1da/0x80)%0x2*0x8+_0x2cd1da%0x8)*_0x13f650,_0x229ce9=Math[_0x1a8e10(0x7d9)](_0x2cd1da%0x100/0x8)%0x10*_0x46adbc,_0xb91b5=this[_0x1a8e10(0x1d4)]*_0x46adbc;this['_tileSprite']['setFrame'](_0x1b7591,_0x229ce9-_0xb91b5,_0x13f650,_0x46adbc+_0xb91b5);},Sprite_ExtendedTile[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x10576b=_0x54b1d3;Sprite['prototype'][_0x10576b(0x71b)][_0x10576b(0x816)](this),this[_0x10576b(0x437)]();},Sprite_ExtendedTile['prototype'][_0x54b1d3(0x437)]=function(){const _0x2923d1=_0x54b1d3,_0x38cc6a=$gameMap['tileWidth'](),_0x23855a=$gameMap['tileHeight'](),_0x2017d0=this['_mapX'],_0x54ba4d=this['_mapY'];this['x']=Math['floor'](($gameMap[_0x2923d1(0x516)](_0x2017d0)+0.5)*_0x38cc6a),this['y']=Math[_0x2923d1(0x7d9)](($gameMap[_0x2923d1(0x8fb)](_0x54ba4d)+0x1)*_0x23855a)+this[_0x2923d1(0x754)]-0x1;},VisuMZ[_0x54b1d3(0x66d)]['Spriteset_Base_initialize']=Spriteset_Base['prototype']['initialize'],Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(){const _0x357cd6=_0x54b1d3;VisuMZ[_0x357cd6(0x66d)][_0x357cd6(0x3a1)]['call'](this),this[_0x357cd6(0x77c)]();},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x77c)]=function(){const _0x1fac82=_0x54b1d3;this[_0x1fac82(0x603)]=[],this[_0x1fac82(0x45b)]=[],this[_0x1fac82(0x860)]=this[_0x1fac82(0x6ff)]['x'],this[_0x1fac82(0x887)]=this['scale']['y'];},VisuMZ['CoreEngine'][_0x54b1d3(0x432)]=Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x5ad)],Spriteset_Base['prototype']['destroy']=function(_0xe1e111){const _0x570ca6=_0x54b1d3;this[_0x570ca6(0x602)](),this[_0x570ca6(0x397)](),VisuMZ[_0x570ca6(0x66d)][_0x570ca6(0x432)][_0x570ca6(0x816)](this,_0xe1e111);},VisuMZ[_0x54b1d3(0x66d)]['Spriteset_Base_update']=Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)],Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0xa2101f=_0x54b1d3;VisuMZ[_0xa2101f(0x66d)][_0xa2101f(0x7b2)]['call'](this),this[_0xa2101f(0x1ce)](),this[_0xa2101f(0x8ef)](),this[_0xa2101f(0x325)](),this[_0xa2101f(0x6b8)]();},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x1ce)]=function(){},Spriteset_Base['prototype'][_0x54b1d3(0x8ef)]=function(){const _0x43957b=_0x54b1d3;if(!VisuMZ[_0x43957b(0x66d)][_0x43957b(0x738)][_0x43957b(0x33d)][_0x43957b(0x91f)])return;if(this[_0x43957b(0x860)]===this[_0x43957b(0x6ff)]['x']&&this['_cacheScaleY']===this[_0x43957b(0x6ff)]['y'])return;this['adjustPictureAntiZoom'](),this[_0x43957b(0x860)]=this['scale']['x'],this[_0x43957b(0x887)]=this[_0x43957b(0x6ff)]['y'];},Spriteset_Base['prototype'][_0x54b1d3(0x94c)]=function(){const _0x471534=_0x54b1d3;if(SceneManager[_0x471534(0x555)]()&&Spriteset_Map[_0x471534(0x77d)])return;else{if(SceneManager[_0x471534(0x1c3)]()&&Spriteset_Battle[_0x471534(0x77d)])return;}this['scale']['x']!==0x0&&(this[_0x471534(0x750)]['scale']['x']=0x1/this[_0x471534(0x6ff)]['x'],this[_0x471534(0x750)]['x']=-(this['x']/this[_0x471534(0x6ff)]['x'])),this[_0x471534(0x6ff)]['y']!==0x0&&(this['_pictureContainer'][_0x471534(0x6ff)]['y']=0x1/this[_0x471534(0x6ff)]['y'],this[_0x471534(0x750)]['y']=-(this['y']/this[_0x471534(0x6ff)]['y']));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x6fa)]=Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x437)],Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x437)]=function(){VisuMZ['CoreEngine']['Spriteset_Base_updatePosition']['call'](this),this['updatePositionCoreEngine']();},Spriteset_Base[_0x54b1d3(0x5af)]['updatePositionCoreEngine']=function(){const _0x3011f1=_0x54b1d3;if(!$gameScreen)return;if($gameScreen[_0x3011f1(0x6df)]<=0x0)return;this['x']-=Math[_0x3011f1(0x48a)]($gameScreen[_0x3011f1(0x4bd)]());const _0x35b938=$gameScreen[_0x3011f1(0x946)]();switch($gameScreen[_0x3011f1(0x946)]()){case _0x3011f1(0x59a):this[_0x3011f1(0x526)]();break;case'horizontal':this[_0x3011f1(0x5fb)]();break;case _0x3011f1(0x4e8):this[_0x3011f1(0x58d)]();break;default:this[_0x3011f1(0x1c0)]();break;}},Spriteset_Base['prototype'][_0x54b1d3(0x526)]=function(){const _0x56a6b1=_0x54b1d3,_0x325113=VisuMZ[_0x56a6b1(0x66d)][_0x56a6b1(0x738)]['ScreenShake'];if(_0x325113&&_0x325113[_0x56a6b1(0x41d)])return _0x325113[_0x56a6b1(0x41d)][_0x56a6b1(0x816)](this);this['x']+=Math[_0x56a6b1(0x48a)]($gameScreen['shake']());},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x1c0)]=function(){const _0x347070=_0x54b1d3,_0x124ae9=VisuMZ[_0x347070(0x66d)][_0x347070(0x738)][_0x347070(0x6a5)];if(_0x124ae9&&_0x124ae9[_0x347070(0x6ec)])return _0x124ae9[_0x347070(0x6ec)][_0x347070(0x816)](this);const _0x1d4176=$gameScreen[_0x347070(0x5b1)]*0.75,_0x35aa8f=$gameScreen['_shakeSpeed']*0.6,_0x46b18a=$gameScreen[_0x347070(0x6df)];this['x']+=Math[_0x347070(0x48a)](Math[_0x347070(0x745)](_0x1d4176)-Math[_0x347070(0x745)](_0x35aa8f))*(Math[_0x347070(0x6c3)](_0x46b18a,0x1e)*0.5),this['y']+=Math[_0x347070(0x48a)](Math[_0x347070(0x745)](_0x1d4176)-Math[_0x347070(0x745)](_0x35aa8f))*(Math['min'](_0x46b18a,0x1e)*0.5);},Spriteset_Base[_0x54b1d3(0x5af)]['updatePositionCoreEngineShakeHorz']=function(){const _0x2d37f7=_0x54b1d3,_0x4925f5=VisuMZ[_0x2d37f7(0x66d)][_0x2d37f7(0x738)][_0x2d37f7(0x6a5)];if(_0x4925f5&&_0x4925f5[_0x2d37f7(0x4e4)])return _0x4925f5[_0x2d37f7(0x4e4)]['call'](this);const _0x2cd613=$gameScreen['_shakePower']*0.75,_0x27b001=$gameScreen[_0x2d37f7(0x265)]*0.6,_0x2f9f9f=$gameScreen[_0x2d37f7(0x6df)];this['x']+=Math[_0x2d37f7(0x48a)](Math[_0x2d37f7(0x745)](_0x2cd613)-Math[_0x2d37f7(0x745)](_0x27b001))*(Math[_0x2d37f7(0x6c3)](_0x2f9f9f,0x1e)*0.5);},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x58d)]=function(){const _0x24ec76=_0x54b1d3,_0x236f69=VisuMZ[_0x24ec76(0x66d)][_0x24ec76(0x738)][_0x24ec76(0x6a5)];if(_0x236f69&&_0x236f69[_0x24ec76(0x844)])return _0x236f69[_0x24ec76(0x844)][_0x24ec76(0x816)](this);const _0x290b86=$gameScreen[_0x24ec76(0x5b1)]*0.75,_0x5581a1=$gameScreen[_0x24ec76(0x265)]*0.6,_0x29aeca=$gameScreen[_0x24ec76(0x6df)];this['y']+=Math[_0x24ec76(0x48a)](Math[_0x24ec76(0x745)](_0x290b86)-Math['randomInt'](_0x5581a1))*(Math[_0x24ec76(0x6c3)](_0x29aeca,0x1e)*0.5);},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x325)]=function(){const _0x41c03c=_0x54b1d3;for(const _0x153f1c of this[_0x41c03c(0x603)]){!_0x153f1c[_0x41c03c(0x859)]()&&this['removeFauxAnimation'](_0x153f1c);}this[_0x41c03c(0x8c7)]();},Spriteset_Base['prototype'][_0x54b1d3(0x8c7)]=function(){const _0x44601f=_0x54b1d3;for(;;){const _0x25f050=$gameTemp[_0x44601f(0x1fa)]();if(_0x25f050)this[_0x44601f(0x762)](_0x25f050);else break;}},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x762)]=function(_0x38f219){const _0x33aa3b=_0x54b1d3,_0x4b1789=$dataAnimations[_0x38f219['animationId']],_0x508363=_0x38f219['targets'],_0xbed6fc=_0x38f219[_0x33aa3b(0x917)],_0x123a8b=_0x38f219[_0x33aa3b(0x2b6)];let _0x75594=this[_0x33aa3b(0x87a)]();const _0x459cd1=this['animationNextDelay']();if(this[_0x33aa3b(0x7dc)](_0x4b1789))for(const _0x4cbb46 of _0x508363){this['createFauxAnimationSprite']([_0x4cbb46],_0x4b1789,_0xbed6fc,_0x75594,_0x123a8b),_0x75594+=_0x459cd1;}else this[_0x33aa3b(0x94a)](_0x508363,_0x4b1789,_0xbed6fc,_0x75594,_0x123a8b);},Spriteset_Base['prototype'][_0x54b1d3(0x426)]=function(_0x356402,_0x351b5c,_0x243a50,_0x154b32){const _0x2c6674=_0x54b1d3,_0x22c302=this[_0x2c6674(0x5b6)](_0x351b5c),_0x3f2001=new(_0x22c302?Sprite_AnimationMV:Sprite_Animation)(),_0x3e5d52=this['makeTargetSprites'](_0x356402),_0x1bca0a=this[_0x2c6674(0x87a)](),_0x4d1f9b=_0x154b32>_0x1bca0a?this['lastAnimationSprite']():null;this[_0x2c6674(0x458)](_0x356402[0x0])&&(_0x243a50=!_0x243a50),_0x3f2001['targetObjects']=_0x356402,_0x3f2001[_0x2c6674(0x70a)](_0x3e5d52,_0x351b5c,_0x243a50,_0x154b32,_0x4d1f9b),this[_0x2c6674(0x213)](_0x3f2001),this[_0x2c6674(0x1ec)][_0x2c6674(0x3eb)](_0x3f2001);},Spriteset_Base['prototype'][_0x54b1d3(0x94a)]=function(_0x26436d,_0x4ac32b,_0x133f59,_0x3f8876,_0x1fe470){const _0x5d323b=_0x54b1d3,_0x158793=this[_0x5d323b(0x5b6)](_0x4ac32b),_0xfbec32=new(_0x158793?Sprite_AnimationMV:Sprite_Animation)(),_0x2baf4b=this[_0x5d323b(0x7bb)](_0x26436d);this[_0x5d323b(0x458)](_0x26436d[0x0])&&(_0x133f59=!_0x133f59);_0xfbec32[_0x5d323b(0x6e7)]=_0x26436d,_0xfbec32['setup'](_0x2baf4b,_0x4ac32b,_0x133f59,_0x3f8876),_0xfbec32[_0x5d323b(0x8ec)](_0x1fe470),this[_0x5d323b(0x213)](_0xfbec32);if(this['_animationSprites'])this[_0x5d323b(0x1ec)][_0x5d323b(0x1bf)](_0xfbec32);this[_0x5d323b(0x603)]['push'](_0xfbec32);},Spriteset_Base['prototype'][_0x54b1d3(0x213)]=function(_0x391a55){const _0x1ed63c=_0x54b1d3;this[_0x1ed63c(0x217)][_0x1ed63c(0x8a8)](_0x391a55);},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x608)]=function(_0x9cbecd){const _0x5dbc50=_0x54b1d3;this[_0x5dbc50(0x1ec)][_0x5dbc50(0x1bf)](_0x9cbecd),this[_0x5dbc50(0x76d)](_0x9cbecd);for(const _0x3fe079 of _0x9cbecd[_0x5dbc50(0x6e7)]){_0x3fe079['endAnimation']&&_0x3fe079['endAnimation']();}_0x9cbecd[_0x5dbc50(0x5ad)]();},Spriteset_Base['prototype']['removeFauxAnimation']=function(_0x1e7c1e){const _0x3ee4bf=_0x54b1d3;this[_0x3ee4bf(0x603)]['remove'](_0x1e7c1e),this[_0x3ee4bf(0x76d)](_0x1e7c1e);for(const _0xa5e1ea of _0x1e7c1e[_0x3ee4bf(0x6e7)]){_0xa5e1ea['endAnimation']&&_0xa5e1ea[_0x3ee4bf(0x655)]();}_0x1e7c1e[_0x3ee4bf(0x5ad)]();},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x76d)]=function(_0x1fca27){const _0x3ff289=_0x54b1d3;this[_0x3ff289(0x217)][_0x3ff289(0x5b9)](_0x1fca27);},Spriteset_Base[_0x54b1d3(0x5af)]['removeAllFauxAnimations']=function(){const _0x2b63b6=_0x54b1d3;for(const _0x4557cc of this[_0x2b63b6(0x603)]){this['removeFauxAnimation'](_0x4557cc);}},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x299)]=function(){const _0x205181=_0x54b1d3;return this[_0x205181(0x603)][_0x205181(0x506)]>0x0;},Spriteset_Base['prototype'][_0x54b1d3(0x6b8)]=function(){const _0x531ce1=_0x54b1d3;for(const _0x6b850a of this[_0x531ce1(0x45b)]){!_0x6b850a[_0x531ce1(0x859)]()&&this[_0x531ce1(0x2ea)](_0x6b850a);}this[_0x531ce1(0x1fc)]();},Spriteset_Base['prototype'][_0x54b1d3(0x1fc)]=function(){const _0x4cd7e2=_0x54b1d3;for(;;){const _0xa9edfd=$gameTemp[_0x4cd7e2(0x4d7)]();if(_0xa9edfd)this[_0x4cd7e2(0x49b)](_0xa9edfd);else break;}},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x49b)]=function(_0x40656a){const _0x3c2caf=_0x54b1d3,_0x4ffce6=$dataAnimations[_0x40656a[_0x3c2caf(0x6a6)]],_0x3a200a=this['createPointAnimationTargets'](_0x40656a),_0x1d6a8f=_0x40656a[_0x3c2caf(0x917)],_0x56d03d=_0x40656a[_0x3c2caf(0x2b6)];let _0x979fc2=this['animationBaseDelay']();const _0x7ad38e=this[_0x3c2caf(0x7f7)]();if(this[_0x3c2caf(0x7dc)](_0x4ffce6))for(const _0x23eedf of _0x3a200a){this[_0x3c2caf(0x2bc)]([_0x23eedf],_0x4ffce6,_0x1d6a8f,_0x979fc2,_0x56d03d),_0x979fc2+=_0x7ad38e;}else this[_0x3c2caf(0x2bc)](_0x3a200a,_0x4ffce6,_0x1d6a8f,_0x979fc2,_0x56d03d);},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x23a)]=function(_0x530d0d){const _0x1c99b3=_0x54b1d3,_0x309dde=new Sprite_Clickable(),_0x26f8bb=this[_0x1c99b3(0x57f)]();_0x309dde['x']=_0x530d0d['x']-_0x26f8bb['x'],_0x309dde['y']=_0x530d0d['y']-_0x26f8bb['y'],_0x309dde['z']=0x64;const _0x57ea44=this[_0x1c99b3(0x57f)]();return _0x57ea44['addChild'](_0x309dde),[_0x309dde];},Spriteset_Base['prototype'][_0x54b1d3(0x57f)]=function(){return this;},Spriteset_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x57f)]=function(){const _0x579a61=_0x54b1d3;return this[_0x579a61(0x4c9)]||this;},Spriteset_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x57f)]=function(){return this['_battleField']||this;},Spriteset_Base['prototype'][_0x54b1d3(0x2bc)]=function(_0x5a55ab,_0x3edc8f,_0x50a338,_0x2b3d1b,_0x14c616){const _0x3cdeba=_0x54b1d3,_0x2a21a5=this['isMVAnimation'](_0x3edc8f),_0x156c5a=new(_0x2a21a5?Sprite_AnimationMV:Sprite_Animation)();_0x156c5a[_0x3cdeba(0x6e7)]=_0x5a55ab,_0x156c5a[_0x3cdeba(0x70a)](_0x5a55ab,_0x3edc8f,_0x50a338,_0x2b3d1b),_0x156c5a[_0x3cdeba(0x8ec)](_0x14c616),this[_0x3cdeba(0x213)](_0x156c5a),this['_pointAnimationSprites']['push'](_0x156c5a);},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x2ea)]=function(_0x2cdc32){const _0x5de02d=_0x54b1d3;this['_pointAnimationSprites'][_0x5de02d(0x1bf)](_0x2cdc32),this[_0x5de02d(0x217)][_0x5de02d(0x5b9)](_0x2cdc32);for(const _0x5700fe of _0x2cdc32['targetObjects']){_0x5700fe[_0x5de02d(0x655)]&&_0x5700fe['endAnimation']();const _0x156b20=this[_0x5de02d(0x57f)]();if(_0x156b20)_0x156b20[_0x5de02d(0x5b9)](_0x5700fe);}_0x2cdc32['destroy']();},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x397)]=function(){const _0x5602c8=_0x54b1d3;for(const _0x5724f of this[_0x5602c8(0x45b)]){this[_0x5602c8(0x2ea)](_0x5724f);}},Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x6e1)]=function(){const _0x2cf918=_0x54b1d3;return this[_0x2cf918(0x45b)][_0x2cf918(0x506)]>0x0;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x579)]=Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x588)],Spriteset_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x588)]=function(){const _0x5ce072=_0x54b1d3;return VisuMZ[_0x5ce072(0x66d)][_0x5ce072(0x579)][_0x5ce072(0x816)](this)||this[_0x5ce072(0x6e1)]();},Spriteset_Map['DETACH_PICTURE_CONTAINER']=VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x33d)][_0x54b1d3(0x511)]||![],VisuMZ[_0x54b1d3(0x66d)]['Scene_Map_createSpriteset_detach']=Scene_Map[_0x54b1d3(0x5af)]['createSpriteset'],Scene_Map[_0x54b1d3(0x5af)]['createSpriteset']=function(){const _0x4cb1fd=_0x54b1d3;VisuMZ[_0x4cb1fd(0x66d)][_0x4cb1fd(0x408)]['call'](this);if(!Spriteset_Map['DETACH_PICTURE_CONTAINER'])return;const _0x563bc7=this[_0x4cb1fd(0x622)];if(!_0x563bc7)return;this['_pictureContainer']=_0x563bc7[_0x4cb1fd(0x750)];if(!this[_0x4cb1fd(0x750)])return;this[_0x4cb1fd(0x8a8)](this[_0x4cb1fd(0x750)]);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x731)]=Spriteset_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x399)],Spriteset_Map['prototype'][_0x54b1d3(0x399)]=function(){const _0x2c1702=_0x54b1d3;VisuMZ[_0x2c1702(0x66d)][_0x2c1702(0x731)]['call'](this),this[_0x2c1702(0x334)]();},Spriteset_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x334)]=function(){const _0x72c015=_0x54b1d3,_0x35155d=$gameMap[_0x72c015(0x371)]();if(!_0x35155d)return;const _0x545425=$gameMap[_0x72c015(0x725)]();if(Object['keys'](_0x545425)[_0x72c015(0x506)]<=0x0)return;const _0x33e106=$gameMap[_0x72c015(0x505)]();this['_tileExtendSprites']=this[_0x72c015(0x43f)]||[];for(let _0x37cc2a=0x0;_0x37cc2a<$gameMap['height']();_0x37cc2a++){for(let _0x54bdb7=0x0;_0x54bdb7<$gameMap[_0x72c015(0x589)]();_0x54bdb7++){for(const _0x55cf71 of $gameMap['layeredTiles'](_0x54bdb7,_0x37cc2a)){const _0x513a8a=_0x33e106[_0x55cf71]>>0xc,_0x6eac54=_0x545425[_0x513a8a]||0x0;if(_0x6eac54<=0x0)continue;this['createExtendedTileSprite'](_0x54bdb7,_0x37cc2a,_0x55cf71,_0x6eac54);}}}},Spriteset_Map[_0x54b1d3(0x5af)]['removeTileExtendSprites']=function(){const _0xe63861=_0x54b1d3;this[_0xe63861(0x43f)]=this[_0xe63861(0x43f)]||[];for(const _0x3d8c13 of this['_tileExtendSprites']){this[_0xe63861(0x4c9)][_0xe63861(0x5b9)](_0x3d8c13);}this[_0xe63861(0x43f)]=[];},Spriteset_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x379)]=function(_0x1f8a66,_0x37ac6f,_0x39fc71,_0x7d0146){const _0x126d32=_0x54b1d3,_0x317203=new Sprite_ExtendedTile(_0x1f8a66,_0x37ac6f,_0x39fc71,_0x7d0146),_0x81cb96=$gameMap[_0x126d32(0x505)]();_0x81cb96[_0x39fc71]&0x10?_0x317203['z']=0x4:_0x317203['z']=0x3,this[_0x126d32(0x4c9)][_0x126d32(0x8a8)](_0x317203),this[_0x126d32(0x43f)][_0x126d32(0x3eb)](_0x317203);},VisuMZ[_0x54b1d3(0x66d)]['Tilemap_addSpotTile']=Tilemap['prototype']['_addSpotTile'],Tilemap['prototype'][_0x54b1d3(0x600)]=function(_0x41f24d,_0x2bc442,_0x10d58e){const _0x4c6db5=_0x54b1d3;if($gameMap[_0x4c6db5(0x606)](_0x41f24d))return;VisuMZ[_0x4c6db5(0x66d)]['Tilemap_addSpotTile']['call'](this,_0x41f24d,_0x2bc442,_0x10d58e);},Spriteset_Battle['DETACH_PICTURE_CONTAINER']=VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x33d)][_0x54b1d3(0x2d7)]||![],VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x5b8)]=Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x492)],Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x492)]=function(){const _0x8ce76e=_0x54b1d3;VisuMZ[_0x8ce76e(0x66d)][_0x8ce76e(0x5b8)]['call'](this);if(!Spriteset_Battle[_0x8ce76e(0x77d)])return;const _0x5805bb=this[_0x8ce76e(0x622)];if(!_0x5805bb)return;this[_0x8ce76e(0x750)]=_0x5805bb[_0x8ce76e(0x750)];if(!this[_0x8ce76e(0x750)])return;this[_0x8ce76e(0x8a8)](this[_0x8ce76e(0x750)]);},Spriteset_Battle['prototype'][_0x54b1d3(0x5a1)]=function(){const _0x2420dc=_0x54b1d3;this[_0x2420dc(0x497)]=new PIXI[(_0x2420dc(0x7c9))][(_0x2420dc(0x659))](clamp=!![]),this['_backgroundSprite']=new Sprite(),this[_0x2420dc(0x819)][_0x2420dc(0x290)]=SceneManager['backgroundBitmap'](),this[_0x2420dc(0x819)]['filters']=[this['_backgroundFilter']],this[_0x2420dc(0x523)][_0x2420dc(0x8a8)](this[_0x2420dc(0x819)]);},VisuMZ[_0x54b1d3(0x66d)]['Spriteset_Battle_createEnemies']=Spriteset_Battle[_0x54b1d3(0x5af)]['createEnemies'],Spriteset_Battle[_0x54b1d3(0x5af)]['createEnemies']=function(){const _0x4c622a=_0x54b1d3;this['coreEngineRepositionEnemies']()&&this[_0x4c622a(0x51f)](),VisuMZ[_0x4c622a(0x66d)][_0x4c622a(0x5c5)]['call'](this);},Spriteset_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x873)]=function(){const _0x652f=_0x54b1d3,_0x3e510f=VisuMZ[_0x652f(0x66d)][_0x652f(0x738)][_0x652f(0x26f)];if(!_0x3e510f)return![];if(Utils[_0x652f(0x893)]>='1.3.0'&&!_0x3e510f[_0x652f(0x5f9)])return![];return _0x3e510f[_0x652f(0x48c)];},Spriteset_Battle[_0x54b1d3(0x5af)]['repositionEnemiesByResolution']=function(){const _0x47dae1=_0x54b1d3;for(member of $gameTroop['members']()){member[_0x47dae1(0x890)]();}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x287)]=Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(_0x2070b9){const _0xd413a=_0x54b1d3;_0x2070b9['x']=Math[_0xd413a(0x48a)](_0x2070b9['x']),_0x2070b9['y']=Math['round'](_0x2070b9['y']),_0x2070b9[_0xd413a(0x589)]=Math[_0xd413a(0x48a)](_0x2070b9['width']),_0x2070b9[_0xd413a(0x7c8)]=Math[_0xd413a(0x48a)](_0x2070b9['height']),this[_0xd413a(0x206)](),VisuMZ[_0xd413a(0x66d)][_0xd413a(0x287)][_0xd413a(0x816)](this,_0x2070b9),this[_0xd413a(0x8d0)]();},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x206)]=function(){const _0x2bc7b3=_0x54b1d3;this[_0x2bc7b3(0x63c)]=VisuMZ['CoreEngine'][_0x2bc7b3(0x738)][_0x2bc7b3(0x33d)][_0x2bc7b3(0x5cb)],this[_0x2bc7b3(0x6a7)]=VisuMZ[_0x2bc7b3(0x66d)][_0x2bc7b3(0x738)][_0x2bc7b3(0x33d)][_0x2bc7b3(0x944)];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x939)]=function(){const _0x5f197d=_0x54b1d3;return VisuMZ['CoreEngine'][_0x5f197d(0x738)][_0x5f197d(0x1f2)][_0x5f197d(0x3c5)];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x533)]=function(){const _0x552eb3=_0x54b1d3;return VisuMZ[_0x552eb3(0x66d)][_0x552eb3(0x738)][_0x552eb3(0x1f2)][_0x552eb3(0x2fc)];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x6ea)]=function(){const _0x4ac42e=_0x54b1d3;$gameSystem['windowOpacity']?this[_0x4ac42e(0x51a)]=$gameSystem['windowOpacity']():this[_0x4ac42e(0x51a)]=VisuMZ['CoreEngine'][_0x4ac42e(0x738)][_0x4ac42e(0x1f2)][_0x4ac42e(0x719)];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x83b)]=function(){const _0x1a1cd5=_0x54b1d3;return VisuMZ[_0x1a1cd5(0x66d)]['Settings']['Window']['TranslucentOpacity'];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x1b1)]=function(){const _0x575d23=_0x54b1d3;return VisuMZ[_0x575d23(0x66d)][_0x575d23(0x738)][_0x575d23(0x1f2)][_0x575d23(0x546)];},VisuMZ['CoreEngine'][_0x54b1d3(0x5f8)]=Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x3f36ee=_0x54b1d3;VisuMZ[_0x3f36ee(0x66d)][_0x3f36ee(0x5f8)][_0x3f36ee(0x816)](this),this['updateCoreEasing']();},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x768)]=function(){const _0x1b6d2e=_0x54b1d3;this[_0x1b6d2e(0x744)]&&(this[_0x1b6d2e(0x41f)]+=this['openingSpeed'](),this[_0x1b6d2e(0x56e)]()&&(this[_0x1b6d2e(0x744)]=![]));},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x46c)]=function(){const _0x57cb7b=_0x54b1d3;this['_closing']&&(this[_0x57cb7b(0x41f)]-=this['openingSpeed'](),this[_0x57cb7b(0x4c8)]()&&(this[_0x57cb7b(0x5d2)]=![]));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x3cb)]=Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x2b9)],Window_Base[_0x54b1d3(0x5af)]['drawText']=function(_0x2da462,_0x38d4c6,_0x36433e,_0x2ccd4c,_0x3c7261){const _0x69f1db=_0x54b1d3;if(this[_0x69f1db(0x623)]())_0x2da462=VisuMZ[_0x69f1db(0x8f9)](_0x2da462);VisuMZ[_0x69f1db(0x66d)]['Window_Base_drawText'][_0x69f1db(0x816)](this,_0x2da462,_0x38d4c6,_0x36433e,_0x2ccd4c,_0x3c7261);},Window_Base['prototype']['useDigitGrouping']=function(){const _0x3664af=_0x54b1d3;return this[_0x3664af(0x63c)];},VisuMZ['CoreEngine'][_0x54b1d3(0x950)]=Window_Base['prototype'][_0x54b1d3(0x7a3)],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7a3)]=function(_0x1d1c36,_0x420df1,_0x2f0d6e,_0x33b82a){const _0x39216f=_0x54b1d3;var _0x4a9226=VisuMZ['CoreEngine']['Window_Base_createTextState'][_0x39216f(0x816)](this,_0x1d1c36,_0x420df1,_0x2f0d6e,_0x33b82a);if(this['useDigitGroupingEx']())_0x4a9226['text']=String(VisuMZ['GroupDigits'](_0x4a9226[_0x39216f(0x19b)]))||'';return _0x4a9226;},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x60a)]=function(){const _0x41d05=_0x54b1d3;return this[_0x41d05(0x6a7)];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x443)]=function(_0x5b01e6){this['_digitGrouping']=_0x5b01e6;},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x605)]=function(_0x4f83fd){const _0x427f6a=_0x54b1d3;this[_0x427f6a(0x6a7)]=_0x4f83fd;},VisuMZ['CoreEngine'][_0x54b1d3(0x6b4)]=Window_Base[_0x54b1d3(0x5af)]['drawIcon'],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7ab)]=function(_0x25598b,_0x507de0,_0x253fa8){const _0x2f73eb=_0x54b1d3;_0x507de0=Math[_0x2f73eb(0x48a)](_0x507de0),_0x253fa8=Math['round'](_0x253fa8),VisuMZ[_0x2f73eb(0x66d)]['Window_Base_drawIcon']['call'](this,_0x25598b,_0x507de0,_0x253fa8);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x214)]=Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x4e6)],Window_Base[_0x54b1d3(0x5af)]['drawFace']=function(_0x5e03ab,_0x45ea99,_0x4cfafd,_0x19c228,_0x3dbf1e,_0x580098){const _0x20903d=_0x54b1d3;_0x3dbf1e=_0x3dbf1e||ImageManager[_0x20903d(0x4fd)],_0x580098=_0x580098||ImageManager['faceHeight'],_0x4cfafd=Math[_0x20903d(0x48a)](_0x4cfafd),_0x19c228=Math[_0x20903d(0x48a)](_0x19c228),_0x3dbf1e=Math[_0x20903d(0x48a)](_0x3dbf1e),_0x580098=Math['round'](_0x580098),VisuMZ[_0x20903d(0x66d)][_0x20903d(0x214)][_0x20903d(0x816)](this,_0x5e03ab,_0x45ea99,_0x4cfafd,_0x19c228,_0x3dbf1e,_0x580098);},VisuMZ['CoreEngine'][_0x54b1d3(0x3a7)]=Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x35c)],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x35c)]=function(_0x3cfb93,_0x5f2290,_0x1f0a16,_0x195088){const _0x3440e1=_0x54b1d3;_0x1f0a16=Math[_0x3440e1(0x48a)](_0x1f0a16),_0x195088=Math['round'](_0x195088),VisuMZ[_0x3440e1(0x66d)]['Window_Base_drawCharacter']['call'](this,_0x3cfb93,_0x5f2290,_0x1f0a16,_0x195088);},VisuMZ['CoreEngine'][_0x54b1d3(0x520)]=Window_Selectable[_0x54b1d3(0x5af)]['itemRect'],Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x8dc)]=function(_0x1c7f5d){const _0x42482e=_0x54b1d3;let _0x2ba966=VisuMZ[_0x42482e(0x66d)]['Window_Selectable_itemRect'][_0x42482e(0x816)](this,_0x1c7f5d);return _0x2ba966['x']=Math['round'](_0x2ba966['x']),_0x2ba966['y']=Math[_0x42482e(0x48a)](_0x2ba966['y']),_0x2ba966[_0x42482e(0x589)]=Math[_0x42482e(0x48a)](_0x2ba966[_0x42482e(0x589)]),_0x2ba966[_0x42482e(0x7c8)]=Math[_0x42482e(0x48a)](_0x2ba966[_0x42482e(0x7c8)]),_0x2ba966;},VisuMZ['CoreEngine'][_0x54b1d3(0x716)]=Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x49d)],Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x49d)]=function(_0xee9b41,_0x2f7237,_0x2a77bc){const _0x1512d8=_0x54b1d3;_0x2f7237=Math[_0x1512d8(0x48a)](_0x2f7237),_0x2a77bc=Math[_0x1512d8(0x48a)](_0x2a77bc),VisuMZ[_0x1512d8(0x66d)][_0x1512d8(0x716)][_0x1512d8(0x816)](this,_0xee9b41,_0x2f7237,_0x2a77bc);},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x8d0)]=function(){const _0x7a17af=_0x54b1d3;this[_0x7a17af(0x8f4)]={'duration':0x0,'wholeDuration':0x0,'type':_0x7a17af(0x573),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x7a17af(0x6ff)]['x'],'targetScaleY':this[_0x7a17af(0x6ff)]['y'],'targetOpacity':this['opacity'],'targetBackOpacity':this[_0x7a17af(0x51a)],'targetContentsOpacity':this[_0x7a17af(0x578)]};},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x82a)]=function(){const _0x2c25d2=_0x54b1d3;if(!this[_0x2c25d2(0x8f4)])return;if(this[_0x2c25d2(0x8f4)][_0x2c25d2(0x644)]<=0x0)return;this['x']=this[_0x2c25d2(0x509)](this['x'],this[_0x2c25d2(0x8f4)]['targetX']),this['y']=this[_0x2c25d2(0x509)](this['y'],this[_0x2c25d2(0x8f4)]['targetY']),this[_0x2c25d2(0x6ff)]['x']=this[_0x2c25d2(0x509)](this[_0x2c25d2(0x6ff)]['x'],this['_coreEasing'][_0x2c25d2(0x332)]),this['scale']['y']=this['applyCoreEasing'](this[_0x2c25d2(0x6ff)]['y'],this[_0x2c25d2(0x8f4)]['targetScaleY']),this[_0x2c25d2(0x78d)]=this['applyCoreEasing'](this[_0x2c25d2(0x78d)],this[_0x2c25d2(0x8f4)][_0x2c25d2(0x38d)]),this[_0x2c25d2(0x51a)]=this[_0x2c25d2(0x509)](this[_0x2c25d2(0x51a)],this[_0x2c25d2(0x8f4)]['targetBackOpacity']),this['contentsOpacity']=this[_0x2c25d2(0x509)](this[_0x2c25d2(0x578)],this['_coreEasing'][_0x2c25d2(0x7a2)]),this[_0x2c25d2(0x8f4)][_0x2c25d2(0x644)]--;},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x509)]=function(_0x516cd5,_0x28ab0a){const _0xe2b654=_0x54b1d3;if(!this[_0xe2b654(0x8f4)])return _0x28ab0a;const _0x364f8=this[_0xe2b654(0x8f4)][_0xe2b654(0x644)],_0x4a637a=this[_0xe2b654(0x8f4)]['wholeDuration'],_0x3f2d57=this['calcCoreEasing']((_0x4a637a-_0x364f8)/_0x4a637a),_0x21fa4a=this['calcCoreEasing']((_0x4a637a-_0x364f8+0x1)/_0x4a637a),_0x1cfb4c=(_0x516cd5-_0x28ab0a*_0x3f2d57)/(0x1-_0x3f2d57);return _0x1cfb4c+(_0x28ab0a-_0x1cfb4c)*_0x21fa4a;},Window_Base[_0x54b1d3(0x5af)]['calcCoreEasing']=function(_0x4e86a2){const _0x1a24fe=_0x54b1d3;if(!this[_0x1a24fe(0x8f4)])return _0x4e86a2;return VisuMZ['ApplyEasing'](_0x4e86a2,this[_0x1a24fe(0x8f4)][_0x1a24fe(0x1f0)]||_0x1a24fe(0x573));},Window_Base[_0x54b1d3(0x5af)]['anchorCoreEasing']=function(_0x5e8eac,_0x5aef8f){const _0x450a11=_0x54b1d3;if(!this[_0x450a11(0x8f4)])return;this['x']=this[_0x450a11(0x8f4)][_0x450a11(0x64d)],this['y']=this[_0x450a11(0x8f4)]['targetY'],this['scale']['x']=this[_0x450a11(0x8f4)]['targetScaleX'],this['scale']['y']=this[_0x450a11(0x8f4)][_0x450a11(0x55a)],this[_0x450a11(0x78d)]=this[_0x450a11(0x8f4)][_0x450a11(0x38d)],this[_0x450a11(0x51a)]=this['_coreEasing'][_0x450a11(0x7eb)],this[_0x450a11(0x578)]=this[_0x450a11(0x8f4)][_0x450a11(0x7a2)],this['setupCoreEasing'](_0x5e8eac,_0x5aef8f,this['x'],this['y'],this[_0x450a11(0x6ff)]['x'],this[_0x450a11(0x6ff)]['y'],this['opacity'],this[_0x450a11(0x51a)],this[_0x450a11(0x578)]);},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x4cc)]=function(_0x178b02,_0x2eff7c,_0x506b51,_0x52df4c,_0xe7a824,_0x4c7068,_0x205b58,_0xc66734,_0xe9a6d1){const _0x31f723=_0x54b1d3;this[_0x31f723(0x8f4)]={'duration':_0x178b02,'wholeDuration':_0x178b02,'type':_0x2eff7c,'targetX':_0x506b51,'targetY':_0x52df4c,'targetScaleX':_0xe7a824,'targetScaleY':_0x4c7068,'targetOpacity':_0x205b58,'targetBackOpacity':_0xc66734,'targetContentsOpacity':_0xe9a6d1};},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x23f)]=function(_0x8d2519,_0x32ada3,_0x4f29da,_0x40d258,_0x3fd837){const _0x3fa495=_0x54b1d3;this[_0x3fa495(0x50f)](),this[_0x3fa495(0x947)][_0x3fa495(0x21f)]=VisuMZ['CoreEngine']['Settings'][_0x3fa495(0x720)][_0x3fa495(0x5e9)];const _0x278aa1=VisuMZ[_0x3fa495(0x66d)]['Settings'][_0x3fa495(0x720)]['GoldIcon'];if(_0x278aa1>0x0&&_0x32ada3===TextManager[_0x3fa495(0x4e2)]){const _0x182bd9=_0x40d258+(this[_0x3fa495(0x939)]()-ImageManager[_0x3fa495(0x663)])/0x2;this[_0x3fa495(0x7ab)](_0x278aa1,_0x4f29da+(_0x3fd837-ImageManager[_0x3fa495(0x6b5)]),_0x182bd9),_0x3fd837-=ImageManager['iconWidth']+0x4;}else this[_0x3fa495(0x84b)](ColorManager['systemColor']()),this[_0x3fa495(0x2b9)](_0x32ada3,_0x4f29da,_0x40d258,_0x3fd837,_0x3fa495(0x5cd)),_0x3fd837-=this[_0x3fa495(0x956)](_0x32ada3)+0x6;this[_0x3fa495(0x360)]();const _0x3aa4ca=this['textWidth'](this[_0x3fa495(0x63c)]?VisuMZ['GroupDigits'](_0x8d2519):_0x8d2519);_0x3aa4ca>_0x3fd837?this['drawText'](VisuMZ[_0x3fa495(0x66d)]['Settings']['Gold']['GoldOverlap'],_0x4f29da,_0x40d258,_0x3fd837,_0x3fa495(0x5cd)):this['drawText'](_0x8d2519,_0x4f29da,_0x40d258,_0x3fd837,_0x3fa495(0x5cd)),this[_0x3fa495(0x50f)]();},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7a4)]=function(_0x4fbb17,_0x160902,_0x2a06d6,_0x1d0b60,_0xe0266f){const _0x16d7ba=_0x54b1d3,_0x17fd4e=ImageManager[_0x16d7ba(0x1f4)](_0x16d7ba(0x309)),_0x220a49=ImageManager['iconWidth'],_0x560b3f=ImageManager[_0x16d7ba(0x663)],_0x4bf19a=_0x4fbb17%0x10*_0x220a49,_0x1f5709=Math[_0x16d7ba(0x7d9)](_0x4fbb17/0x10)*_0x560b3f,_0x209f5f=_0x1d0b60,_0x436ec5=_0x1d0b60;this['contents'][_0x16d7ba(0x6cf)]['imageSmoothingEnabled']=_0xe0266f,this[_0x16d7ba(0x947)][_0x16d7ba(0x954)](_0x17fd4e,_0x4bf19a,_0x1f5709,_0x220a49,_0x560b3f,_0x160902,_0x2a06d6,_0x209f5f,_0x436ec5),this[_0x16d7ba(0x947)][_0x16d7ba(0x6cf)]['imageSmoothingEnabled']=!![];},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x6f3)]=function(_0x422368,_0x4adaa6,_0x860146,_0x23434,_0x5f01ba,_0x4f1da4){const _0x6a282e=_0x54b1d3,_0x4ccf8d=Math[_0x6a282e(0x7d9)]((_0x860146-0x2)*_0x23434),_0x27cb9a=Sprite_Gauge['prototype'][_0x6a282e(0x382)][_0x6a282e(0x816)](this),_0x4b4758=_0x4adaa6+this[_0x6a282e(0x939)]()-_0x27cb9a-0x2;this['contents'][_0x6a282e(0x277)](_0x422368,_0x4b4758,_0x860146,_0x27cb9a,ColorManager['gaugeBackColor']()),this[_0x6a282e(0x947)][_0x6a282e(0x632)](_0x422368+0x1,_0x4b4758+0x1,_0x4ccf8d,_0x27cb9a-0x2,_0x5f01ba,_0x4f1da4);},Window_Scrollable[_0x54b1d3(0x8a2)]={'enabled':VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x1f2)][_0x54b1d3(0x95e)]??!![],'thickness':VisuMZ['CoreEngine'][_0x54b1d3(0x738)][_0x54b1d3(0x1f2)]['BarThickness']??0x2,'offset':VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)]['Window'][_0x54b1d3(0x87e)]??0x2,'bodyColor':VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x1f2)][_0x54b1d3(0x6e4)]??0x0,'offColor':VisuMZ['CoreEngine']['Settings']['Window'][_0x54b1d3(0x25d)]??0x7,'offOpacity':VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x1f2)][_0x54b1d3(0x88d)]??0x80},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x45c)]=function(){const _0x19a445=_0x54b1d3;return Window_Scrollable['SCROLLBAR']['enabled']&&Window_Scrollable['SCROLLBAR'][_0x19a445(0x609)]>0x0;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x23e)]=Window_Base[_0x54b1d3(0x5af)]['createContents'],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x21d)]=function(){const _0x4457bd=_0x54b1d3;VisuMZ[_0x4457bd(0x66d)]['Window_Base_createContents']['call'](this),this['createScrollBarSprites'](),this['setupScrollBarBitmap'](!![]),this[_0x4457bd(0x941)](![]);},Window_Base[_0x54b1d3(0x5af)]['createScrollBarSprites']=function(){const _0x5adfb8=_0x54b1d3;if(!this['isScrollBarVisible']())return;if(this[_0x5adfb8(0x7b7)]||this[_0x5adfb8(0x89b)])return;this[_0x5adfb8(0x3d9)]={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this['_scrollBarHorz']=new Sprite(),this['_scrollBarVert']=new Sprite(),this[_0x5adfb8(0x8a8)](this[_0x5adfb8(0x7b7)]),this['addChild'](this['_scrollBarVert']);},Window_Base[_0x54b1d3(0x5af)]['setupScrollBarBitmap']=function(_0x2e1216){const _0xc61d1f=_0x54b1d3,_0x52cb7a=_0x2e1216?this['_scrollBarHorz']:this[_0xc61d1f(0x89b)];if(!_0x52cb7a)return;const _0x429644=Window_Scrollable['SCROLLBAR'],_0x31a87d=_0x429644[_0xc61d1f(0x609)],_0x1744d1=_0x2e1216?this['innerWidth']-_0x31a87d*0x2:_0x31a87d,_0x1a1db7=_0x2e1216?_0x31a87d:this[_0xc61d1f(0x8c8)]-_0x31a87d*0x2;_0x52cb7a[_0xc61d1f(0x290)]=new Bitmap(_0x1744d1,_0x1a1db7),_0x52cb7a['setFrame'](0x0,0x0,_0x1744d1,_0x1a1db7),this[_0xc61d1f(0x7d4)](_0x2e1216);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x31d)]=Window_Base['prototype'][_0x54b1d3(0x7df)],Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7df)]=function(){const _0x1d9ce9=_0x54b1d3;VisuMZ['CoreEngine'][_0x1d9ce9(0x31d)][_0x1d9ce9(0x816)](this),this[_0x1d9ce9(0x225)]();},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x225)]=function(){const _0x138206=_0x54b1d3,_0x3ff12f=[this['_scrollBarHorz'],this[_0x138206(0x89b)]];for(const _0x31626a of _0x3ff12f){if(_0x31626a&&_0x31626a[_0x138206(0x290)])_0x31626a[_0x138206(0x290)][_0x138206(0x5ad)]();}},VisuMZ['CoreEngine'][_0x54b1d3(0x519)]=Window_Scrollable[_0x54b1d3(0x5af)]['update'],Window_Scrollable[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x52d5ad=_0x54b1d3;VisuMZ[_0x52d5ad(0x66d)][_0x52d5ad(0x519)]['call'](this),this[_0x52d5ad(0x1ef)]();},Window_Scrollable[_0x54b1d3(0x5af)][_0x54b1d3(0x1ef)]=function(){const _0x5ea96f=_0x54b1d3;this[_0x5ea96f(0x462)](),this[_0x5ea96f(0x1a4)](!![]),this[_0x5ea96f(0x1a4)](![]),this[_0x5ea96f(0x7d4)](!![]),this[_0x5ea96f(0x7d4)](![]);},Window_Scrollable[_0x54b1d3(0x5af)][_0x54b1d3(0x462)]=function(){const _0xf83095=_0x54b1d3,_0x48639d=[this[_0xf83095(0x7b7)],this[_0xf83095(0x89b)]];for(const _0xa72fa9 of _0x48639d){_0xa72fa9&&(_0xa72fa9['visible']=this['isScrollBarVisible']()&&this['isOpen']());}},Window_Scrollable[_0x54b1d3(0x5af)][_0x54b1d3(0x1a4)]=function(_0x364853){const _0x433209=_0x54b1d3;if(!this[_0x433209(0x3d9)])return;const _0x1a588c=this[_0x433209(0x3c6)](_0x364853),_0x3a671c=this[_0x433209(0x7fb)](_0x364853),_0x33b833=_0x364853?_0x433209(0x835):_0x433209(0x5f5),_0x55d82d=_0x364853?_0x433209(0x6ab):_0x433209(0x845);(this[_0x433209(0x3d9)][_0x33b833]!==_0x1a588c||this['_lastScrollBarValues'][_0x55d82d]!==_0x3a671c)&&(this[_0x433209(0x3d9)][_0x33b833]=_0x1a588c,this[_0x433209(0x3d9)][_0x55d82d]=_0x3a671c,this[_0x433209(0x34b)](_0x364853,_0x1a588c,_0x3a671c));},Window_Scrollable['prototype']['scrollbar']=function(_0x4e1e9a){const _0x27ff36=_0x54b1d3;if(this['_allTextHeight']!==undefined)return _0x4e1e9a?this['scrollX']():this[_0x27ff36(0x5cf)]['y'];return _0x4e1e9a?this[_0x27ff36(0x61b)]():this[_0x27ff36(0x336)]();},Window_Scrollable[_0x54b1d3(0x5af)][_0x54b1d3(0x7fb)]=function(_0x5eb0cb){const _0x36e32c=_0x54b1d3;if(this[_0x36e32c(0x438)]!==undefined)return _0x5eb0cb?this[_0x36e32c(0x268)]():Math[_0x36e32c(0x29f)](0x0,this[_0x36e32c(0x438)]-this[_0x36e32c(0x8c8)]);return _0x5eb0cb?this[_0x36e32c(0x268)]():this['maxScrollY']();},Window_Scrollable['prototype'][_0x54b1d3(0x406)]=function(){const _0x4d6f27=_0x54b1d3;if(this[_0x4d6f27(0x438)]!==undefined)return Math[_0x4d6f27(0x29f)](0x0,this[_0x4d6f27(0x438)]);return this['overallHeight']();},Window_Scrollable[_0x54b1d3(0x5af)][_0x54b1d3(0x34b)]=function(_0x9b95fd,_0x9955ec,_0x547d8b){const _0x5b3591=_0x54b1d3,_0x1a8b45=_0x9b95fd?this[_0x5b3591(0x7b7)]:this[_0x5b3591(0x89b)];if(!_0x1a8b45)return;if(!_0x1a8b45[_0x5b3591(0x290)])return;const _0x7753f1=_0x1a8b45['bitmap'];_0x7753f1[_0x5b3591(0x1cb)]();if(_0x547d8b<=0x0)return;const _0x4c08c6=_0x9b95fd?this['innerWidth']/this[_0x5b3591(0x90a)]():this['innerHeight']/this[_0x5b3591(0x406)](),_0x5464a6=_0x9b95fd?Math['round'](_0x9955ec*_0x4c08c6):0x0,_0x5b3a7c=_0x9b95fd?0x0:Math[_0x5b3591(0x48a)](_0x9955ec*_0x4c08c6),_0x543993=_0x9b95fd?Math[_0x5b3591(0x48a)](_0x7753f1[_0x5b3591(0x589)]*_0x4c08c6):_0x7753f1[_0x5b3591(0x589)],_0xb833fb=_0x9b95fd?_0x7753f1['height']:Math[_0x5b3591(0x48a)](_0x7753f1[_0x5b3591(0x7c8)]*_0x4c08c6),_0x2c876a=Window_Scrollable['SCROLLBAR'],_0xf09e76=ColorManager['getColor'](_0x2c876a[_0x5b3591(0x6e9)]),_0x5bcd39=ColorManager[_0x5b3591(0x66a)](_0x2c876a['bodyColor']),_0x44e920=_0x2c876a[_0x5b3591(0x2d2)];_0x7753f1['paintOpacity']=_0x44e920,_0x7753f1[_0x5b3591(0x5d4)](_0xf09e76),_0x7753f1[_0x5b3591(0x260)]=0xff,_0x7753f1['fillRect'](_0x5464a6,_0x5b3a7c,_0x543993,_0xb833fb,_0x5bcd39);},Window_Base['prototype'][_0x54b1d3(0x7d4)]=function(_0x2f8511){const _0x17c559=_0x54b1d3,_0x1b5927=_0x2f8511?this[_0x17c559(0x7b7)]:this['_scrollBarVert'];if(!_0x1b5927)return;const _0x12720f=Window_Scrollable[_0x17c559(0x8a2)],_0x20de20=_0x12720f['thickness'],_0x2ef2fd=_0x12720f['offset'];if(!_0x1b5927[_0x17c559(0x5f6)])return;_0x1b5927['x']=this[_0x17c559(0x3b4)]+(_0x2f8511?_0x20de20:this['innerWidth']+_0x2ef2fd),_0x1b5927['y']=this[_0x17c559(0x3b4)]+(_0x2f8511?this['innerHeight']+_0x2ef2fd:_0x20de20);},Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x640)]=function(_0x53286a){const _0x946a47=_0x54b1d3;let _0x4a0e81=this[_0x946a47(0x2e4)]();const _0x470925=this[_0x946a47(0x89d)](),_0x4073be=this[_0x946a47(0x815)]();if(this['isUseModernControls']()&&(_0x4a0e81<_0x470925||_0x53286a&&_0x4073be===0x1)){_0x4a0e81+=_0x4073be;if(_0x4a0e81>=_0x470925)_0x4a0e81=_0x470925-0x1;this[_0x946a47(0x69b)](_0x4a0e81);}else!this[_0x946a47(0x581)]()&&((_0x4a0e81<_0x470925-_0x4073be||_0x53286a&&_0x4073be===0x1)&&this[_0x946a47(0x69b)]((_0x4a0e81+_0x4073be)%_0x470925));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x8e0)]=Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x640)],Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x640)]=function(_0x16a4b5){const _0x313258=_0x54b1d3;this[_0x313258(0x581)]()&&_0x16a4b5&&this[_0x313258(0x815)]()===0x1&&this['index']()===this['maxItems']()-0x1?this[_0x313258(0x69b)](0x0):VisuMZ['CoreEngine'][_0x313258(0x8e0)][_0x313258(0x816)](this,_0x16a4b5);},Window_Selectable[_0x54b1d3(0x5af)]['cursorUp']=function(_0x387092){const _0xba921f=_0x54b1d3;let _0x5e81f2=Math['max'](0x0,this[_0xba921f(0x2e4)]());const _0x2188bd=this['maxItems'](),_0x555b3a=this[_0xba921f(0x815)]();if(this['isUseModernControls']()&&_0x5e81f2>0x0||_0x387092&&_0x555b3a===0x1){_0x5e81f2-=_0x555b3a;if(_0x5e81f2<=0x0)_0x5e81f2=0x0;this[_0xba921f(0x69b)](_0x5e81f2);}else!this[_0xba921f(0x581)]()&&((_0x5e81f2>=_0x555b3a||_0x387092&&_0x555b3a===0x1)&&this['smoothSelect']((_0x5e81f2-_0x555b3a+_0x2188bd)%_0x2188bd));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x565)]=Window_Selectable['prototype'][_0x54b1d3(0x2d1)],Window_Selectable['prototype']['cursorUp']=function(_0x24e9ce){const _0x388dd5=_0x54b1d3;this[_0x388dd5(0x581)]()&&_0x24e9ce&&this['maxCols']()===0x1&&this[_0x388dd5(0x2e4)]()===0x0?this[_0x388dd5(0x69b)](this['maxItems']()-0x1):VisuMZ['CoreEngine'][_0x388dd5(0x565)][_0x388dd5(0x816)](this,_0x24e9ce);},Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x581)]=function(){const _0x20d9e2=_0x54b1d3;return VisuMZ[_0x20d9e2(0x66d)][_0x20d9e2(0x738)]['QoL']['ModernControls'];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x350)]=Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x346)],Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x346)]=function(){const _0x203d9e=_0x54b1d3;this['isUseModernControls']()?(this[_0x203d9e(0x5f2)](),this[_0x203d9e(0x536)]()):VisuMZ['CoreEngine'][_0x203d9e(0x350)]['call'](this);},Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x4f1)]=function(){return!![];},Window_Selectable[_0x54b1d3(0x5af)]['processCursorMoveModernControls']=function(){const _0x24dfa9=_0x54b1d3;if(this[_0x24dfa9(0x680)]()){const _0x1ae222=this['index']();Input[_0x24dfa9(0x445)](_0x24dfa9(0x83d))&&(Input[_0x24dfa9(0x682)]('shift')&&this[_0x24dfa9(0x4f1)]()?this['cursorPagedown']():this[_0x24dfa9(0x640)](Input['isTriggered'](_0x24dfa9(0x83d)))),Input[_0x24dfa9(0x445)]('up')&&(Input['isPressed'](_0x24dfa9(0x416))&&this[_0x24dfa9(0x4f1)]()?this[_0x24dfa9(0x911)]():this[_0x24dfa9(0x2d1)](Input[_0x24dfa9(0x56d)]('up'))),Input[_0x24dfa9(0x445)]('right')&&this[_0x24dfa9(0x3e0)](Input[_0x24dfa9(0x56d)]('right')),Input[_0x24dfa9(0x445)](_0x24dfa9(0x909))&&this['cursorLeft'](Input['isTriggered'](_0x24dfa9(0x909))),!this[_0x24dfa9(0x864)]('pagedown')&&Input[_0x24dfa9(0x445)](_0x24dfa9(0x590))&&this['cursorPagedown'](),!this[_0x24dfa9(0x864)]('pageup')&&Input[_0x24dfa9(0x445)](_0x24dfa9(0x940))&&this[_0x24dfa9(0x911)](),this[_0x24dfa9(0x2e4)]()!==_0x1ae222&&this[_0x24dfa9(0x7ec)]();}},Window_Selectable[_0x54b1d3(0x5af)]['processCursorHomeEndTrigger']=function(){const _0xccdb8a=_0x54b1d3;if(this[_0xccdb8a(0x680)]()){const _0xaade24=this[_0xccdb8a(0x2e4)]();Input[_0xccdb8a(0x56d)](_0xccdb8a(0x79a))&&this[_0xccdb8a(0x69b)](Math[_0xccdb8a(0x6c3)](this[_0xccdb8a(0x2e4)](),0x0)),Input[_0xccdb8a(0x56d)]('end')&&this['smoothSelect'](Math[_0xccdb8a(0x29f)](this[_0xccdb8a(0x2e4)](),this[_0xccdb8a(0x89d)]()-0x1)),this[_0xccdb8a(0x2e4)]()!==_0xaade24&&this[_0xccdb8a(0x7ec)]();}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x440)]=Window_Selectable['prototype'][_0x54b1d3(0x237)],Window_Selectable[_0x54b1d3(0x5af)]['processTouch']=function(){const _0x4970da=_0x54b1d3;this[_0x4970da(0x581)]()?this[_0x4970da(0x73f)]():VisuMZ['CoreEngine'][_0x4970da(0x440)][_0x4970da(0x816)](this);},Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x73f)]=function(){const _0x29a5cf=_0x54b1d3;VisuMZ[_0x29a5cf(0x66d)][_0x29a5cf(0x440)][_0x29a5cf(0x816)](this);},Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x470)]=function(){const _0x3d801c=_0x54b1d3;return VisuMZ[_0x3d801c(0x66d)]['Settings'][_0x3d801c(0x1f2)][_0x3d801c(0x8d7)];},Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x69c)]=function(){const _0x28bc7e=_0x54b1d3;return VisuMZ[_0x28bc7e(0x66d)]['Settings'][_0x28bc7e(0x1f2)]['RowSpacing'];},Window_Selectable['prototype']['itemHeight']=function(){const _0x2f2d17=_0x54b1d3;return Window_Scrollable[_0x2f2d17(0x5af)][_0x2f2d17(0x41b)]['call'](this)+VisuMZ['CoreEngine'][_0x2f2d17(0x738)][_0x2f2d17(0x1f2)][_0x2f2d17(0x65e)];;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2db)]=Window_Selectable['prototype'][_0x54b1d3(0x528)],Window_Selectable[_0x54b1d3(0x5af)][_0x54b1d3(0x528)]=function(_0x2fb7e3){const _0x1ad68a=_0x54b1d3,_0x43e5bc=VisuMZ[_0x1ad68a(0x66d)][_0x1ad68a(0x738)][_0x1ad68a(0x1f2)];if(_0x43e5bc['ShowItemBackground']===![])return;_0x43e5bc[_0x1ad68a(0x463)]?_0x43e5bc['DrawItemBackgroundJS'][_0x1ad68a(0x816)](this,_0x2fb7e3):VisuMZ[_0x1ad68a(0x66d)]['Window_Selectable_drawBackgroundRect'][_0x1ad68a(0x816)](this,_0x2fb7e3);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x357)]=Window_Gold[_0x54b1d3(0x5af)]['refresh'],Window_Gold['prototype'][_0x54b1d3(0x7c4)]=function(){const _0x199e09=_0x54b1d3;this['isItemStyle']()?this[_0x199e09(0x4b1)]():VisuMZ[_0x199e09(0x66d)][_0x199e09(0x357)][_0x199e09(0x816)](this);},Window_Gold[_0x54b1d3(0x5af)][_0x54b1d3(0x93c)]=function(){const _0x2bf757=_0x54b1d3;if(TextManager[_0x2bf757(0x4e2)]!==this[_0x2bf757(0x4e2)]())return![];return VisuMZ[_0x2bf757(0x66d)]['Settings']['Gold'][_0x2bf757(0x3a0)];},Window_Gold[_0x54b1d3(0x5af)][_0x54b1d3(0x4b1)]=function(){const _0x5384ad=_0x54b1d3;this[_0x5384ad(0x50f)](),this['contents'][_0x5384ad(0x1cb)](),this[_0x5384ad(0x947)]['fontSize']=VisuMZ[_0x5384ad(0x66d)]['Settings']['Gold'][_0x5384ad(0x5e9)];const _0x41f4e9=VisuMZ[_0x5384ad(0x66d)][_0x5384ad(0x738)][_0x5384ad(0x720)][_0x5384ad(0x925)],_0x4ffb2b=this['itemLineRect'](0x0);if(_0x41f4e9>0x0){const _0x436979=_0x4ffb2b['y']+(this['lineHeight']()-ImageManager[_0x5384ad(0x663)])/0x2;this[_0x5384ad(0x7ab)](_0x41f4e9,_0x4ffb2b['x'],_0x436979);const _0x4abdad=ImageManager['iconWidth']+0x4;_0x4ffb2b['x']+=_0x4abdad,_0x4ffb2b[_0x5384ad(0x589)]-=_0x4abdad;}this[_0x5384ad(0x84b)](ColorManager['systemColor']()),this['drawText'](this['currencyUnit'](),_0x4ffb2b['x'],_0x4ffb2b['y'],_0x4ffb2b[_0x5384ad(0x589)],_0x5384ad(0x909));const _0x877685=this[_0x5384ad(0x956)](this[_0x5384ad(0x4e2)]())+0x6;;_0x4ffb2b['x']+=_0x877685,_0x4ffb2b['width']-=_0x877685,this[_0x5384ad(0x360)]();const _0x2b9945=this[_0x5384ad(0x4e3)](),_0x21b342=this[_0x5384ad(0x956)](this[_0x5384ad(0x63c)]?VisuMZ[_0x5384ad(0x8f9)](this['value']()):this[_0x5384ad(0x4e3)]());_0x21b342>_0x4ffb2b[_0x5384ad(0x589)]?this[_0x5384ad(0x2b9)](VisuMZ[_0x5384ad(0x66d)][_0x5384ad(0x738)][_0x5384ad(0x720)]['GoldOverlap'],_0x4ffb2b['x'],_0x4ffb2b['y'],_0x4ffb2b[_0x5384ad(0x589)],_0x5384ad(0x5cd)):this[_0x5384ad(0x2b9)](this[_0x5384ad(0x4e3)](),_0x4ffb2b['x'],_0x4ffb2b['y'],_0x4ffb2b[_0x5384ad(0x589)],_0x5384ad(0x5cd)),this[_0x5384ad(0x50f)]();},Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x2df)]=function(_0x10572f,_0x2b2d28,_0x3ec1d4,_0x22ba89,_0x4f9ef6){const _0x58f537=_0x54b1d3;_0x22ba89=String(_0x22ba89||'')['toUpperCase']();if(VisuMZ[_0x58f537(0x66d)][_0x58f537(0x738)][_0x58f537(0x293)]['DrawIcons']){const _0x2879e6=VisuMZ['GetParamIcon'](_0x22ba89);_0x4f9ef6?(this[_0x58f537(0x7a4)](_0x2879e6,_0x10572f,_0x2b2d28,this[_0x58f537(0x2ec)]()),_0x3ec1d4-=this[_0x58f537(0x2ec)]()+0x2,_0x10572f+=this[_0x58f537(0x2ec)]()+0x2):(this[_0x58f537(0x7ab)](_0x2879e6,_0x10572f+0x2,_0x2b2d28+0x2),_0x3ec1d4-=ImageManager['iconWidth']+0x4,_0x10572f+=ImageManager['iconWidth']+0x4);}const _0xe3495f=TextManager['param'](_0x22ba89);this['resetFontSettings'](),this[_0x58f537(0x84b)](ColorManager[_0x58f537(0x248)]()),_0x4f9ef6?(this[_0x58f537(0x947)][_0x58f537(0x21f)]=this[_0x58f537(0x820)](),this[_0x58f537(0x947)][_0x58f537(0x2b9)](_0xe3495f,_0x10572f,_0x2b2d28,_0x3ec1d4,this[_0x58f537(0x2ec)](),_0x58f537(0x909))):this[_0x58f537(0x2b9)](_0xe3495f,_0x10572f,_0x2b2d28,_0x3ec1d4),this['resetFontSettings']();},Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x820)]=function(){const _0x39a0cb=_0x54b1d3;return $gameSystem[_0x39a0cb(0x418)]()-0x8;},Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x383)]=function(_0x2434f4,_0x325979,_0xcf82b0,_0x231deb){const _0x478f79=_0x54b1d3;_0x231deb=_0x231deb||0xa8,this[_0x478f79(0x360)]();if(VisuMZ['CoreEngine']['Settings']['UI']['TextCodeClassNames'])this[_0x478f79(0x2c6)](_0x2434f4['currentClass']()[_0x478f79(0x693)],_0x325979,_0xcf82b0,_0x231deb);else{const _0x46f10a=_0x2434f4[_0x478f79(0x2cd)]()[_0x478f79(0x693)]['replace'](/\\I\[(\d+)\]/gi,'');this[_0x478f79(0x2b9)](_0x46f10a,_0x325979,_0xcf82b0,_0x231deb);}},Window_StatusBase[_0x54b1d3(0x5af)]['drawActorNickname']=function(_0x43dcde,_0x239c79,_0x27fbce,_0x1b730d){const _0x550d72=_0x54b1d3;_0x1b730d=_0x1b730d||0x10e,this[_0x550d72(0x360)]();if(VisuMZ[_0x550d72(0x66d)]['Settings']['UI']['TextCodeNicknames'])this[_0x550d72(0x2c6)](_0x43dcde[_0x550d72(0x773)](),_0x239c79,_0x27fbce,_0x1b730d);else{const _0x32501d=_0x43dcde['nickname']()[_0x550d72(0x362)](/\\I\[(\d+)\]/gi,'');this[_0x550d72(0x2b9)](_0x43dcde[_0x550d72(0x773)](),_0x239c79,_0x27fbce,_0x1b730d);}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x29d)]=Window_StatusBase[_0x54b1d3(0x5af)]['drawActorLevel'],Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x71a)]=function(_0x202a02,_0x2731b9,_0x4a73cd){const _0x169d20=_0x54b1d3;if(VisuMZ[_0x169d20(0x66d)]['Settings'][_0x169d20(0x293)][_0x169d20(0x812)]===![])return;if(this[_0x169d20(0x617)]())this[_0x169d20(0x6fc)](_0x202a02,_0x2731b9,_0x4a73cd);VisuMZ[_0x169d20(0x66d)][_0x169d20(0x29d)][_0x169d20(0x816)](this,_0x202a02,_0x2731b9,_0x4a73cd);},Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x617)]=function(){const _0x293db0=_0x54b1d3;return VisuMZ[_0x293db0(0x66d)][_0x293db0(0x738)]['UI']['LvExpGauge'];},Window_StatusBase[_0x54b1d3(0x5af)][_0x54b1d3(0x6fc)]=function(_0x23b59b,_0x129992,_0xc8a0bf){const _0x496cd0=_0x54b1d3;if(!_0x23b59b)return;if(!_0x23b59b[_0x496cd0(0x868)]())return;const _0x2ef741=0x80,_0x3654d9=_0x23b59b[_0x496cd0(0x88e)]();let _0x5074d3=ColorManager[_0x496cd0(0x630)](),_0x367683=ColorManager[_0x496cd0(0x5dc)]();_0x3654d9>=0x1&&(_0x5074d3=ColorManager[_0x496cd0(0x2da)](),_0x367683=ColorManager[_0x496cd0(0x65c)]()),this[_0x496cd0(0x6f3)](_0x129992,_0xc8a0bf,_0x2ef741,_0x3654d9,_0x5074d3,_0x367683);},Window_EquipStatus[_0x54b1d3(0x5af)][_0x54b1d3(0x36d)]=function(){const _0x1b444c=_0x54b1d3;let _0x5c3513=0x0;for(const _0xd8ce26 of VisuMZ[_0x1b444c(0x66d)][_0x1b444c(0x738)][_0x1b444c(0x293)]['DisplayedParams']){const _0x55a6e5=this[_0x1b444c(0x533)](),_0x3d323c=this[_0x1b444c(0x42e)](_0x5c3513);this[_0x1b444c(0x58c)](_0x55a6e5,_0x3d323c,_0xd8ce26),_0x5c3513++;}},Window_EquipStatus[_0x54b1d3(0x5af)][_0x54b1d3(0x7f3)]=function(_0x477985,_0x202526,_0x29eb0d){const _0x1d9d39=_0x54b1d3,_0x22221f=this['paramX']()-this[_0x1d9d39(0x533)]()*0x2;this[_0x1d9d39(0x2df)](_0x477985,_0x202526,_0x22221f,_0x29eb0d,![]);},Window_EquipStatus[_0x54b1d3(0x5af)][_0x54b1d3(0x6bd)]=function(_0x2afed8,_0x458c2b,_0x526349){const _0x3d3fe5=_0x54b1d3,_0x10918e=this['paramWidth']();this['resetTextColor'](),this[_0x3d3fe5(0x2b9)](this[_0x3d3fe5(0x4a3)][_0x3d3fe5(0x7d3)](_0x526349,!![]),_0x2afed8,_0x458c2b,_0x10918e,'right');},Window_EquipStatus[_0x54b1d3(0x5af)][_0x54b1d3(0x280)]=function(_0x144b6e,_0x2d7853){const _0x3518ae=_0x54b1d3,_0x49a4c4=this[_0x3518ae(0x74e)]();this[_0x3518ae(0x84b)](ColorManager['systemColor']());const _0x46ef40=VisuMZ['CoreEngine'][_0x3518ae(0x738)]['UI'][_0x3518ae(0x2e1)];this[_0x3518ae(0x2b9)](_0x46ef40,_0x144b6e,_0x2d7853,_0x49a4c4,_0x3518ae(0x2c3));},Window_EquipStatus[_0x54b1d3(0x5af)][_0x54b1d3(0x425)]=function(_0x576d1b,_0x37cd46,_0x35141c){const _0x34a1d6=_0x54b1d3,_0x55711b=this[_0x34a1d6(0x599)](),_0x4ecd28=this[_0x34a1d6(0x26d)]['paramValueByName'](_0x35141c),_0x4a8914=_0x4ecd28-this['_actor'][_0x34a1d6(0x7d3)](_0x35141c);this['changeTextColor'](ColorManager[_0x34a1d6(0x475)](_0x4a8914)),this['drawText'](this[_0x34a1d6(0x26d)][_0x34a1d6(0x7d3)](_0x35141c,!![]),_0x576d1b,_0x37cd46,_0x55711b,_0x34a1d6(0x5cd));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x37c)]=Window_EquipItem['prototype'][_0x54b1d3(0x376)],Window_EquipItem[_0x54b1d3(0x5af)][_0x54b1d3(0x376)]=function(_0x1c1f33){const _0x319790=_0x54b1d3;return _0x1c1f33&&this[_0x319790(0x4a3)]?this[_0x319790(0x4a3)][_0x319790(0x1db)](_0x1c1f33):VisuMZ['CoreEngine'][_0x319790(0x37c)][_0x319790(0x816)](this,_0x1c1f33);},Window_StatusParams[_0x54b1d3(0x5af)][_0x54b1d3(0x89d)]=function(){const _0x5c5735=_0x54b1d3;return VisuMZ[_0x5c5735(0x66d)][_0x5c5735(0x738)]['Param'][_0x5c5735(0x2a5)][_0x5c5735(0x506)];},Window_StatusParams[_0x54b1d3(0x5af)][_0x54b1d3(0x58c)]=function(_0x1b7be4){const _0x27488f=_0x54b1d3,_0x2d5b38=this[_0x27488f(0x409)](_0x1b7be4),_0x18be91=VisuMZ[_0x27488f(0x66d)]['Settings'][_0x27488f(0x293)]['DisplayedParams'][_0x1b7be4],_0x5cc113=TextManager[_0x27488f(0x563)](_0x18be91),_0x53b2aa=this['_actor']['paramValueByName'](_0x18be91,!![]);this['drawParamText'](_0x2d5b38['x'],_0x2d5b38['y'],0xa0,_0x18be91,![]),this['resetTextColor'](),this['drawText'](_0x53b2aa,_0x2d5b38['x']+0xa0,_0x2d5b38['y'],0x3c,_0x27488f(0x5cd));};if(VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x279)][_0x54b1d3(0x6d7)]){VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x279)][_0x54b1d3(0x8ac)]&&(Window_NameInput[_0x54b1d3(0x937)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x54b1d3(0x83e),'OK']);;VisuMZ['CoreEngine'][_0x54b1d3(0x87c)]=Window_NameInput[_0x54b1d3(0x5af)]['initialize'],Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(_0x2d3c79){const _0x39b6c8=_0x54b1d3;this[_0x39b6c8(0x3d8)]=this['defaultInputMode'](),VisuMZ[_0x39b6c8(0x66d)][_0x39b6c8(0x87c)][_0x39b6c8(0x816)](this,_0x2d3c79),this['_mode']===_0x39b6c8(0x66e)?this[_0x39b6c8(0x40c)](0x0):(Input['clear'](),this[_0x39b6c8(0x51d)]());},Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x479)]=function(){const _0x1d221e=_0x54b1d3;if(Input['isGamepadConnected']())return _0x1d221e(0x66e);return VisuMZ[_0x1d221e(0x66d)][_0x1d221e(0x738)]['KeyboardInput']['DefaultMode']||_0x1d221e(0x2d0);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x928)]=Window_NameInput[_0x54b1d3(0x5af)]['processHandling'],Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x5a0)]=function(){const _0x12c0da=_0x54b1d3;if(!this[_0x12c0da(0x56e)]())return;if(!this[_0x12c0da(0x883)])return;if(this[_0x12c0da(0x3d8)]==='keyboard'&&Input['isGamepadTriggered']())this['switchModes'](_0x12c0da(0x66e));else{if(Input[_0x12c0da(0x24b)](_0x12c0da(0x36f)))Input['clear'](),this['processBack']();else{if(Input[_0x12c0da(0x56d)]('tab'))Input[_0x12c0da(0x1cb)](),this['_mode']===_0x12c0da(0x2d0)?this['switchModes'](_0x12c0da(0x66e)):this[_0x12c0da(0x4b7)](_0x12c0da(0x2d0));else{if(this[_0x12c0da(0x3d8)]===_0x12c0da(0x2d0))this[_0x12c0da(0x4aa)]();else Input['isSpecialCode'](_0x12c0da(0x857))?(Input[_0x12c0da(0x1cb)](),this[_0x12c0da(0x4b7)](_0x12c0da(0x2d0))):VisuMZ[_0x12c0da(0x66d)][_0x12c0da(0x928)][_0x12c0da(0x816)](this);}}}},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x6cd)]=Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x237)],Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x237)]=function(){const _0x30a80b=_0x54b1d3;if(!this['isOpenAndActive']())return;if(this[_0x30a80b(0x3d8)]===_0x30a80b(0x2d0)){if(TouchInput[_0x30a80b(0x56d)]()&&this[_0x30a80b(0x56f)]())this['switchModes']('default');else TouchInput[_0x30a80b(0x442)]()&&this[_0x30a80b(0x4b7)]('default');}else VisuMZ[_0x30a80b(0x66d)][_0x30a80b(0x6cd)][_0x30a80b(0x816)](this);},Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x4aa)]=function(){const _0x4d921d=_0x54b1d3;if(Input[_0x4d921d(0x24b)](_0x4d921d(0x2f1)))Input[_0x4d921d(0x1cb)](),this[_0x4d921d(0x638)]();else{if(Input[_0x4d921d(0x3b0)]!==undefined){let _0x561c1a=Input[_0x4d921d(0x3b0)],_0x11a907=_0x561c1a['length'];for(let _0x1e2a1c=0x0;_0x1e2a1c<_0x11a907;++_0x1e2a1c){this[_0x4d921d(0x882)][_0x4d921d(0x40e)](_0x561c1a[_0x1e2a1c])?SoundManager['playOk']():SoundManager[_0x4d921d(0x558)]();}Input[_0x4d921d(0x1cb)]();}}},Window_NameInput['prototype'][_0x54b1d3(0x4b7)]=function(_0x1aa8a0){const _0x3fd16c=_0x54b1d3;let _0x314f26=this[_0x3fd16c(0x3d8)];this['_mode']=_0x1aa8a0,_0x314f26!==this[_0x3fd16c(0x3d8)]&&(this[_0x3fd16c(0x7c4)](),SoundManager[_0x3fd16c(0x79c)](),this[_0x3fd16c(0x3d8)]==='default'?this['select'](0x0):this[_0x3fd16c(0x40c)](-0x1));},VisuMZ['CoreEngine']['Window_NameInput_cursorDown']=Window_NameInput['prototype']['cursorDown'],Window_NameInput['prototype'][_0x54b1d3(0x640)]=function(_0x2c98d8){const _0x3126c0=_0x54b1d3;if(this[_0x3126c0(0x3d8)]===_0x3126c0(0x2d0)&&!Input['isArrowPressed']())return;if(Input[_0x3126c0(0x788)]())return;VisuMZ['CoreEngine']['Window_NameInput_cursorDown']['call'](this,_0x2c98d8),this['switchModes'](_0x3126c0(0x66e));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x8db)]=Window_NameInput['prototype'][_0x54b1d3(0x2d1)],Window_NameInput['prototype'][_0x54b1d3(0x2d1)]=function(_0x29402b){const _0x373b3b=_0x54b1d3;if(this[_0x373b3b(0x3d8)]==='keyboard'&&!Input[_0x373b3b(0x2ae)]())return;if(Input[_0x373b3b(0x788)]())return;VisuMZ[_0x373b3b(0x66d)][_0x373b3b(0x8db)]['call'](this,_0x29402b),this[_0x373b3b(0x4b7)]('default');},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x740)]=Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x3e0)],Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x3e0)]=function(_0x542957){const _0x3be1cf=_0x54b1d3;if(this[_0x3be1cf(0x3d8)]===_0x3be1cf(0x2d0)&&!Input[_0x3be1cf(0x2ae)]())return;if(Input[_0x3be1cf(0x788)]())return;VisuMZ[_0x3be1cf(0x66d)][_0x3be1cf(0x740)]['call'](this,_0x542957),this[_0x3be1cf(0x4b7)]('default');},VisuMZ['CoreEngine'][_0x54b1d3(0x4ed)]=Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x240)],Window_NameInput['prototype'][_0x54b1d3(0x240)]=function(_0x84a9bc){const _0x1da6a7=_0x54b1d3;if(this['_mode']===_0x1da6a7(0x2d0)&&!Input['isArrowPressed']())return;if(Input[_0x1da6a7(0x788)]())return;VisuMZ[_0x1da6a7(0x66d)][_0x1da6a7(0x4ed)][_0x1da6a7(0x816)](this,_0x84a9bc),this[_0x1da6a7(0x4b7)](_0x1da6a7(0x66e));},VisuMZ['CoreEngine']['Window_NameInput_cursorPagedown']=Window_NameInput['prototype']['cursorPagedown'],Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x8d8)]=function(){const _0x2c9a39=_0x54b1d3;if(this[_0x2c9a39(0x3d8)]===_0x2c9a39(0x2d0))return;if(Input[_0x2c9a39(0x788)]())return;VisuMZ[_0x2c9a39(0x66d)]['Window_NameInput_cursorPagedown']['call'](this),this['switchModes']('default');},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x1b6)]=Window_NameInput[_0x54b1d3(0x5af)]['cursorPageup'],Window_NameInput['prototype'][_0x54b1d3(0x911)]=function(){const _0xc14921=_0x54b1d3;if(this[_0xc14921(0x3d8)]===_0xc14921(0x2d0))return;if(Input['isNumpadPressed']())return;VisuMZ[_0xc14921(0x66d)][_0xc14921(0x1b6)][_0xc14921(0x816)](this),this[_0xc14921(0x4b7)](_0xc14921(0x66e));},VisuMZ['CoreEngine']['Window_NameInput_refresh']=Window_NameInput[_0x54b1d3(0x5af)][_0x54b1d3(0x7c4)],Window_NameInput['prototype'][_0x54b1d3(0x7c4)]=function(){const _0x2c8206=_0x54b1d3;if(this['_mode']===_0x2c8206(0x2d0)){this[_0x2c8206(0x947)][_0x2c8206(0x1cb)](),this[_0x2c8206(0x767)][_0x2c8206(0x1cb)](),this[_0x2c8206(0x360)]();let _0x420351=VisuMZ['CoreEngine'][_0x2c8206(0x738)][_0x2c8206(0x279)][_0x2c8206(0x4a9)][_0x2c8206(0x92c)]('\x0a'),_0xa91c9a=_0x420351[_0x2c8206(0x506)],_0x450859=(this[_0x2c8206(0x8c8)]-_0xa91c9a*this[_0x2c8206(0x939)]())/0x2;for(let _0x4f9e2c=0x0;_0x4f9e2c<_0xa91c9a;++_0x4f9e2c){let _0x348945=_0x420351[_0x4f9e2c],_0x5892d9=this[_0x2c8206(0x6cc)](_0x348945)[_0x2c8206(0x589)],_0x5b0f4e=Math['floor']((this[_0x2c8206(0x947)][_0x2c8206(0x589)]-_0x5892d9)/0x2);this[_0x2c8206(0x2c6)](_0x348945,_0x5b0f4e,_0x450859),_0x450859+=this[_0x2c8206(0x939)]();}}else VisuMZ['CoreEngine'][_0x2c8206(0x93b)]['call'](this);};};VisuMZ['CoreEngine'][_0x54b1d3(0x1fe)]=Window_ShopSell[_0x54b1d3(0x5af)]['isEnabled'],Window_ShopSell[_0x54b1d3(0x5af)][_0x54b1d3(0x376)]=function(_0x58f4a1){const _0x12d768=_0x54b1d3;return VisuMZ['CoreEngine'][_0x12d768(0x738)]['QoL'][_0x12d768(0x7a0)]&&DataManager[_0x12d768(0x337)](_0x58f4a1)?![]:VisuMZ[_0x12d768(0x66d)][_0x12d768(0x1fe)][_0x12d768(0x816)](this,_0x58f4a1);},Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x581)]=function(){return![];};VisuMZ['CoreEngine']['Settings']['KeyboardInput']['EnableNumberInput']&&(VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x38f)]=Window_NumberInput['prototype'][_0x54b1d3(0x304)],Window_NumberInput['prototype'][_0x54b1d3(0x304)]=function(){const _0x232fad=_0x54b1d3;VisuMZ[_0x232fad(0x66d)][_0x232fad(0x38f)]['call'](this),this['select'](this[_0x232fad(0x678)]-0x1),Input[_0x232fad(0x1cb)]();},VisuMZ[_0x54b1d3(0x66d)]['Window_NumberInput_processDigitChange']=Window_NumberInput[_0x54b1d3(0x5af)]['processDigitChange'],Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x7f8)]=function(){const _0x34b681=_0x54b1d3;if(!this[_0x34b681(0x777)]())return;if(Input[_0x34b681(0x788)]())this[_0x34b681(0x4a6)]();else{if(Input[_0x34b681(0x24b)](_0x34b681(0x36f)))this[_0x34b681(0x856)]();else{if(Input[_0x34b681(0x37d)]===0x2e)this[_0x34b681(0x314)]();else{if(Input[_0x34b681(0x37d)]===0x24)this[_0x34b681(0x338)]();else Input[_0x34b681(0x37d)]===0x23?this[_0x34b681(0x87f)]():VisuMZ[_0x34b681(0x66d)][_0x34b681(0x384)]['call'](this);}}}},Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x346)]=function(){const _0x4b6b58=_0x54b1d3;if(!this[_0x4b6b58(0x680)]())return;Input[_0x4b6b58(0x788)]()?this[_0x4b6b58(0x4a6)]():Window_Selectable[_0x4b6b58(0x5af)]['processCursorMove'][_0x4b6b58(0x816)](this);},Window_NumberInput[_0x54b1d3(0x5af)]['processCursorHomeEndTrigger']=function(){},Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x4a6)]=function(){const _0x9c21db=_0x54b1d3;if(String(this[_0x9c21db(0x5b7)])[_0x9c21db(0x506)]>=this['_maxDigits'])return;const _0x844974=Number(String(this[_0x9c21db(0x5b7)])+Input[_0x9c21db(0x3b0)]);if(isNaN(_0x844974))return;this[_0x9c21db(0x5b7)]=_0x844974;const _0x87d019='9'[_0x9c21db(0x20f)](this[_0x9c21db(0x678)]);this[_0x9c21db(0x5b7)]=this['_number'][_0x9c21db(0x285)](0x0,_0x87d019),Input[_0x9c21db(0x1cb)](),this[_0x9c21db(0x7c4)](),SoundManager['playCursor'](),this[_0x9c21db(0x40c)](this[_0x9c21db(0x678)]-0x1);},Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x856)]=function(){const _0x2b5f6d=_0x54b1d3;this[_0x2b5f6d(0x5b7)]=Number(String(this['_number'])['slice'](0x0,-0x1)),this['_number']=Math['max'](0x0,this[_0x2b5f6d(0x5b7)]),Input[_0x2b5f6d(0x1cb)](),this[_0x2b5f6d(0x7c4)](),SoundManager['playCursor'](),this[_0x2b5f6d(0x40c)](this[_0x2b5f6d(0x678)]-0x1);},Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x314)]=function(){const _0x4d2b21=_0x54b1d3;this['_number']=Number(String(this[_0x4d2b21(0x5b7)])['substring'](0x1)),this['_number']=Math[_0x4d2b21(0x29f)](0x0,this[_0x4d2b21(0x5b7)]),Input['clear'](),this['refresh'](),SoundManager[_0x4d2b21(0x81f)](),this['select'](this[_0x4d2b21(0x678)]-0x1);},Window_NumberInput[_0x54b1d3(0x5af)]['processKeyboardHome']=function(){const _0x426808=_0x54b1d3;if(this[_0x426808(0x2e4)]()===0x0)return;Input[_0x426808(0x1cb)](),this['refresh'](),SoundManager[_0x426808(0x81f)](),this['select'](0x0);},Window_NumberInput[_0x54b1d3(0x5af)][_0x54b1d3(0x87f)]=function(){const _0x20f82e=_0x54b1d3;if(this['index']()===this[_0x20f82e(0x678)]-0x1)return;Input[_0x20f82e(0x1cb)](),this[_0x20f82e(0x7c4)](),SoundManager[_0x20f82e(0x81f)](),this[_0x20f82e(0x40c)](this['_maxDigits']-0x1);});;VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x250)]=Window_MapName[_0x54b1d3(0x5af)][_0x54b1d3(0x7c4)],Window_MapName[_0x54b1d3(0x5af)][_0x54b1d3(0x7c4)]=function(){const _0x5c9dd7=_0x54b1d3;VisuMZ['CoreEngine'][_0x5c9dd7(0x738)][_0x5c9dd7(0x33d)]['MapNameTextCode']?this[_0x5c9dd7(0x965)]():VisuMZ[_0x5c9dd7(0x66d)][_0x5c9dd7(0x250)][_0x5c9dd7(0x816)](this);},Window_MapName[_0x54b1d3(0x5af)][_0x54b1d3(0x965)]=function(){const _0x2c20b3=_0x54b1d3;this[_0x2c20b3(0x947)][_0x2c20b3(0x1cb)]();if($gameMap[_0x2c20b3(0x24e)]()){const _0x41ba24=this[_0x2c20b3(0x2ba)];this[_0x2c20b3(0x7ce)](0x0,0x0,_0x41ba24,this['lineHeight']());const _0x3b1214=this[_0x2c20b3(0x6cc)]($gameMap[_0x2c20b3(0x24e)]())[_0x2c20b3(0x589)];this['drawTextEx']($gameMap[_0x2c20b3(0x24e)](),Math[_0x2c20b3(0x7d9)]((_0x41ba24-_0x3b1214)/0x2),0x0);}},Window_TitleCommand['_commandList']=VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x50a)],Window_TitleCommand[_0x54b1d3(0x5af)][_0x54b1d3(0x6a3)]=function(){const _0x52ea02=_0x54b1d3;this[_0x52ea02(0x8e6)]();},Window_TitleCommand[_0x54b1d3(0x5af)]['makeCoreEngineCommandList']=function(){const _0x2d81f7=_0x54b1d3;for(const _0x1ae71e of Window_TitleCommand[_0x2d81f7(0x2e6)]){if(_0x1ae71e['ShowJS'][_0x2d81f7(0x816)](this)){const _0x4b6c3a=_0x1ae71e[_0x2d81f7(0x6c5)];let _0x1f72f6=_0x1ae71e[_0x2d81f7(0x544)];if(['',_0x2d81f7(0x889)][_0x2d81f7(0x7f2)](_0x1f72f6))_0x1f72f6=_0x1ae71e[_0x2d81f7(0x853)][_0x2d81f7(0x816)](this);const _0x363140=_0x1ae71e[_0x2d81f7(0x739)][_0x2d81f7(0x816)](this),_0x3297a8=_0x1ae71e[_0x2d81f7(0x697)][_0x2d81f7(0x816)](this);this[_0x2d81f7(0x32a)](_0x1f72f6,_0x4b6c3a,_0x363140,_0x3297a8),this[_0x2d81f7(0x1aa)](_0x4b6c3a,_0x1ae71e[_0x2d81f7(0x29e)]['bind'](this,_0x3297a8));}}},VisuMZ[_0x54b1d3(0x66d)]['Window_TitleCommand_selectLast']=Window_TitleCommand[_0x54b1d3(0x5af)][_0x54b1d3(0x298)],Window_TitleCommand['prototype'][_0x54b1d3(0x298)]=function(){const _0x4def41=_0x54b1d3;VisuMZ[_0x4def41(0x66d)][_0x4def41(0x52f)]['call'](this);if(!Window_TitleCommand['_lastCommandSymbol'])return;const _0x87c5f2=this[_0x4def41(0x8d6)](Window_TitleCommand['_lastCommandSymbol']),_0x14cd5b=Math[_0x4def41(0x7d9)](this['maxVisibleItems']()/0x2)-0x1;this[_0x4def41(0x69b)](_0x87c5f2),this[_0x4def41(0x32b)]>0x1&&(this[_0x4def41(0x32b)]=0x1,this[_0x4def41(0x49f)]()),this[_0x4def41(0x8a9)](_0x87c5f2-_0x14cd5b);},Window_GameEnd[_0x54b1d3(0x2e6)]=VisuMZ['CoreEngine']['Settings'][_0x54b1d3(0x351)]['GameEnd']['CommandList'],Window_GameEnd[_0x54b1d3(0x5af)][_0x54b1d3(0x6a3)]=function(){const _0xb62dc0=_0x54b1d3;this[_0xb62dc0(0x8e6)]();},Window_GameEnd[_0x54b1d3(0x5af)][_0x54b1d3(0x8e6)]=function(){const _0x2148d4=_0x54b1d3;for(const _0x1f299e of Window_GameEnd[_0x2148d4(0x2e6)]){if(_0x1f299e['ShowJS']['call'](this)){const _0x1de6db=_0x1f299e['Symbol'];let _0xbba9dd=_0x1f299e['TextStr'];if(['',_0x2148d4(0x889)][_0x2148d4(0x7f2)](_0xbba9dd))_0xbba9dd=_0x1f299e[_0x2148d4(0x853)][_0x2148d4(0x816)](this);const _0x258e25=_0x1f299e['EnableJS'][_0x2148d4(0x816)](this),_0x58726b=_0x1f299e[_0x2148d4(0x697)][_0x2148d4(0x816)](this);this[_0x2148d4(0x32a)](_0xbba9dd,_0x1de6db,_0x258e25,_0x58726b),this[_0x2148d4(0x1aa)](_0x1de6db,_0x1f299e[_0x2148d4(0x29e)]['bind'](this,_0x58726b));}}};function Window_ButtonAssist(){const _0x24b231=_0x54b1d3;this[_0x24b231(0x68b)](...arguments);}Window_ButtonAssist[_0x54b1d3(0x5af)]=Object[_0x54b1d3(0x37e)](Window_Base[_0x54b1d3(0x5af)]),Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x62f)]=Window_ButtonAssist,Window_ButtonAssist[_0x54b1d3(0x5af)]['initialize']=function(_0x140c87){const _0xa9d8a1=_0x54b1d3;this['_data']={},Window_Base[_0xa9d8a1(0x5af)]['initialize'][_0xa9d8a1(0x816)](this,_0x140c87),this[_0xa9d8a1(0x7b5)](VisuMZ[_0xa9d8a1(0x66d)][_0xa9d8a1(0x738)][_0xa9d8a1(0x1b7)]['BgType']||0x0),this['refresh']();},Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x7f5)]=function(){const _0x35e1d7=_0x54b1d3;this[_0x35e1d7(0x947)][_0x35e1d7(0x21f)]<=0x60&&(this[_0x35e1d7(0x947)]['fontSize']+=0x6);},Window_ButtonAssist['prototype']['makeFontSmaller']=function(){const _0x3c6195=_0x54b1d3;this[_0x3c6195(0x947)][_0x3c6195(0x21f)]>=0x18&&(this['contents'][_0x3c6195(0x21f)]-=0x6);},Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x15b8a8=_0x54b1d3;Window_Base[_0x15b8a8(0x5af)][_0x15b8a8(0x71b)][_0x15b8a8(0x816)](this),this[_0x15b8a8(0x836)]();},Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x2ca)]=function(){const _0x4e0f6d=_0x54b1d3;this['padding']=SceneManager[_0x4e0f6d(0x4c4)]['getButtonAssistLocation']()!==_0x4e0f6d(0x798)?0x0:0x8;},Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x836)]=function(){const _0x11f6ed=_0x54b1d3,_0x568b3d=SceneManager[_0x11f6ed(0x4c4)];for(let _0x3790b5=0x1;_0x3790b5<=0x5;_0x3790b5++){if(this['_data'][_0x11f6ed(0x562)[_0x11f6ed(0x892)](_0x3790b5)]!==_0x568b3d[_0x11f6ed(0x6ca)[_0x11f6ed(0x892)](_0x3790b5)]())return this[_0x11f6ed(0x7c4)]();if(this[_0x11f6ed(0x2f2)][_0x11f6ed(0x796)[_0x11f6ed(0x892)](_0x3790b5)]!==_0x568b3d[_0x11f6ed(0x2b3)[_0x11f6ed(0x892)](_0x3790b5)]())return this['refresh']();}},Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x7c4)]=function(){const _0x195541=_0x54b1d3;this[_0x195541(0x947)]['clear']();for(let _0x767dbe=0x1;_0x767dbe<=0x5;_0x767dbe++){this[_0x195541(0x5ea)](_0x767dbe);}},Window_ButtonAssist[_0x54b1d3(0x5af)][_0x54b1d3(0x5ea)]=function(_0x561d97){const _0x2612a6=_0x54b1d3,_0x58c09=this['innerWidth']/0x5,_0x14af66=SceneManager[_0x2612a6(0x4c4)],_0x576fdc=_0x14af66[_0x2612a6(0x6ca)[_0x2612a6(0x892)](_0x561d97)](),_0x2d3575=_0x14af66[_0x2612a6(0x2b3)[_0x2612a6(0x892)](_0x561d97)]();this['_data']['key%1'[_0x2612a6(0x892)](_0x561d97)]=_0x576fdc,this[_0x2612a6(0x2f2)]['text%1'[_0x2612a6(0x892)](_0x561d97)]=_0x2d3575;if(_0x576fdc==='')return;if(_0x2d3575==='')return;const _0x4563ce=_0x14af66['buttonAssistOffset%1'[_0x2612a6(0x892)](_0x561d97)](),_0x237002=this[_0x2612a6(0x533)](),_0x4696ae=_0x58c09*(_0x561d97-0x1)+_0x237002+_0x4563ce,_0x80fcd7=VisuMZ[_0x2612a6(0x66d)]['Settings'][_0x2612a6(0x1b7)]['TextFmt'];this[_0x2612a6(0x2c6)](_0x80fcd7[_0x2612a6(0x892)](_0x576fdc,_0x2d3575),_0x4696ae,0x0,_0x58c09-_0x237002*0x2);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x292)]=Game_Interpreter['prototype'][_0x54b1d3(0x8c3)],Game_Interpreter[_0x54b1d3(0x5af)][_0x54b1d3(0x8c3)]=function(){const _0x31b060=_0x54b1d3;if($gameTemp[_0x31b060(0x53c)]!==undefined)return VisuMZ['CoreEngine'][_0x31b060(0x3c8)]();return VisuMZ['CoreEngine'][_0x31b060(0x292)]['call'](this);},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x3c8)]=function(){const _0x589d8d=_0x54b1d3,_0x52b610=$gameTemp[_0x589d8d(0x53c)]||0x0;(_0x52b610<0x0||_0x52b610>0x64||TouchInput[_0x589d8d(0x442)]()||Input[_0x589d8d(0x56d)]('cancel'))&&($gameTemp[_0x589d8d(0x53c)]=undefined,Input[_0x589d8d(0x1cb)](),TouchInput[_0x589d8d(0x1cb)]());const _0x27396f=$gameScreen[_0x589d8d(0x6da)](_0x52b610);return _0x27396f&&(_0x27396f['_x']=TouchInput['_x'],_0x27396f['_y']=TouchInput['_y']),VisuMZ[_0x589d8d(0x66d)]['updatePictureCoordinates'](),$gameTemp[_0x589d8d(0x53c)]!==undefined;},VisuMZ[_0x54b1d3(0x66d)]['updatePictureCoordinates']=function(){const _0x548dc7=_0x54b1d3,_0x24628d=SceneManager[_0x548dc7(0x4c4)];if(!_0x24628d)return;!_0x24628d['_pictureCoordinatesWindow']&&(SoundManager[_0x548dc7(0x957)](),_0x24628d[_0x548dc7(0x572)]=new Window_PictureCoordinates(),_0x24628d['addChild'](_0x24628d['_pictureCoordinatesWindow'])),$gameTemp[_0x548dc7(0x53c)]===undefined&&(SoundManager[_0x548dc7(0x756)](),_0x24628d[_0x548dc7(0x5b9)](_0x24628d[_0x548dc7(0x572)]),_0x24628d[_0x548dc7(0x572)]=undefined);};function _0x4f22(_0x56df10,_0x27a2cb){const _0x184cb6=_0x184c();return _0x4f22=function(_0x4f223d,_0x371f24){_0x4f223d=_0x4f223d-0x19b;let _0x59d099=_0x184cb6[_0x4f223d];return _0x59d099;},_0x4f22(_0x56df10,_0x27a2cb);}function Window_PictureCoordinates(){const _0x4b6450=_0x54b1d3;this[_0x4b6450(0x68b)](...arguments);}Window_PictureCoordinates['prototype']=Object[_0x54b1d3(0x37e)](Window_Base[_0x54b1d3(0x5af)]),Window_PictureCoordinates['prototype'][_0x54b1d3(0x62f)]=Window_PictureCoordinates,Window_PictureCoordinates[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(){const _0xc1a356=_0x54b1d3;this[_0xc1a356(0x688)]=_0xc1a356(0x779),this[_0xc1a356(0x43e)]=_0xc1a356(0x779),this[_0xc1a356(0x89f)]=_0xc1a356(0x779);const _0x25cdd0=this[_0xc1a356(0x5c0)]();Window_Base[_0xc1a356(0x5af)][_0xc1a356(0x68b)][_0xc1a356(0x816)](this,_0x25cdd0),this[_0xc1a356(0x7b5)](0x2);},Window_PictureCoordinates[_0x54b1d3(0x5af)][_0x54b1d3(0x5c0)]=function(){const _0x325c46=_0x54b1d3;let _0xc12faa=0x0,_0xddefc0=Graphics['height']-this[_0x325c46(0x939)](),_0x280069=Graphics[_0x325c46(0x589)],_0xb7d62a=this['lineHeight']();return new Rectangle(_0xc12faa,_0xddefc0,_0x280069,_0xb7d62a);},Window_PictureCoordinates[_0x54b1d3(0x5af)][_0x54b1d3(0x2ca)]=function(){const _0x5a8e7d=_0x54b1d3;this[_0x5a8e7d(0x3b4)]=0x0;},Window_PictureCoordinates[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x29cd8b=_0x54b1d3;Window_Base[_0x29cd8b(0x5af)][_0x29cd8b(0x71b)][_0x29cd8b(0x816)](this),this[_0x29cd8b(0x84a)]();},Window_PictureCoordinates[_0x54b1d3(0x5af)][_0x54b1d3(0x84a)]=function(){const _0x4f771e=_0x54b1d3;if(!this[_0x4f771e(0x553)]())return;this[_0x4f771e(0x7c4)]();},Window_PictureCoordinates[_0x54b1d3(0x5af)][_0x54b1d3(0x553)]=function(){const _0x19d0f9=_0x54b1d3,_0x3b0e45=$gameTemp[_0x19d0f9(0x53c)],_0x557392=$gameScreen[_0x19d0f9(0x6da)](_0x3b0e45);return _0x557392?this[_0x19d0f9(0x688)]!==_0x557392[_0x19d0f9(0x34d)]||this[_0x19d0f9(0x43e)]!==_0x557392['_x']||this['_lastY']!==_0x557392['_y']:![];},Window_PictureCoordinates[_0x54b1d3(0x5af)]['refresh']=function(){const _0x3aeb4e=_0x54b1d3;this['contents'][_0x3aeb4e(0x1cb)]();const _0x748696=$gameTemp[_0x3aeb4e(0x53c)],_0x11b7f2=$gameScreen[_0x3aeb4e(0x6da)](_0x748696);if(!_0x11b7f2)return;this['_lastOrigin']=_0x11b7f2['_origin'],this[_0x3aeb4e(0x43e)]=_0x11b7f2['_x'],this[_0x3aeb4e(0x89f)]=_0x11b7f2['_y'];const _0x55de96=ColorManager[_0x3aeb4e(0x8d9)]();this[_0x3aeb4e(0x947)][_0x3aeb4e(0x277)](0x0,0x0,this[_0x3aeb4e(0x2ba)],this['innerHeight'],_0x55de96);const _0x137e07=_0x3aeb4e(0x208)[_0x3aeb4e(0x892)](_0x11b7f2[_0x3aeb4e(0x34d)]===0x0?_0x3aeb4e(0x4b0):'Center'),_0x1dadb2=_0x3aeb4e(0x46d)[_0x3aeb4e(0x892)](_0x11b7f2['_x']),_0x55e0d0='Y:\x20%1'[_0x3aeb4e(0x892)](_0x11b7f2['_y']),_0x40b8bf=_0x3aeb4e(0x7d5)[_0x3aeb4e(0x892)](TextManager[_0x3aeb4e(0x4cb)](_0x3aeb4e(0x6f8)));let _0x1fa7f5=Math[_0x3aeb4e(0x7d9)](this[_0x3aeb4e(0x2ba)]/0x4);this[_0x3aeb4e(0x2b9)](_0x137e07,_0x1fa7f5*0x0,0x0,_0x1fa7f5),this[_0x3aeb4e(0x2b9)](_0x1dadb2,_0x1fa7f5*0x1,0x0,_0x1fa7f5,_0x3aeb4e(0x2c3)),this[_0x3aeb4e(0x2b9)](_0x55e0d0,_0x1fa7f5*0x2,0x0,_0x1fa7f5,'center');const _0xcdc0b3=this[_0x3aeb4e(0x6cc)](_0x40b8bf)[_0x3aeb4e(0x589)],_0x1b931e=this['innerWidth']-_0xcdc0b3;this['drawTextEx'](_0x40b8bf,_0x1b931e,0x0,_0xcdc0b3);};function _0x184c(){const _0x2513e0=['《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','VariableJsBlock','INBACK','getKeyboardInputButtonString','animationBaseDelay','processMoveCommand','Window_NameInput_initialize','movePageButtonSideButtonLayout','BarOffset','processKeyboardEnd','recoverAll','Finish','_editWindow','active','tilesetNames','INEXPO','log','_cacheScaleY','rgba(0,\x200,\x200,\x200.7)','Untitled','_backSprite1','CIRCUMFLEX','batch','OffBarOpacity','expRate','tpColor','moveRelativeToResolutionChange','startAutoNewGame','format','RPGMAKER_VERSION','TRG','_customModified','MinDuration','ColorDeath','_scaleX','damageColor','ColorCTGauge1','_scrollBarVert','Scene_Map_createMenuButton','maxItems','getButtonAssistLocation','_lastY','Rate','%1〘Choice\x20Cancel〙%1','SCROLLBAR','playOnceParallelInterpreter','consumeItem','isNwjs','EnableMasking','title','addChild','setTopRow','easingType','Scene_Name_onInputOk','QwertyLayout','keyCode','snapForBackground','setupCustomRateCoreEngine','_updateFilterArea','FontShadows','pictureButtons','hit','EXCLAMATION','ADD','NoTileShadows','ItemMenu','setLastGamepadUsed','INBOUNCE','_stored_hpGaugeColor1','ItemBgType','STENCIL_TEST','platform','F10','Scene_Title','XParamVocab6','IconXParam2','command105','updateWaitMode','createCancelButton','BattleManager_processEscape','send','processFauxAnimationRequests','innerHeight','STRUCT','LEFT','_coreEngineShakeStyle','SkillTypeRect','onInputBannedWords','MEV','evade','initCoreEasing','buyWindowRect','SystemLoadImages','SideView','markCoreEngineModified','_itemWindow','findSymbol','ColSpacing','cursorPagedown','itemBackColor1','style','Window_NameInput_cursorUp','itemRect','IconXParam0','Map%1.json','Game_Picture_scaleY','Window_Selectable_cursorDown','blendFunc','Game_Action_itemHit','autoRemovalTiming','INOUTSINE','getParameter','makeCoreEngineCommandList','skillId','Match','gaugeRate','SwitchActorText','mmp','setMute','_categoryWindow','WIN_OEM_PA2','updatePictureAntiZoom','PositionJS','_drawTextBody','VisuMZ_2_BattleSystemETB','VisuMZ_2_BattleSystemOTB','_coreEasing','sceneTerminationClearEffects','alpha','paramBase','setSkill','GroupDigits','Game_Interpreter_command355','adjustY','FINAL','_dummyWindow','VisuMZ_3_EventChainReact','ceil','visible','Game_Map_setDisplayPos','_pressed','tpCostColor','_stored_expGaugeColor2','Game_Picture_updateMove','([\x5c+\x5c-]\x5cd+)>','updateOpacity','loadBitmap','left','overallWidth','Layer','params','flush','stop','initialBattleSystem','Input_shouldPreventDefault','cursorPageup','Game_Picture_calcEasing','Bitmap_fillRect','BTestItems','ButtonHeight','endBattlerActions','mirror','NUMPAD5','onButtonImageLoad','LevelUpFullMp','Game_Map_scrollDown','KeySHIFT','_lastGamepad','xparamPlus','AntiZoomPictures','PGDN','isGamepadConnected','Scene_Map_shouldAutosave','INCIRC','titles1','GoldIcon','ColorPowerDown','system','Window_NameInput_processHandling','CTRL','_pagedownButton','statusWindowRect','split','mainAreaTop','characters','Scene_Shop_create','isLoopVertical','erasePicture','createCustomParameter','》Comment《\x0a%1\x0a','Smooth','AGI','processTimingData','LATIN1','Scene_Battle_update','lineHeight','repositionCancelButtonSideButtonLayout','Window_NameInput_refresh','isItemStyle','_windowLayer','and\x20add\x20it\x20onto\x20this\x20one.','Map%1','pageup','setupScrollBarBitmap','CustomParam','src','DigitGroupingExText','setSideView','getCoreEngineScreenShakeStyle','contents','setupButtonImage','EQUAL','createFauxAnimationSprite','integer','adjustPictureAntiZoom','useFontWidthFix','ColorManager_loadWindowskin','turn','Window_Base_createTextState','levelUpRecovery','_hp','setClickHandler','blt','ParseClassNotetags','textWidth','playLoad','OUTEXPO','executeLoad','ColorPowerUp','TimeProgress','guardSkillId','Input_updateGamepadState','ShowScrollBar','DigitGroupingLocale','StatusEquipRect','outlineColor','onKeyDown','_anglePlus','ARRAYJSON','refreshWithTextCodeSupport','text','136QbikOb','Sprite_Animation_processSoundTimings','Game_Picture_angle','setEasingType','loadTileset','IconXParam5','MvAnimationRate','BattleManager_update','checkScrollBarBitmap','Input_setupEventHandlers','IconXParam8','_createInternalTextures','_showDevTools','SParamVocab7','setHandler','getLevel','pow','updateMain','children','setupTileExtendTerrainTags','loadPicture','openingSpeed','nextLevelExp','categoryWindowRect','drawTextTopAligned','CustomParamIcons','Window_NameInput_cursorPageup','ButtonAssist','_stored_crisisColor','Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','isNormalPriority','normal','F7key','showDevTools','IconXParam3','remove','updatePositionCoreEngineShakeRand','initRotation','NameMenu','isSceneBattle','isLoopHorizontal','ColorMPCost','_skillTypeWindow','loadTileBitmap','createTextPopupWindow','responseText','REPLACE','clear','maxTurns','getInputMultiButtonStrings','updatePictureSettings','_logWindow','Flat1','Scene_Map_updateMain','playTestShiftR','ParseAllNotetags','_patternHeight','disable','sparamFlatJS','%2%1%3','top','destroyed','buttonAssistKey1','canEquip','isNextScene','_mirror','catchNormalError','ActorRect','FontSize','buttonAssistOffset1','MultiKeyFmt','_targetOffsetY','actor','_balloonQueue','12669408MRBLcS','NumberRect','Scene_MenuBase_mainAreaTop','StatusRect','_actorWindow','atypeId','_animationSprites','F12','DOLLAR','updateScrollBars','type','image-rendering','Window','en-US','loadSystem','isMapScrollLinked','bitmapWidth','abs','PageChange','REC','retrieveFauxAnimation','_storedMapText','processPointAnimationRequests','createJsQuickFunction','Window_ShopSell_isEnabled','Flat2','createCommandWindow','setBackgroundOpacity','Game_Map_scrollUp','stencilOp','Rate1','WindowLayer_render','initDigitGrouping','_targetX','\x20Origin:\x20%1','reserveNewGameCommonEvent','FontWidthFix','pendingColor','AccuracyBoost','applyEasing','_pollGamepads','repeat','sparamFlat2','PA1','BaseTexture','addAnimationSpriteToContainer','Window_Base_drawFace','seek','_stored_normalColor','_effectsContainer','CustomParamType','buttonAssistOffset4','F23','clearZoom','ActorTPColor','createContents','skillTypes','fontSize','playBgm','toString','Scene_Name_create','anchor','inBattle','destroyScrollBarBitmaps','onKeyDownKeysF6F7','isGamepadButtonPressed','position','PTB','updateDuration','Game_Character_processMoveCommand','TextPopupShow','clearRect','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','ControllerMatches','_screenX','Game_Picture_scaleX','INQUART','Game_Picture_move','ActorMPColor','ApplyEasing','Graphics','processTouch','skills','_stored_maxLvGaugeColor2','createPointAnimationTargets','measureText','ListRect','StatusParamsBgType','Window_Base_createContents','drawCurrencyValue','cursorLeft','currentExp','RightMenus','isCollidedWithEvents','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_clickHandler','Sprite_StateIcon_loadBitmap','updateMotion','systemColor','updateScene','10PuYPoj','isSpecialCode','mpGaugeColor1','SUBTRACT','displayName','IconSParam9','Window_MapName_refresh','Scene_MenuBase_helpAreaTop','CategoryBgType','eventsXyNt','WIN_OEM_RESET','isFullDocumentTitle','processSoundTimings','isSideButtonLayout','normalColor','wholeDuration','loadWindowskin','nw.gui','numActions','OffBarColor','playtestQuickLoad','cos','paintOpacity','_pictureName','catchLoadError','([\x5c+\x5c-]\x5cd+)([%％])>','Mirror','_shakeSpeed','ZERO','(\x5cd+\x5c.?\x5cd+)>','maxScrollX','windowPadding','tpGaugeColor1','terms','MAX_SAFE_INTEGER','_tempActor','process_VisuMZ_CoreEngine_RegExp','ScreenResolution','STR','WIN_OEM_PA3','EISU','faces','titles2','isMagical','IconSParam5','fillRect','NUMPAD1','KeyboardInput','match','setAnglePlusData','prepare','_targetOffsetX','xparamFlatJS','Subtitle','drawRightArrow','VisuMZ_1_OptionsCore','_mapX','initCoreEngineScreenShake','_bypassCanCounterCheck','clamp','command111','Window_Base_initialize','areButtonsHidden','OUTQUAD','contains','PictureCoordinatesMode','onXhrError','_refreshArrows','description','HRG','bitmap','HELP','Game_Interpreter_updateWaitMode','Param','setActorHome','Scene_Battle_createCancelButton','buttons','Game_BattlerBase_refresh','selectLast','isFauxAnimationPlaying','SLASH','_stored_ctGaugeColor1','SParamVocab2','Window_StatusBase_drawActorLevel','CallHandlerJS','max','ColorGaugeBack','Keyboard','Game_Action_numRepeats','pointY','operation','DisplayedParams','ColorCrisis','paramBaseAboveLevel99','ARRAYSTR','ExtractStrFromTroop','Input_update','isSmartEventCollisionOn','_onceParallelInterpreters','Power','isArrowPressed','162HyaAZj','xparamPlusJS','_image','render','buttonAssistText%1','Scene_Battle_createSpritesetFix','F21','mute','ParseActorNotetags','_moveEasingType','drawText','innerWidth','clearOnceParallelInterpreters','createPointAnimationSprite','isRightInputMode','checkSubstitute','INOUTQUART','baseId','_onError','paramMax','center','updateFrameCoreEngine','framesPerChar','drawTextEx','_stored_hpGaugeColor2','save','F13','updatePadding','OpenURL','OUTELASTIC','currentClass','Game_Interpreter_command111','reservePlayTestNewGameCommonEvent','keyboard','cursorUp','offOpacity','OUTCIRC','1.4.4','Sprite_Button_updateOpacity','Scene_Item_create','DetachBattlePictureContainer','F22','addWindow','maxLvGaugeColor1','Window_Selectable_drawBackgroundRect','fromCharCode','233375WdLlqH','pan','drawParamText','successRate','ParamArrow','setupBattleTestItems','VisuMZ_4_UniqueTileEffects','index','process_VisuMZ_CoreEngine_Notetags','_commandList','padZero','OUTBOUNCE','buttonAssistOk','removePointAnimation','showPointAnimations','gaugeLineHeight','EREOF','OutlineColor','xdg-open','StatusBgType','enter','_data','maxLevel','isInputting','startMove','list','\x5c}❪SHIFT❫\x5c{','Location','ParseSkillNotetags','Sprite_AnimationMV_updatePosition','join','ItemPadding','ARRAYNUM','scrollRight','_registerKeyInput','open','Script\x20Call\x20Error','mhp','UNDERSCORE','start','paramPlusJS','Bitmap_strokeRect','Total','Renderer','IconSet','SHIFT','Scene_Options_create','createTroopNote','Scene_Battle_createSpriteset','Basic','showPicture','restore','_downArrowSprite','SParamVocab3','deathColor','processKeyboardDelete','ExportAllTroopText','WIN_OEM_WSCTRL','SlotRect','_displayX','filterArea','_optionsWindow','PERIOD','WIN_OEM_PA1','Window_Base_destroyContents','BACKSPACE','PictureID','SParamVocab8','ParseStateNotetags','Game_Picture_initBasic','OnLoadJS','expParams','updateFauxAnimations','QUOTE','1753204lWPfRh','OutlineColorGauge','ColorMaxLvGauge1','addCommand','_scrollDuration','goto','VisuMZ_2_BattleSystemCTB','playTestF6','_tileSprite','Bitmap_measureTextWidth','Max','targetScaleX','command122','createTileExtendSprites','STB','scrollY','isKeyItem','processKeyboardHome','_onKeyDown','FTB','learnings','KEEP','QoL','Game_Screen_initialize','command355','RevertPreserveNumbers','paramFlatBonus','_isPlaytest','TargetAngle','_currentBgm','Troop%1','processCursorMove','Enemy','_cancelButton','globalAlpha','gameTitle','refreshScrollBarBitmap','asin','_origin','createBuffer','application/json','Window_Selectable_processCursorMove','MenuLayout','makeEncounterCount','_slotWindow','isGamepadAxisMoved','COLON','xparamRateJS','Window_Gold_refresh','buttonAssistCancel','onerror','ConvertParams','ActorBgType','drawCharacter','goldWindowRect','SellBgType','keyMapper','resetTextColor','requestPointAnimation','replace','StatusEquipBgType','layoutSettings','updateOrigin','HelpBgType','OpenConsole','measureTextWidthNoRounding','_animationQueue','SnapshotOpacity','SceneManager_isGameActive','Game_System_initialize','drawAllParams','buttonAssistWindowSideRect','backspace','F19','tileset','CLOSE_BRACKET','NEAREST','seVolume','deactivate','isEnabled','Game_Troop_setup','_cache','createExtendedTileSprite','_changingClass','SParamVocab5','Window_EquipItem_isEnabled','_inputSpecialKeyCode','create','listWindowRect','itemEva','SwitchRandomizeOne','gaugeHeight','drawActorClass','Window_NumberInput_processDigitChange','META','FDR','DebugConsoleLastControllerID','_originalViewport','Input_onKeyDown','IconSParam1','_stored_ctGaugeColor2','ParseWeaponNotetags','targetOpacity','reserveCommonEvent','Window_NumberInput_start','%1/','ENTER','Key%1','Rate2','updateText','object','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','removeAllPointAnimations','Plus','createTilemap','parameters','isClosing','_targetScaleX','Bitmap_gradientFillRect','MAXMP','WIN_ICO_HELP','ItemStyle','Spriteset_Base_initialize','storeMapData','playBgs','pages','smooth','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','Window_Base_drawCharacter','IconParam3','outbounce','Linear','textAlign','_isWindow','Game_Map_setup','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','Game_Picture_x','_inputString','AnimationID','itemBackColor2','move','padding','Scene_Equip_create','createPageButtons','loadBitmapCoreEngine','_mainSprite','exportAllTroopStrings','playEscape','skipBranch','setDisplayPos','slotWindowRect','openURL','buttonAssistOffset3','hide','hpColor','Graphics_defaultStretchMode','_colorCache','DashToggleR','LineHeight','scrollbar','WIN_OEM_FJ_JISHO','UpdatePictureCoordinates','helpWindowRect','toFixed','Window_Base_drawText','_targetAnchor','Game_Temp_initialize','WIN_OEM_FJ_LOYA','showIncompleteTilesetError','【%1】\x0a','missed','_mapNameWindow','Scene_Skill_create','OutlineColorDmg','Sprite_Gauge_gaugeRate','startAnimation','saveViewport','_mode','_lastScrollBarValues','mainAreaBottom','_animation','NUMPAD8','scaleMode','changeClass','BTestArmors','cursorRight','_hideTileShadows','maxTp','_startLoading','setCoreEngineScreenShakeStyle','KeyUnlisted','cancelShowButton','WIN_OEM_JUMP','isInstanceOfSceneMap','buttonAssistWindowButtonRect','_opacity','push','alwaysDash','buttonAssistKey4','MIN_SAFE_INTEGER','EVA','_forcedTroopView','process_VisuMZ_CoreEngine_jsQuickFunctions','_movementDuration','Plus1','addLoadListener','BattleSystem','_isButtonHidden','AdjustAngle','createKeyJS','PixelateImageRendering','SCALE_MODES','_playtestF7Looping','StartID','sparamPlusJS','MDF','7538619NJJDHh','DummyBgType','SceneManager_onKeyDown','Game_Party_consumeItem','_height','mainAreaHeight','_makeFontNameText','scrollbarHeight','ConvertNumberToString','Scene_Map_createSpriteset_detach','itemLineRect','initMembers','OUTQUART','select','pop','add','ShiftR_Toggle','isMaxLevel','applyForcedGameTroopSettingsCoreEngine','_commandWindow','Plus2','BgFilename2','DimColor2','shift','BlendMode','mainFontSize','_viewportSize','GRD','itemHeight','URL','originalJS','setValue','openness','MapOnceParallel','helpAreaTop','dashToggle','textBaseline','_targets','drawNewParam','createAnimationSprite','_hideButtons','ParseTilesetNotetags','setLastPluginCommandInterpreter','bgs','stencilFunc','INOUTCUBIC','CRSEL','paramY','ScaleY','PDR','subjectHitRate','Spriteset_Base_destroy','XParamVocab4','sparamRate','_pointAnimationQueue','Game_BattlerBase_initMembers','updatePosition','_allTextHeight','menu','setCommonEvent','INOUTBACK','_drawTextOutline','SubfolderParse','_lastX','_tileExtendSprites','Window_Selectable_processTouch','AnimationMirrorOffset','isCancelled','enableDigitGrouping','BACK_QUOTE','isRepeated','get','_targetY','xparam','_addShadow','skillTypeWindowRect','hasEncryptedImages','StatusMenu','_stored_expGaugeColor1','SceneManager_exit','Game_Map_scrollLeft','_target','enemy','buttonAssistText5','CorrectSkinBleeding','setViewport','VisuMZ_1_BattleCore','sparam','child_process','animationShouldMirror','_screenY','resize','_pointAnimationSprites','isScrollBarVisible','WIN_OEM_ENLW','actorWindowRect','battlebacks1','Bitmap_drawTextOutline','initButtonHidden','updateScrollBarVisibility','DrawItemBackgroundJS','WIN_OEM_CUSEL','SParameterFormula','parseForcedGameTroopSettingsCoreEngine','pixelated','ItemRect','_timeDuration','toUpperCase','boxWidth','updateClose','X:\x20%1','<%1\x20%2:[\x20]','isGamepadTriggered','colSpacing','154322jLakUR','Sprite_Gauge_currentValue','CONVERT','_upArrowSprite','paramchangeTextColor','sqrt','isEventTest','worldTransform','defaultInputMode','bitmapHeight','indexOf','ExportStrFromAllTroops','outlineColorDmg','up2','WIN_OEM_FINISH','Game_Event_start','OS_KEY','ValueJS','tileWidth','FadeSpeed','Scene_Map_updateScene','isPhysical','drawGameSubtitle','updateDashToggle','MAXHP','round','waiting','RepositionEnemies','setBattleSystem','Bitmap_initialize','SplitEscape','textHeight','_refreshBack','createSpriteset','_dimmerSprite','_stored_gaugeBackColor','_textQueue','NumberBgType','_backgroundFilter','_currentBgs','textColor','_goldWindow','createPointAnimation','Game_Interpreter_command122','drawActorSimpleStatus','updateBgsParameters','updateSmoothScroll','_movementWholeDuration','ShiftT_Toggle','MaxDuration','_actor','BattleManager_invokeCounterAttack','canUse','processKeyboardDigitChange','getColorDataFromPluginParameters','_encounterCount','NameInputMessage','processKeyboardHandling','addQueue','SlotBgType','PreserveNumbers','helpAreaHeight','RequireFocus','Upper\x20Left','drawGoldItemStyle','context','xparamRate','PHA','Bitmap_resize','applyEasingAnglePlus','switchModes','XParamVocab0','Sprite_AnimationMV_processTimingData','Skill-%1-%2','item','isBottomHelpMode','shake','hideButtonFromView','Opacity','playTestF7','createTitleButtons','_statusWindow','_centerElement','_scene','removeOnceParallelInterpreter','xScrollLinkedOffset','CustomParamNames','isClosed','_tilemap','HYPHEN_MINUS','getInputButtonString','setupCoreEasing','gainItem','_colorTone','updateDocumentTitle','processAlwaysEscape','mainAreaTopSideButtonLayout','_refreshPauseSign','Sprite_StateIcon_updateFrame','SETTINGS','ColorNormal','F16','retrievePointAnimation','LoadError','_stored_powerUpColor','MRF','ParamName','onClick','EndingID','Scene_Map_update','isOpening','F18','_index','currencyUnit','value','horzJS','setMainFontSize','drawFace','sv_actors','vertical','getControllerInputButtonMatch','Window_refreshBack','updateAnglePlus','updateBgmParameters','Window_NameInput_cursorLeft','ctrlKey','GoldMax','KANA','allowShiftScrolling','Scene_Base_create','requestFauxAnimation','onload','PRINTSCREEN','_gamepadWait','BuyRect','HOME','GoldBgType','IconXParam7','INOUTQUINT','getGamepads','faceWidth','stringKeyMap','XParamVocab2','_srcBitmap','isGameActive','itemWindowRect','onInputOk','SystemSetWindowPadding','tilesetFlags','length','NONCONVERT','INELASTIC','applyCoreEasing','TitleCommandList','ListBgType','MRG','startNormalGame','〘Common\x20Event\x20%1:\x20%2〙\x20Start','resetFontSettings','TPB\x20ACTIVE','DetachMapPictureContainer','strokeRect','numberShowButton','endAction','ShowDevTools','adjustX','_iconIndex','CLEAR','Window_Scrollable_update','backOpacity','setupNewGame','DELETE','deselect','commandWindowRect','repositionEnemiesByResolution','Window_Selectable_itemRect','WIN_OEM_ATTN','anglePlus','_baseSprite','setAttack','XParamVocab7','updatePositionCoreEngineShakeOriginal','〘Common\x20Event\x20%1:\x20%2〙\x20End','drawBackgroundRect','_stored_tpGaugeColor1','OUTQUINT','renderNoMask','clearForcedGameTroopSettingsCoreEngine','MINUS','SystemLoadAudio','Window_TitleCommand_selectLast','Sprite_destroy','Game_Picture_show','runCombinedScrollingTextAsCode','itemPadding','gainGold','isItem','processCursorHomeEndTrigger','framesMin','_destroyCanvas','IconSParam8','process_VisuMZ_CoreEngine_Functions','NUM_LOCK','_pictureCoordinatesMode','_buyWindow','updateCurrentEvent','MDR','_forcedBattleSys','framesMax','buttonAssistOffset5','CtrlQuickLoad','TextStr','PositionY','OpenSpeed','reduce','isBottomButtonMode','powerDownColor','TILDE','VisuMZ_2_BattleSystemFTB','onlyfilename','ScaleX','ButtonFadeSpeed','Scene_Base_terminateAnimationClearBugFix','App','_repositioned','Sprite_Animation_setViewport','needsUpdate','mev','isSceneMap','WIN_ICO_00','startShake','playBuzzer','string','targetScaleY','usableSkills','Sprite_Picture_loadBitmap','canAttack','writeFile','_buttonAssistWindow','ColorExpGauge2','sin','key%1','param','BoxMargin','Window_Selectable_cursorUp','FUNC','createSubSprite','#%1','setWindowPadding','DECIMAL','moveMenuButtonSideButtonLayout','GoldRect','isTriggered','isOpen','isTouchedInsideFrame','focus','PGUP','_pictureCoordinatesWindow','LINEAR','Scene_Base_createWindowLayer','Game_Map_changeTileset','itemHit','DEFAULT_SHIFT_Y','contentsOpacity','Spriteset_Base_isAnimationPlaying','refreshSpritesetForExtendedTiles','sparamPlus1','Input_clear','stypeId','mpCostColor','getPointAnimationLayer','bind','isUseModernControls','pos','showFauxAnimations','_numberWindow','buttonY','CommonEventID','ONE','isAnimationPlaying','width','printError','createButtonAssistWindow','drawItem','updatePositionCoreEngineShakeVert','uiAreaWidth','mainAreaHeightSideButtonLayout','pagedown','_tileExtendTerrainTags','ControllerButtons','scrollLeft','current','Sprite_Picture_updateOrigin','_lastIconIndex','terminate','_forcedBattleGridSystem','paramWidth','original','SellRect','img/%1/','IconSParam0','ColorHPGauge2','offsetX','processHandling','createBackground','isActiveTpb','ForceNoPlayTest','ColorTPCost','centerX','tileHeight','DOWN','AMPERSAND','INSINE','currentValue','Game_Action_setAttack','itemHitImprovedAccuracy','destroy','font','prototype','updateFrame','_shakePower','inputWindowRect','registerCommand','clearCachedKeys','DIVIDE','isMVAnimation','_number','Scene_Battle_createSpriteset_detach','removeChild','Game_Picture_y','loadIconBitmap','AllMaps','level','sparamPlus','return\x200','windowRect','Scene_Map_updateMainMultiply','_name','〘Show\x20Text〙\x0a','pointX','Spriteset_Battle_createEnemies','bgmVolume','TAB','mapId','mpColor','CreateBattleSystemID','DigitGroupingStandardText','blockWidth','right','Actor','origin','setViewportCoreEngineFix','AudioChangeBgsPitch','_closing','background','fillAll','INQUAD','F6key','buttonAreaHeight','Chance','angle','pitch','option','expGaugeColor2','CodeJS','exp','VisuMZ_2_BattleSystemSTB','note','encounterStepsMinimum','LESS_THAN','parse','Bitmap_drawCircle','CANCEL','buttonAssistText1','ImprovedAccuracySystem','\x5c}❪TAB❫\x5c{','GoldFontSize','drawSegment','updateAnchor','(\x5cd+)([%％])>','652211YZbXAF','_action','ONE_MINUS_SRC_ALPHA','Game_Interpreter_command105','LUK','processCursorMoveModernControls','_statusEquipWindow','initVisuMZCoreEngine','vert','transform','setMoveEasingType','Window_Base_update','RepositionEnemies130','EditRect','updatePositionCoreEngineShakeHorz','IconIndex','SParamVocab9','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_commonEventLayers','_addSpotTile','SEMICOLON','removeAllFauxAnimations','_fauxAnimationSprites','Scene_MenuBase_createCancelButton','enableDigitGroupingEx','isTileExtended','checkCacheKey','removeAnimation','thickness','useDigitGroupingEx','ExportCurMapText','ItemBackColor1','_bgsBuffer','commandWindowRows','adjustSprite','areTileShadowsHidden','_stored_deathColor','MODECHANGE','offsetY','sv_enemies','XParamVocab3','Type','isExpGaugeDrawn','_phase','ARRAYEVAL','_listWindow','scrollX','NON_FRAME','number','members','scrollUp','Graphics_printError','RegExp','_spriteset','useDigitGrouping','ARRAYFUNC','BTB','EXSEL','checkPassage','apply','IconParam5','tilesets','KeyTAB','ShortcutScripts','makeDeepCopy','_battlerName','constructor','expGaugeColor1','shouldAutosave','gradientFillRect','getCustomBackgroundSettings','DigitGroupingDamageSprites','_duration','valueOutlineColor','XParamVocab9','onNameOk','GET','_shouldPreventDefault','Input_pollGamepads','_digitGrouping','Game_Event_isCollidedWithEvents','updateTransform','CrisisRate','cursorDown','EXR','ALWAYS','IconParam7','duration','exit','OPEN_PAREN','drawGameTitle','_eventId','animations','moveCancelButtonSideButtonLayout','Game_Actor_levelUp','PictureShowIcon','targetX','TGR','buttonAssistText3','CommandBgType','initialLevel','BattleManager_checkSubstitute','_centerElementCoreEngine','_windowskin','endAnimation','〘Scrolling\x20Text〙\x0a','setAction','IconSParam4','BlurFilter','itemSuccessRate','outlineColorGauge','maxLvGaugeColor2','loadTitle1','ItemHeight','Sprite_Button_initialize','Scene_Boot_startNormalGame','FunctionName','loading','iconHeight','_setupEventHandlers','Graphics_centerElement','command357','paramRate','EquipMenu','requestMotion','getColor','_profileWindow','MCR','CoreEngine','default','Scene_Map_initialize','_updateGamepadState','Game_Actor_changeClass','catchUnknownError','Unnamed','processEscape','_centerCameraCheck','_stored_tpGaugeColor2','IconParam4','_maxDigits','makeInputButtonString','_troopId','Tilemap_addShadow','atbActive','itypeId','ImgLoad','boxHeight','isCursorMovable','_offsetY','isPressed','NUMPAD9','Weapon-%1-%2','addEventListener','_displayY','xparamFlat1','_lastOrigin','arePageButtonsEnabled','GREATER_THAN','initialize','loadSystemImages','ModernControls','setupRate','PictureRotateBy','PRESERVCONVERSION(%1)','PictureFilename','Game_Map_scrollRight','name','(\x5cd+)>','Sprite_Actor_setActorHome','subtitle','ExtJS','NUMPAD4','removeTileExtendSprites','random','smoothSelect','rowSpacing','0.00','subject','setTileFrame','parallaxes','SwitchRandomizeRange','forceStencil','makeCommandList','_muteSound','ScreenShake','animationId','_digitGroupingEx','Duration','ETB','DataManager_setupNewGame','maxHorz','_inputWindow','concat','ATK','setSize','_anchor','setFrame','setActionState','ASTERISK','Window_Base_drawIcon','iconWidth','updateMove','WIN_OEM_FJ_TOUROKU','updatePointAnimations','Manual','BannedWords','createWindowLayer','Scene_Map_createSpritesetFix','drawCurrentParam','createPointAnimationQueue','ShowButtons','battleSystem','changeAnglePlusData','loadMapData','min','isMaskingEnabled','Symbol','CustomParamAbb','isSideView','drawGameVersion','clearStencil','buttonAssistKey%1','setAnchor','textSizeEx','Window_NameInput_processTouch','AudioChangeBgsVolume','_context','ZOOM','xparamFlat2','stretch','ExtDisplayedParams','ColorMaxLvGauge2','paramRate1','gainSilentTp','EnableNameInput','F15','dimColor1','picture','wtypeId','displayY','_offsetX','Armor-%1-%2','_shakeDuration','etypeId','isPointAnimationPlaying','WIN_OEM_FJ_ROYA','drawCircle','BarBodyColor','Scene_TitleTransition','pictureId','targetObjects','close','offColor','updateBackOpacity','DATABASE','randomJS','NUM','addChildToBack','ExportStrFromAllMaps','_targetOpacity','keyRepeatWait','isMenuButtonAssistEnabled','drawGauge','_storedStack','meVolume','Game_Interpreter_PluginCommand','_pageupButton','cancel','_stored_mpCostColor','Spriteset_Base_updatePosition','ENTER_SPECIAL','drawActorExpGauge','SPACE','MenuBg','scale','targetSpritePosition','_fauxAnimationQueue','OPEN_BRACKET','volume','Title','Bitmap_drawText','centerY','PictureRotate','playTestShiftT','sparamPlus2','setup','_baseTexture','AllTroops','Scene_Map_createSpriteset','_saveFileID','QUESTION_MARK','activate','VOLUME_UP','MAT','DisplayLockY','_backSprite2','_timerSprite','Window_StatusBase_drawActorSimpleStatus','Conditional\x20Branch\x20Script\x20Error','PictureEraseAll','BackOpacity','drawActorLevel','update','requiredWtypeId1','PictureEasingType','profileWindowRect','F11','Gold','VisuMZ_2_BattleSystemPTB','DisplayLockX','invokeCounterAttack','_backSprite','getTileExtendTerrainTags','State-%1-%2','mpGaugeColor2','keypress','Scene_Boot_onDatabaseLoaded','buttonAssistKey5','AudioChangeBgmVolume','BuyBgType','isAnimationOffsetXMirrored','initRotationCoreEngine','Game_Actor_paramBase','AudioChangeBgsPan','Spriteset_Map_createTilemap','Scene_MenuBase_mainAreaHeight','paramPlus','scrollDown','SideButtons','getControllerInputButtonString','updateRotation','Settings','EnableJS','CRI','_playTestFastMode','data/','onActorChange','toLowerCase','processTouchModernControls','Window_NameInput_cursorRight','%1%2','pictures','ParseItemNotetags','_opening','randomInt','traitsPi','ExtractStrFromMap','numRepeats','_stored_pendingColor','SystemSetFontSize','performEscape','setSideButtonLayout','_startPlaying','rightArrowWidth','scaleX','_pictureContainer','Scene_Base_terminate','process_VisuMZ_CoreEngine_CustomParameters','EVAL','_shiftY','map','playCancel','Game_Picture_initRotation','GetParamIcon','pagedownShowButton','ColorTPGauge1','targetEvaRate','_statusParamsWindow','ParseEnemyNotetags','IconXParam9','areButtonsOutsideMainUI','changeTileset','doesNameContainBannedWords','createFauxAnimation','VisuMZ_2_BattleSystemBTB','AudioChangeBgmPan','_onLoad','AudioChangeBgmPitch','contentsBack','updateOpen','OPEN_CURLY_BRACKET','connected','Scene_Status_create','createCustomBackgroundImages','removeAnimationFromContainer','dimColor2','touchUI','Scene_GameEnd_createBackground','NUMPAD3','enable','nickname','InputRect','operand','HelpRect','isOpenAndActive','redraw','nah','traitObjects','SwitchToggleOne','initMembersCoreEngine','DETACH_PICTURE_CONTAINER','SystemSetBattleSystem','displayX','exec','Scene_MenuBase_createPageButtons','SceneManager_initialize','_destroyInternalTextures','EditBgType','WASD','enemies','baseTextRect','isNumpadPressed','Show\x20Scrolling\x20Text\x20Script\x20Error','Sprite_Battler_startMove','battlebacks2','jsonToZip','opacity','_list','SkillMenu','initBasic','targetPosition','CONTEXT_MENU','menuShowButton','_coreEasingType','_tile','text%1','isDying','button','XParamVocab1','home','uiAreaHeight','playOk','PRINT','setupCoreEngine','_onKeyPress','KeyItemProtect','savefileInfo','targetContentsOpacity','createTextState','drawIconBySize','ParseArmorNotetags','_bgmBuffer','dropItems','ctGaugeColor2','bgsVolume','isForFriend','drawIcon','scaleY','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','ExportString','DEF','_text','GameEnd','Spriteset_Base_update','Bitmap_clearRect','buttonAssistKey3','setBackgroundType','Bitmap_blt','_scrollBarHorz','INOUTBOUNCE','evaded','getLastPluginCommandInterpreter','makeTargetSprites','getBackgroundOpacity','_subject','_width','496342wdEPRJ','CommandRect','hpGaugeColor1','buttonAssistOffset2','optionsWindowRect','refresh','_lastPluginCommandInterpreter','AutoScrollLockX','SLEEP','height','filters','checkSmartEventCollision','powerUpColor','_rate','IDs','drawBackground','paramRateJS','CLOSE_PAREN','SEPARATOR','onMoveEnd','paramValueByName','updateScrollBarPosition','%1:\x20Exit\x20','getBattleSystem','\x0a\x0a\x0a\x0a\x0a','isWindowMaskingEnabled','floor','StatusParamsRect','NUMPAD2','isAnimationForEach','font-smooth','tab','destroyContents','zoomScale','ProfileRect','filter','OptionsRect','SELECT','ALT','setActorHomeRepositioned','updatePlayTestF7','Game_Action_itemEva','setCoreEngineUpdateWindowBg','ExportCurTroopText','targetBackOpacity','playCursorSound','target','OptionsBgType','GoldChange','forceOutOfPlaytest','INSERT','includes','drawParamName','advanced','makeFontBigger','onLoad','animationNextDelay','processDigitChange','END','_currentMap','maxScrollbar','createDimmerSprite','fadeSpeed','currentLevelExp','BasicParameterFormula','setupValueFont','TCR','OptionsMenu','BottomButtons','helpAreaTopSideButtonLayout','show','updateEffekseer','sparamRate2','levelUp','ExportAllMapText','process_VisuMZ_CoreEngine_ControllerButtons','WIN_OEM_AUTO','CNT','INOUTEXPO','_drawTextShadow','maxGold','addOnceParallelInterpreter','_pauseSignSprite','ShowActorLevel','Flat','3zpLJWi','maxCols','call','ParamChange','Game_Picture_updateRotation','_backgroundSprite','Wait','toLocaleString','INCUBIC','CTB','initCoreEngine','playCursor','smallParamFontSize','version','getLastUsedGamepadType','statusEquipWindowRect','_menuButton','charAt','code','inbounce','SParamVocab6','test','updateCoreEasing','_textPopupWindow','onDatabaseLoaded','ExtractStrFromList','valueOutlineWidth','INOUTCIRC','_CoreEngineSettings','yScrollLinkedOffset','paramName','isPlaytest','Padding','horz','updateKeyText','updateMainMultiply','CEV','keys','BgFilename1','translucentOpacity','WIN_OEM_BACKTAB','down','Page','NewGameBoot','VOLUME_MUTE','isOptionValid','StateIconsNonFrame','_active','vertJS','maxVert','clone','ColorMPGauge2','trim','setEnemyAction','updateData','changeTextColor','HIT','centerCameraCheckData','rgba(0,\x200,\x200,\x201.0)','BACK_SLASH','_defaultStretchMode','fillText','DurationPerChat','TextJS','mainCommandWidth','XParamVocab8','processKeyboardBackspace','escape','checkCoreEngineDisplayCenter','isPlaying','buttonAssistSwitch','ColorSystem','COMMA','buttonAssistText4','DimColor1','DigitGroupingGaugeSprites','_cacheScaleX','makeDocumentTitle','SParamVocab0','Color','isHandled','xparamFlatBonus','wait','_helpWindow','isActor','PLUS','ATTN','Scene_Boot_updateDocumentTitle','_scaleY','OTB','IconXParam6','maxBattleMembers','calcEasing','encounterStep','Class-%1-%2','coreEngineRepositionEnemies','_sellWindow','loadGameImagesCoreEngine'];_0x184c=function(){return _0x2513e0;};return _0x184c();}function Window_TextPopup(){const _0x11eea2=_0x54b1d3;this[_0x11eea2(0x68b)](...arguments);}Window_TextPopup[_0x54b1d3(0x5af)]=Object[_0x54b1d3(0x37e)](Window_Base['prototype']),Window_TextPopup[_0x54b1d3(0x5af)][_0x54b1d3(0x62f)]=Window_TextPopup,Window_TextPopup[_0x54b1d3(0x4d4)]={'framesPerChar':VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x738)][_0x54b1d3(0x1f2)][_0x54b1d3(0x852)]??1.5,'framesMin':VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x1f2)][_0x54b1d3(0x896)]??0x5a,'framesMax':VisuMZ[_0x54b1d3(0x66d)]['Settings'][_0x54b1d3(0x1f2)][_0x54b1d3(0x4a2)]??0x12c},Window_TextPopup[_0x54b1d3(0x5af)][_0x54b1d3(0x68b)]=function(){const _0x5276d7=_0x54b1d3,_0xd9795a=new Rectangle(0x0,0x0,0x1,0x1);Window_Base[_0x5276d7(0x5af)][_0x5276d7(0x68b)]['call'](this,_0xd9795a),this[_0x5276d7(0x41f)]=0x0,this[_0x5276d7(0x7b0)]='',this[_0x5276d7(0x495)]=[],this[_0x5276d7(0x469)]=0x0;},Window_TextPopup[_0x54b1d3(0x5af)]['isAutoColorAffected']=function(){return!![];},Window_TextPopup[_0x54b1d3(0x5af)][_0x54b1d3(0x4ab)]=function(_0x5146f6){const _0x5a1138=_0x54b1d3;if(this['_textQueue'][this[_0x5a1138(0x495)][_0x5a1138(0x506)]-0x1]===_0x5146f6)return;this[_0x5a1138(0x495)][_0x5a1138(0x3eb)](_0x5146f6),SceneManager['_scene'][_0x5a1138(0x8a8)](this);},Window_TextPopup[_0x54b1d3(0x5af)]['update']=function(){const _0x37f616=_0x54b1d3;Window_Base[_0x37f616(0x5af)][_0x37f616(0x71b)][_0x37f616(0x816)](this),this[_0x37f616(0x394)](),this[_0x37f616(0x22a)]();},Window_TextPopup[_0x54b1d3(0x5af)][_0x54b1d3(0x394)]=function(){const _0x5315cc=_0x54b1d3;if(this['_text']!=='')return;if(this['_textQueue'][_0x5315cc(0x506)]<=0x0)return;if(!this[_0x5315cc(0x4c8)]())return;this[_0x5315cc(0x7b0)]=this['_textQueue'][_0x5315cc(0x416)]();const _0x32b679=Window_TextPopup[_0x5315cc(0x4d4)],_0x2ef454=Math[_0x5315cc(0x8ff)](this['_text'][_0x5315cc(0x506)]*_0x32b679[_0x5315cc(0x2c5)]);this[_0x5315cc(0x469)]=_0x2ef454[_0x5315cc(0x285)](_0x32b679[_0x5315cc(0x537)],_0x32b679[_0x5315cc(0x541)]);const _0xd4bc09=this['textSizeEx'](this[_0x5315cc(0x7b0)]);let _0x15b768=_0xd4bc09[_0x5315cc(0x589)]+this[_0x5315cc(0x533)]()*0x2;_0x15b768+=$gameSystem[_0x5315cc(0x269)]()*0x2;let _0x40c7b9=Math[_0x5315cc(0x29f)](_0xd4bc09['height'],this[_0x5315cc(0x939)]());_0x40c7b9+=$gameSystem[_0x5315cc(0x269)]()*0x2;const _0x58172b=Math[_0x5315cc(0x48a)]((Graphics[_0x5315cc(0x589)]-_0x15b768)/0x2),_0x4f42f4=Math[_0x5315cc(0x48a)]((Graphics[_0x5315cc(0x7c8)]-_0x40c7b9)/0x2),_0x17c878=new Rectangle(_0x58172b,_0x4f42f4,_0x15b768,_0x40c7b9);this[_0x5315cc(0x3b3)](_0x17c878['x'],_0x17c878['y'],_0x17c878[_0x5315cc(0x589)],_0x17c878[_0x5315cc(0x7c8)]),this[_0x5315cc(0x21d)](),this[_0x5315cc(0x7c4)](),this[_0x5315cc(0x300)](),SceneManager[_0x5315cc(0x4c4)][_0x5315cc(0x8a8)](this);},Window_TextPopup['prototype']['refresh']=function(){const _0x1b9160=_0x54b1d3,_0x111e0f=this[_0x1b9160(0x787)]();this[_0x1b9160(0x947)]['clear'](),this[_0x1b9160(0x2c6)](this['_text'],_0x111e0f['x'],_0x111e0f['y'],_0x111e0f['width']);},Window_TextPopup['prototype'][_0x54b1d3(0x22a)]=function(){const _0x3266b3=_0x54b1d3;if(this[_0x3266b3(0x4df)]()||this[_0x3266b3(0x39b)]())return;if(this['_timeDuration']<=0x0)return;this[_0x3266b3(0x469)]--,this[_0x3266b3(0x469)]<=0x0&&(this[_0x3266b3(0x6e8)](),this[_0x3266b3(0x7b0)]='');},VisuMZ['ShowDevTools']=function(_0x301c2e){const _0x232d5=_0x54b1d3;if(Utils[_0x232d5(0x841)](_0x232d5(0x829))){var _0x1f8b15=require(_0x232d5(0x25b))[_0x232d5(0x1f2)][_0x232d5(0x446)]();SceneManager[_0x232d5(0x1bd)]();if(_0x301c2e)setTimeout(_0x1f8b15[_0x232d5(0x570)][_0x232d5(0x580)](_0x1f8b15),0x190);}},VisuMZ['ApplyEasing']=function(_0x2b4093,_0xc9a35c){const _0x4bf36f=_0x54b1d3;_0xc9a35c=_0xc9a35c[_0x4bf36f(0x46a)]();var _0x45c90e=1.70158,_0x3b9b8e=0.7;switch(_0xc9a35c){case _0x4bf36f(0x573):return _0x2b4093;case _0x4bf36f(0x5a9):return-0x1*Math[_0x4bf36f(0x25f)](_0x2b4093*(Math['PI']/0x2))+0x1;case'OUTSINE':return Math[_0x4bf36f(0x561)](_0x2b4093*(Math['PI']/0x2));case _0x4bf36f(0x8e4):return-0.5*(Math[_0x4bf36f(0x25f)](Math['PI']*_0x2b4093)-0x1);case _0x4bf36f(0x5d5):return _0x2b4093*_0x2b4093;case _0x4bf36f(0x289):return _0x2b4093*(0x2-_0x2b4093);case'INOUTQUAD':return _0x2b4093<0.5?0x2*_0x2b4093*_0x2b4093:-0x1+(0x4-0x2*_0x2b4093)*_0x2b4093;case _0x4bf36f(0x81c):return _0x2b4093*_0x2b4093*_0x2b4093;case'OUTCUBIC':var _0x1c66fd=_0x2b4093-0x1;return _0x1c66fd*_0x1c66fd*_0x1c66fd+0x1;case _0x4bf36f(0x42c):return _0x2b4093<0.5?0x4*_0x2b4093*_0x2b4093*_0x2b4093:(_0x2b4093-0x1)*(0x2*_0x2b4093-0x2)*(0x2*_0x2b4093-0x2)+0x1;case _0x4bf36f(0x232):return _0x2b4093*_0x2b4093*_0x2b4093*_0x2b4093;case _0x4bf36f(0x40b):var _0x1c66fd=_0x2b4093-0x1;return 0x1-_0x1c66fd*_0x1c66fd*_0x1c66fd*_0x1c66fd;case _0x4bf36f(0x2bf):var _0x1c66fd=_0x2b4093-0x1;return _0x2b4093<0.5?0x8*_0x2b4093*_0x2b4093*_0x2b4093*_0x2b4093:0x1-0x8*_0x1c66fd*_0x1c66fd*_0x1c66fd*_0x1c66fd;case'INQUINT':return _0x2b4093*_0x2b4093*_0x2b4093*_0x2b4093*_0x2b4093;case _0x4bf36f(0x52a):var _0x1c66fd=_0x2b4093-0x1;return 0x1+_0x1c66fd*_0x1c66fd*_0x1c66fd*_0x1c66fd*_0x1c66fd;case _0x4bf36f(0x4fb):var _0x1c66fd=_0x2b4093-0x1;return _0x2b4093<0.5?0x10*_0x2b4093*_0x2b4093*_0x2b4093*_0x2b4093*_0x2b4093:0x1+0x10*_0x1c66fd*_0x1c66fd*_0x1c66fd*_0x1c66fd*_0x1c66fd;case _0x4bf36f(0x885):if(_0x2b4093===0x0)return 0x0;return Math[_0x4bf36f(0x1ac)](0x2,0xa*(_0x2b4093-0x1));case _0x4bf36f(0x958):if(_0x2b4093===0x1)return 0x1;return-Math[_0x4bf36f(0x1ac)](0x2,-0xa*_0x2b4093)+0x1;case _0x4bf36f(0x80d):if(_0x2b4093===0x0||_0x2b4093===0x1)return _0x2b4093;var _0x3a5948=_0x2b4093*0x2,_0x1b979a=_0x3a5948-0x1;if(_0x3a5948<0x1)return 0.5*Math[_0x4bf36f(0x1ac)](0x2,0xa*_0x1b979a);return 0.5*(-Math[_0x4bf36f(0x1ac)](0x2,-0xa*_0x1b979a)+0x2);case _0x4bf36f(0x923):var _0x3a5948=_0x2b4093/0x1;return-0x1*(Math[_0x4bf36f(0x476)](0x1-_0x3a5948*_0x2b4093)-0x1);case _0x4bf36f(0x2d3):var _0x1c66fd=_0x2b4093-0x1;return Math[_0x4bf36f(0x476)](0x1-_0x1c66fd*_0x1c66fd);case _0x4bf36f(0x82f):var _0x3a5948=_0x2b4093*0x2,_0x1b979a=_0x3a5948-0x2;if(_0x3a5948<0x1)return-0.5*(Math['sqrt'](0x1-_0x3a5948*_0x3a5948)-0x1);return 0.5*(Math[_0x4bf36f(0x476)](0x1-_0x1b979a*_0x1b979a)+0x1);case _0x4bf36f(0x878):return _0x2b4093*_0x2b4093*((_0x45c90e+0x1)*_0x2b4093-_0x45c90e);case'OUTBACK':var _0x3a5948=_0x2b4093/0x1-0x1;return _0x3a5948*_0x3a5948*((_0x45c90e+0x1)*_0x3a5948+_0x45c90e)+0x1;break;case _0x4bf36f(0x43b):var _0x3a5948=_0x2b4093*0x2,_0x6e1d7e=_0x3a5948-0x2,_0x4ff4a7=_0x45c90e*1.525;if(_0x3a5948<0x1)return 0.5*_0x3a5948*_0x3a5948*((_0x4ff4a7+0x1)*_0x3a5948-_0x4ff4a7);return 0.5*(_0x6e1d7e*_0x6e1d7e*((_0x4ff4a7+0x1)*_0x6e1d7e+_0x4ff4a7)+0x2);case _0x4bf36f(0x508):if(_0x2b4093===0x0||_0x2b4093===0x1)return _0x2b4093;var _0x3a5948=_0x2b4093/0x1,_0x1b979a=_0x3a5948-0x1,_0x245f56=0x1-_0x3b9b8e,_0x4ff4a7=_0x245f56/(0x2*Math['PI'])*Math['asin'](0x1);return-(Math[_0x4bf36f(0x1ac)](0x2,0xa*_0x1b979a)*Math['sin']((_0x1b979a-_0x4ff4a7)*(0x2*Math['PI'])/_0x245f56));case _0x4bf36f(0x2cc):var _0x245f56=0x1-_0x3b9b8e,_0x3a5948=_0x2b4093*0x2;if(_0x2b4093===0x0||_0x2b4093===0x1)return _0x2b4093;var _0x4ff4a7=_0x245f56/(0x2*Math['PI'])*Math[_0x4bf36f(0x34c)](0x1);return Math[_0x4bf36f(0x1ac)](0x2,-0xa*_0x3a5948)*Math[_0x4bf36f(0x561)]((_0x3a5948-_0x4ff4a7)*(0x2*Math['PI'])/_0x245f56)+0x1;case'INOUTELASTIC':var _0x245f56=0x1-_0x3b9b8e;if(_0x2b4093===0x0||_0x2b4093===0x1)return _0x2b4093;var _0x3a5948=_0x2b4093*0x2,_0x1b979a=_0x3a5948-0x1,_0x4ff4a7=_0x245f56/(0x2*Math['PI'])*Math[_0x4bf36f(0x34c)](0x1);if(_0x3a5948<0x1)return-0.5*(Math[_0x4bf36f(0x1ac)](0x2,0xa*_0x1b979a)*Math[_0x4bf36f(0x561)]((_0x1b979a-_0x4ff4a7)*(0x2*Math['PI'])/_0x245f56));return Math[_0x4bf36f(0x1ac)](0x2,-0xa*_0x1b979a)*Math[_0x4bf36f(0x561)]((_0x1b979a-_0x4ff4a7)*(0x2*Math['PI'])/_0x245f56)*0.5+0x1;case _0x4bf36f(0x2e8):var _0x3a5948=_0x2b4093/0x1;if(_0x3a5948<0x1/2.75)return 7.5625*_0x3a5948*_0x3a5948;else{if(_0x3a5948<0x2/2.75){var _0x6e1d7e=_0x3a5948-1.5/2.75;return 7.5625*_0x6e1d7e*_0x6e1d7e+0.75;}else{if(_0x3a5948<2.5/2.75){var _0x6e1d7e=_0x3a5948-2.25/2.75;return 7.5625*_0x6e1d7e*_0x6e1d7e+0.9375;}else{var _0x6e1d7e=_0x3a5948-2.625/2.75;return 7.5625*_0x6e1d7e*_0x6e1d7e+0.984375;}}}case _0x4bf36f(0x8b9):var _0xaa488c=0x1-VisuMZ[_0x4bf36f(0x235)](0x1-_0x2b4093,'outbounce');return _0xaa488c;case _0x4bf36f(0x7b8):if(_0x2b4093<0.5)var _0xaa488c=VisuMZ[_0x4bf36f(0x235)](_0x2b4093*0x2,_0x4bf36f(0x827))*0.5;else var _0xaa488c=VisuMZ[_0x4bf36f(0x235)](_0x2b4093*0x2-0x1,_0x4bf36f(0x3a9))*0.5+0.5;return _0xaa488c;default:return _0x2b4093;}},VisuMZ[_0x54b1d3(0x758)]=function(_0x201c27){const _0x31f50d=_0x54b1d3;_0x201c27=String(_0x201c27)[_0x31f50d(0x46a)]();const _0x45716c=VisuMZ['CoreEngine'][_0x31f50d(0x738)][_0x31f50d(0x293)];if(_0x201c27===_0x31f50d(0x489))return _0x45716c['IconParam0'];if(_0x201c27==='MAXMP')return _0x45716c['IconParam1'];if(_0x201c27===_0x31f50d(0x6ae))return _0x45716c['IconParam2'];if(_0x201c27==='DEF')return _0x45716c[_0x31f50d(0x3a8)];if(_0x201c27===_0x31f50d(0x712))return _0x45716c[_0x31f50d(0x677)];if(_0x201c27==='MDF')return _0x45716c[_0x31f50d(0x629)];if(_0x201c27===_0x31f50d(0x935))return _0x45716c['IconParam6'];if(_0x201c27==='LUK')return _0x45716c[_0x31f50d(0x643)];if(_0x201c27===_0x31f50d(0x84c))return _0x45716c[_0x31f50d(0x8dd)];if(_0x201c27===_0x31f50d(0x3ef))return _0x45716c['IconXParam1'];if(_0x201c27===_0x31f50d(0x73a))return _0x45716c[_0x31f50d(0x8c1)];if(_0x201c27===_0x31f50d(0x838))return _0x45716c[_0x31f50d(0x1be)];if(_0x201c27===_0x31f50d(0x8ce))return _0x45716c['IconXParam4'];if(_0x201c27===_0x31f50d(0x4da))return _0x45716c[_0x31f50d(0x1a1)];if(_0x201c27===_0x31f50d(0x80c))return _0x45716c[_0x31f50d(0x86e)];if(_0x201c27===_0x31f50d(0x28f))return _0x45716c[_0x31f50d(0x4fa)];if(_0x201c27===_0x31f50d(0x50c))return _0x45716c[_0x31f50d(0x1a6)];if(_0x201c27===_0x31f50d(0x894))return _0x45716c[_0x31f50d(0x75e)];if(_0x201c27===_0x31f50d(0x64e))return _0x45716c[_0x31f50d(0x59d)];if(_0x201c27===_0x31f50d(0x41a))return _0x45716c[_0x31f50d(0x38a)];if(_0x201c27===_0x31f50d(0x1f9))return _0x45716c['IconSParam2'];if(_0x201c27===_0x31f50d(0x4b4))return _0x45716c['IconSParam3'];if(_0x201c27==='MCR')return _0x45716c[_0x31f50d(0x658)];if(_0x201c27==='TCR')return _0x45716c[_0x31f50d(0x276)];if(_0x201c27==='PDR')return _0x45716c['IconSParam6'];if(_0x201c27==='MDR')return _0x45716c['IconSParam7'];if(_0x201c27===_0x31f50d(0x386))return _0x45716c[_0x31f50d(0x539)];if(_0x201c27==='EXR')return _0x45716c[_0x31f50d(0x24f)];if(VisuMZ['CoreEngine']['CustomParamIcons'][_0x201c27])return VisuMZ[_0x31f50d(0x66d)]['CustomParamIcons'][_0x201c27]||0x0;return 0x0;},VisuMZ[_0x54b1d3(0x407)]=function(_0x42585c,_0x5836eb,_0x1b9238){const _0x8ea6c2=_0x54b1d3;if(_0x1b9238===undefined&&_0x42585c%0x1===0x0)return _0x42585c;if(_0x1b9238!==undefined&&['MAXHP',_0x8ea6c2(0x39e),_0x8ea6c2(0x6ae),_0x8ea6c2(0x7af),'MAT','MDF',_0x8ea6c2(0x935),_0x8ea6c2(0x5f1)]['includes'](String(_0x1b9238)['toUpperCase']()[_0x8ea6c2(0x848)]()))return _0x42585c;_0x5836eb=_0x5836eb||0x0;if(VisuMZ[_0x8ea6c2(0x66d)][_0x8ea6c2(0x6c6)][_0x1b9238])return VisuMZ[_0x8ea6c2(0x66d)][_0x8ea6c2(0x218)][_0x1b9238]===_0x8ea6c2(0x94b)?_0x42585c:String((_0x42585c*0x64)['toFixed'](_0x5836eb))+'%';return String((_0x42585c*0x64)[_0x8ea6c2(0x3ca)](_0x5836eb))+'%';},VisuMZ[_0x54b1d3(0x8f9)]=function(_0x429a27){const _0x47fddf=_0x54b1d3;_0x429a27=String(_0x429a27);if(!_0x429a27)return _0x429a27;if(typeof _0x429a27!=='string')return _0x429a27;const _0x453697=VisuMZ[_0x47fddf(0x66d)][_0x47fddf(0x738)][_0x47fddf(0x33d)][_0x47fddf(0x95f)]||_0x47fddf(0x1f3),_0x15f346={'maximumFractionDigits':0x6};_0x429a27=_0x429a27['replace'](/\[(.*?)\]/g,(_0x2d8516,_0x74326d)=>{const _0x5ce429=_0x47fddf;return VisuMZ[_0x5ce429(0x4ad)](_0x74326d,'[',']');}),_0x429a27=_0x429a27[_0x47fddf(0x362)](/<(.*?)>/g,(_0x44ae35,_0x47c5ef)=>{const _0xe04d74=_0x47fddf;return VisuMZ[_0xe04d74(0x4ad)](_0x47c5ef,'<','>');}),_0x429a27=_0x429a27['replace'](/\{\{(.*?)\}\}/g,(_0x2c0288,_0x52fcc9)=>{return VisuMZ['PreserveNumbers'](_0x52fcc9,'','');}),_0x429a27=_0x429a27[_0x47fddf(0x362)](/(\d+\.?\d*)/g,(_0x446562,_0x44f467)=>{const _0x12c344=_0x47fddf;let _0x4204ad=_0x44f467;if(_0x4204ad[0x0]==='0')return _0x4204ad;if(_0x4204ad[_0x4204ad[_0x12c344(0x506)]-0x1]==='.')return Number(_0x4204ad)['toLocaleString'](_0x453697,_0x15f346)+'.';else return _0x4204ad[_0x4204ad['length']-0x1]===','?Number(_0x4204ad)[_0x12c344(0x81b)](_0x453697,_0x15f346)+',':Number(_0x4204ad)[_0x12c344(0x81b)](_0x453697,_0x15f346);});let _0x5d08b2=0x3;while(_0x5d08b2--){_0x429a27=VisuMZ[_0x47fddf(0x340)](_0x429a27);}return _0x429a27;},VisuMZ[_0x54b1d3(0x4ad)]=function(_0x19a88b,_0x490365,_0x18c437){const _0x97aec6=_0x54b1d3;return _0x19a88b=_0x19a88b[_0x97aec6(0x362)](/(\d)/gi,(_0x5ef96e,_0x451928)=>_0x97aec6(0x690)[_0x97aec6(0x892)](Number(_0x451928))),_0x97aec6(0x1d7)['format'](_0x19a88b,_0x490365,_0x18c437);},VisuMZ[_0x54b1d3(0x340)]=function(_0x1876ae){const _0x148374=_0x54b1d3;return _0x1876ae=_0x1876ae[_0x148374(0x362)](/PRESERVCONVERSION\((\d+)\)/gi,(_0x1f60a4,_0xf7485e)=>Number(parseInt(_0xf7485e))),_0x1876ae;},VisuMZ[_0x54b1d3(0x3be)]=function(_0x1f4183){const _0xceaffe=_0x54b1d3;SoundManager[_0xceaffe(0x79c)]();if(!Utils[_0xceaffe(0x8a5)]()){const _0x437edb=window[_0xceaffe(0x300)](_0x1f4183,'_blank');}else{const _0x5d2269=process[_0xceaffe(0x8bd)]=='darwin'?'open':process[_0xceaffe(0x8bd)]=='win32'?_0xceaffe(0x304):_0xceaffe(0x2ef);require(_0xceaffe(0x457))[_0xceaffe(0x780)](_0x5d2269+'\x20'+_0x1f4183);}},VisuMZ[_0x54b1d3(0x3f8)]=function(_0x3b7754,_0x2a492a){const _0x13936e=_0x54b1d3;if(!_0x3b7754)return'';const _0x4f9aa1=_0x3b7754[_0x13936e(0x2c0)]||_0x3b7754['id'];let _0x28b8f5='';return _0x3b7754[_0x13936e(0x651)]!==undefined&&_0x3b7754[_0x13936e(0x773)]!==undefined&&(_0x28b8f5='Actor-%1-%2'[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x324)]!==undefined&&_0x3b7754[_0x13936e(0x33b)]!==undefined&&(_0x28b8f5=_0x13936e(0x872)[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x57d)]!==undefined&&_0x3b7754[_0x13936e(0x71c)]!==undefined&&(_0x28b8f5=_0x13936e(0x4ba)['format'](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x67d)]!==undefined&&_0x3b7754['consumable']!==undefined&&(_0x28b8f5='Item-%1-%2'[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x6db)]!==undefined&&_0x3b7754[_0x13936e(0x6e0)]===0x1&&(_0x28b8f5=_0x13936e(0x684)[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x1eb)]!==undefined&&_0x3b7754['etypeId']>0x1&&(_0x28b8f5=_0x13936e(0x6de)[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x7a7)]!==undefined&&_0x3b7754['battlerHue']!==undefined&&(_0x28b8f5='Enemy-%1-%2'[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x3b7754[_0x13936e(0x8e3)]!==undefined&&_0x3b7754[_0x13936e(0x1cc)]!==undefined&&(_0x28b8f5=_0x13936e(0x726)[_0x13936e(0x892)](_0x4f9aa1,_0x2a492a)),_0x28b8f5;},Game_Picture[_0x54b1d3(0x5af)]['anchor']=function(){const _0x3ea9ef=_0x54b1d3;return this[_0x3ea9ef(0x6b0)];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x322)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x790)],Game_Picture['prototype'][_0x54b1d3(0x790)]=function(){const _0x7e23e3=_0x54b1d3;VisuMZ[_0x7e23e3(0x66d)][_0x7e23e3(0x322)][_0x7e23e3(0x816)](this),this[_0x7e23e3(0x6b0)]={'x':0x0,'y':0x0},this[_0x7e23e3(0x3cc)]={'x':0x0,'y':0x0};},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x905)]=Game_Picture[_0x54b1d3(0x5af)]['updateMove'],Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x6b6)]=function(){const _0x692c6=_0x54b1d3;this[_0x692c6(0x5eb)]();const _0x5eb743=this[_0x692c6(0x635)];VisuMZ[_0x692c6(0x66d)][_0x692c6(0x905)][_0x692c6(0x816)](this),_0x5eb743>0x0&&this['_duration']<=0x0&&(this['_x']=this[_0x692c6(0x207)],this['_y']=this[_0x692c6(0x447)],this[_0x692c6(0x898)]=this[_0x692c6(0x39c)],this[_0x692c6(0x86c)]=this['_targetScaleY'],this[_0x692c6(0x3ea)]=this[_0x692c6(0x6f0)],this['_anchor']&&(this[_0x692c6(0x6b0)]['x']=this['_targetAnchor']['x'],this[_0x692c6(0x6b0)]['y']=this['_targetAnchor']['y']));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x531)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x805)],Game_Picture['prototype'][_0x54b1d3(0x805)]=function(_0x594b52,_0x439f1d,_0x4384d3,_0xeec2df,_0x2d52a4,_0x1ec646,_0x676c99,_0x75f630){const _0xfa9d81=_0x54b1d3;VisuMZ[_0xfa9d81(0x66d)]['Game_Picture_show'][_0xfa9d81(0x816)](this,_0x594b52,_0x439f1d,_0x4384d3,_0xeec2df,_0x2d52a4,_0x1ec646,_0x676c99,_0x75f630),this[_0xfa9d81(0x6cb)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x439f1d]||{'x':0x0,'y':0x0});},VisuMZ['CoreEngine'][_0x54b1d3(0x233)]=Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x3b3)],Game_Picture[_0x54b1d3(0x5af)]['move']=function(_0x27b421,_0x4074ba,_0x171473,_0x444b95,_0xcb74c7,_0x24ba15,_0x25ea97,_0x5175bb,_0x161ff2){const _0x2e5f4=_0x54b1d3;VisuMZ[_0x2e5f4(0x66d)][_0x2e5f4(0x233)][_0x2e5f4(0x816)](this,_0x27b421,_0x4074ba,_0x171473,_0x444b95,_0xcb74c7,_0x24ba15,_0x25ea97,_0x5175bb,_0x161ff2),this['setTargetAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x27b421]||{'x':0x0,'y':0x0});},Game_Picture[_0x54b1d3(0x5af)]['updateAnchor']=function(){const _0x36b58b=_0x54b1d3;this[_0x36b58b(0x635)]>0x0&&(this[_0x36b58b(0x6b0)]['x']=this['applyEasing'](this[_0x36b58b(0x6b0)]['x'],this[_0x36b58b(0x3cc)]['x']),this[_0x36b58b(0x6b0)]['y']=this[_0x36b58b(0x20d)](this[_0x36b58b(0x6b0)]['y'],this['_targetAnchor']['y']));},Game_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x6cb)]=function(_0x111d6b){const _0x2086a1=_0x54b1d3;this['_anchor']=_0x111d6b,this[_0x2086a1(0x3cc)]=JsonEx[_0x2086a1(0x62d)](this[_0x2086a1(0x6b0)]);},Game_Picture['prototype']['setTargetAnchor']=function(_0x201f7c){const _0x447e99=_0x54b1d3;this[_0x447e99(0x3cc)]=_0x201f7c;},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x595)]=Sprite_Picture[_0x54b1d3(0x5af)][_0x54b1d3(0x365)],Sprite_Picture[_0x54b1d3(0x5af)]['updateOrigin']=function(){const _0x537f89=_0x54b1d3,_0x75bd1c=this[_0x537f89(0x6da)]();!_0x75bd1c[_0x537f89(0x223)]()?VisuMZ[_0x537f89(0x66d)][_0x537f89(0x595)][_0x537f89(0x816)](this):(this[_0x537f89(0x223)]['x']=_0x75bd1c['anchor']()['x'],this[_0x537f89(0x223)]['y']=_0x75bd1c[_0x537f89(0x223)]()['y']);},Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x849)]=function(_0x18e712){const _0x51a2c7=_0x54b1d3;if(_0x18e712){const _0x38a5c1=_0x18e712[_0x51a2c7(0x8e7)];if(_0x38a5c1===0x1&&this['subject']()['attackSkillId']()!==0x1)this[_0x51a2c7(0x524)]();else _0x38a5c1===0x2&&this[_0x51a2c7(0x69e)]()[_0x51a2c7(0x95c)]()!==0x2?this['setGuard']():this[_0x51a2c7(0x8f8)](_0x38a5c1);}else this[_0x51a2c7(0x1cb)]();},Game_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x55b)]=function(){const _0x2af429=_0x54b1d3;return this[_0x2af429(0x238)]()[_0x2af429(0x7e2)](_0x5d03ab=>this[_0x2af429(0x4a5)](_0x5d03ab)&&this[_0x2af429(0x21e)]()[_0x2af429(0x7f2)](_0x5d03ab['stypeId']));},Window_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x7fc)]=function(){const _0x4358d0=_0x54b1d3;this['_dimmerSprite']=new Sprite(),this[_0x4358d0(0x493)]['bitmap']=new Bitmap(0x0,0x0),this[_0x4358d0(0x493)]['x']=0x0,this[_0x4358d0(0x6ee)](this[_0x4358d0(0x493)]);},Window_Base[_0x54b1d3(0x5af)]['refreshDimmerBitmap']=function(){const _0x52ec56=_0x54b1d3;if(this[_0x52ec56(0x493)]){const _0x34fc9a=this[_0x52ec56(0x493)][_0x52ec56(0x290)],_0x51f247=this[_0x52ec56(0x589)],_0x518baf=this['height'],_0x1ef14f=this[_0x52ec56(0x3b4)],_0x3df754=ColorManager[_0x52ec56(0x6d9)](),_0x2a5f60=ColorManager[_0x52ec56(0x76e)]();_0x34fc9a[_0x52ec56(0x45a)](_0x51f247,_0x518baf),_0x34fc9a[_0x52ec56(0x632)](0x0,0x0,_0x51f247,_0x1ef14f,_0x2a5f60,_0x3df754,!![]),_0x34fc9a[_0x52ec56(0x277)](0x0,_0x1ef14f,_0x51f247,_0x518baf-_0x1ef14f*0x2,_0x3df754),_0x34fc9a[_0x52ec56(0x632)](0x0,_0x518baf-_0x1ef14f,_0x51f247,_0x1ef14f,_0x3df754,_0x2a5f60,!![]),this['_dimmerSprite'][_0x52ec56(0x6b1)](0x0,0x0,_0x51f247,_0x518baf);}},Game_Actor[_0x54b1d3(0x5af)]['makeAutoBattleActions']=function(){const _0x334fb9=_0x54b1d3;for(let _0x2afbfa=0x0;_0x2afbfa<this[_0x334fb9(0x25c)]();_0x2afbfa++){const _0xf927af=this['makeActionList']();let _0x46c6b3=Number[_0x334fb9(0x3ee)];this[_0x334fb9(0x657)](_0x2afbfa,_0xf927af[0x0]);for(const _0xebe8 of _0xf927af){const _0x521982=_0xebe8['evaluate']();_0x521982>_0x46c6b3&&(_0x46c6b3=_0x521982,this['setAction'](_0x2afbfa,_0xebe8));}}this[_0x334fb9(0x6b2)](_0x334fb9(0x48b));},Window_BattleItem[_0x54b1d3(0x5af)]['isEnabled']=function(_0x577bca){const _0x17e161=_0x54b1d3;return BattleManager['actor']()?BattleManager[_0x17e161(0x1e4)]()['canUse'](_0x577bca):Window_ItemList['prototype'][_0x17e161(0x376)][_0x17e161(0x816)](this,_0x577bca);},VisuMZ['CoreEngine']['Scene_Map_createSpritesetFix']=Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x492)],Scene_Map['prototype']['createSpriteset']=function(){const _0x2aaffe=_0x54b1d3;VisuMZ[_0x2aaffe(0x66d)][_0x2aaffe(0x6bc)][_0x2aaffe(0x816)](this);const _0x5f20e1=this[_0x2aaffe(0x622)][_0x2aaffe(0x715)];if(_0x5f20e1)this[_0x2aaffe(0x8a8)](_0x5f20e1);},VisuMZ[_0x54b1d3(0x66d)]['Scene_Battle_createSpritesetFix']=Scene_Battle['prototype'][_0x54b1d3(0x492)],Scene_Battle[_0x54b1d3(0x5af)][_0x54b1d3(0x492)]=function(){const _0x185aad=_0x54b1d3;VisuMZ[_0x185aad(0x66d)][_0x185aad(0x2b4)][_0x185aad(0x816)](this);const _0x2fca87=this['_spriteset'][_0x185aad(0x715)];if(_0x2fca87)this['addChild'](_0x2fca87);},Sprite_Actor[_0x54b1d3(0x5af)][_0x54b1d3(0x71b)]=function(){const _0x7d8bcd=_0x54b1d3;Sprite_Battler['prototype']['update']['call'](this),this['updateShadow']();if(this[_0x7d8bcd(0x4a3)])this[_0x7d8bcd(0x247)]();else this[_0x7d8bcd(0x62e)]!==''&&(this[_0x7d8bcd(0x62e)]='');},Window[_0x54b1d3(0x5af)][_0x54b1d3(0x28d)]=function(){const _0x5557db=_0x54b1d3,_0x482f92=this[_0x5557db(0x7be)],_0x21ff30=this[_0x5557db(0x403)],_0x2125cf=0x18,_0xda632d=_0x2125cf/0x2,_0x43a428=0x60+_0x2125cf,_0x5ea92d=0x0+_0x2125cf;this['_downArrowSprite'][_0x5557db(0x290)]=this['_windowskin'],this['_downArrowSprite'][_0x5557db(0x223)]['x']=0.5,this[_0x5557db(0x311)][_0x5557db(0x223)]['y']=0.5,this['_downArrowSprite']['setFrame'](_0x43a428+_0xda632d,_0x5ea92d+_0xda632d+_0x2125cf,_0x2125cf,_0xda632d),this[_0x5557db(0x311)][_0x5557db(0x3b3)](Math[_0x5557db(0x48a)](_0x482f92/0x2),Math[_0x5557db(0x48a)](_0x21ff30-_0xda632d)),this['_upArrowSprite'][_0x5557db(0x290)]=this[_0x5557db(0x654)],this['_upArrowSprite'][_0x5557db(0x223)]['x']=0.5,this[_0x5557db(0x474)]['anchor']['y']=0.5,this['_upArrowSprite'][_0x5557db(0x6b1)](_0x43a428+_0xda632d,_0x5ea92d,_0x2125cf,_0xda632d),this['_upArrowSprite']['move'](Math['round'](_0x482f92/0x2),Math[_0x5557db(0x48a)](_0xda632d));},Window[_0x54b1d3(0x5af)][_0x54b1d3(0x4d2)]=function(){const _0x10036d=_0x54b1d3,_0xbcd953=0x90,_0x4f53c7=0x60,_0x558a20=0x18;this['_pauseSignSprite'][_0x10036d(0x290)]=this[_0x10036d(0x654)],this[_0x10036d(0x811)][_0x10036d(0x223)]['x']=0.5,this['_pauseSignSprite'][_0x10036d(0x223)]['y']=0x1,this[_0x10036d(0x811)]['move'](Math[_0x10036d(0x48a)](this[_0x10036d(0x7be)]/0x2),this[_0x10036d(0x403)]),this[_0x10036d(0x811)][_0x10036d(0x6b1)](_0xbcd953,_0x4f53c7,_0x558a20,_0x558a20),this[_0x10036d(0x811)][_0x10036d(0x8f6)]=0xff;},Window[_0x54b1d3(0x5af)][_0x54b1d3(0x8b0)]=function(){const _0x638dfe=_0x54b1d3,_0x31d7ce=this['_clientArea'][_0x638dfe(0x478)][_0x638dfe(0x628)](new Point(0x0,0x0)),_0x5a6f17=this['_clientArea'][_0x638dfe(0x319)];_0x5a6f17['x']=_0x31d7ce['x']+this[_0x638dfe(0x5cf)]['x'],_0x5a6f17['y']=_0x31d7ce['y']+this['origin']['y'],_0x5a6f17[_0x638dfe(0x589)]=Math['ceil'](this[_0x638dfe(0x2ba)]*this[_0x638dfe(0x6ff)]['x']),_0x5a6f17[_0x638dfe(0x7c8)]=Math[_0x638dfe(0x8ff)](this[_0x638dfe(0x8c8)]*this[_0x638dfe(0x6ff)]['y']);},VisuMZ[_0x54b1d3(0x66d)]['Window_refreshBack']=Window['prototype'][_0x54b1d3(0x491)],Window[_0x54b1d3(0x5af)][_0x54b1d3(0x491)]=function(){const _0xba827e=_0x54b1d3,_0x108fe5=VisuMZ[_0xba827e(0x66d)][_0xba827e(0x738)][_0xba827e(0x1f2)][_0xba827e(0x453)]??!![];if(!_0x108fe5)return VisuMZ[_0xba827e(0x66d)][_0xba827e(0x4ea)][_0xba827e(0x816)](this);const _0x4c5787=this['_margin'],_0x3a91e7=Math[_0xba827e(0x29f)](0x0,this['_width']-_0x4c5787*0x2),_0x200393=Math['max'](0x0,this[_0xba827e(0x403)]-_0x4c5787*0x2),_0xd1a56=this[_0xba827e(0x724)],_0x12377d=_0xd1a56['children'][0x0];_0xd1a56[_0xba827e(0x290)]=this[_0xba827e(0x654)],_0xd1a56[_0xba827e(0x6b1)](0x0,0x0,0x60,0x60),_0xd1a56[_0xba827e(0x3b3)](_0x4c5787,_0x4c5787),_0xd1a56[_0xba827e(0x6ff)]['x']=_0x3a91e7/0x60,_0xd1a56[_0xba827e(0x6ff)]['y']=_0x200393/0x60,_0x12377d[_0xba827e(0x290)]=this['_windowskin'],_0x12377d[_0xba827e(0x6b1)](0x0,0x60,0x60,0x60),_0x12377d[_0xba827e(0x3b3)](0x0,0x0,_0x3a91e7,_0x200393),_0x12377d['scale']['x']=0x1/_0xd1a56[_0xba827e(0x6ff)]['x'],_0x12377d[_0xba827e(0x6ff)]['y']=0x1/_0xd1a56[_0xba827e(0x6ff)]['y'],_0xd1a56['setColorTone'](this[_0xba827e(0x4ce)]);},Game_Temp['prototype'][_0x54b1d3(0x8f5)]=function(){const _0x525be5=_0x54b1d3;this[_0x525be5(0x369)]=[],this['_fauxAnimationQueue']=[],this[_0x525be5(0x435)]=[],this[_0x525be5(0x1e5)]=[];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x54f)]=Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x597)],Scene_Base[_0x54b1d3(0x5af)][_0x54b1d3(0x597)]=function(){const _0xe34f4d=_0x54b1d3;if($gameTemp)$gameTemp['sceneTerminationClearEffects']();VisuMZ[_0xe34f4d(0x66d)][_0xe34f4d(0x54f)][_0xe34f4d(0x816)](this);},Bitmap['prototype']['measureTextWidthNoRounding']=function(_0x4dade8){const _0x259d5a=_0x54b1d3,_0x2a0f88=this[_0x259d5a(0x4b2)];_0x2a0f88[_0x259d5a(0x2c8)](),_0x2a0f88[_0x259d5a(0x5ae)]=this[_0x259d5a(0x405)]();const _0x143f72=_0x2a0f88[_0x259d5a(0x23b)](_0x4dade8)[_0x259d5a(0x589)];return _0x2a0f88[_0x259d5a(0x310)](),_0x143f72;},Window_Message[_0x54b1d3(0x5af)]['textWidth']=function(_0x10349b){const _0x1a6041=_0x54b1d3;return this[_0x1a6041(0x94d)]()?this[_0x1a6041(0x947)][_0x1a6041(0x368)](_0x10349b):Window_Base[_0x1a6041(0x5af)]['textWidth'][_0x1a6041(0x816)](this,_0x10349b);},Window_Message['prototype'][_0x54b1d3(0x94d)]=function(){const _0x523a88=_0x54b1d3;return VisuMZ[_0x523a88(0x66d)][_0x523a88(0x738)]['QoL'][_0x523a88(0x20a)]??!![];},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x2a2)]=Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x748)],Game_Action[_0x54b1d3(0x5af)]['numRepeats']=function(){const _0x3fd207=_0x54b1d3;return this[_0x3fd207(0x4bb)]()?VisuMZ[_0x3fd207(0x66d)]['Game_Action_numRepeats']['call'](this):0x0;},VisuMZ['CoreEngine'][_0x54b1d3(0x5ab)]=Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x524)],Game_Action[_0x54b1d3(0x5af)][_0x54b1d3(0x524)]=function(){const _0xb480c4=_0x54b1d3;if(this[_0xb480c4(0x69e)]()&&this[_0xb480c4(0x69e)]()[_0xb480c4(0x55d)]())VisuMZ[_0xb480c4(0x66d)]['Game_Action_setAttack'][_0xb480c4(0x816)](this);else BattleManager[_0xb480c4(0x284)]?VisuMZ['CoreEngine'][_0xb480c4(0x5ab)][_0xb480c4(0x816)](this):this[_0xb480c4(0x1cb)]();},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x4a4)]=BattleManager[_0x54b1d3(0x723)],BattleManager['invokeCounterAttack']=function(_0x348a20,_0x34b5a8){const _0x4728b0=_0x54b1d3;this[_0x4728b0(0x284)]=!![],VisuMZ[_0x4728b0(0x66d)]['BattleManager_invokeCounterAttack']['call'](this,_0x348a20,_0x34b5a8),this[_0x4728b0(0x284)]=undefined;},Sprite_Name['prototype'][_0x54b1d3(0x47a)]=function(){return 0x24;},Sprite_Name[_0x54b1d3(0x5af)][_0x54b1d3(0x778)]=function(){const _0x283d98=_0x54b1d3,_0x4509b0=this['name'](),_0x8a0e5c=this['bitmapWidth'](),_0x54b22f=this[_0x283d98(0x47a)]();this['setupFont'](),this[_0x283d98(0x290)][_0x283d98(0x1cb)](),this[_0x283d98(0x290)][_0x283d98(0x1b4)](_0x4509b0,0x4,0x0,_0x8a0e5c-0xa,_0x54b22f,_0x283d98(0x909));},Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x1b4)]=function(_0x33dffe,_0x3682e3,_0x3bbadc,_0x51f2b5,_0x370926,_0x35c999){const _0x202fdf=_0x54b1d3,_0x20dab2=this[_0x202fdf(0x4b2)],_0x2a5e23=_0x20dab2[_0x202fdf(0x349)];_0x51f2b5=_0x51f2b5||0xffffffff;let _0x5850df=_0x3682e3,_0x309038=Math['round'](_0x3bbadc+0x18/0x2+this[_0x202fdf(0x21f)]*0.35);_0x35c999===_0x202fdf(0x2c3)&&(_0x5850df+=_0x51f2b5/0x2),_0x35c999===_0x202fdf(0x5cd)&&(_0x5850df+=_0x51f2b5),_0x20dab2['save'](),_0x20dab2[_0x202fdf(0x5ae)]=this['_makeFontNameText'](),_0x20dab2[_0x202fdf(0x3ab)]=_0x35c999,_0x20dab2[_0x202fdf(0x423)]='alphabetic',_0x20dab2[_0x202fdf(0x349)]=0x1,this[_0x202fdf(0x43c)](_0x33dffe,_0x5850df,_0x309038,_0x51f2b5),_0x20dab2['globalAlpha']=_0x2a5e23,this[_0x202fdf(0x8f1)](_0x33dffe,_0x5850df,_0x309038,_0x51f2b5),_0x20dab2[_0x202fdf(0x310)](),this[_0x202fdf(0x70b)]['update']();},VisuMZ[_0x54b1d3(0x66d)]['BattleManager_checkSubstitute']=BattleManager['checkSubstitute'],BattleManager[_0x54b1d3(0x2be)]=function(_0x2b9a54){const _0x46fe11=_0x54b1d3;if(this[_0x46fe11(0x5ee)][_0x46fe11(0x7aa)]())return![];return VisuMZ[_0x46fe11(0x66d)][_0x46fe11(0x652)][_0x46fe11(0x816)](this,_0x2b9a54);},BattleManager['endAction']=function(){const _0x4f0d81=_0x54b1d3;if(this[_0x4f0d81(0x7bd)])this[_0x4f0d81(0x1cf)][_0x4f0d81(0x514)](this[_0x4f0d81(0x7bd)]);this[_0x4f0d81(0x618)]=_0x4f0d81(0x94f),this['_subject']&&this[_0x4f0d81(0x7bd)][_0x4f0d81(0x25c)]()===0x0&&(this[_0x4f0d81(0x916)](this[_0x4f0d81(0x7bd)]),this[_0x4f0d81(0x7bd)]=null);},Bitmap[_0x54b1d3(0x5af)][_0x54b1d3(0x3e3)]=function(){const _0x318940=_0x54b1d3;this[_0x318940(0x2b1)]=new Image(),this[_0x318940(0x2b1)][_0x318940(0x4f4)]=this[_0x318940(0x765)][_0x318940(0x580)](this),this[_0x318940(0x2b1)][_0x318940(0x359)]=this[_0x318940(0x2c1)][_0x318940(0x580)](this),this[_0x318940(0x538)](),this['_loadingState']=_0x318940(0x662),Utils[_0x318940(0x44b)]()?this['_startDecrypting']():(this[_0x318940(0x2b1)][_0x318940(0x943)]=this['_url'],![]&&this[_0x318940(0x2b1)][_0x318940(0x589)]>0x0&&(this[_0x318940(0x2b1)]['onload']=null,this['_onLoad']()));},Scene_Skill[_0x54b1d3(0x5af)][_0x54b1d3(0x73d)]=function(){const _0xff0111=_0x54b1d3;Scene_MenuBase['prototype'][_0xff0111(0x73d)][_0xff0111(0x816)](this),this['refreshActor'](),this[_0xff0111(0x8d5)][_0xff0111(0x375)](),this[_0xff0111(0x8d5)][_0xff0111(0x51d)](),this[_0xff0111(0x1c6)][_0xff0111(0x710)]();},Scene_Skill['prototype'][_0x54b1d3(0x689)]=function(){const _0x409e30=_0x54b1d3;return this[_0x409e30(0x1c6)]&&this[_0x409e30(0x1c6)][_0x409e30(0x883)];},Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x627)]=function(_0x39275d,_0x4b255f,_0x50ffcb){const _0x25380=_0x54b1d3,_0x49039f=this[_0x25380(0x505)](),_0x5d2a4a=this['allTiles'](_0x39275d,_0x4b255f);for(const _0x416195 of _0x5d2a4a){const _0xee92e2=_0x49039f[_0x416195];if(_0xee92e2===undefined||_0xee92e2===null){if($gameTemp[_0x25380(0x833)]()&&!DataManager[_0x25380(0x477)]()){let _0x4ee753=_0x25380(0x3ae)+'\x0a';_0x4ee753+=_0x25380(0x22e)+'\x0a',_0x4ee753+=_0x25380(0x93e),this[_0x25380(0x3cf)]()?(alert(_0x4ee753),SceneManager['exit']()):(console['log'](_0x4ee753),!$gameTemp[_0x25380(0x1a8)]&&($gameTemp[_0x25380(0x1a8)]=!![],SceneManager[_0x25380(0x1bd)]()));}}if((_0xee92e2&0x10)!==0x0)continue;if((_0xee92e2&_0x50ffcb)===0x0)return!![];if((_0xee92e2&_0x50ffcb)===_0x50ffcb)return![];}return![];},Game_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x3cf)]=function(){const _0x5c82b4=_0x54b1d3;if(Imported[_0x5c82b4(0x8fe)])return!![];if(Imported[_0x5c82b4(0x2e3)])return!![];return![];},Sprite_Animation['prototype'][_0x54b1d3(0x3d7)]=function(_0x3c32b1){const _0x2ae20f=_0x54b1d3;!this[_0x2ae20f(0x388)]&&(this[_0x2ae20f(0x388)]=_0x3c32b1['gl'][_0x2ae20f(0x8e5)](_0x3c32b1['gl']['VIEWPORT']));},VisuMZ[_0x54b1d3(0x66d)][_0x54b1d3(0x922)]=Scene_Map['prototype'][_0x54b1d3(0x631)],Scene_Map[_0x54b1d3(0x5af)][_0x54b1d3(0x631)]=function(){const _0x4c5af6=_0x54b1d3,_0x1476e2=SceneManager['_previousClass'][_0x4c5af6(0x693)];if([_0x4c5af6(0x8bf),'Scene_Load',_0x4c5af6(0x6e5),'Scene_SingleLoadTransition'][_0x4c5af6(0x7f2)](_0x1476e2))return![];return VisuMZ[_0x4c5af6(0x66d)][_0x4c5af6(0x922)]['call'](this);};