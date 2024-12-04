//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.55;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.55] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *   option (only when selling).
 * - Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 *   - Default priority level is '50'.
 * - Items, weapons, and armors with higher priority values will be sorted
 *   higher up on the list while lower values will be lower on the list.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 * 
 * <Added EType: x>
 * <Added ETypes: x, x, x>
 * 
 * - Used for: Armor Notetags
 * - This is for armors only and does NOT work with weapons!
 * - Allows a piece of armor to belong to multiple ETypes. This means a glove
 *   can be equipped as "Armgear" or as an "Accessory" if you so choose.
 * - Replace 'x' with a number representing the ID of the EType you wish to add
 *   to the list of ETypes.
 *   - Insert multiple 'x' entries to add more than one EType ID.
 * 
 * ---
 * 
 * <Cursed>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this weapon or armor is equipped, it cannot manually be removed by the
 *   player until it is purified.
 * - To remove it, it must be done by event commands, script calls, or through
 *   the Purify-related Plugin Commands provided by this plugin.
 * - Once purified, the weapon or armor will become unequipped unless it has a
 *   purify transformation.
 *   - If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * - If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become cursed
 *   in order to allow free weapon swapping. Weaponry will not be cursed
 *   if VisuMZ_2_WeaponSwapSystem is installed.
 * 
 * ---
 * 
 * <Purify Transform: id>
 * <Purify Transform: name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this notetag is present on a <Cursed> weapon or armor, then upon the
 *   actor receiving purification, the weapon or armor will transform into a
 *   different item.
 * - Replace 'id' with a number representing the transformed weapon/armor's ID.
 * - Replace 'name' with text representing the transformed weapon/armor's name.
 * - Weapons can only transform into weapons.
 * - Armors can only transform into armors.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 * 
 * '''WARNING!''' If you are trying to calculate a value based off a full
 * parameter value, such as "ATK = user.atk * 0.10", it's going to break and
 * will cause an infinite loop. Use base parameter values instead.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following for skills and items:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'key' with one of the following for weapons and armors:
 *   - 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 *   - For those with VisuMZ_0_CoreEngine:
 *     - 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 *     - 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 *   - Only relevant if the Draw Style for equipment is "classic" or "double".
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 *   - When used with weapon or armor database objects, this information is
 *     only relevant if the Draw Style for equipment is "classic" or "double".
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Purify Plugin Commands ===
 * 
 * ---
 * 
 * Purify: Target Actor(s)
 * - Purifies target actor(s) of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 * ---
 * 
 * Purify: Whole Party
 * - Purifies whole party of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 * 
 *     Sort By:
 *     - Sort this category (in Scene_Item and Scene_Shop only) this way.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *   Cursed Equip Popup:
 *   - Text popup appears when an actor equips a cursed weapon/armor.
 *   - Text codes allowed.
 *   - Requires VisuMZ_0_CoreEngine!
 *   - Empty to not use.
 *   -  %1 - Actor, %2 - Equip, %3 - Icon.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Data Style:
 *   - How do you wish to display equipment data?
 *     - Compare - Compares selected equip to equipped gear
 *       - Lists all main party actors
 *       - Displays the parameter differences when equipped
 *       - Calculates custom JS values
 *     - Classic - Shows basic parameters of selected equip
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 *     - Double - Shows basic parameters in double columns
 *       - Involves no actors, only shows the item's stats
 *       - Shows weapon or armor specific parameters
 *       - Does not show custom JS values as those are calculated per actor
 *       - Does not show custom parameters as those are calculated per actor
 *       - Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *         add custom data to classic equip data
 * 
 *     Compare Style:
 * 
 *       Already Equipped:
 *       - Marker used to show an actor cannot equip an item.
 * 
 *       Can't Equip:
 *       - Marker used to show an actor cannot equip an item.
 * 
 *       No Changes:
 *       - Marker used to show no changes have occurred.
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *     Classic Style:
 * 
 *       Added Weapon Params:
 *       Added Armor Params:
 *       - Display these parameters when a weapon/armor is selected.
 *       - Requires VisuMZ_0_CoreEngine!
 * 
 *       JS: Draw Equip Data:
 *       - Code used to draw the equipment data for the Shop Status Window.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
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
 * Version 1.55: November 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where you can no longer attempt to equip an actor with zero
 *    equip slots and causing a crash. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated <Status Info>
 * *** Used for: Skill, Item, Weapon, Armor Notetags
 * **** Replace 'key' with one of the following for weapons and armors:
 * ***** 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', or 'LUK'
 * ***** For those with VisuMZ_0_CoreEngine:
 * ****** 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT', 'HRG', 'MRG', 'TRG'
 * ****** 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR', 'MDR', 'FDR', 'EXR'
 * **** Only relevant if the Draw Style for equipment is "classic" or "double".
 * ** Updated <Custom Status Info> notetag:
 * *** Used for: Skill, Item, Weapon, Armor Notetags
 * **** When used with weapon or armor database objects, this information is
 *      only relevant if the Draw Style for equipment is "classic" or "double".
 * * New Feature!
 * ** New Plugin Parameters: 
 * *** Parameters > Shop Status Window > Data Style:
 * **** How do you wish to display equipment data?
 * ***** Compare - Compares selected equip to equipped gear
 * ****** Lists all main party actors
 * ****** Displays the parameter differences when equipped
 * ****** Calculates custom JS values
 * ***** Classic - Shows basic parameters of selected equip
 * ***** Double - Shows basic parameters in double columns
 * ****** Involves no actors, only shows the item's stats
 * ****** Shows weapon or armor specific parameters
 * ****** Does not show custom JS values as those are calculated per actor
 * ****** Does not show custom parameters as those are calculated per actor
 * ****** Use <Status Info> and <Custom Status Info> notetags to overwrite or
 *        add custom data to classic equip data
 * **** Data Style > Classic Style:
 * **** Data Style > Double Style:
 * ***** Added Weapon Params
 * ***** Added Armor Params
 * ****** Display these parameters when a weapon/armor is selected.
 * ****** Requires VisuMZ_0_CoreEngine!
 * 
 * Version 1.54: October 17, 2024
 * * Feature Update!
 * ** If "Modern Controls" is selected while "Remove Equip" and "Optimize" are
 *    gone from the Equip Menu, right click will exit the menu. Feature added
 *    by Arisu.
 * 
 * Version 1.53: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added warning to <JS Parameters>:
 * *** If you are trying to calculate a value based off a full parameter value,
 *     such as "ATK = user.atk * 0.10", it's going to break and will cause an
 *     infinite loop. Use base parameter values instead.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *      option (only when selling).
 * **** Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 * **** Default priority level is '50'.
 * **** Items, weapons, and armors with higher priority values will be sorted
 *      higher up on the list while lower values will be lower on the list.
 * 
 * Version 1.52: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Item Categories > Category List > Category > Sorted By:
 * **** You can now sort specific item categories by ID or Name.
 * **** Only usable within Scene_Item and Scene_Shop.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.51: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an item is unequipped, it may cause a crash. Fix
 *    made by Arisu.
 * ** Fixed a bug where <Proxy: id> did not properly give the proxy item. Fix
 *    made by Arisu.
 * 
 * Version 1.50: November 16, 2023
 * * Bug Fixes!
 * ** <JS Buy Price> and <JS Sell Price> was not working properly. Fix made
 *    by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Cursed>
 * **** If this weapon or armor is equipped, it cannot manually be removed by
 *      the player until it is purified.
 * **** To remove it, it must be done by event commands, script calls, or
 *     through the Purify-related Plugin Commands provided by this plugin.
 * **** Once purified, the weapon or armor will become unequipped unless it has
 *     a purify transformation.
 * **** If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * **** If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become
 *      cursed in order to allow free weapon swapping. Weaponry will not be
 *      cursed if VisuMZ_2_WeaponSwapSystem is installed.
 * *** <Purify Transform: id>
 * *** <Purify Transform: name>
 * **** If this notetag is present on a <Cursed> weapon or armor, then upon the
 *      actor receiving purification, the weapon or armor will transform into a
 *      different item.
 * ** New Plugin Commands added by Arisu:
 * *** Purify: Target Actor(s)
 * **** Purifies target actor(s) of any cursed weapons or armors.
 * *** Purify: Whole Party
 * **** Purifies whole party of any cursed weapons or armors.
 * ** Added "Cursed Equip Popup" to Equip Scene Plugin Parameters.
 * *** Text popup appears when an actor equips a cursed weapon/armor.
 * ** Added "Ally or Enemy" or "Enemy or Ally" scopes to Shop Status Window
 *    Plugin Parameters.
 * *** If unused, will default to "1 Ally" or "1 Enemy" like usual.
 *     Added by Irina.
 * 
 * Version 1.49: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a problem where for weapon types, all weapon types are listed in
 *    the equip menu even when the actor cannot equip them (though they would
 *    be disabled). Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia and sponsored by AndyL:
 * *** <Added EType: x>
 * *** <Added ETypes: x, x, x>
 * **** This is for armors only and does NOT work with weapons!
 * **** Allows a piece of armor to belong to multiple ETypes. This means a
 *      glove can be equipped as "Armgear" or as an "Accessory" if you so
 *      choose.
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
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
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Purify
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyActors
 * @text Purify: Target Actor(s)
 * @desc Purifies target actor(s) of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyParty
 * @text Purify: Whole Party
 * @desc Purifies whole party of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
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
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","CursedTextPopup:json":"\"%1 is cursed by %3%2!\"","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","equipCmdDesc:json":"\"Pick and choose equipment to change.\"","CommandAddOptimize:eval":"true","optimizeCmdDesc:json":"\"Equip the strongest available equipment.\"","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","clearCmdDesc:json":"\"Remove all available equipment.\"","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","EquipDataStyle:str":"compare","EquipDataCompare":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","EquipDataClassic":"","ClassicWeaponParameters:arraystr":"[\"HIT\"]","ClassicArmorParameters:arraystr":"[\"EVA\"]","DrawEquipClassicData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Item Weapon Type or Armor Type\\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\\n\\n// Draw Parameter Values\\nconst params = this.actorParams();\\nfor (const paramId of params) {\\n    if (this.isCustomParameter(paramId)) continue;\\n    this.drawActorParamClassic(paramId, x, y, width);\\n    y += lineHeight;\\n}\\n\\n// Draw Custom Entries\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","EquipDataDouble":"","DoubleWeaponParameters:arraystr":"[\"HIT\",\"CNT\"]","DoubleArmorParameters:arraystr":"[\"EVA\",\"GRD\"]","DrawEquipDoubleData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Item Weapon Type or Armor Type\\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\\n\\n// Draw Parameter Values\\nconst params = this.actorParams();\\nfor (const paramId of params) {\\n    if (this.isCustomParameter(paramId)) continue;\\n    this.drawActorParamClassic(paramId, x, y, hw);\\n    if (x === hw) {\\n        y += lineHeight;\\n        x = 0;\\n    } else {\\n        x = hw;\\n    }\\n}\\n// Realign\\nif (x === hw) {\\n    this.drawItemDarkRect(hw, y, hw, lineHeight);\\n    y += lineHeight;\\n    x = 0;\\n}\\n\\n// Draw Custom Entries\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","EquipDelayMS:num":"240","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","ScopeAllyOrEnemy:str":"Ally/Enemy","ScopeEnemyOrAlly:str":"Enemy/Ally","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes","EquipType":"","WeaponType:str":"Weapon Type","ArmorType:str":"Armor Type","NoEquipTypeResult:str":"-"}
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
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 * @param SortBy:str
 * @text Sorted By
 * @type select
 * @option ID
 * @option Name
 * @desc Sort this category (in Scene_Item and Scene_Shop only) this way.
 * @default ID
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param CursedTextPopup:json
 * @text Cursed Equip Popup
 * @parent General
 * @type note
 * @desc %1 - Actor, %2 - Equip, %3 - Icon. Text codes allowed.
 * Requires VisuMZ_0_CoreEngine! Empty to not use.
 * @default "%1 is cursed by %3%2!"
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 * 
 * @param EquipDataStyle:str
 * @text Data Style
 * @parent EquipData
 * @type select
 * @option Compare - Compares selected equip to equipped gear
 * @value compare
 * @option Classic - Shows basic parameters of selected equip
 * @value classic
 * @option Double - Shows basic parameters in double columns
 * @value double
 * @desc How do you wish to display equipment data?
 * @default compare
 *
 * @param EquipDataCompare
 * @text Compare Style
 * @parent EquipDataStyle:str
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipDataCompare
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipDataCompare
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipDataCompare
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataCompare
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param EquipDataClassic
 * @text Classic Style
 * @parent EquipDataStyle:str
 *
 * @param ClassicWeaponParameters:arraystr
 * @text Added Weapon Params
 * @parent EquipDataClassic
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
 * @desc Display these parameters when a weapon is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["HIT"]
 *
 * @param ClassicArmorParameters:arraystr
 * @text Added Armor Params
 * @parent EquipDataClassic
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
 * @desc Display these parameters when an armor is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["EVA"]
 *
 * @param DrawEquipClassicData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataClassic
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Item Weapon Type or Armor Type\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\n\n// Draw Parameter Values\nconst params = this.actorParams();\nfor (const paramId of params) {\n    if (this.isCustomParameter(paramId)) continue;\n    this.drawActorParamClassic(paramId, x, y, width);\n    y += lineHeight;\n}\n\n// Draw Custom Entries\ny = this.drawItemCustomEntries(x, y, width);\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param EquipDataDouble
 * @text Double Style
 * @parent EquipDataStyle:str
 *
 * @param DoubleWeaponParameters:arraystr
 * @text Added Weapon Params
 * @parent EquipDataDouble
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
 * @desc Display these parameters when a weapon is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["HIT","CNT"]
 *
 * @param DoubleArmorParameters:arraystr
 * @text Added Armor Params
 * @parent EquipDataDouble
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
 * @desc Display these parameters when an armor is selected.
 * Requires VisuMZ_0_CoreEngine!
 * @default ["EVA","GRD"]
 *
 * @param DrawEquipDoubleData:func
 * @text JS: Draw Equip Data
 * @parent EquipDataDouble
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Item Weapon Type or Armor Type\nif (this.drawItemEquipSubType(x, y, width)) y += lineHeight;\n\n// Draw Parameter Values\nconst params = this.actorParams();\nfor (const paramId of params) {\n    if (this.isCustomParameter(paramId)) continue;\n    this.drawActorParamClassic(paramId, x, y, hw);\n    if (x === hw) {\n        y += lineHeight;\n        x = 0;\n    } else {\n        x = hw;\n    }\n}\n// Realign\nif (x === hw) {\n    this.drawItemDarkRect(hw, y, hw, lineHeight);\n    y += lineHeight;\n    x = 0;\n}\n\n// Draw Custom Entries\ny = this.drawItemCustomEntries(x, y, width);\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 * @text Data Settings
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param ScopeAllyOrEnemy:str
 * @text Ally or Enemy
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Ally or Enemy> notetag.
 * @default Ally/Enemy
 *
 * @param ScopeEnemyOrAlly:str
 * @text Enemy or Ally
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Enemy or Ally> notetag.
 * @default Enemy/Ally
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 * @param EquipType
 * @parent Vocabulary
 * @text Equip Type
 *
 * @param WeaponType:str
 * @text Weapon Type
 * @parent EquipType
 * @desc Vocabulary used for this data entry.
 * @default Weapon Type
 *
 * @param ArmorType:str
 * @text Armor Type
 * @parent EquipType
 * @desc Vocabulary used for this data entry.
 * @default Armor Type
 *
 * @param NoEquipTypeResult:str
 * @text No Equip Type
 * @parent EquipType
 * @desc Marker used to show an unlisted equip type.
 * @default -
 *
 */
//=============================================================================

const _0x354d50=_0x1c23;function _0x1c23(_0x42bea9,_0x2db333){const _0x22a4e4=_0x22a4();return _0x1c23=function(_0x1c2342,_0x1f86cf){_0x1c2342=_0x1c2342-0xab;let _0x2afb02=_0x22a4e4[_0x1c2342];return _0x2afb02;},_0x1c23(_0x42bea9,_0x2db333);}(function(_0x4951df,_0x2070b9){const _0x5e6081=_0x1c23,_0x37af10=_0x4951df();while(!![]){try{const _0x23449a=parseInt(_0x5e6081(0x3df))/0x1*(-parseInt(_0x5e6081(0x14f))/0x2)+-parseInt(_0x5e6081(0x26a))/0x3+parseInt(_0x5e6081(0x42a))/0x4+-parseInt(_0x5e6081(0x1f5))/0x5+-parseInt(_0x5e6081(0x314))/0x6+-parseInt(_0x5e6081(0x3d1))/0x7*(parseInt(_0x5e6081(0x259))/0x8)+parseInt(_0x5e6081(0x2db))/0x9;if(_0x23449a===_0x2070b9)break;else _0x37af10['push'](_0x37af10['shift']());}catch(_0x1f86cc){_0x37af10['push'](_0x37af10['shift']());}}}(_0x22a4,0x97976));var label=_0x354d50(0x122),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x354d50(0x1e8)](function(_0x1fa00d){const _0x41ba67=_0x354d50;return _0x1fa00d[_0x41ba67(0x239)]&&_0x1fa00d[_0x41ba67(0x44f)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x354d50(0x1c3)]||{},VisuMZ[_0x354d50(0x346)]=function(_0x4cd1d7,_0x3c41a3){const _0x376a73=_0x354d50;for(const _0x28ccb7 in _0x3c41a3){if(_0x28ccb7[_0x376a73(0x364)](/(.*):(.*)/i)){const _0x550bdd=String(RegExp['$1']),_0x41188d=String(RegExp['$2'])[_0x376a73(0xe6)]()[_0x376a73(0x4bf)]();let _0x460fa7,_0x34555e,_0xde12a4;switch(_0x41188d){case'NUM':_0x460fa7=_0x3c41a3[_0x28ccb7]!==''?Number(_0x3c41a3[_0x28ccb7]):0x0;break;case _0x376a73(0x31b):_0x34555e=_0x3c41a3[_0x28ccb7]!==''?JSON['parse'](_0x3c41a3[_0x28ccb7]):[],_0x460fa7=_0x34555e[_0x376a73(0x49b)](_0x44b706=>Number(_0x44b706));break;case'EVAL':_0x460fa7=_0x3c41a3[_0x28ccb7]!==''?eval(_0x3c41a3[_0x28ccb7]):null;break;case'ARRAYEVAL':_0x34555e=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):[],_0x460fa7=_0x34555e['map'](_0x4bcffb=>eval(_0x4bcffb));break;case _0x376a73(0x4b9):_0x460fa7=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):'';break;case _0x376a73(0x2b1):_0x34555e=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):[],_0x460fa7=_0x34555e['map'](_0x28b82f=>JSON[_0x376a73(0x309)](_0x28b82f));break;case _0x376a73(0x2d0):_0x460fa7=_0x3c41a3[_0x28ccb7]!==''?new Function(JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7])):new Function('return\x200');break;case _0x376a73(0x11f):_0x34555e=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):[],_0x460fa7=_0x34555e[_0x376a73(0x49b)](_0x4c1cf3=>new Function(JSON[_0x376a73(0x309)](_0x4c1cf3)));break;case _0x376a73(0x379):_0x460fa7=_0x3c41a3[_0x28ccb7]!==''?String(_0x3c41a3[_0x28ccb7]):'';break;case _0x376a73(0x2a4):_0x34555e=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):[],_0x460fa7=_0x34555e[_0x376a73(0x49b)](_0x34c585=>String(_0x34c585));break;case _0x376a73(0x445):_0xde12a4=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):{},_0x4cd1d7[_0x550bdd]={},VisuMZ['ConvertParams'](_0x4cd1d7[_0x550bdd],_0xde12a4);continue;case _0x376a73(0x2e3):_0x34555e=_0x3c41a3[_0x28ccb7]!==''?JSON[_0x376a73(0x309)](_0x3c41a3[_0x28ccb7]):[],_0x460fa7=_0x34555e[_0x376a73(0x49b)](_0x263a88=>VisuMZ['ConvertParams']({},JSON[_0x376a73(0x309)](_0x263a88)));break;default:continue;}_0x4cd1d7[_0x550bdd]=_0x460fa7;}}return _0x4cd1d7;},(_0x15ddb9=>{const _0x1487dd=_0x354d50,_0x2f39ab=_0x15ddb9['name'];for(const _0x3fca20 of dependencies){if(!Imported[_0x3fca20]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x1487dd(0x288)](_0x2f39ab,_0x3fca20)),SceneManager[_0x1487dd(0x3ec)]();break;}}const _0x1e27ee=_0x15ddb9[_0x1487dd(0x44f)];if(_0x1e27ee[_0x1487dd(0x364)](/\[Version[ ](.*?)\]/i)){const _0x3f5d1c=Number(RegExp['$1']);_0x3f5d1c!==VisuMZ[label][_0x1487dd(0x3fd)]&&(alert(_0x1487dd(0x2a3)['format'](_0x2f39ab,_0x3f5d1c)),SceneManager[_0x1487dd(0x3ec)]());}if(_0x1e27ee[_0x1487dd(0x364)](/\[Tier[ ](\d+)\]/i)){const _0x42e961=Number(RegExp['$1']);_0x42e961<tier?(alert(_0x1487dd(0x4c7)['format'](_0x2f39ab,_0x42e961,tier)),SceneManager['exit']()):tier=Math[_0x1487dd(0x354)](_0x42e961,tier);}VisuMZ[_0x1487dd(0x346)](VisuMZ[label]['Settings'],_0x15ddb9[_0x1487dd(0x4a0)]);})(pluginData),PluginManager[_0x354d50(0x2b0)](pluginData[_0x354d50(0x457)],_0x354d50(0x1fd),_0x49894f=>{const _0x45df75=_0x354d50;VisuMZ['ConvertParams'](_0x49894f,_0x49894f);const _0x50909d=_0x49894f['Actors']['map'](_0x339346=>$gameActors['actor'](_0x339346)),_0x5d77b6=_0x49894f[_0x45df75(0x2da)]['map'](_0x5c4d0d=>$dataSystem['equipTypes'][_0x45df75(0x431)](_0x5c4d0d['trim']()));for(const _0xfb9732 of _0x50909d){if(!_0xfb9732)continue;_0xfb9732['forceChangeEquipSlots'](_0x5d77b6);}}),PluginManager[_0x354d50(0x2b0)](pluginData[_0x354d50(0x457)],'ActorResetEquipSlots',_0x404091=>{const _0x2eb918=_0x354d50;VisuMZ[_0x2eb918(0x346)](_0x404091,_0x404091);const _0x319ac1=_0x404091[_0x2eb918(0x345)][_0x2eb918(0x49b)](_0x3f4d29=>$gameActors[_0x2eb918(0xe1)](_0x3f4d29));for(const _0x3325b1 of _0x319ac1){if(!_0x3325b1)continue;_0x3325b1[_0x2eb918(0x466)]();}}),PluginManager[_0x354d50(0x2b0)](pluginData[_0x354d50(0x457)],_0x354d50(0x2f8),_0x1fa062=>{const _0x19fec5=_0x354d50;if($gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x1fa062,_0x1fa062);const _0x2532ce=_0x1fa062[_0x19fec5(0x345)]['map'](_0x3843a5=>$gameActors[_0x19fec5(0xe1)](_0x3843a5));for(const _0x2f32d7 of _0x2532ce){if(!_0x2f32d7)continue;_0x2f32d7[_0x19fec5(0x300)]();}}),PluginManager[_0x354d50(0x2b0)](pluginData[_0x354d50(0x457)],_0x354d50(0xb6),_0x155570=>{const _0x3a4d36=_0x354d50;if($gameParty[_0x3a4d36(0x43a)]())return;$gameParty['purifyCursedEquips']();}),PluginManager[_0x354d50(0x2b0)](pluginData[_0x354d50(0x457)],_0x354d50(0x243),_0x766986=>{const _0x28ac77=_0x354d50;VisuMZ[_0x28ac77(0x346)](_0x766986,_0x766986);const _0x23e040=[],_0x266ab7=_0x766986[_0x28ac77(0x27d)][_0x28ac77(0x49b)](_0x2d4c21=>_0x2d4c21[_0x28ac77(0xe6)]()[_0x28ac77(0x4bf)]()),_0x17fa75=_0x766986[_0x28ac77(0x265)][_0x28ac77(0x49b)](_0x4c6ff2=>_0x4c6ff2[_0x28ac77(0xe6)]()[_0x28ac77(0x4bf)]()),_0x46d460=_0x766986[_0x28ac77(0xb3)]>=_0x766986[_0x28ac77(0xef)]?_0x766986[_0x28ac77(0xef)]:_0x766986['Step1End'],_0x3e6038=_0x766986['Step1End']>=_0x766986[_0x28ac77(0xef)]?_0x766986[_0x28ac77(0xb3)]:_0x766986['Step1Start'],_0x214fc6=Array(_0x3e6038-_0x46d460+0x1)['fill']()[_0x28ac77(0x49b)]((_0x313c3f,_0x295bf1)=>_0x46d460+_0x295bf1);for(const _0x4b53de of _0x214fc6){const _0x33a487=$dataItems[_0x4b53de];if(!_0x33a487)continue;if(!VisuMZ[_0x28ac77(0x122)][_0x28ac77(0x19d)](_0x33a487,_0x266ab7,_0x17fa75))continue;_0x23e040[_0x28ac77(0x29b)]([0x0,_0x4b53de,0x0,_0x33a487['price']]);}const _0x29d727=_0x766986[_0x28ac77(0x2ca)]>=_0x766986['Step2Start']?_0x766986['Step2Start']:_0x766986[_0x28ac77(0x2ca)],_0x3692c4=_0x766986[_0x28ac77(0x2ca)]>=_0x766986[_0x28ac77(0x24b)]?_0x766986[_0x28ac77(0x2ca)]:_0x766986['Step2Start'],_0x2fe31a=Array(_0x3692c4-_0x29d727+0x1)[_0x28ac77(0x2d4)]()['map']((_0x2a771b,_0x286031)=>_0x29d727+_0x286031);for(const _0x2a188a of _0x2fe31a){const _0xd08ad3=$dataWeapons[_0x2a188a];if(!_0xd08ad3)continue;if(!VisuMZ['ItemsEquipsCore'][_0x28ac77(0x19d)](_0xd08ad3,_0x266ab7,_0x17fa75))continue;_0x23e040[_0x28ac77(0x29b)]([0x1,_0x2a188a,0x0,_0xd08ad3[_0x28ac77(0x3a5)]]);}const _0x1ebb31=_0x766986[_0x28ac77(0x496)]>=_0x766986[_0x28ac77(0x222)]?_0x766986[_0x28ac77(0x222)]:_0x766986['Step3End'],_0x2b36bb=_0x766986[_0x28ac77(0x496)]>=_0x766986[_0x28ac77(0x222)]?_0x766986[_0x28ac77(0x496)]:_0x766986['Step3Start'],_0x5c973a=Array(_0x2b36bb-_0x1ebb31+0x1)[_0x28ac77(0x2d4)]()['map']((_0x580928,_0x54c970)=>_0x1ebb31+_0x54c970);for(const _0x5eaee6 of _0x5c973a){const _0xea5852=$dataArmors[_0x5eaee6];if(!_0xea5852)continue;if(!VisuMZ[_0x28ac77(0x122)][_0x28ac77(0x19d)](_0xea5852,_0x266ab7,_0x17fa75))continue;_0x23e040['push']([0x2,_0x5eaee6,0x0,_0xea5852['price']]);}SceneManager[_0x28ac77(0x29b)](Scene_Shop),SceneManager['prepareNextScene'](_0x23e040,_0x766986['PurchaseOnly']);}),VisuMZ[_0x354d50(0x122)][_0x354d50(0x19d)]=function(_0x376b32,_0x34c1d8,_0x1658a5){const _0x3c3b3f=_0x354d50;if(_0x376b32[_0x3c3b3f(0x457)][_0x3c3b3f(0x4bf)]()==='')return![];if(_0x376b32[_0x3c3b3f(0x457)]['match'](/-----/i))return![];const _0xba2933=_0x376b32[_0x3c3b3f(0x3b9)];if(_0x34c1d8[_0x3c3b3f(0x13b)]>0x0)for(const _0x1a2e3d of _0x34c1d8){if(!_0x1a2e3d)continue;if(_0xba2933[_0x3c3b3f(0x204)](_0x1a2e3d))return![];}if(_0x1658a5[_0x3c3b3f(0x13b)]>0x0){for(const _0x64bd0c of _0x1658a5){if(!_0x64bd0c)continue;if(_0xba2933[_0x3c3b3f(0x204)](_0x64bd0c))return!![];}return![];}return!![];},VisuMZ['ItemsEquipsCore'][_0x354d50(0x191)]=Scene_Boot[_0x354d50(0x384)][_0x354d50(0x4cf)],Scene_Boot[_0x354d50(0x384)][_0x354d50(0x4cf)]=function(){const _0x54c7f3=_0x354d50;this['process_VisuMZ_ItemsEquipsCore_RegExp'](),VisuMZ[_0x54c7f3(0x122)][_0x54c7f3(0x191)][_0x54c7f3(0x46a)](this),this['process_VisuMZ_ItemsEquipsCore_Notetags'](),VisuMZ['ItemsEquipsCore']['SetupProxyItemGroups'](),VisuMZ[_0x54c7f3(0x122)][_0x54c7f3(0x4ad)]();},Scene_Boot['prototype'][_0x354d50(0x3b1)]=function(){const _0x404833=_0x354d50;VisuMZ[_0x404833(0x122)][_0x404833(0x278)]={},VisuMZ[_0x404833(0x122)][_0x404833(0x278)]['EquipParams']=[],VisuMZ[_0x404833(0x122)]['RegExp'][_0x404833(0x29c)]=[];const _0x5a8081=[_0x404833(0x26f),'MaxMP',_0x404833(0x3c9),_0x404833(0x178),'MAT',_0x404833(0x32e),_0x404833(0x4de),'LUK'];for(const _0x5938b9 of _0x5a8081){const _0x16915f='<%1:[\x20]([\x5c+\x5c-]\x5cd+)>'[_0x404833(0x288)](_0x5938b9);VisuMZ[_0x404833(0x122)][_0x404833(0x278)][_0x404833(0x252)][_0x404833(0x29b)](new RegExp(_0x16915f,'i'));const _0x26cba1=_0x404833(0x2aa)[_0x404833(0x288)](_0x5938b9);VisuMZ[_0x404833(0x122)][_0x404833(0x278)][_0x404833(0x29c)][_0x404833(0x29b)](new RegExp(_0x26cba1,'g'));}},Scene_Boot[_0x354d50(0x384)][_0x354d50(0x160)]=function(){const _0x11f307=_0x354d50;if(VisuMZ['ParseAllNotetags'])return;this['process_VisuMZ_ItemsEquipsCore_EquipSlots']();const _0x5964e2=[$dataItems,$dataWeapons,$dataArmors];for(const _0x571ffa of _0x5964e2){for(const _0x3409d5 of _0x571ffa){if(!_0x3409d5)continue;VisuMZ[_0x11f307(0x122)][_0x11f307(0x29d)](_0x3409d5,_0x571ffa),VisuMZ[_0x11f307(0x122)][_0x11f307(0x353)](_0x3409d5,_0x571ffa),VisuMZ[_0x11f307(0x122)][_0x11f307(0x157)](_0x3409d5,_0x571ffa),VisuMZ[_0x11f307(0x122)][_0x11f307(0x485)](_0x3409d5,_0x571ffa),VisuMZ[_0x11f307(0x122)][_0x11f307(0x3be)](_0x3409d5,_0x571ffa);}}},Scene_Boot['prototype']['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x1d3be9=_0x354d50;for(const _0x331e68 of $dataClasses){if(!_0x331e68)continue;VisuMZ['ItemsEquipsCore'][_0x1d3be9(0x247)](_0x331e68);}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x2ec)]=VisuMZ[_0x354d50(0x2ec)],VisuMZ[_0x354d50(0x2ec)]=function(_0x59fdc3){const _0x338f6b=_0x354d50;VisuMZ[_0x338f6b(0x122)]['ParseClassNotetags'][_0x338f6b(0x46a)](this,_0x59fdc3),VisuMZ['ItemsEquipsCore']['Parse_Notetags_EquipSlots'](_0x59fdc3);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x3c3)]=VisuMZ['ParseItemNotetags'],VisuMZ[_0x354d50(0x3c3)]=function(_0x48981e){const _0x2e9041=_0x354d50;VisuMZ[_0x2e9041(0x122)][_0x2e9041(0x3c3)][_0x2e9041(0x46a)](this,_0x48981e),VisuMZ[_0x2e9041(0x122)][_0x2e9041(0x1e2)](_0x48981e,$dataItems);},VisuMZ['ItemsEquipsCore']['ParseWeaponNotetags']=VisuMZ[_0x354d50(0x20f)],VisuMZ['ParseWeaponNotetags']=function(_0x591147){const _0x400d61=_0x354d50;VisuMZ[_0x400d61(0x122)][_0x400d61(0x20f)][_0x400d61(0x46a)](this,_0x591147),VisuMZ[_0x400d61(0x122)][_0x400d61(0x1e2)](_0x591147,$dataWeapons);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x49c)]=VisuMZ[_0x354d50(0x49c)],VisuMZ[_0x354d50(0x49c)]=function(_0x2ac13f){const _0x3350a2=_0x354d50;VisuMZ[_0x3350a2(0x122)][_0x3350a2(0x49c)][_0x3350a2(0x46a)](this,_0x2ac13f),VisuMZ[_0x3350a2(0x122)][_0x3350a2(0x1e2)](_0x2ac13f,$dataArmors);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x247)]=function(_0x1e9068){const _0x5cbf49=_0x354d50;_0x1e9068[_0x5cbf49(0x3b4)]=[];const _0x166458=$dataSystem['equipTypes'][_0x5cbf49(0x49b)](_0x17e242=>_0x17e242?_0x17e242[_0x5cbf49(0x4bf)]():'');if(!BattleManager[_0x5cbf49(0xba)]()&&_0x1e9068[_0x5cbf49(0xd2)][_0x5cbf49(0x364)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x5507d3=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0xe466bb of _0x5507d3){const _0x299e6f=_0x166458[_0x5cbf49(0x431)](_0xe466bb['trim']());if(_0x299e6f>0x0)_0x1e9068['equipSlots']['push'](_0x299e6f);}}else for(const _0x5507d8 of _0x166458){const _0x315cc1=_0x166458[_0x5cbf49(0x431)](_0x5507d8[_0x5cbf49(0x4bf)]());if(_0x315cc1>0x0)_0x1e9068['equipSlots'][_0x5cbf49(0x29b)](_0x315cc1);}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x1e2)]=function(_0x32ffe7,_0x5e941c){const _0x2db3d7=_0x354d50;VisuMZ[_0x2db3d7(0x122)]['Parse_Notetags_Category'](_0x32ffe7,_0x5e941c),VisuMZ['ItemsEquipsCore'][_0x2db3d7(0x353)](_0x32ffe7,_0x5e941c),VisuMZ[_0x2db3d7(0x122)]['Parse_Notetags_ParamValues'](_0x32ffe7,_0x5e941c),VisuMZ[_0x2db3d7(0x122)]['Parse_Notetags_ParamJS'](_0x32ffe7,_0x5e941c),VisuMZ['ItemsEquipsCore'][_0x2db3d7(0x3be)](_0x32ffe7,_0x5e941c);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x29d)]=function(_0x203cff,_0x578be2){const _0x201a62=_0x354d50;_0x203cff[_0x201a62(0x3b9)]=[];const _0x447344=_0x203cff['note']||'',_0x37282a=_0x447344[_0x201a62(0x364)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x37282a)for(const _0x16e513 of _0x37282a){_0x16e513[_0x201a62(0x364)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x118ed8=String(RegExp['$1'])['toUpperCase']()[_0x201a62(0x4bf)]()[_0x201a62(0x4b2)](',');for(const _0x4674d8 of _0x118ed8){_0x203cff[_0x201a62(0x3b9)][_0x201a62(0x29b)](_0x4674d8[_0x201a62(0x4bf)]());}}if(_0x447344[_0x201a62(0x364)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x12b54b=RegExp['$1'][_0x201a62(0x4b2)](/[\r\n]+/);for(const _0x2cd49f of _0x12b54b){_0x203cff[_0x201a62(0x3b9)]['push'](_0x2cd49f[_0x201a62(0xe6)]()[_0x201a62(0x4bf)]());}}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x211)]=function(_0x5c5ec7,_0x5e05ec){const _0x5d02a5=_0x354d50;if(!_0x5c5ec7)return;_0x5c5ec7['sortPriority']=0x32;const _0x191476=_0x5c5ec7[_0x5d02a5(0xd2)]||'';_0x191476[_0x5d02a5(0x364)](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0x5c5ec7[_0x5d02a5(0xb4)]=Number(RegExp['$1']));},VisuMZ[_0x354d50(0x122)][_0x354d50(0x353)]=function(_0x48106d,_0x297fcc){const _0x39c8d6=_0x354d50;_0x48106d['note'][_0x39c8d6(0x364)](/<PRICE:[ ](\d+)>/i)&&(_0x48106d[_0x39c8d6(0x3a5)]=Number(RegExp['$1']));},VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamValues']=function(_0x2df401,_0x258c19){const _0x3c72d4=_0x354d50;if(_0x258c19===$dataItems)return;for(let _0x6fc0f9=0x0;_0x6fc0f9<0x8;_0x6fc0f9++){const _0x4187f8=VisuMZ['ItemsEquipsCore'][_0x3c72d4(0x278)]['EquipParams'][_0x6fc0f9];_0x2df401[_0x3c72d4(0xd2)][_0x3c72d4(0x364)](_0x4187f8)&&(_0x2df401['params'][_0x6fc0f9]=parseInt(RegExp['$1']));}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x10e)]={},VisuMZ[_0x354d50(0x122)][_0x354d50(0x485)]=function(_0x70a8cc,_0x14ffda){const _0x4db50b=_0x354d50;if(_0x14ffda===$dataItems)return;if(_0x70a8cc['note'][_0x4db50b(0x364)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x559339=String(RegExp['$1']),_0x3a755b=(_0x14ffda===$dataWeapons?_0x4db50b(0x465):_0x4db50b(0x117))[_0x4db50b(0x288)](_0x70a8cc['id']),_0x11f470='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'[_0x4db50b(0x288)](_0x559339);for(let _0x22c954=0x0;_0x22c954<0x8;_0x22c954++){if(_0x559339[_0x4db50b(0x364)](VisuMZ['ItemsEquipsCore'][_0x4db50b(0x278)][_0x4db50b(0x29c)][_0x22c954])){const _0x2f7617=_0x4db50b(0x399)['format'](_0x3a755b,_0x22c954);VisuMZ[_0x4db50b(0x122)][_0x4db50b(0x10e)][_0x2f7617]=new Function(_0x4db50b(0x3fa),_0x4db50b(0x3c2),_0x11f470);}}}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x341)]={},VisuMZ['ItemsEquipsCore'][_0x354d50(0x3be)]=function(_0x340f58,_0xe42dbe){const _0x5aaf83=_0x354d50;if(_0xe42dbe!==$dataItems)return;if(_0x340f58[_0x5aaf83(0xd2)]['match'](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x48dded=String(RegExp['$1']),_0x4c652e=_0x5aaf83(0x342)[_0x5aaf83(0x288)](_0x48dded);VisuMZ[_0x5aaf83(0x122)][_0x5aaf83(0x341)][_0x340f58['id']]=new Function(_0x5aaf83(0x3fa),_0x4c652e);}},DataManager[_0x354d50(0x4ac)]=function(_0x3f0f8d){const _0x4be47b=_0x354d50;return this[_0x4be47b(0x448)](_0x3f0f8d)&&_0x3f0f8d[_0x4be47b(0x3e0)]===0x2;},DataManager[_0x354d50(0x1e0)]=function(_0x27f772){const _0x3ecad0=_0x354d50;if(!_0x27f772)return 0x63;else return _0x27f772[_0x3ecad0(0xd2)][_0x3ecad0(0x364)](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x3ecad0(0x18f)](_0x27f772);},DataManager[_0x354d50(0x18f)]=function(_0x431979){const _0x13ca05=_0x354d50;if(this['isItem'](_0x431979))return VisuMZ['ItemsEquipsCore'][_0x13ca05(0x1c3)][_0x13ca05(0x17d)][_0x13ca05(0x212)];else{if(this[_0x13ca05(0x249)](_0x431979))return VisuMZ[_0x13ca05(0x122)][_0x13ca05(0x1c3)][_0x13ca05(0x17d)][_0x13ca05(0x1ef)];else{if(this[_0x13ca05(0x286)](_0x431979))return VisuMZ[_0x13ca05(0x122)][_0x13ca05(0x1c3)]['ItemScene'][_0x13ca05(0x19b)];}}},DataManager[_0x354d50(0x10b)]=function(_0x2dacad){const _0x1e1740=_0x354d50;_0x2dacad=_0x2dacad['toUpperCase']()[_0x1e1740(0x4bf)](),this[_0x1e1740(0x450)]=this[_0x1e1740(0x450)]||{};if(this['_classIDs'][_0x2dacad])return this[_0x1e1740(0x450)][_0x2dacad];for(const _0x303b02 of $dataClasses){if(!_0x303b02)continue;let _0x1d98fe=_0x303b02[_0x1e1740(0x457)];_0x1d98fe=_0x1d98fe[_0x1e1740(0x4b8)](/\x1I\[(\d+)\]/gi,''),_0x1d98fe=_0x1d98fe['replace'](/\\I\[(\d+)\]/gi,''),this[_0x1e1740(0x450)][_0x1d98fe[_0x1e1740(0xe6)]()[_0x1e1740(0x4bf)]()]=_0x303b02['id'];}return this[_0x1e1740(0x450)][_0x2dacad]||0x0;},DataManager[_0x354d50(0x264)]=function(_0x1383e2){const _0x15a780=_0x354d50;_0x1383e2=_0x1383e2[_0x15a780(0xe6)]()['trim'](),this[_0x15a780(0x4a8)]=this[_0x15a780(0x4a8)]||{};if(this[_0x15a780(0x4a8)][_0x1383e2])return this[_0x15a780(0x4a8)][_0x1383e2];for(const _0x390f5e of $dataSkills){if(!_0x390f5e)continue;this['_skillIDs'][_0x390f5e['name']['toUpperCase']()[_0x15a780(0x4bf)]()]=_0x390f5e['id'];}return this[_0x15a780(0x4a8)][_0x1383e2]||0x0;},DataManager[_0x354d50(0x4ba)]=function(_0x2c14e8){const _0x57d30a=_0x354d50;_0x2c14e8=_0x2c14e8['toUpperCase']()[_0x57d30a(0x4bf)](),this['_itemIDs']=this[_0x57d30a(0x3d2)]||{};if(this[_0x57d30a(0x3d2)][_0x2c14e8])return this[_0x57d30a(0x3d2)][_0x2c14e8];for(const _0x28f6dc of $dataItems){if(!_0x28f6dc)continue;this[_0x57d30a(0x3d2)][_0x28f6dc[_0x57d30a(0x457)][_0x57d30a(0xe6)]()[_0x57d30a(0x4bf)]()]=_0x28f6dc['id'];}return this['_itemIDs'][_0x2c14e8]||0x0;},DataManager[_0x354d50(0xdf)]=function(_0x2c37d5){const _0x13ab07=_0x354d50;_0x2c37d5=_0x2c37d5[_0x13ab07(0xe6)]()[_0x13ab07(0x4bf)](),this['_weaponIDs']=this[_0x13ab07(0x2f7)]||{};if(this['_weaponIDs'][_0x2c37d5])return this[_0x13ab07(0x2f7)][_0x2c37d5];for(const _0x5965d3 of $dataWeapons){if(!_0x5965d3)continue;this[_0x13ab07(0x2f7)][_0x5965d3[_0x13ab07(0x457)]['toUpperCase']()['trim']()]=_0x5965d3['id'];}return this[_0x13ab07(0x2f7)][_0x2c37d5]||0x0;},DataManager[_0x354d50(0x4d6)]=function(_0x11af4f){const _0x2c3e95=_0x354d50;_0x11af4f=_0x11af4f['toUpperCase']()[_0x2c3e95(0x4bf)](),this[_0x2c3e95(0x4cc)]=this[_0x2c3e95(0x4cc)]||{};if(this['_armorIDs'][_0x11af4f])return this[_0x2c3e95(0x4cc)][_0x11af4f];for(const _0x197c63 of $dataArmors){if(!_0x197c63)continue;this['_armorIDs'][_0x197c63['name'][_0x2c3e95(0xe6)]()[_0x2c3e95(0x4bf)]()]=_0x197c63['id'];}return this['_armorIDs'][_0x11af4f]||0x0;},DataManager[_0x354d50(0x24f)]=function(_0x2ea349){const _0x244ff0=_0x354d50;_0x2ea349=_0x2ea349['toUpperCase']()['trim'](),this[_0x244ff0(0x2e6)]=this[_0x244ff0(0x2e6)]||{};if(this['_etypeIDs'][_0x2ea349])return this[_0x244ff0(0x2e6)][_0x2ea349];for(const _0x182d43 of $dataSystem['equipTypes']){this['_etypeIDs'][_0x182d43[_0x244ff0(0xe6)]()[_0x244ff0(0x4bf)]()]=$dataSystem[_0x244ff0(0x312)][_0x244ff0(0x431)](_0x182d43);}return this[_0x244ff0(0x2e6)][_0x2ea349]||0x0;},VisuMZ[_0x354d50(0x122)][_0x354d50(0x347)]=function(){const _0x2d78f6=_0x354d50;VisuMZ[_0x2d78f6(0x122)]['SetupProxyItemGroup']($dataItems),VisuMZ[_0x2d78f6(0x122)][_0x2d78f6(0x1f6)]($dataWeapons),VisuMZ['ItemsEquipsCore']['SetupProxyItemGroup']($dataArmors);},VisuMZ[_0x354d50(0x122)]['SetupProxyItemGroup']=function(_0x4df229){const _0x279a79=_0x354d50;for(const _0xec4e0b of _0x4df229){if(!_0xec4e0b)continue;if(!DataManager[_0x279a79(0x238)](_0xec4e0b))continue;const _0x1ecc7c=DataManager[_0x279a79(0xd7)](_0xec4e0b),_0x3f3895=[_0x279a79(0x457),_0x279a79(0x42e),'description'];for(const _0x55ef94 of _0x3f3895){_0xec4e0b[_0x55ef94]=_0x1ecc7c[_0x55ef94];}}},DataManager[_0x354d50(0x238)]=function(_0x516120){const _0x2834de=_0x354d50;if(!_0x516120)return![];if(!_0x516120[_0x2834de(0xd2)])return![];return _0x516120&&_0x516120[_0x2834de(0xd2)][_0x2834de(0x364)](/<PROXY:[ ](.*)>/i);},DataManager['getProxyItem']=function(_0x356d46){const _0x51b047=_0x354d50;return this[_0x51b047(0x238)](_0x356d46)?this[_0x51b047(0x47f)](_0x356d46)||_0x356d46:_0x356d46;},DataManager[_0x354d50(0x47f)]=function(_0xe8e6ec){const _0x5b1040=_0x354d50;_0xe8e6ec[_0x5b1040(0xd2)][_0x5b1040(0x364)](/<PROXY:[ ](.*)>/i);const _0x343f45=RegExp['$1'][_0x5b1040(0x4bf)](),_0x5d51cc=/^\d+$/['test'](_0x343f45);if(this['isItem'](_0xe8e6ec)){const _0x163197=_0x5d51cc?Number(_0x343f45):DataManager[_0x5b1040(0x4ba)](_0x343f45);return $dataItems[_0x163197]||_0xe8e6ec;}else{if(this['isWeapon'](_0xe8e6ec)){const _0x43b768=_0x5d51cc?Number(_0x343f45):DataManager['getWeaponIdWithName'](_0x343f45);return $dataWeapons[_0x43b768]||_0xe8e6ec;}else{if(this['isArmor'](_0xe8e6ec)){const _0x1df3cf=_0x5d51cc?Number(_0x343f45):DataManager[_0x5b1040(0x4d6)](_0x343f45);return $dataArmors[_0x1df3cf]||_0xe8e6ec;}}}return _0xe8e6ec;},VisuMZ[_0x354d50(0x122)][_0x354d50(0x219)]=Window_ItemList['prototype'][_0x354d50(0x3fa)],Window_ItemList['prototype'][_0x354d50(0x3fa)]=function(){const _0x22e278=_0x354d50;if($gameTemp[_0x22e278(0x4cb)])return VisuMZ[_0x22e278(0x122)][_0x22e278(0x219)][_0x22e278(0x46a)](this);return DataManager[_0x22e278(0xd7)](VisuMZ[_0x22e278(0x122)][_0x22e278(0x219)][_0x22e278(0x46a)](this));},Window_ItemList[_0x354d50(0x384)]['proxyItem']=function(){const _0x23970a=_0x354d50;return VisuMZ[_0x23970a(0x122)][_0x23970a(0x219)][_0x23970a(0x46a)](this);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x3de)]=Window_ShopBuy[_0x354d50(0x384)]['item'],Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x3fa)]=function(){const _0x3dfe09=_0x354d50;if($gameTemp['_bypassProxy'])return VisuMZ[_0x3dfe09(0x122)]['Window_ShopBuy_item'][_0x3dfe09(0x46a)](this);return DataManager[_0x3dfe09(0xd7)](VisuMZ['ItemsEquipsCore']['Window_ShopBuy_item'][_0x3dfe09(0x46a)](this));},Window_ShopBuy['prototype'][_0x354d50(0xd9)]=function(){const _0x585851=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x585851(0x3de)]['call'](this);},VisuMZ[_0x354d50(0x122)][_0x354d50(0xb8)]=Game_Item[_0x354d50(0x384)]['setObject'],Game_Item[_0x354d50(0x384)][_0x354d50(0x2ea)]=function(_0xe8d211){const _0x3c1864=_0x354d50;if(DataManager['isProxyItem'](_0xe8d211))return;VisuMZ['ItemsEquipsCore'][_0x3c1864(0xb8)][_0x3c1864(0x46a)](this,_0xe8d211);},VisuMZ[_0x354d50(0x122)]['SetupArtifactItemIDs']=function(){const _0x39a103=_0x354d50;this[_0x39a103(0x330)]={'partyArtifactIDs':[],'troopArtifactIDs':[]};for(const _0x4a1544 of $dataArmors){if(!_0x4a1544)continue;if(!DataManager[_0x39a103(0x4bc)](_0x4a1544))continue;DataManager[_0x39a103(0x158)](_0x4a1544)&&this['artifactIDs'][_0x39a103(0x375)][_0x39a103(0x29b)](_0x4a1544['id']),DataManager[_0x39a103(0x3cd)](_0x4a1544)&&this[_0x39a103(0x330)][_0x39a103(0x1cc)][_0x39a103(0x29b)](_0x4a1544['id']);}},DataManager[_0x354d50(0x4bc)]=function(_0x2c3628){const _0x209fed=_0x354d50;if(!this[_0x209fed(0x286)](_0x2c3628))return![];const _0x22115=_0x2c3628[_0x209fed(0xd2)];if(!_0x22115)return![];if(_0x22115[_0x209fed(0x364)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x22115['match'](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x22115[_0x209fed(0x364)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x22115[_0x209fed(0x364)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x354d50(0xe3)]=function(_0x354b3f){const _0x381216=_0x354d50;if(!this[_0x381216(0x4bc)](_0x354b3f))return![];const _0x5cb4c5=_0x354b3f[_0x381216(0xd2)];if(!_0x5cb4c5)return![];if(_0x5cb4c5[_0x381216(0x364)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x5cb4c5[_0x381216(0x364)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager['isPartyArtifact']=function(_0x27d3d2){const _0x32a16b=_0x354d50;if(!this[_0x32a16b(0x4bc)](_0x27d3d2))return![];const _0x51b107=_0x27d3d2['note'];if(!_0x51b107)return![];if(_0x51b107[_0x32a16b(0x364)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x51b107[_0x32a16b(0x364)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x354d50(0x3cd)]=function(_0x39b5e9){const _0x58d31b=_0x354d50;if(!this[_0x58d31b(0x4bc)](_0x39b5e9))return![];const _0x19cc6f=_0x39b5e9[_0x58d31b(0xd2)];if(!_0x19cc6f)return![];if(_0x19cc6f[_0x58d31b(0x364)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x19cc6f['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x354d50(0x122)]['Game_BattlerBase_canEquip_artifact']=Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x4a7)],Game_BattlerBase['prototype'][_0x354d50(0x4a7)]=function(_0x441d95){const _0x23b1d9=_0x354d50;if(DataManager[_0x23b1d9(0x4bc)](_0x441d95))return![];if(!DataManager[_0x23b1d9(0x48a)](this,_0x441d95))return![];if(!DataManager[_0x23b1d9(0x182)](this,_0x441d95))return![];return VisuMZ['ItemsEquipsCore']['Game_BattlerBase_canEquip_artifact'][_0x23b1d9(0x46a)](this,_0x441d95);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x327)]=Game_BattlerBase['prototype']['param'],Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x15e)]=function(_0x58b934){const _0x6d6499=_0x354d50;this['_allowArtifactParamBase']=!![];const _0x313176=VisuMZ[_0x6d6499(0x122)][_0x6d6499(0x327)][_0x6d6499(0x46a)](this,_0x58b934);return this[_0x6d6499(0x474)]=undefined,_0x313176;},VisuMZ['ItemsEquipsCore'][_0x354d50(0x1b8)]=Game_Actor[_0x354d50(0x384)]['traitObjects'],Game_Actor['prototype']['traitObjects']=function(){const _0x3148dd=_0x354d50;this[_0x3148dd(0x20a)]=!![];const _0x286cef=VisuMZ[_0x3148dd(0x122)][_0x3148dd(0x1b8)][_0x3148dd(0x46a)](this);return this[_0x3148dd(0x20a)]=undefined,_0x286cef;},VisuMZ[_0x354d50(0x122)]['Game_Actor_equips_artifacts']=Game_Actor[_0x354d50(0x384)]['equips'],Game_Actor[_0x354d50(0x384)][_0x354d50(0x437)]=function(){const _0x22f626=_0x354d50,_0x577d3b=VisuMZ['ItemsEquipsCore'][_0x22f626(0x3b0)][_0x22f626(0x46a)](this);if(this[_0x22f626(0x20a)]||this['_allowArtifactParamBase']){const _0x273ff7=_0x577d3b['concat']($gameParty['partyArtifacts']());return _0x273ff7;}else return _0x577d3b;},VisuMZ['ItemsEquipsCore'][_0x354d50(0x241)]=Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x2b3)],Game_BattlerBase['prototype'][_0x354d50(0x2b3)]=function(_0x1eb223){const _0x3f1b7a=_0x354d50;let _0x3277ed=VisuMZ[_0x3f1b7a(0x122)][_0x3f1b7a(0x241)][_0x3f1b7a(0x46a)](this,_0x1eb223);if(this['constructor']===Game_Enemy)for(const _0x316307 of $gameParty[_0x3f1b7a(0x216)]()){if(_0x316307)_0x3277ed+=_0x316307['params'][_0x1eb223];}return _0x3277ed;},VisuMZ[_0x354d50(0x122)][_0x354d50(0x209)]=Game_Enemy['prototype']['traitObjects'],Game_Enemy[_0x354d50(0x384)][_0x354d50(0x38c)]=function(){const _0x3a4675=_0x354d50;let _0x1d8de3=VisuMZ[_0x3a4675(0x122)][_0x3a4675(0x209)][_0x3a4675(0x46a)](this);return _0x1d8de3['concat']($gameParty['troopArtifacts']());},VisuMZ[_0x354d50(0x122)][_0x354d50(0xdc)]=Game_Party[_0x354d50(0x384)][_0x354d50(0x128)],Game_Party[_0x354d50(0x384)][_0x354d50(0x128)]=function(_0x3a1f04,_0x4cb887,_0x2de886){const _0x81b912=_0x354d50;VisuMZ[_0x81b912(0x122)][_0x81b912(0xdc)][_0x81b912(0x46a)](this,_0x3a1f04,_0x4cb887,_0x2de886);if(DataManager[_0x81b912(0x4bc)](_0x3a1f04)){let _0x1a36be=$gameParty['allMembers']();if($gameParty['inBattle']())_0x1a36be=_0x1a36be[_0x81b912(0x108)]($gameTroop[_0x81b912(0x23f)]());for(const _0x2c43ec of _0x1a36be){if(!_0x2c43ec)continue;_0x2c43ec[_0x81b912(0xcf)]={};}}},Game_Party['prototype'][_0x354d50(0x4e0)]=function(){const _0x1dfd46=_0x354d50;let _0x3e3132=[];const _0xfbefc5=VisuMZ[_0x1dfd46(0x122)]['artifactIDs'][_0x1dfd46(0x375)];if(_0xfbefc5)for(const _0x59b85f of _0xfbefc5){const _0x22fbeb=$dataArmors[_0x59b85f];if(!_0x22fbeb)continue;if(!this[_0x1dfd46(0x48e)](_0x22fbeb))continue;let _0x52297d=0x1;if(DataManager[_0x1dfd46(0xe3)](_0x22fbeb))_0x52297d=this['numItems'](_0x22fbeb);while(_0x52297d--)_0x3e3132[_0x1dfd46(0x29b)](_0x22fbeb);}return _0x3e3132;},Game_Party[_0x354d50(0x384)]['troopArtifacts']=function(){const _0xbb93d4=_0x354d50;let _0x5d90ea=[];const _0x4f2de3=VisuMZ[_0xbb93d4(0x122)]['artifactIDs'][_0xbb93d4(0x1cc)];if(_0x4f2de3)for(const _0x5082d1 of _0x4f2de3){const _0x25fcad=$dataArmors[_0x5082d1];if(!_0x25fcad)continue;if(!this[_0xbb93d4(0x48e)](_0x25fcad))continue;let _0x4bc992=0x1;if(DataManager[_0xbb93d4(0xe3)](_0x25fcad))_0x4bc992=this[_0xbb93d4(0x3c1)](_0x25fcad);while(_0x4bc992--)_0x5d90ea['push'](_0x25fcad);}return _0x5d90ea;},Game_Party[_0x354d50(0x384)][_0x354d50(0x34c)]=function(){const _0x40e282=_0x354d50;return this['partyArtifacts']()['concat'](this[_0x40e282(0x216)]());},VisuMZ['ItemsEquipsCore'][_0x354d50(0x425)]=Game_Party[_0x354d50(0x384)][_0x354d50(0x23b)],Game_Party['prototype'][_0x354d50(0x23b)]=function(){const _0x5dee21=_0x354d50;VisuMZ[_0x5dee21(0x122)]['Game_Party_setupBattleTestItems_artifact'][_0x5dee21(0x46a)](this),this[_0x5dee21(0x2f6)]();},Game_Party[_0x354d50(0x384)][_0x354d50(0x2f6)]=function(){const _0x211e38=_0x354d50,_0x35763f=$gameParty[_0x211e38(0x14a)]()[_0x211e38(0x1e8)](_0x1a4e20=>DataManager[_0x211e38(0x4bc)](_0x1a4e20));for(const _0x47843b of _0x35763f){const _0x5c0b24=this[_0x211e38(0x3c1)](_0x47843b);if(_0x5c0b24)this['loseItem'](_0x47843b,_0x5c0b24);}},DataManager[_0x354d50(0x48a)]=function(_0x19f972,_0x175621){const _0x5243fb=_0x354d50;if(this[_0x5243fb(0x448)](_0x175621))return![];if(!_0x19f972)return![];if($gameTemp[_0x5243fb(0x16a)])return!![];if(BattleManager[_0x5243fb(0xba)]())return!![];const _0x2512cf=this[_0x5243fb(0x2a5)](_0x175621);if(_0x2512cf[_0x5243fb(0x13b)]<=0x0)return!![];return _0x2512cf[_0x5243fb(0x204)](_0x19f972['currentClass']()['id']);},DataManager[_0x354d50(0x2a5)]=function(_0x445d35){const _0x47d664=_0x354d50;if(!_0x445d35)return[];this[_0x47d664(0x30c)]=this[_0x47d664(0x30c)]||{};const _0x4f9d1d=_0x47d664(0x399)[_0x47d664(0x288)](this[_0x47d664(0x249)](_0x445d35)?_0x47d664(0xca):'ARMOR',_0x445d35['id']);if(this[_0x47d664(0x30c)][_0x4f9d1d]!==undefined)return this[_0x47d664(0x30c)][_0x4f9d1d];let _0x3f4e78=[];const _0x1a76d0=_0x445d35['note']||'';if(_0x1a76d0[_0x47d664(0x364)](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x37c6ef=String(RegExp['$1'])[_0x47d664(0x4b2)](',')[_0x47d664(0x49b)](_0x2654c6=>_0x2654c6['trim']());for(const _0x32c347 of _0x37c6ef){const _0x37f944=/^\d+$/[_0x47d664(0x3ea)](_0x32c347);_0x37f944?_0x3f4e78[_0x47d664(0x29b)](Number(_0x32c347)):_0x3f4e78['push'](DataManager[_0x47d664(0x10b)](_0x32c347));}}return this[_0x47d664(0x30c)][_0x4f9d1d]=_0x3f4e78,this[_0x47d664(0x30c)][_0x4f9d1d];},DataManager[_0x354d50(0x182)]=function(_0x329cb0,_0x1c472a){const _0x4ec46f=_0x354d50;if(this[_0x4ec46f(0x448)](_0x1c472a))return![];if(!_0x329cb0)return![];if($gameTemp['_checkEquipRequirements'])return!![];if(BattleManager['isBattleTest']())return!![];const _0x339d23=this['getEquipRequirements'](_0x1c472a);for(const _0x55a12d of _0x339d23){if(!this[_0x4ec46f(0x22a)](_0x329cb0,_0x55a12d))return![];}return!![];},DataManager[_0x354d50(0x408)]=function(_0x3266f1){const _0x1e1192=_0x354d50;if(!_0x3266f1)return[];this[_0x1e1192(0x438)]=this[_0x1e1192(0x438)]||{};const _0x5504a5=_0x1e1192(0x399)[_0x1e1192(0x288)](this[_0x1e1192(0x249)](_0x3266f1)?_0x1e1192(0xca):'ARMOR',_0x3266f1['id']);if(this[_0x1e1192(0x438)][_0x5504a5]!==undefined)return this[_0x1e1192(0x438)][_0x5504a5];let _0x5bf84d=[];const _0x5ab85d=_0x3266f1[_0x1e1192(0xd2)]||'';return _0x5ab85d[_0x1e1192(0x364)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x5bf84d=String(RegExp['$1'])[_0x1e1192(0x4b2)](/[\r\n]+/)),this['_getEquipRequirements'][_0x5504a5]=_0x5bf84d,this['_getEquipRequirements'][_0x5504a5];},DataManager[_0x354d50(0x22a)]=function(_0x14790f,_0x4c1250){const _0xc95676=_0x354d50;if(_0x4c1250['match'](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x2a0867=String(RegExp['$1'])[_0xc95676(0x4bf)](),_0x52cfb1=Number(RegExp['$2']);switch(_0x2a0867){case'>':return _0x14790f[_0xc95676(0x1fa)]>_0x52cfb1;case'>=':return _0x14790f['level']>=_0x52cfb1;case'===':return _0x14790f[_0xc95676(0x1fa)]===_0x52cfb1;case'<=':return _0x14790f[_0xc95676(0x1fa)]<=_0x52cfb1;case'<':return _0x14790f[_0xc95676(0x1fa)]<_0x52cfb1;}return![];}if(_0x4c1250[_0xc95676(0x364)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x44a999=String(RegExp['$1'])[_0xc95676(0x49f)]()[_0xc95676(0x4bf)](),_0x26dda0=String(RegExp['$2'])['trim'](),_0x2a6465=Number(RegExp['$3']);let _0x47e3a5=0x0;if(['maxmp',_0xc95676(0x292)][_0xc95676(0x204)](_0x44a999))_0x47e3a5=0x1;const _0x18df42=_0x14790f['_paramPlus'][_0x47e3a5]||0x0;switch(_0x26dda0){case'>':return _0x14790f[_0xc95676(0xe8)](_0x47e3a5)+_0x18df42>_0x2a6465;case'>=':return _0x14790f[_0xc95676(0xe8)](_0x47e3a5)+_0x18df42>=_0x2a6465;case _0xc95676(0x2ad):return _0x14790f['paramBase'](_0x47e3a5)+_0x18df42===_0x2a6465;case'<=':return _0x14790f[_0xc95676(0xe8)](_0x47e3a5)+_0x18df42<=_0x2a6465;case'<':return _0x14790f[_0xc95676(0xe8)](_0x47e3a5)+_0x18df42<_0x2a6465;}return![];}if(_0x4c1250[_0xc95676(0x364)](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x202f16=String(RegExp['$1'])[_0xc95676(0x49f)]()[_0xc95676(0x4bf)](),_0x145382=String(RegExp['$2'])[_0xc95676(0x4bf)](),_0x2b7769=Number(RegExp['$3']),_0x1f15cf=[_0xc95676(0x41f),'def',_0xc95676(0x407),_0xc95676(0x141),_0xc95676(0xf1),_0xc95676(0x3d5)];let _0x2d535e=_0x1f15cf[_0xc95676(0x431)](_0x202f16)+0x2;if(_0x2d535e<0x2)return![];const _0x36a3c7=_0x14790f[_0xc95676(0xc9)][_0x2d535e]||0x0;switch(_0x145382){case'>':return _0x14790f[_0xc95676(0xe8)](_0x2d535e)+_0x36a3c7>_0x2b7769;case'>=':return _0x14790f[_0xc95676(0xe8)](_0x2d535e)+_0x36a3c7>=_0x2b7769;case _0xc95676(0x2ad):return _0x14790f[_0xc95676(0xe8)](_0x2d535e)+_0x36a3c7===_0x2b7769;case'<=':return _0x14790f[_0xc95676(0xe8)](_0x2d535e)+_0x36a3c7<=_0x2b7769;case'<':return _0x14790f[_0xc95676(0xe8)](_0x2d535e)+_0x36a3c7<_0x2b7769;}return![];}if(_0x4c1250[_0xc95676(0x364)](/LEARNED SKILL:[ ](\d+)/i)){const _0x44c323=Number(RegExp['$1']);return _0x14790f[_0xc95676(0x226)](_0x44c323);}else{if(_0x4c1250[_0xc95676(0x364)](/LEARNED SKILL:[ ](.*)/i)){const _0x207028=String(RegExp['$1']),_0xf897d0=this[_0xc95676(0x264)](_0x207028);return _0x14790f[_0xc95676(0x226)](_0xf897d0);}}if(_0x4c1250[_0xc95676(0x364)](/SWITCH:[ ](\d+)/i)){const _0x23c5ae=Number(RegExp['$1']);return $gameSwitches['value'](_0x23c5ae);}return!![];},DataManager[_0x354d50(0xd0)]=function(_0x75ffed){const _0x591673=_0x354d50;return this[_0x591673(0x286)](_0x75ffed)?this[_0x591673(0x1a0)](_0x75ffed):[_0x75ffed['etypeId']||0x0];},DataManager['getEtypeIDsCache']=function(_0x8375c6){const _0x2898d0=_0x354d50;this[_0x2898d0(0x118)]=this['_cache_etypeIDs']||{};if(this['_cache_etypeIDs'][_0x8375c6['id']]!==undefined)return this[_0x2898d0(0x118)][_0x8375c6['id']];this[_0x2898d0(0x118)][_0x8375c6['id']]=[_0x8375c6[_0x2898d0(0x45f)]||0x0];const _0x3e04ab=_0x8375c6['note']||'';if(_0x3e04ab[_0x2898d0(0x364)](/<ADDED ETYPE(?:|S):[ ](.*)>/i)){const _0x3d9355=String(RegExp['$1'])[_0x2898d0(0x4b2)](',')['map'](_0x18251d=>_0x18251d['trim']());for(const _0x4c8b03 of _0x3d9355){const _0x3c59ed=/^\d+$/[_0x2898d0(0x3ea)](_0x4c8b03);let _0x46bbba=0x0;_0x3c59ed?_0x46bbba=Number(_0x4c8b03):_0x46bbba=this[_0x2898d0(0x24f)](_0x4c8b03),_0x46bbba>0x1&&this[_0x2898d0(0x118)][_0x8375c6['id']][_0x2898d0(0x29b)](_0x46bbba);}}return this['_cache_etypeIDs'][_0x8375c6['id']];},Game_BattlerBase['prototype'][_0x354d50(0x255)]=function(_0x5aff16){const _0x4deec1=_0x354d50;return this[_0x4deec1(0x281)](_0x5aff16[_0x4deec1(0x1d6)])&&!this[_0x4deec1(0x2ba)](_0x5aff16[_0x4deec1(0x45f)])&&DataManager['getEtypeIDs'](_0x5aff16)['every'](_0x90de99=>!this[_0x4deec1(0x2ba)](_0x90de99));},DataManager[_0x354d50(0x14d)]=function(_0x4bf8a1){const _0x3040b8=_0x354d50;if(!this[_0x3040b8(0x249)](_0x4bf8a1)&&!this[_0x3040b8(0x286)](_0x4bf8a1))return![];if(Imported[_0x3040b8(0x20c)]&&this[_0x3040b8(0x249)](_0x4bf8a1))return![];if(!_0x4bf8a1[_0x3040b8(0xd2)])return![];return _0x4bf8a1['note'][_0x3040b8(0x364)](/<CURSED>/i);},DataManager[_0x354d50(0x110)]=function(_0x1b863f){const _0x6ef24=_0x354d50;if(!_0x1b863f)return _0x1b863f;if(!this[_0x6ef24(0x249)](_0x1b863f)&&!this[_0x6ef24(0x286)](_0x1b863f))return _0x1b863f;if(_0x1b863f[_0x6ef24(0xd2)][_0x6ef24(0x364)](/<PURIFY TRANSFORM:[ ](.*)>/i)){const _0x5684af=String(RegExp['$1'])['trim'](),_0xb58f47=/^\d+$/['test'](_0x5684af);if(_0xb58f47){if(this[_0x6ef24(0x249)](_0x1b863f))return $dataWeapons[Number(_0x5684af)];if(this[_0x6ef24(0x286)](_0x1b863f))return $dataArmors[Number(_0x5684af)];}else{if(this[_0x6ef24(0x249)](_0x1b863f))return $dataWeapons[this['getWeaponIdWithName'](_0x5684af)];if(this[_0x6ef24(0x286)](_0x1b863f))return $dataArmors[this[_0x6ef24(0x4d6)](_0x5684af)];}}return _0x1b863f;},Game_Party[_0x354d50(0x384)][_0x354d50(0x300)]=function(){const _0x592380=_0x354d50,_0x125d3b=this['allMembers']();for(const _0x2c8cf3 of _0x125d3b){if(!_0x2c8cf3)continue;_0x2c8cf3[_0x592380(0x300)]();}},Game_Actor[_0x354d50(0x384)][_0x354d50(0x300)]=function(){const _0x15964e=_0x354d50,_0x54f912=this[_0x15964e(0x3b4)]()[_0x15964e(0x13b)];for(let _0x2cb3b6=0x0;_0x2cb3b6<_0x54f912;_0x2cb3b6++){const _0x5de5ca=this[_0x15964e(0x39d)][_0x2cb3b6];if(!_0x5de5ca)continue;const _0x448289=_0x5de5ca[_0x15964e(0x3a4)]();if(!DataManager[_0x15964e(0x14d)](_0x448289))continue;let _0x28c293=DataManager[_0x15964e(0x110)](_0x448289);this[_0x15964e(0x24a)](_0x448289,_0x28c293)?(this['_equips'][_0x2cb3b6][_0x15964e(0x2ea)](_0x28c293),this[_0x15964e(0x2cd)]()):this[_0x15964e(0x3f5)](_0x2cb3b6,null);}},Game_Actor['prototype'][_0x354d50(0x24a)]=function(_0xb4624c,_0x50c9c6){const _0x413dee=_0x354d50;if(_0xb4624c===_0x50c9c6)return![];const _0x559c84=DataManager[_0x413dee(0xd0)](_0x50c9c6);if(!_0x559c84['includes'](_0xb4624c[_0x413dee(0x45f)]))return![];if(DataManager[_0x413dee(0x249)](_0x50c9c6))return this[_0x413dee(0x34f)](_0x50c9c6[_0x413dee(0x2e2)]);else{if(DataManager[_0x413dee(0x286)](_0x50c9c6))return this[_0x413dee(0x281)](_0x50c9c6[_0x413dee(0x1d6)]);}return![];},TextManager[_0x354d50(0x193)]={'helpDesc':{'equip':VisuMZ[_0x354d50(0x122)][_0x354d50(0x1c3)][_0x354d50(0x217)][_0x354d50(0xbc)]??_0x354d50(0x134),'optimize':VisuMZ[_0x354d50(0x122)][_0x354d50(0x1c3)]['EquipScene']['optimizeCmdDesc']??_0x354d50(0x494),'clear':VisuMZ[_0x354d50(0x122)]['Settings'][_0x354d50(0x217)]['clearCmdDesc']??'Remove\x20all\x20available\x20equipment.'}},ColorManager['getItemColor']=function(_0x4d88ee){const _0x1a46db=_0x354d50;if(!_0x4d88ee)return this['normalColor']();else{if(_0x4d88ee[_0x1a46db(0xd2)][_0x1a46db(0x364)](/<COLOR:[ ](\d+)>/i))return this[_0x1a46db(0x46b)](Number(RegExp['$1'])[_0x1a46db(0x439)](0x0,0x1f));else return _0x4d88ee[_0x1a46db(0xd2)][_0x1a46db(0x364)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this['normalColor']();}},ColorManager[_0x354d50(0x3b5)]=function(_0x266257){const _0x5b5f03=_0x354d50;return _0x266257=String(_0x266257),_0x266257[_0x5b5f03(0x364)](/#(.*)/i)?'#%1'[_0x5b5f03(0x288)](String(RegExp['$1'])):this[_0x5b5f03(0x46b)](Number(_0x266257));},SceneManager['isSceneShop']=function(){const _0x305736=_0x354d50;return this[_0x305736(0x45c)]&&this[_0x305736(0x45c)][_0x305736(0x1c2)]===Scene_Shop;},Game_Temp[_0x354d50(0x384)][_0x354d50(0x3e1)]=function(){const _0x8abf49=_0x354d50;if(this[_0x8abf49(0x1f8)])return![];return VisuMZ[_0x8abf49(0x122)]['Settings'][_0x8abf49(0x29a)][_0x8abf49(0x411)];},VisuMZ['ShopMenuStatusStandard']=VisuMZ[_0x354d50(0x122)]['Settings']['StatusWindow'][_0x354d50(0x2f9)],VisuMZ[_0x354d50(0x122)]['Game_BattlerBase_param']=Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x15e)],Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x15e)]=function(_0x52fe4f){const _0x3736bb=_0x354d50;return this[_0x3736bb(0x33a)]?this[_0x3736bb(0xb2)]?VisuMZ[_0x3736bb(0x21d)]:0x1:VisuMZ[_0x3736bb(0x122)][_0x3736bb(0x202)]['call'](this,_0x52fe4f);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x195)]=Game_BattlerBase[_0x354d50(0x384)]['meetsItemConditions'],Game_BattlerBase['prototype']['meetsItemConditions']=function(_0x582e62){const _0x4c0c68=_0x354d50;if(!_0x582e62)return![];if(!VisuMZ[_0x4c0c68(0x122)][_0x4c0c68(0x195)][_0x4c0c68(0x46a)](this,_0x582e62))return![];if(!this['meetsItemConditionsNotetags'](_0x582e62))return![];if(!this[_0x4c0c68(0x34e)](_0x582e62))return![];return!![];},Game_BattlerBase[_0x354d50(0x384)]['meetsItemConditionsNotetags']=function(_0x5e6c43){const _0x2e4826=_0x354d50;if(!this[_0x2e4826(0x356)](_0x5e6c43))return![];return!![];},Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x356)]=function(_0x135c37){const _0x2ca7c5=_0x354d50,_0x5c6fba=_0x135c37[_0x2ca7c5(0xd2)];if(_0x5c6fba['match'](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1bc2a5=JSON['parse']('['+RegExp['$1'][_0x2ca7c5(0x364)](/\d+/g)+']');for(const _0x201948 of _0x1bc2a5){if(!$gameSwitches[_0x2ca7c5(0xf9)](_0x201948))return![];}return!![];}if(_0x5c6fba[_0x2ca7c5(0x364)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x20eb2e=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x491d43 of _0x20eb2e){if(!$gameSwitches[_0x2ca7c5(0xf9)](_0x491d43))return![];}return!![];}if(_0x5c6fba['match'](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4145fc=JSON[_0x2ca7c5(0x309)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x59c15a of _0x4145fc){if($gameSwitches[_0x2ca7c5(0xf9)](_0x59c15a))return!![];}return![];}if(_0x5c6fba[_0x2ca7c5(0x364)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1ced95=JSON[_0x2ca7c5(0x309)]('['+RegExp['$1'][_0x2ca7c5(0x364)](/\d+/g)+']');for(const _0x15a0b0 of _0x1ced95){if(!$gameSwitches['value'](_0x15a0b0))return!![];}return![];}if(_0x5c6fba[_0x2ca7c5(0x364)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4bb61b=JSON[_0x2ca7c5(0x309)]('['+RegExp['$1'][_0x2ca7c5(0x364)](/\d+/g)+']');for(const _0x1e4d52 of _0x4bb61b){if(!$gameSwitches['value'](_0x1e4d52))return!![];}return![];}if(_0x5c6fba['match'](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x559bd2=JSON[_0x2ca7c5(0x309)]('['+RegExp['$1'][_0x2ca7c5(0x364)](/\d+/g)+']');for(const _0x58794f of _0x559bd2){if($gameSwitches[_0x2ca7c5(0xf9)](_0x58794f))return![];}return!![];}return!![];},Game_BattlerBase[_0x354d50(0x384)][_0x354d50(0x34e)]=function(_0x3e51f7){const _0x48eff5=_0x354d50,_0x50f415=_0x3e51f7[_0x48eff5(0xd2)],_0x332859=VisuMZ[_0x48eff5(0x122)]['itemEnableJS'];return _0x332859[_0x3e51f7['id']]?_0x332859[_0x3e51f7['id']][_0x48eff5(0x46a)](this,_0x3e51f7):!![];},Game_Actor[_0x354d50(0x384)][_0x354d50(0x3ee)]=function(){const _0xd48047=_0x354d50,_0x4a3260=this['equipSlots']()[_0xd48047(0x13b)];for(let _0x38a615=0x0;_0x38a615<_0x4a3260;_0x38a615++){if(this['isClearEquipOk'](_0x38a615))this[_0xd48047(0x3f5)](_0x38a615,null);}},Game_Actor[_0x354d50(0x384)][_0x354d50(0x4a6)]=function(_0x1df990){const _0x4f3060=_0x354d50;return this[_0x4f3060(0x3b3)]()[_0x4f3060(0x204)](this[_0x4f3060(0x3b4)]()[_0x1df990])?![]:this['isEquipChangeOk'](_0x1df990);},Game_Actor[_0x354d50(0x384)]['nonRemovableEtypes']=function(){const _0x30f0bf=_0x354d50;return VisuMZ['ItemsEquipsCore']['Settings'][_0x30f0bf(0x217)][_0x30f0bf(0x43e)];},Game_Actor['prototype'][_0x354d50(0x40d)]=function(){const _0x457015=_0x354d50,_0x220d97=this['equipSlots']()[_0x457015(0x13b)];for(let _0x20f58d=0x0;_0x20f58d<_0x220d97;_0x20f58d++){if(this['isOptimizeEquipOk'](_0x20f58d))this['changeEquip'](_0x20f58d,null);}for(let _0x34c47b=0x0;_0x34c47b<_0x220d97;_0x34c47b++){if(this[_0x457015(0x339)](_0x34c47b))this[_0x457015(0x3f5)](_0x34c47b,this['bestEquipItem'](_0x34c47b));}},Game_Actor[_0x354d50(0x384)][_0x354d50(0x339)]=function(_0x26a2a5){const _0x26f01b=_0x354d50;return this['nonOptimizeEtypes']()[_0x26f01b(0x204)](this[_0x26f01b(0x3b4)]()[_0x26a2a5])?![]:this[_0x26f01b(0x163)](_0x26a2a5);},VisuMZ['ItemsEquipsCore']['Game_Actor_isEquipChangeOk']=Game_Actor['prototype'][_0x354d50(0x163)],Game_Actor[_0x354d50(0x384)][_0x354d50(0x163)]=function(_0x4a5771){const _0x460134=_0x354d50,_0x157e76=this[_0x460134(0x39d)][_0x4a5771];if(_0x157e76){const _0x30feb2=_0x157e76[_0x460134(0x3a4)]();if(DataManager[_0x460134(0x14d)](_0x30feb2))return![];}return VisuMZ[_0x460134(0x122)][_0x460134(0xfd)][_0x460134(0x46a)](this,_0x4a5771);},Game_Actor[_0x354d50(0x384)][_0x354d50(0x3ca)]=function(){const _0x43e838=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x43e838(0x1c3)]['EquipScene']['NonOptimizeETypes'];},VisuMZ['ItemsEquipsCore'][_0x354d50(0x4ab)]=Game_Actor[_0x354d50(0x384)][_0x354d50(0x43d)],Game_Actor[_0x354d50(0x384)][_0x354d50(0x43d)]=function(_0x1f57ed,_0x5596ca){const _0x3b36da=_0x354d50;if(this[_0x3b36da(0xe5)])return![];$gameTemp[_0x3b36da(0x1f8)]=!![];const _0x295e40=VisuMZ[_0x3b36da(0x122)][_0x3b36da(0x4ab)]['call'](this,_0x1f57ed,_0x5596ca);return $gameTemp[_0x3b36da(0x1f8)]=![],_0x295e40;},Game_Actor[_0x354d50(0x384)][_0x354d50(0x1d4)]=function(_0x1768d4,_0x5aeb6f){const _0x55d59c=_0x354d50,_0x45627f=this[_0x55d59c(0x3af)](_0x1768d4);if(_0x45627f<0x0)return;const _0x2562f7=_0x1768d4===0x1?$dataWeapons[_0x5aeb6f]:$dataArmors[_0x5aeb6f];this[_0x55d59c(0x3f5)](_0x45627f,_0x2562f7);},Game_Actor[_0x354d50(0x384)][_0x354d50(0x3af)]=function(_0x403018){const _0x532681=_0x354d50;let _0x1d9dce=0x0;const _0x50c682=this[_0x532681(0x3b4)](),_0x450e72=this['equips']();for(let _0x4543e9=0x0;_0x4543e9<_0x50c682['length'];_0x4543e9++){if(_0x50c682[_0x4543e9]===_0x403018){_0x1d9dce=_0x4543e9;if(!_0x450e72[_0x4543e9])return _0x1d9dce;}}return _0x1d9dce;},VisuMZ[_0x354d50(0x122)][_0x354d50(0x25f)]=Game_Actor['prototype']['paramPlus'],Game_Actor['prototype'][_0x354d50(0x2b3)]=function(_0x7ccac4){const _0x3bdc64=_0x354d50;let _0x34b2db=VisuMZ[_0x3bdc64(0x122)][_0x3bdc64(0x25f)][_0x3bdc64(0x46a)](this,_0x7ccac4);for(const _0x42ce2a of this[_0x3bdc64(0x437)]()){if(_0x42ce2a)_0x34b2db+=this[_0x3bdc64(0x41e)](_0x42ce2a,_0x7ccac4);}return _0x34b2db;},Game_Actor[_0x354d50(0x384)][_0x354d50(0x41e)]=function(_0x38e700,_0x3fa7fc){const _0x4fcf56=_0x354d50;if(this[_0x4fcf56(0x499)])return 0x0;const _0x368fd1=(DataManager[_0x4fcf56(0x249)](_0x38e700)?_0x4fcf56(0x465):_0x4fcf56(0x117))[_0x4fcf56(0x288)](_0x38e700['id']),_0x1ce745=_0x4fcf56(0x399)['format'](_0x368fd1,_0x3fa7fc);if(VisuMZ[_0x4fcf56(0x122)][_0x4fcf56(0x10e)][_0x1ce745]){this[_0x4fcf56(0x499)]=!![];const _0x1c5e86=VisuMZ[_0x4fcf56(0x122)][_0x4fcf56(0x10e)][_0x1ce745][_0x4fcf56(0x46a)](this,_0x38e700,_0x3fa7fc);return this[_0x4fcf56(0x499)]=![],_0x1c5e86;}else return 0x0;},Game_Actor[_0x354d50(0x384)]['setShopStatusWindowMode']=function(_0x54c657){const _0x3e8bd7=_0x354d50;this[_0x3e8bd7(0x33a)]=!![],this[_0x3e8bd7(0xb2)]=_0x54c657;},Game_Actor[_0x354d50(0x384)][_0x354d50(0x335)]=function(_0x38c3ab){const _0x3019b4=_0x354d50;_0x38c3ab=this[_0x3019b4(0x477)](_0x38c3ab);const _0x4487a=this[_0x3019b4(0x3b4)]();this[_0x3019b4(0x39d)]=[];for(let _0x5b3059=0x0;_0x5b3059<_0x4487a[_0x3019b4(0x13b)];_0x5b3059++){this['_equips'][_0x5b3059]=new Game_Item();}for(let _0x37c4ec=0x0;_0x37c4ec<_0x4487a[_0x3019b4(0x13b)];_0x37c4ec++){const _0x1cbc85=_0x4487a[_0x37c4ec],_0x7b461c=this[_0x3019b4(0xcb)](_0x38c3ab,_0x1cbc85);if(this[_0x3019b4(0x4a7)](_0x7b461c))this[_0x3019b4(0x39d)][_0x37c4ec][_0x3019b4(0x2ea)](_0x7b461c);}this[_0x3019b4(0x4d5)](!![]),this[_0x3019b4(0x2cd)]();},Game_Actor[_0x354d50(0x384)][_0x354d50(0x477)]=function(_0x2e86ed){const _0x1cd018=_0x354d50,_0xea0a12=[];for(let _0x89a79c=0x0;_0x89a79c<_0x2e86ed[_0x1cd018(0x13b)];_0x89a79c++){const _0x5f1a56=_0x2e86ed[_0x89a79c];if(_0x5f1a56<=0x0)continue;const _0x17dc92=$dataSystem['equipTypes'][_0x89a79c+0x1];if(_0x17dc92===$dataSystem[_0x1cd018(0x312)][0x1]||_0x89a79c===0x1&&this[_0x1cd018(0x261)]())_0xea0a12[_0x1cd018(0x29b)]($dataWeapons[_0x5f1a56]);else{if(BattleManager[_0x1cd018(0xba)]()){const _0x20c74b=$dataArmors[_0x5f1a56];_0x20c74b&&_0x20c74b[_0x1cd018(0x45f)]===_0x89a79c+0x1&&_0xea0a12[_0x1cd018(0x29b)](_0x20c74b);}else{const _0x5ab051=$dataArmors[_0x5f1a56];_0x5ab051&&_0x5ab051[_0x1cd018(0x45f)]===_0x89a79c+0x1&&_0xea0a12[_0x1cd018(0x29b)](_0x5ab051);}}}return _0xea0a12;},Game_Actor[_0x354d50(0x384)]['getMatchingInitEquip']=function(_0x278bfe,_0x3810e8){const _0x1a0eed=_0x354d50;for(const _0x37c98d of _0x278bfe){if(!_0x37c98d)continue;if(_0x37c98d['etypeId']===_0x3810e8)return _0x278bfe[_0x1a0eed(0x130)](_0x278bfe[_0x1a0eed(0x431)](_0x37c98d),0x1),_0x37c98d;}return null;},Game_Actor[_0x354d50(0x384)]['equipSlots']=function(){const _0x138410=_0x354d50,_0x2c3c0d=VisuMZ[_0x138410(0x122)]['deepCopy'](this[_0x138410(0x248)]||this[_0x138410(0x359)]()['equipSlots']);if(_0x2c3c0d['length']>=0x2&&this[_0x138410(0x261)]())_0x2c3c0d[0x1]=0x1;return _0x2c3c0d;},Game_Actor[_0x354d50(0x384)][_0x354d50(0xe2)]=function(_0x112dfa){const _0x3d279a=_0x354d50;_0x112dfa[_0x3d279a(0x31e)](0x0),_0x112dfa[_0x3d279a(0x31e)](-0x1),this[_0x3d279a(0x248)]=_0x112dfa,this['refresh'](),this[_0x3d279a(0x1ca)]();},Game_Actor[_0x354d50(0x384)][_0x354d50(0x466)]=function(){const _0x321c08=_0x354d50;this[_0x321c08(0x248)]=undefined,this[_0x321c08(0x2cd)](),this[_0x321c08(0x1ca)]();},Game_Actor['prototype'][_0x354d50(0x1ca)]=function(){const _0x147bd4=_0x354d50;let _0x210280=this['equipSlots']()[_0x147bd4(0x13b)];while(this[_0x147bd4(0x39d)][_0x147bd4(0x13b)]>_0x210280){const _0x8d661b=this[_0x147bd4(0x39d)][this[_0x147bd4(0x39d)][_0x147bd4(0x13b)]-0x1];_0x8d661b&&_0x8d661b[_0x147bd4(0x3a4)]()&&$gameParty['gainItem'](_0x8d661b['object'](),0x1),this[_0x147bd4(0x39d)][_0x147bd4(0x3dd)]();}while(_0x210280>this['_equips'][_0x147bd4(0x13b)]){this[_0x147bd4(0x39d)][_0x147bd4(0x29b)](new Game_Item());}},Game_Actor[_0x354d50(0x384)]['prepareNewEquipSlotsOnLoad']=function(){const _0x417207=_0x354d50,_0xf32210=this[_0x417207(0x3b4)]();for(let _0x41c6c8=0x0;_0x41c6c8<_0xf32210[_0x417207(0x13b)];_0x41c6c8++){if(!this[_0x417207(0x39d)][_0x41c6c8])this['_equips'][_0x41c6c8]=new Game_Item();}this['releaseUnequippableItems'](![]),this['refresh']();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x39a)]=Game_Actor[_0x354d50(0x384)][_0x354d50(0x3f5)],Game_Actor[_0x354d50(0x384)]['changeEquip']=function(_0x127095,_0x18d6c0){const _0x146194=_0x354d50;if(!this[_0x146194(0xe5)]){const _0x2f7e59=JsonEx[_0x146194(0x304)](this);_0x2f7e59['_tempActor']=!![],this[_0x146194(0x3a2)](_0x127095,_0x18d6c0),this[_0x146194(0xed)](_0x2f7e59);}else this[_0x146194(0x3a2)](_0x127095,_0x18d6c0);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x357)]=Game_Actor[_0x354d50(0x384)][_0x354d50(0x16d)],Game_Actor[_0x354d50(0x384)][_0x354d50(0x16d)]=function(_0x4795b4,_0x304599){const _0x1f0c36=_0x354d50;if(!this[_0x1f0c36(0xe5)]){const _0x560b67=JsonEx[_0x1f0c36(0x304)](this);_0x560b67['_tempActor']=!![],VisuMZ[_0x1f0c36(0x122)][_0x1f0c36(0x357)][_0x1f0c36(0x46a)](this,_0x4795b4,_0x304599),this[_0x1f0c36(0xed)](_0x560b67);}else VisuMZ[_0x1f0c36(0x122)][_0x1f0c36(0x357)]['call'](this,_0x4795b4,_0x304599);},VisuMZ['ItemsEquipsCore']['Game_Actor_discardEquip']=Game_Actor[_0x354d50(0x384)][_0x354d50(0x279)],Game_Actor[_0x354d50(0x384)][_0x354d50(0x279)]=function(_0x19178a){const _0x3a530a=_0x354d50;if(!this[_0x3a530a(0xe5)]){const _0x20ba46=JsonEx['makeDeepCopy'](this);_0x20ba46[_0x3a530a(0xe5)]=!![],VisuMZ[_0x3a530a(0x122)][_0x3a530a(0x324)][_0x3a530a(0x46a)](this,_0x19178a),this[_0x3a530a(0xed)](_0x20ba46);}else VisuMZ[_0x3a530a(0x122)][_0x3a530a(0x324)][_0x3a530a(0x46a)](this,_0x19178a);},Game_Actor[_0x354d50(0x384)][_0x354d50(0x4d5)]=function(_0x1a6b5e){const _0x1efc1a=_0x354d50;if(this[_0x1efc1a(0x497)])return;let _0x394400=0x0;for(;;){_0x394400++;if(_0x394400>0x3)break;const _0x325f6b=this['equipSlots'](),_0x2ca927=this[_0x1efc1a(0x437)](),_0x3fdc5d=_0x2ca927[_0x1efc1a(0x13b)];let _0x55e549=![];for(let _0x5431ad=0x0;_0x5431ad<_0x3fdc5d;_0x5431ad++){const _0x5696df=_0x2ca927[_0x5431ad];if(!_0x5696df)continue;const _0x4d0d04=DataManager[_0x1efc1a(0xd0)](_0x5696df);if(!this['canEquip'](_0x5696df)||!_0x4d0d04[_0x1efc1a(0x204)](_0x325f6b[_0x5431ad])){!_0x1a6b5e&&this['tradeItemWithParty'](null,_0x5696df);if(!this[_0x1efc1a(0xe5)]){const _0x33ef50=JsonEx['makeDeepCopy'](this);_0x33ef50[_0x1efc1a(0xe5)]=!![],this[_0x1efc1a(0x39d)][_0x5431ad]['setObject'](null),this[_0x1efc1a(0x497)]=!![],this[_0x1efc1a(0xed)](_0x33ef50),this[_0x1efc1a(0x497)]=undefined;}else{if(this['_equips'][_0x5431ad])this['_equips'][_0x5431ad][_0x1efc1a(0x2ea)](null);else continue;}_0x55e549=!![];}}if(!_0x55e549)break;}},Game_Actor[_0x354d50(0x384)][_0x354d50(0xed)]=function(_0x46129c){const _0x24bd00=_0x354d50;if(this[_0x24bd00(0xe5)])return;if(!VisuMZ[_0x24bd00(0x122)][_0x24bd00(0x1c3)]['EquipScene']['EquipAdjustHpMp'])return;const _0x1b8210=Math[_0x24bd00(0x2c9)](_0x46129c[_0x24bd00(0xfe)]()*this[_0x24bd00(0xc0)]),_0x2b6839=Math[_0x24bd00(0x2c9)](_0x46129c['mpRate']()*this['mmp']);if(this['hp']>0x0)this[_0x24bd00(0x36d)](_0x1b8210);if(this['mp']>0x0)this[_0x24bd00(0x424)](_0x2b6839);},Game_Actor['prototype'][_0x354d50(0x3a2)]=function(_0x2268d7,_0xe7ee8){const _0x1524ca=_0x354d50;if(!this[_0x1524ca(0x43d)](_0xe7ee8,this[_0x1524ca(0x437)]()[_0x2268d7]))return;if(_0xe7ee8){const _0x12d3a8=DataManager[_0x1524ca(0xd0)](_0xe7ee8);if(!_0x12d3a8[_0x1524ca(0x204)](this['equipSlots']()[_0x2268d7]))return;}this[_0x1524ca(0x39d)][_0x2268d7][_0x1524ca(0x2ea)](_0xe7ee8);if(VisuMZ[_0x1524ca(0x122)][_0x1524ca(0x22c)](_0xe7ee8)){const _0x1f2bf6=VisuMZ[_0x1524ca(0x122)][_0x1524ca(0x1c3)][_0x1524ca(0x217)][_0x1524ca(0x444)]||'',_0x256569=this[_0x1524ca(0x457)](),_0x5e01e2=_0x1524ca(0x188)[_0x1524ca(0x288)](_0xe7ee8[_0x1524ca(0x42e)]),_0x58866d=_0xe7ee8[_0x1524ca(0x457)]||'';let _0x1575a2=_0x1f2bf6[_0x1524ca(0x288)](_0x256569,_0x5e01e2,_0x58866d);if(VisuMZ[_0x1524ca(0x400)][_0x1524ca(0x3fd)]>=1.79&&_0x1575a2['length']>0x0)$textPopup(_0x1575a2);}this[_0x1524ca(0x2cd)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x22c)]=function(_0x565407){const _0x50240f=_0x354d50;if(!_0x565407)return![];if(!Imported[_0x50240f(0x100)])return![];if(VisuMZ[_0x50240f(0x400)][_0x50240f(0x3fd)]<1.79)return![];return DataManager['isCursedItem'](_0x565407);},Game_Actor[_0x354d50(0x384)][_0x354d50(0x490)]=function(_0x5b4276){const _0x2ef816=_0x354d50,_0x5e57cb=this['equipSlots']()[_0x5b4276],_0x55a2d9=$gameParty[_0x2ef816(0x2a1)]()['filter'](_0x4d80db=>DataManager[_0x2ef816(0xd0)](_0x4d80db)[_0x2ef816(0x204)](_0x5e57cb)&&this['canEquip'](_0x4d80db)&&!DataManager[_0x2ef816(0x14d)](_0x4d80db));let _0x24c26c=null,_0xbd904b=-0x3e8;for(let _0x4cfa69=0x0;_0x4cfa69<_0x55a2d9[_0x2ef816(0x13b)];_0x4cfa69++){const _0x532196=this[_0x2ef816(0x434)](_0x55a2d9[_0x4cfa69]);_0x532196>_0xbd904b&&(_0xbd904b=_0x532196,_0x24c26c=_0x55a2d9[_0x4cfa69]);}return _0x24c26c;},VisuMZ['ItemsEquipsCore']['Game_Party_initialize']=Game_Party['prototype'][_0x354d50(0x1b4)],Game_Party[_0x354d50(0x384)][_0x354d50(0x1b4)]=function(){const _0x59d969=_0x354d50;VisuMZ[_0x59d969(0x122)][_0x59d969(0x48c)][_0x59d969(0x46a)](this),this[_0x59d969(0x11e)](),this['initShopTrackingData']();},Game_Party[_0x354d50(0x384)]['initNewItemsList']=function(){const _0x1587b1=_0x354d50;this[_0x1587b1(0x183)]=[];},Game_Party[_0x354d50(0x384)][_0x354d50(0x44b)]=function(_0x535ca4){const _0x288f77=_0x354d50;if(!$gameTemp['newLabelEnabled']())return![];if(this[_0x288f77(0x183)]===undefined)this['initNewItemsList']();let _0x53c0af='';if(DataManager[_0x288f77(0x448)](_0x535ca4))_0x53c0af=_0x288f77(0x367)[_0x288f77(0x288)](_0x535ca4['id']);else{if(DataManager[_0x288f77(0x249)](_0x535ca4))_0x53c0af=_0x288f77(0x11b)[_0x288f77(0x288)](_0x535ca4['id']);else{if(DataManager[_0x288f77(0x286)](_0x535ca4))_0x53c0af=_0x288f77(0x2fd)['format'](_0x535ca4['id']);else return;}}return this[_0x288f77(0x183)]['includes'](_0x53c0af);},Game_Party[_0x354d50(0x384)][_0x354d50(0x462)]=function(_0x2afac6){const _0x1d75de=_0x354d50;if(!$gameTemp[_0x1d75de(0x3e1)]())return;if(this[_0x1d75de(0x183)]===undefined)this['initNewItemsList']();let _0xc2ba6a='';if(DataManager[_0x1d75de(0x448)](_0x2afac6))_0xc2ba6a='item-%1'[_0x1d75de(0x288)](_0x2afac6['id']);else{if(DataManager['isWeapon'](_0x2afac6))_0xc2ba6a=_0x1d75de(0x11b)['format'](_0x2afac6['id']);else{if(DataManager[_0x1d75de(0x286)](_0x2afac6))_0xc2ba6a=_0x1d75de(0x2fd)[_0x1d75de(0x288)](_0x2afac6['id']);else return;}}if(!this['_newItemsList'][_0x1d75de(0x204)](_0xc2ba6a))this[_0x1d75de(0x183)][_0x1d75de(0x29b)](_0xc2ba6a);},Game_Party[_0x354d50(0x384)][_0x354d50(0x495)]=function(_0x3f363f){const _0x68ce2b=_0x354d50;if(!$gameTemp[_0x68ce2b(0x3e1)]())return;if(this[_0x68ce2b(0x183)]===undefined)this['initNewItemsList']();let _0x41db0a='';if(DataManager[_0x68ce2b(0x448)](_0x3f363f))_0x41db0a=_0x68ce2b(0x367)[_0x68ce2b(0x288)](_0x3f363f['id']);else{if(DataManager[_0x68ce2b(0x249)](_0x3f363f))_0x41db0a=_0x68ce2b(0x11b)[_0x68ce2b(0x288)](_0x3f363f['id']);else{if(DataManager[_0x68ce2b(0x286)](_0x3f363f))_0x41db0a='armor-%1'[_0x68ce2b(0x288)](_0x3f363f['id']);else return;}}this['_newItemsList'][_0x68ce2b(0x204)](_0x41db0a)&&this[_0x68ce2b(0x183)][_0x68ce2b(0x130)](this[_0x68ce2b(0x183)][_0x68ce2b(0x431)](_0x41db0a),0x1);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x12f)]=Game_Party[_0x354d50(0x384)][_0x354d50(0x3c1)],Game_Party[_0x354d50(0x384)][_0x354d50(0x3c1)]=function(_0x25da42){const _0xbabec5=_0x354d50;if(DataManager[_0xbabec5(0x238)](_0x25da42))_0x25da42=DataManager['getProxyItem'](_0x25da42);return VisuMZ['ItemsEquipsCore'][_0xbabec5(0x12f)][_0xbabec5(0x46a)](this,_0x25da42);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x307)]=Game_Party[_0x354d50(0x384)]['gainItem'],Game_Party[_0x354d50(0x384)][_0x354d50(0x128)]=function(_0x1ef7ef,_0x6ef642,_0x47371d){const _0x4c3ba6=_0x354d50;if(DataManager[_0x4c3ba6(0x238)](_0x1ef7ef))_0x1ef7ef=null;const _0x482444=this['numItems'](_0x1ef7ef);VisuMZ['ItemsEquipsCore'][_0x4c3ba6(0x307)][_0x4c3ba6(0x46a)](this,_0x1ef7ef,_0x6ef642,_0x47371d);if(this['numItems'](_0x1ef7ef)>_0x482444)this['setNewItem'](_0x1ef7ef);},Game_Party[_0x354d50(0x384)]['maxItems']=function(_0x41cd02){const _0x1dcdd7=_0x354d50;if(DataManager['isProxyItem'](_0x41cd02))_0x41cd02=DataManager[_0x1dcdd7(0xd7)](_0x41cd02);return DataManager[_0x1dcdd7(0x1e0)](_0x41cd02);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x2fc)]=Game_Party['prototype']['consumeItem'],Game_Party[_0x354d50(0x384)][_0x354d50(0xe4)]=function(_0x254600){const _0x1773fa=_0x354d50;if(_0x254600){const _0x47bf94=_0x254600[_0x1773fa(0xd2)]||'';if(_0x47bf94[_0x1773fa(0x364)](/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)){const _0x54cda4=Number(RegExp['$1'])*0.01;if(Math[_0x1773fa(0x144)]()<_0x54cda4)return;}}VisuMZ[_0x1773fa(0x122)][_0x1773fa(0x2fc)]['call'](this,_0x254600);},Game_Party[_0x354d50(0x384)]['initShopTrackingData']=function(){const _0x3a8526=_0x354d50;this[_0x3a8526(0x260)]={'buy':{'gold':0x0,'items':{}},'sell':{'gold':0x0,'items':{}}};},Game_Party[_0x354d50(0x384)][_0x354d50(0x1ae)]=function(){const _0x3dd912=_0x354d50;return this[_0x3dd912(0x260)]===undefined&&this[_0x3dd912(0x166)](),this[_0x3dd912(0x260)];},Game_Party['prototype'][_0x354d50(0x456)]=function(_0x391529,_0x34eaf2){const _0x3aeab4=_0x354d50;if(!_0x34eaf2)return 0x0;this[_0x3aeab4(0x260)]===undefined&&this['initShopTrackingData']();const _0x616e49=this[_0x3aeab4(0x1ae)]();if(!_0x616e49[_0x391529])return 0x0;if(_0x34eaf2==='gold')return _0x616e49[_0x391529][_0x3aeab4(0x486)]=_0x616e49[_0x391529][_0x3aeab4(0x486)]||0x0,_0x616e49[_0x391529]['gold'];else{if(DataManager[_0x3aeab4(0x448)](_0x34eaf2))key=_0x3aeab4(0x367)[_0x3aeab4(0x288)](_0x34eaf2['id']);else{if(DataManager[_0x3aeab4(0x249)](_0x34eaf2))key=_0x3aeab4(0x11b)[_0x3aeab4(0x288)](_0x34eaf2['id']);else{if(DataManager[_0x3aeab4(0x286)](_0x34eaf2))key=_0x3aeab4(0x2fd)[_0x3aeab4(0x288)](_0x34eaf2['id']);else return 0x0;}}}return _0x616e49[_0x391529][_0x3aeab4(0x451)][key]=_0x616e49[_0x391529][_0x3aeab4(0x451)][key]||0x0,_0x616e49[_0x391529]['items'][key];},Game_Party[_0x354d50(0x384)][_0x354d50(0x149)]=function(_0x194b94){const _0x43ded5=_0x354d50;return this[_0x43ded5(0x456)](_0x43ded5(0x483),_0x194b94);},Game_Party[_0x354d50(0x384)][_0x354d50(0x3ba)]=function(_0x5c3998){const _0x4d0e17=_0x354d50;return this[_0x4d0e17(0x456)]('sell',_0x5c3998);},Game_Party[_0x354d50(0x384)]['getShopTrackingGoldBuy']=function(){const _0x55af53=_0x354d50;return this[_0x55af53(0x456)](_0x55af53(0x483),_0x55af53(0x486));},Game_Party[_0x354d50(0x384)]['getShopTrackingGoldSell']=function(){const _0x1e104a=_0x354d50;return this[_0x1e104a(0x456)](_0x1e104a(0x487),_0x1e104a(0x486));},Game_Party[_0x354d50(0x384)][_0x354d50(0x383)]=function(_0xff9880,_0x3f4c94,_0x5814eb){const _0x4277f2=_0x354d50;if(!_0x3f4c94)return;if(_0x5814eb<=0x0)return;this['_shopTrackingData']===undefined&&this[_0x4277f2(0x166)]();const _0x7747bc=this['getShopTrackingData']();if(!_0x7747bc[_0xff9880])return;if(_0x3f4c94===_0x4277f2(0x486)){_0x7747bc[_0xff9880][_0x4277f2(0x486)]=_0x7747bc[_0xff9880][_0x4277f2(0x486)]||0x0,_0x7747bc[_0xff9880][_0x4277f2(0x486)]+=_0x5814eb;return;}else{if(DataManager[_0x4277f2(0x448)](_0x3f4c94))key='item-%1'[_0x4277f2(0x288)](_0x3f4c94['id']);else{if(DataManager[_0x4277f2(0x249)](_0x3f4c94))key='weapon-%1'[_0x4277f2(0x288)](_0x3f4c94['id']);else{if(DataManager[_0x4277f2(0x286)](_0x3f4c94))key=_0x4277f2(0x2fd)[_0x4277f2(0x288)](_0x3f4c94['id']);else return;}}}_0x7747bc[_0xff9880][_0x4277f2(0x451)][key]=_0x7747bc[_0xff9880][_0x4277f2(0x451)][key]||0x0,_0x7747bc[_0xff9880]['items'][key]+=_0x5814eb;},Game_Party['prototype'][_0x354d50(0x102)]=function(_0x443ced,_0x1d6507){const _0x3e8f3b=_0x354d50;this[_0x3e8f3b(0x383)](_0x3e8f3b(0x483),_0x443ced,_0x1d6507);},Game_Party[_0x354d50(0x384)][_0x354d50(0x1c7)]=function(_0x59a950,_0x4a22fa){const _0x5d24e2=_0x354d50;this[_0x5d24e2(0x383)]('sell',_0x59a950,_0x4a22fa);},Game_Party[_0x354d50(0x384)]['addShopTrackingGoldBuy']=function(_0x44c406){const _0x312d2d=_0x354d50;this[_0x312d2d(0x383)](_0x312d2d(0x483),_0x312d2d(0x486),_0x44c406);},Game_Party[_0x354d50(0x384)][_0x354d50(0x443)]=function(_0x321c62){const _0x580de9=_0x354d50;this[_0x580de9(0x383)]('sell','gold',_0x321c62);},VisuMZ[_0x354d50(0x122)]['Scene_ItemBase_activateItemWindow']=Scene_ItemBase[_0x354d50(0x384)][_0x354d50(0x468)],Scene_ItemBase[_0x354d50(0x384)][_0x354d50(0x468)]=function(){const _0x555571=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x555571(0x11c)][_0x555571(0x46a)](this),this['_itemWindow'][_0x555571(0x476)]();},Scene_Item['prototype'][_0x354d50(0x377)]=function(){const _0x1bda2c=_0x354d50;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x1bda2c(0x480)]!==undefined)return ConfigManager['uiHelpPosition'];else return this[_0x1bda2c(0x481)]()?this[_0x1bda2c(0x2ed)]()[_0x1bda2c(0x364)](/LOWER/i):Scene_ItemBase[_0x1bda2c(0x384)]['isBottomHelpMode'][_0x1bda2c(0x46a)](this);},Scene_Item[_0x354d50(0x384)][_0x354d50(0xcc)]=function(){const _0x8d160=_0x354d50;if(ConfigManager[_0x8d160(0x244)]&&ConfigManager[_0x8d160(0x1c8)]!==undefined)return ConfigManager[_0x8d160(0x1c8)];else return this[_0x8d160(0x481)]()?this['updatedLayoutStyle']()[_0x8d160(0x364)](/RIGHT/i):Scene_ItemBase['prototype'][_0x8d160(0xcc)][_0x8d160(0x46a)](this);},Scene_Item['prototype'][_0x354d50(0x2ed)]=function(){const _0x17b929=_0x354d50;return VisuMZ[_0x17b929(0x122)][_0x17b929(0x1c3)][_0x17b929(0x17d)][_0x17b929(0x208)];},Scene_Item[_0x354d50(0x384)][_0x354d50(0x3b7)]=function(){const _0x19908b=_0x354d50;return this[_0x19908b(0x391)]&&this[_0x19908b(0x391)][_0x19908b(0x3b7)]();},Scene_Item[_0x354d50(0x384)][_0x354d50(0x481)]=function(){const _0x456eb8=_0x354d50;return VisuMZ[_0x456eb8(0x122)][_0x456eb8(0x1c3)][_0x456eb8(0x17d)][_0x456eb8(0x318)];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x1f3)]=Scene_Item[_0x354d50(0x384)][_0x354d50(0x274)],Scene_Item[_0x354d50(0x384)][_0x354d50(0x274)]=function(){const _0x217416=_0x354d50;VisuMZ[_0x217416(0x122)][_0x217416(0x1f3)][_0x217416(0x46a)](this),this[_0x217416(0x3b7)]()&&this[_0x217416(0x36a)]();},VisuMZ[_0x354d50(0x122)]['Scene_Item_helpWindowRect']=Scene_Item[_0x354d50(0x384)][_0x354d50(0x4c9)],Scene_Item[_0x354d50(0x384)][_0x354d50(0x4c9)]=function(){const _0x305ad0=_0x354d50;return this[_0x305ad0(0x481)]()?this[_0x305ad0(0x2e7)]():VisuMZ['ItemsEquipsCore']['Scene_Item_helpWindowRect'][_0x305ad0(0x46a)](this);},Scene_Item['prototype'][_0x354d50(0x2e7)]=function(){const _0x4a375c=_0x354d50,_0x1134e6=0x0,_0x3fece0=this[_0x4a375c(0x186)](),_0x11221d=Graphics[_0x4a375c(0x115)],_0x5518a2=this['helpAreaHeight']();return new Rectangle(_0x1134e6,_0x3fece0,_0x11221d,_0x5518a2);},VisuMZ[_0x354d50(0x122)]['Scene_Item_createCategoryWindow']=Scene_Item[_0x354d50(0x384)][_0x354d50(0x402)],Scene_Item[_0x354d50(0x384)][_0x354d50(0x402)]=function(){const _0x1095ea=_0x354d50;VisuMZ[_0x1095ea(0x122)][_0x1095ea(0x4c2)][_0x1095ea(0x46a)](this),this[_0x1095ea(0x3b7)]()&&this[_0x1095ea(0x33b)]();},Scene_Item[_0x354d50(0x384)][_0x354d50(0x33b)]=function(){const _0x12a6cd=_0x354d50;delete this[_0x12a6cd(0x391)]['_handlers']['ok'],delete this['_categoryWindow']['_handlers'][_0x12a6cd(0x210)];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x119)]=Scene_Item[_0x354d50(0x384)][_0x354d50(0x106)],Scene_Item['prototype'][_0x354d50(0x106)]=function(){const _0x249087=_0x354d50;return this[_0x249087(0x481)]()?this['categoryWindowRectItemsEquipsCore']():VisuMZ[_0x249087(0x122)][_0x249087(0x119)][_0x249087(0x46a)](this);},Scene_Item['prototype'][_0x354d50(0x1db)]=function(){const _0x292934=_0x354d50,_0x1845c2=0x0,_0x523f44=this[_0x292934(0x4b6)](),_0x2b6013=Graphics[_0x292934(0x115)],_0x52fe84=this[_0x292934(0x3b8)](0x1,!![]);return new Rectangle(_0x1845c2,_0x523f44,_0x2b6013,_0x52fe84);},VisuMZ[_0x354d50(0x122)][_0x354d50(0xc3)]=Scene_Item[_0x354d50(0x384)][_0x354d50(0x32a)],Scene_Item[_0x354d50(0x384)][_0x354d50(0x32a)]=function(){const _0x199f06=_0x354d50;VisuMZ[_0x199f06(0x122)][_0x199f06(0xc3)]['call'](this),this[_0x199f06(0x3b7)]()&&this[_0x199f06(0x39e)](),this[_0x199f06(0x1a6)]()&&this[_0x199f06(0x2fe)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x1de)]=Scene_Item[_0x354d50(0x384)][_0x354d50(0x348)],Scene_Item['prototype'][_0x354d50(0x348)]=function(){const _0x2da864=_0x354d50;if(this[_0x2da864(0x481)]())return this['itemWindowRectItemsEquipsCore']();else{const _0x495012=VisuMZ[_0x2da864(0x122)][_0x2da864(0x1de)]['call'](this);return this['allowCreateStatusWindow']()&&this[_0x2da864(0x36f)]()&&(_0x495012[_0x2da864(0x138)]-=this[_0x2da864(0xfa)]()),_0x495012;}},Scene_Item[_0x354d50(0x384)][_0x354d50(0x2e9)]=function(){const _0x19fdc6=_0x354d50,_0x3347af=this[_0x19fdc6(0xcc)]()?this[_0x19fdc6(0xfa)]():0x0,_0x2ed7a4=this['_categoryWindow']['y']+this[_0x19fdc6(0x391)][_0x19fdc6(0x1c6)],_0x2e7fde=Graphics['boxWidth']-this[_0x19fdc6(0xfa)](),_0x1ceece=this[_0x19fdc6(0x4a1)]()-_0x2ed7a4;return new Rectangle(_0x3347af,_0x2ed7a4,_0x2e7fde,_0x1ceece);},Scene_Item[_0x354d50(0x384)]['postCreateItemWindowModernControls']=function(){const _0x853f51=_0x354d50;this[_0x853f51(0x4a4)][_0x853f51(0x334)](_0x853f51(0x210),this[_0x853f51(0x1ec)]['bind'](this));},Scene_Item[_0x354d50(0x384)][_0x354d50(0x1a6)]=function(){const _0x1f3444=_0x354d50;return this[_0x1f3444(0x481)]()?!![]:VisuMZ[_0x1f3444(0x122)][_0x1f3444(0x1c3)][_0x1f3444(0x17d)][_0x1f3444(0x3f4)];},Scene_Item[_0x354d50(0x384)][_0x354d50(0x36f)]=function(){const _0x4536e6=_0x354d50;return VisuMZ[_0x4536e6(0x122)][_0x4536e6(0x1c3)][_0x4536e6(0x17d)][_0x4536e6(0x2c2)];},Scene_Item['prototype'][_0x354d50(0x2fe)]=function(){const _0x4c7b9e=_0x354d50,_0x4cc6f9=this[_0x4c7b9e(0x47d)]();this[_0x4c7b9e(0x326)]=new Window_ShopStatus(_0x4cc6f9),this[_0x4c7b9e(0xf8)](this[_0x4c7b9e(0x326)]),this['_itemWindow'][_0x4c7b9e(0x382)](this[_0x4c7b9e(0x326)]);const _0x4054b8=VisuMZ[_0x4c7b9e(0x122)][_0x4c7b9e(0x1c3)][_0x4c7b9e(0x17d)][_0x4c7b9e(0x112)];this[_0x4c7b9e(0x326)][_0x4c7b9e(0x2b5)](_0x4054b8||0x0);},Scene_Item[_0x354d50(0x384)]['statusWindowRect']=function(){const _0x4795d6=_0x354d50;return this[_0x4795d6(0x481)]()?this[_0x4795d6(0x18b)]():VisuMZ[_0x4795d6(0x122)][_0x4795d6(0x1c3)][_0x4795d6(0x17d)]['ItemMenuStatusRect'][_0x4795d6(0x46a)](this);},Scene_Item[_0x354d50(0x384)][_0x354d50(0x18b)]=function(){const _0x5751f6=_0x354d50,_0x2fc163=this[_0x5751f6(0xfa)](),_0x2dcb9e=this[_0x5751f6(0x4a4)][_0x5751f6(0x1c6)],_0x5959d8=this[_0x5751f6(0xcc)]()?0x0:Graphics[_0x5751f6(0x115)]-this['statusWidth'](),_0x23ccbc=this[_0x5751f6(0x4a4)]['y'];return new Rectangle(_0x5959d8,_0x23ccbc,_0x2fc163,_0x2dcb9e);},Scene_Item[_0x354d50(0x384)]['statusWidth']=function(){const _0x1a5040=_0x354d50;return Scene_Shop[_0x1a5040(0x384)][_0x1a5040(0xfa)]();},Scene_Item[_0x354d50(0x384)][_0x354d50(0x351)]=function(){const _0x590a15=_0x354d50;if(!this[_0x590a15(0x2ed)]())return![];if(!this['isUseModernControls']())return![];if(!this['_itemWindow'])return![];if(!this[_0x590a15(0x4a4)][_0x590a15(0xc8)])return![];return this[_0x590a15(0x2ed)]()&&this[_0x590a15(0x3b7)]();},Scene_Item[_0x354d50(0x384)][_0x354d50(0x442)]=function(){const _0xa89b9f=_0x354d50;if(this['buttonAssistItemListRequirement']())return this[_0xa89b9f(0x4a4)]['maxCols']()===0x1?TextManager[_0xa89b9f(0xd5)](_0xa89b9f(0x464),'right'):TextManager[_0xa89b9f(0xd5)](_0xa89b9f(0x13f),_0xa89b9f(0xae));return Scene_ItemBase[_0xa89b9f(0x384)]['buttonAssistKey1'][_0xa89b9f(0x46a)](this);},Scene_Item['prototype'][_0x354d50(0x4e8)]=function(){const _0x4a3519=_0x354d50;if(this[_0x4a3519(0x351)]())return VisuMZ[_0x4a3519(0x122)][_0x4a3519(0x1c3)][_0x4a3519(0x17d)]['buttonAssistCategory'];return Scene_ItemBase['prototype'][_0x4a3519(0x4e8)][_0x4a3519(0x46a)](this);},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x207)]=function(){const _0x437cce=_0x354d50;Scene_ItemBase[_0x437cce(0x384)]['start']['call'](this),this[_0x437cce(0x45e)]();},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x377)]=function(){const _0x59aeb3=_0x354d50;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x59aeb3(0x480)]!==undefined)return ConfigManager[_0x59aeb3(0x480)];else{if(this[_0x59aeb3(0x481)]())return this['updatedLayoutStyle']()[_0x59aeb3(0x364)](/LOWER/i);else Scene_MenuBase[_0x59aeb3(0x384)][_0x59aeb3(0xcc)][_0x59aeb3(0x46a)](this);}},Scene_Equip[_0x354d50(0x384)][_0x354d50(0xcc)]=function(){const _0x457bff=_0x354d50;if(ConfigManager[_0x457bff(0x244)]&&ConfigManager[_0x457bff(0x1c8)]!==undefined)return ConfigManager[_0x457bff(0x1c8)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this['updatedLayoutStyle']()[_0x457bff(0x364)](/RIGHT/i);else Scene_MenuBase['prototype']['isRightInputMode'][_0x457bff(0x46a)](this);}},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x2ed)]=function(){const _0x199380=_0x354d50;return VisuMZ[_0x199380(0x122)][_0x199380(0x1c3)][_0x199380(0x217)][_0x199380(0x208)];},Scene_Equip[_0x354d50(0x384)]['isUseModernControls']=function(){const _0x2317df=_0x354d50;return this['_commandWindow']&&this[_0x2317df(0x1af)][_0x2317df(0x3b7)]();},Scene_Equip[_0x354d50(0x384)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x57e703=_0x354d50;return VisuMZ[_0x57e703(0x122)][_0x57e703(0x1c3)][_0x57e703(0x217)][_0x57e703(0x318)];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x19e)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x274)],Scene_Equip['prototype'][_0x354d50(0x274)]=function(){const _0x1db17e=_0x354d50;VisuMZ[_0x1db17e(0x122)]['Scene_Equip_create'][_0x1db17e(0x46a)](this),this[_0x1db17e(0x3b7)]()&&this['commandEquip']();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x2be)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x4c9)],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x4c9)]=function(){const _0x419354=_0x354d50;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x419354(0x2e7)]():VisuMZ[_0x419354(0x122)][_0x419354(0x2be)][_0x419354(0x46a)](this);},Scene_Equip['prototype'][_0x354d50(0x2e7)]=function(){const _0x106aca=_0x354d50,_0x5a719a=0x0,_0x523105=this[_0x106aca(0x186)](),_0x4dcbd6=Graphics['boxWidth'],_0x105c89=this[_0x106aca(0x258)]();return new Rectangle(_0x5a719a,_0x523105,_0x4dcbd6,_0x105c89);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x46f)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x47d)],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x47d)]=function(){const _0x3af7d4=_0x354d50;return this[_0x3af7d4(0x481)]()?this[_0x3af7d4(0x18b)]():VisuMZ[_0x3af7d4(0x122)][_0x3af7d4(0x46f)][_0x3af7d4(0x46a)](this);},Scene_Equip['prototype'][_0x354d50(0x18b)]=function(){const _0x5b9f04=_0x354d50,_0x3e8ab4=this[_0x5b9f04(0xcc)]()?0x0:Graphics[_0x5b9f04(0x115)]-this[_0x5b9f04(0xfa)](),_0x1e55e1=this[_0x5b9f04(0x4b6)](),_0x49085b=this[_0x5b9f04(0xfa)](),_0x58938a=this['mainAreaHeight']();return new Rectangle(_0x3e8ab4,_0x1e55e1,_0x49085b,_0x58938a);},VisuMZ['ItemsEquipsCore'][_0x354d50(0xad)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x38f)],Scene_Equip[_0x354d50(0x384)]['createCommandWindow']=function(){const _0x5532b1=_0x354d50;VisuMZ[_0x5532b1(0x122)][_0x5532b1(0xad)][_0x5532b1(0x46a)](this);if(this[_0x5532b1(0x277)])this[_0x5532b1(0x1af)][_0x5532b1(0x328)](this[_0x5532b1(0x277)]);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x26c)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x31c)],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x31c)]=function(){const _0x8d1a1c=_0x354d50;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x8d1a1c(0x1d8)]():VisuMZ['ItemsEquipsCore']['Scene_Equip_commandWindowRect'][_0x8d1a1c(0x46a)](this);},Scene_Equip['prototype'][_0x354d50(0x27e)]=function(){const _0x5665de=_0x354d50,_0x42cae3=VisuMZ[_0x5665de(0x122)][_0x5665de(0x1c3)]['EquipScene'];return _0x42cae3[_0x5665de(0xc6)]||_0x42cae3['CommandAddClear'];},Scene_Equip[_0x354d50(0x384)]['commandWindowRectItemsEquipsCore']=function(){const _0x4076cc=_0x354d50,_0x5ca042=this[_0x4076cc(0x27e)](),_0x419f75=this[_0x4076cc(0xcc)]()?this[_0x4076cc(0xfa)]():0x0,_0x283a93=this[_0x4076cc(0x4b6)](),_0x3aff09=Graphics[_0x4076cc(0x115)]-this[_0x4076cc(0xfa)](),_0x13c0eb=_0x5ca042?this['calcWindowHeight'](0x1,!![]):0x0;return new Rectangle(_0x419f75,_0x283a93,_0x3aff09,_0x13c0eb);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x45d)]=Scene_Equip[_0x354d50(0x384)]['createSlotWindow'],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x401)]=function(){const _0x1fb630=_0x354d50;VisuMZ[_0x1fb630(0x122)][_0x1fb630(0x45d)]['call'](this),this['isUseModernControls']()&&this[_0x1fb630(0x2b6)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x294)]=Scene_Equip['prototype'][_0x354d50(0x2b8)],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x2b8)]=function(){const _0xe924f6=_0x354d50;return this[_0xe924f6(0x481)]()?this[_0xe924f6(0x2dc)]():VisuMZ[_0xe924f6(0x122)]['Scene_Equip_slotWindowRect'][_0xe924f6(0x46a)](this);},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x2dc)]=function(){const _0x32c5f7=_0x354d50,_0x50369a=this['commandWindowRect'](),_0x739d46=this[_0x32c5f7(0xcc)]()?this[_0x32c5f7(0xfa)]():0x0,_0x1c7d7d=_0x50369a['y']+_0x50369a['height'],_0x523281=Graphics[_0x32c5f7(0x115)]-this['statusWidth'](),_0xd39763=this[_0x32c5f7(0x373)]()-_0x50369a[_0x32c5f7(0x1c6)];return new Rectangle(_0x739d46,_0x1c7d7d,_0x523281,_0xd39763);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x17a)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x348)],Scene_Equip[_0x354d50(0x384)]['itemWindowRect']=function(){const _0x1957f6=_0x354d50;return this[_0x1957f6(0x481)]()?this[_0x1957f6(0x2b8)]():VisuMZ['ItemsEquipsCore']['Scene_Equip_itemWindowRect'][_0x1957f6(0x46a)](this);},Scene_Equip[_0x354d50(0x384)]['statusWidth']=function(){const _0x25e7f6=_0x354d50;return this[_0x25e7f6(0x481)]()?this['geUpdatedLayoutStatusWidth']():VisuMZ[_0x25e7f6(0x122)][_0x25e7f6(0x1c3)][_0x25e7f6(0x217)][_0x25e7f6(0xfc)];},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x32f)]=function(){const _0x53047a=_0x354d50;return Math[_0x53047a(0x4c1)](Graphics['boxWidth']/0x2);},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x2b6)]=function(){const _0x29e50a=_0x354d50;this[_0x29e50a(0x280)][_0x29e50a(0x334)](_0x29e50a(0x210),this[_0x29e50a(0x1ec)][_0x29e50a(0x3f0)](this)),this[_0x29e50a(0x280)][_0x29e50a(0x334)](_0x29e50a(0xae),this[_0x29e50a(0x2d9)][_0x29e50a(0x3f0)](this)),this[_0x29e50a(0x280)]['setHandler'](_0x29e50a(0x13f),this['previousActor'][_0x29e50a(0x3f0)](this));},VisuMZ[_0x354d50(0x122)][_0x354d50(0x26b)]=Scene_Equip[_0x354d50(0x384)][_0x354d50(0x338)],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x338)]=function(){const _0x4ede5d=_0x354d50;this['isUseModernControls']()&&(this[_0x4ede5d(0x1af)]['deselect'](),this['_commandWindow'][_0x4ede5d(0x422)]()),VisuMZ[_0x4ede5d(0x122)][_0x4ede5d(0x26b)][_0x4ede5d(0x46a)](this);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x32d)]=Scene_Equip['prototype']['onSlotOk'],Scene_Equip[_0x354d50(0x384)][_0x354d50(0x1ba)]=function(){const _0x51bc1f=_0x354d50;this['_slotWindow'][_0x51bc1f(0x1fb)]()>=0x0?(VisuMZ[_0x51bc1f(0x122)][_0x51bc1f(0x32d)][_0x51bc1f(0x46a)](this),this[_0x51bc1f(0x1a5)]()):(this[_0x51bc1f(0x280)][_0x51bc1f(0x1f4)](0x0),this[_0x51bc1f(0x280)]['activate']());},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x1a5)]=function(){const _0x4d4d93=_0x354d50;this[_0x4d4d93(0x4a4)]['refresh']();const _0x1e9378=this[_0x4d4d93(0x280)][_0x4d4d93(0x3fa)](),_0x3da9ce=this['_itemWindow'][_0x4d4d93(0x253)][_0x4d4d93(0x431)](_0x1e9378),_0x261ac7=Math['floor'](this[_0x4d4d93(0x4a4)][_0x4d4d93(0x3ff)]()/0x2)-0x1;this[_0x4d4d93(0x4a4)][_0x4d4d93(0x1f4)](_0x3da9ce>=0x0?_0x3da9ce:0x0),this['_itemWindow']['_scrollDuration']>0x1&&(this[_0x4d4d93(0x4a4)][_0x4d4d93(0x2a0)]=0x1,this[_0x4d4d93(0x4a4)][_0x4d4d93(0x42c)]()),this[_0x4d4d93(0x4a4)]['setTopRow'](this['_itemWindow'][_0x4d4d93(0x1fb)]()-_0x261ac7);},VisuMZ[_0x354d50(0x122)]['Scene_Equip_onSlotCancel']=Scene_Equip['prototype'][_0x354d50(0x29f)],Scene_Equip['prototype']['onSlotCancel']=function(){const _0x43b431=_0x354d50;VisuMZ[_0x43b431(0x122)]['Scene_Equip_onSlotCancel']['call'](this),this['isUseModernControls']()&&(this[_0x43b431(0x1af)][_0x43b431(0x1f4)](0x0),this[_0x43b431(0x280)][_0x43b431(0x422)]());},VisuMZ[_0x354d50(0x122)]['Scene_Equip_onActorChange']=Scene_Equip['prototype'][_0x354d50(0x352)],Scene_Equip['prototype'][_0x354d50(0x352)]=function(){const _0x2bf0a1=_0x354d50;VisuMZ[_0x2bf0a1(0x122)][_0x2bf0a1(0x455)]['call'](this),this['isUseModernControls']()&&(this[_0x2bf0a1(0x1af)]['deactivate'](),this[_0x2bf0a1(0x1af)][_0x2bf0a1(0xb7)](),this[_0x2bf0a1(0x280)][_0x2bf0a1(0x1f4)](0x0),this[_0x2bf0a1(0x280)][_0x2bf0a1(0x4b4)]());},Scene_Equip[_0x354d50(0x384)]['buttonAssistSlotWindowShift']=function(){const _0x226d0a=_0x354d50;if(!this[_0x226d0a(0x280)])return![];if(!this[_0x226d0a(0x280)][_0x226d0a(0xc8)])return![];return this[_0x226d0a(0x280)][_0x226d0a(0x162)]();},Scene_Equip['prototype'][_0x354d50(0x3f9)]=function(){const _0x8ae8f=_0x354d50;if(this[_0x8ae8f(0x14c)]())return TextManager[_0x8ae8f(0x175)](_0x8ae8f(0x4d3));return Scene_MenuBase['prototype'][_0x8ae8f(0x3f9)][_0x8ae8f(0x46a)](this);},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x397)]=function(){const _0xb3088e=_0x354d50;if(this[_0xb3088e(0x14c)]())return VisuMZ[_0xb3088e(0x122)][_0xb3088e(0x1c3)]['EquipScene']['buttonAssistRemove'];return Scene_MenuBase[_0xb3088e(0x384)][_0xb3088e(0x397)][_0xb3088e(0x46a)](this);},Scene_Equip[_0x354d50(0x384)][_0x354d50(0x20d)]=function(){const _0x395492=_0x354d50;if(this[_0x395492(0x14c)]())return this['_buttonAssistWindow']['width']/0x5/-0x3;return Scene_MenuBase[_0x395492(0x384)]['buttonAssistOffset3'][_0x395492(0x46a)](this);},Scene_Equip[_0x354d50(0x384)]['popScene']=function(){const _0x3e3778=_0x354d50;SceneManager[_0x3e3778(0x3dd)]();},VisuMZ[_0x354d50(0x122)]['Scene_Load_reloadMapIfUpdated']=Scene_Load[_0x354d50(0x384)][_0x354d50(0x1c9)],Scene_Load[_0x354d50(0x384)][_0x354d50(0x1c9)]=function(){const _0x29e63a=_0x354d50;VisuMZ[_0x29e63a(0x122)][_0x29e63a(0x4e1)][_0x29e63a(0x46a)](this),this[_0x29e63a(0x135)]();},Scene_Load[_0x354d50(0x384)]['refreshActorEquipSlotsIfUpdated']=function(){const _0xf4345f=_0x354d50;if($gameSystem[_0xf4345f(0x404)]()!==$dataSystem['versionId'])for(const _0x3d063e of $gameActors['_data']){if(_0x3d063e)_0x3d063e[_0xf4345f(0x1bb)]();}},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x377)]=function(){const _0x497b77=_0x354d50;if(ConfigManager[_0x497b77(0x244)]&&ConfigManager[_0x497b77(0x480)]!==undefined)return ConfigManager['uiHelpPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x497b77(0x2ed)]()[_0x497b77(0x364)](/LOWER/i);else Scene_MenuBase[_0x497b77(0x384)]['isRightInputMode'][_0x497b77(0x46a)](this);}},Scene_Shop[_0x354d50(0x384)]['isRightInputMode']=function(){const _0x21ea05=_0x354d50;if(ConfigManager[_0x21ea05(0x244)]&&ConfigManager[_0x21ea05(0x1c8)]!==undefined)return ConfigManager[_0x21ea05(0x1c8)];else{if(this[_0x21ea05(0x481)]())return this['updatedLayoutStyle']()['match'](/RIGHT/i);else Scene_MenuBase['prototype'][_0x21ea05(0xcc)]['call'](this);}},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x2ed)]=function(){const _0x179f9f=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x179f9f(0x1c3)][_0x179f9f(0x1a7)][_0x179f9f(0x208)];},Scene_Shop[_0x354d50(0x384)]['isUseModernControls']=function(){const _0xb4cbe=_0x354d50;return this[_0xb4cbe(0x391)]&&this[_0xb4cbe(0x391)][_0xb4cbe(0x3b7)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x481)]=function(){const _0x288871=_0x354d50;return VisuMZ[_0x288871(0x122)][_0x288871(0x1c3)][_0x288871(0x1a7)][_0x288871(0x318)];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x49e)]=Scene_Shop['prototype'][_0x354d50(0x41c)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x41c)]=function(_0x50fc08,_0x1d98c9){const _0x1abe97=_0x354d50;_0x50fc08=VisuMZ['ItemsEquipsCore'][_0x1abe97(0xde)](_0x50fc08),VisuMZ[_0x1abe97(0x122)][_0x1abe97(0x49e)]['call'](this,_0x50fc08,_0x1d98c9),this[_0x1abe97(0x1d9)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x1d9)]=function(){const _0x12e3b9=_0x354d50;this[_0x12e3b9(0xbf)]=0x0;const _0xe7b4a9=[];for(const _0x3d1d1a of this[_0x12e3b9(0x104)]){this['isGoodShown'](_0x3d1d1a)?this['_goodsCount']++:_0xe7b4a9[_0x12e3b9(0x29b)](_0x3d1d1a);}for(const _0x31e296 of _0xe7b4a9){this[_0x12e3b9(0x104)][_0x12e3b9(0x31e)](_0x31e296);}},Scene_Shop[_0x354d50(0x384)]['isGoodShown']=function(_0x5d9d26){if(_0x5d9d26[0x0]>0x2||_0x5d9d26[0x0]<0x0)return![];const _0x418103=[$dataItems,$dataWeapons,$dataArmors][_0x5d9d26[0x0]][_0x5d9d26[0x1]];if(!_0x418103)return![];return!![];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x4e5)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x274)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x274)]=function(){const _0x4ec3a3=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x4ec3a3(0x4e5)]['call'](this),this[_0x4ec3a3(0x481)]()&&this[_0x4ec3a3(0x3e2)](),this[_0x4ec3a3(0x498)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x3e2)]=function(){const _0x47e656=_0x354d50;this['_dummyWindow'][_0x47e656(0x385)](),this[_0x47e656(0x2fb)][_0x47e656(0x289)](),this[_0x47e656(0x2fb)][_0x47e656(0xb7)](),this['_statusWindow']['show']();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x298)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x4c9)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x4c9)]=function(){const _0x1aa96b=_0x354d50;return this[_0x1aa96b(0x481)]()?this[_0x1aa96b(0x2e7)]():VisuMZ[_0x1aa96b(0x122)][_0x1aa96b(0x298)][_0x1aa96b(0x46a)](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x2e7)]=function(){const _0x2b875b=_0x354d50,_0x363f9d=0x0,_0x1fa1e6=this[_0x2b875b(0x186)](),_0x4788fb=Graphics['boxWidth'],_0x46c189=this[_0x2b875b(0x258)]();return new Rectangle(_0x363f9d,_0x1fa1e6,_0x4788fb,_0x46c189);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x416)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0xc1)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0xc1)]=function(){const _0x13bdcb=_0x354d50;return this[_0x13bdcb(0x481)]()?this['goldWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore'][_0x13bdcb(0x416)][_0x13bdcb(0x46a)](this);},Scene_Shop[_0x354d50(0x384)]['goldWindowRectItemsEquipsCore']=function(){const _0x28d9be=_0x354d50,_0x2572fc=this['mainCommandWidth'](),_0x4f589d=this[_0x28d9be(0x3b8)](0x1,!![]),_0x1895b2=this[_0x28d9be(0xcc)]()?0x0:Graphics[_0x28d9be(0x115)]-_0x2572fc,_0x1d697d=this[_0x28d9be(0x4b6)]();return new Rectangle(_0x1895b2,_0x1d697d,_0x2572fc,_0x4f589d);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x332)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x31c)],Scene_Shop[_0x354d50(0x384)]['commandWindowRect']=function(){const _0x23b38c=_0x354d50;return this[_0x23b38c(0x481)]()?this[_0x23b38c(0x1d8)]():VisuMZ['ItemsEquipsCore'][_0x23b38c(0x332)][_0x23b38c(0x46a)](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x1d8)]=function(){const _0x28d1d6=_0x354d50,_0x3f014f=this[_0x28d1d6(0xcc)]()?this[_0x28d1d6(0x15b)]():0x0,_0x5b2c16=this[_0x28d1d6(0x4b6)](),_0x4c041a=Graphics[_0x28d1d6(0x115)]-this[_0x28d1d6(0x15b)](),_0x435900=this[_0x28d1d6(0x3b8)](0x1,!![]);return new Rectangle(_0x3f014f,_0x5b2c16,_0x4c041a,_0x435900);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x460)]=Scene_Shop['prototype']['numberWindowRect'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x225)]=function(){const _0x4336a2=_0x354d50;return this[_0x4336a2(0x481)]()?this[_0x4336a2(0x198)]():VisuMZ['ItemsEquipsCore']['Scene_Shop_numberWindowRect'][_0x4336a2(0x46a)](this);},Scene_Shop['prototype'][_0x354d50(0x198)]=function(){const _0x594d6c=_0x354d50,_0xa104a2=this[_0x594d6c(0x1af)]['y']+this[_0x594d6c(0x1af)][_0x594d6c(0x1c6)],_0x274de5=Graphics[_0x594d6c(0x115)]-this[_0x594d6c(0xfa)](),_0x416160=this[_0x594d6c(0xcc)]()?Graphics['boxWidth']-_0x274de5:0x0,_0x38fb16=this['mainAreaHeight']()-this[_0x594d6c(0x1af)]['height'];return new Rectangle(_0x416160,_0xa104a2,_0x274de5,_0x38fb16);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x168)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x47d)],Scene_Shop[_0x354d50(0x384)]['statusWindowRect']=function(){const _0x5edd58=_0x354d50;return this[_0x5edd58(0x481)]()?this[_0x5edd58(0x18b)]():VisuMZ['ItemsEquipsCore'][_0x5edd58(0x168)]['call'](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x18b)]=function(){const _0x35f912=_0x354d50,_0x11f919=this[_0x35f912(0xfa)](),_0x22ef28=this[_0x35f912(0x373)]()-this[_0x35f912(0x1af)][_0x35f912(0x1c6)],_0x57e1fd=this['isRightInputMode']()?0x0:Graphics[_0x35f912(0x115)]-_0x11f919,_0x50a071=this[_0x35f912(0x1af)]['y']+this[_0x35f912(0x1af)][_0x35f912(0x1c6)];return new Rectangle(_0x57e1fd,_0x50a071,_0x11f919,_0x22ef28);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x196)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x365)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x365)]=function(){const _0x2b698f=_0x354d50;return this[_0x2b698f(0x481)]()?this[_0x2b698f(0x45b)]():VisuMZ[_0x2b698f(0x122)][_0x2b698f(0x196)][_0x2b698f(0x46a)](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x45b)]=function(){const _0x968573=_0x354d50,_0x54b488=this[_0x968573(0x1af)]['y']+this[_0x968573(0x1af)]['height'],_0x2aaec8=Graphics['boxWidth']-this[_0x968573(0xfa)](),_0x4090a6=this[_0x968573(0x373)]()-this[_0x968573(0x1af)]['height'],_0x54d53b=this[_0x968573(0xcc)]()?Graphics[_0x968573(0x115)]-_0x2aaec8:0x0;return new Rectangle(_0x54d53b,_0x54b488,_0x2aaec8,_0x4090a6);},VisuMZ[_0x354d50(0x122)][_0x354d50(0xff)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x402)],Scene_Shop['prototype'][_0x354d50(0x402)]=function(){const _0x59805d=_0x354d50;VisuMZ[_0x59805d(0x122)]['Scene_Shop_createCategoryWindow'][_0x59805d(0x46a)](this),this[_0x59805d(0x3b7)]()&&this[_0x59805d(0x33b)]();},VisuMZ['ItemsEquipsCore'][_0x354d50(0x4af)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x106)],Scene_Shop[_0x354d50(0x384)]['categoryWindowRect']=function(){const _0x1740e5=_0x354d50;return this[_0x1740e5(0x481)]()?this['categoryWindowRectItemsEquipsCore']():VisuMZ[_0x1740e5(0x122)][_0x1740e5(0x4af)]['call'](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x1db)]=function(){const _0x23a590=_0x354d50,_0x2e8dac=this['_commandWindow']['y'],_0x36411d=this[_0x23a590(0x1af)][_0x23a590(0x138)],_0x7d9a4c=this[_0x23a590(0x3b8)](0x1,!![]),_0x427bdc=this['isRightInputMode']()?Graphics['boxWidth']-_0x36411d:0x0;return new Rectangle(_0x427bdc,_0x2e8dac,_0x36411d,_0x7d9a4c);},Scene_Shop['prototype']['postCreateCategoryWindowItemsEquipsCore']=function(){const _0x4c6f5e=_0x354d50;delete this['_categoryWindow'][_0x4c6f5e(0x4d1)]['ok'],delete this[_0x4c6f5e(0x391)][_0x4c6f5e(0x4d1)]['cancel'];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x2bc)]=Scene_Shop['prototype']['createSellWindow'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x2d8)]=function(){const _0x48a685=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x48a685(0x2bc)]['call'](this),this[_0x48a685(0x481)]()&&this['postCreateSellWindowItemsEquipsCore']();},VisuMZ['ItemsEquipsCore'][_0x354d50(0x315)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x21e)],Scene_Shop['prototype'][_0x354d50(0x21e)]=function(){const _0x1d6da8=_0x354d50;return this[_0x1d6da8(0x481)]()?this[_0x1d6da8(0x4d7)]():VisuMZ[_0x1d6da8(0x122)][_0x1d6da8(0x315)][_0x1d6da8(0x46a)](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x4d7)]=function(){const _0x940d68=_0x354d50,_0x2511d0=this[_0x940d68(0x391)]['y']+this[_0x940d68(0x391)]['height'],_0xde7a4b=Graphics[_0x940d68(0x115)]-this[_0x940d68(0xfa)](),_0x578388=this[_0x940d68(0x373)]()-this[_0x940d68(0x391)][_0x940d68(0x1c6)],_0x3e5110=this[_0x940d68(0xcc)]()?Graphics[_0x940d68(0x115)]-_0xde7a4b:0x0;return new Rectangle(_0x3e5110,_0x2511d0,_0xde7a4b,_0x578388);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x1eb)]=function(){const _0x3c6d63=_0x354d50;this[_0x3c6d63(0x48b)]['setStatusWindow'](this['_statusWindow']);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0xfa)]=function(){const _0xa6eb51=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0xa6eb51(0x1c3)][_0xa6eb51(0x3ae)]['Width'];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x4c3)]=Scene_Shop[_0x354d50(0x384)]['activateSellWindow'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x366)]=function(){const _0x30343e=_0x354d50;VisuMZ[_0x30343e(0x122)][_0x30343e(0x4c3)][_0x30343e(0x46a)](this),this[_0x30343e(0x481)]()&&this['_statusWindow'][_0x30343e(0x289)](),this[_0x30343e(0x48b)][_0x30343e(0x3f7)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x4e2)]=Scene_Shop[_0x354d50(0x384)]['commandBuy'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x24e)]=function(){const _0x24c1c8=_0x354d50;VisuMZ['ItemsEquipsCore']['Scene_Shop_commandBuy'][_0x24c1c8(0x46a)](this),this[_0x24c1c8(0x481)]()&&this[_0x24c1c8(0x3ce)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x3ce)]=function(){const _0x367641=_0x354d50;this[_0x367641(0x447)]=this[_0x367641(0x447)]||0x0,this[_0x367641(0x2fb)][_0x367641(0x1f4)](this[_0x367641(0x447)]);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x29e)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x251)],Scene_Shop[_0x354d50(0x384)]['commandSell']=function(){const _0x996f92=_0x354d50;VisuMZ[_0x996f92(0x122)][_0x996f92(0x29e)]['call'](this),this[_0x996f92(0x481)]()&&this['commandSellItemsEquipsCore'](),this[_0x996f92(0x3b7)]()&&(this['_categoryWindow'][_0x996f92(0x1f4)](0x0),this[_0x996f92(0x36a)]());},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x3cc)]=function(){const _0x578069=_0x354d50;this[_0x578069(0x2fb)]['hide'](),this[_0x578069(0x1af)][_0x578069(0x385)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x370)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x270)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x270)]=function(){const _0x59049d=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x59049d(0x370)]['call'](this),this[_0x59049d(0x481)]()&&this[_0x59049d(0x40e)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x40e)]=function(){const _0x1f67d6=_0x354d50;this[_0x1f67d6(0x447)]=this[_0x1f67d6(0x2fb)]['index'](),this[_0x1f67d6(0x2fb)][_0x1f67d6(0x289)](),this[_0x1f67d6(0x2fb)]['deselect'](),this[_0x1f67d6(0x2fb)][_0x1f67d6(0x1c1)](0x0,0x0),this[_0x1f67d6(0x326)][_0x1f67d6(0x289)](),this['_dummyWindow'][_0x1f67d6(0x385)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x10a)]=Scene_Shop['prototype'][_0x354d50(0x393)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x393)]=function(){const _0x58f589=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x58f589(0x10a)][_0x58f589(0x46a)](this),this[_0x58f589(0x481)]()&&this[_0x58f589(0x105)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x105)]=function(){const _0x3cee92=_0x354d50;this[_0x3cee92(0x2fb)][_0x3cee92(0x289)](),this[_0x3cee92(0x1af)][_0x3cee92(0x289)]();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onBuyOk']=Scene_Shop['prototype']['onBuyOk'],Scene_Shop[_0x354d50(0x384)]['onBuyOk']=function(){const _0x59aa66=_0x354d50;$gameTemp[_0x59aa66(0x4cb)]=!![],VisuMZ[_0x59aa66(0x122)][_0x59aa66(0x472)]['call'](this),$gameTemp[_0x59aa66(0x4cb)]=![],this['_item']=this[_0x59aa66(0x2fb)][_0x59aa66(0x3fa)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x156)]=Scene_Shop['prototype'][_0x354d50(0x276)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x276)]=function(){const _0x28fc91=_0x354d50;$gameTemp[_0x28fc91(0x4cb)]=!![],this[_0x28fc91(0x16b)]=this[_0x28fc91(0x2fb)][_0x28fc91(0x3fa)]();const _0x38c531=VisuMZ[_0x28fc91(0x122)][_0x28fc91(0x156)][_0x28fc91(0x46a)](this);return $gameTemp['_bypassProxy']=![],this['_item']=this[_0x28fc91(0x2fb)]['item'](),_0x38c531;},VisuMZ[_0x354d50(0x122)]['Scene_Shop_onSellOk']=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x3e6)],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x3e6)]=function(){const _0x2a1515=_0x354d50;VisuMZ[_0x2a1515(0x122)][_0x2a1515(0x3d4)]['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x2a1515(0x331)]();},Scene_Shop[_0x354d50(0x384)]['onSellOkItemsEquipsCore']=function(){const _0x138c6c=_0x354d50;this['_categoryWindow'][_0x138c6c(0x289)]();},VisuMZ['ItemsEquipsCore'][_0x354d50(0xd6)]=Scene_Shop[_0x354d50(0x384)][_0x354d50(0x177)],Scene_Shop['prototype'][_0x354d50(0x177)]=function(){const _0x5621d1=_0x354d50;VisuMZ[_0x5621d1(0x122)]['Scene_Shop_onSellCancel']['call'](this),this[_0x5621d1(0x3b7)]()&&this['onCategoryCancel'](),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x5621d1(0x4a3)][_0x5621d1(0x385)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x2ab)]=function(_0x5c07ff){const _0x514283=_0x354d50,_0x522e35=this[_0x514283(0x16b)];this['_item']=_0x5c07ff;const _0x4a9f1a=this[_0x514283(0x4c6)]();return this[_0x514283(0x16b)]=_0x522e35,_0x4a9f1a;},VisuMZ[_0x354d50(0x122)][_0x354d50(0xf3)]=Scene_Shop[_0x354d50(0x384)]['sellingPrice'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x4c6)]=function(){const _0x33a39d=_0x354d50;let _0x2bd478=this['determineBaseSellingPrice']();const _0x607f22=this[_0x33a39d(0x16b)];return _0x2bd478=VisuMZ['ItemsEquipsCore'][_0x33a39d(0x1c3)]['ShopScene'][_0x33a39d(0xd3)][_0x33a39d(0x46a)](this,_0x607f22,_0x2bd478),_0x2bd478;},Scene_Shop[_0x354d50(0x384)]['determineBaseSellingPrice']=function(){const _0x10281d=_0x354d50;let _0x1b9e99=this[_0x10281d(0x16b)][_0x10281d(0x3a5)];if(!this['_item'])return 0x0;else{if(this['_item'][_0x10281d(0xd2)]['match'](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x1cebe2=String(RegExp['$1']);window[_0x10281d(0x3fa)]=this['_item'],window[_0x10281d(0x3a5)]=_0x1b9e99*this[_0x10281d(0x2e0)]();try{eval(_0x1cebe2);}catch(_0x5e1964){if($gameTemp['isPlaytest']())console['log'](_0x5e1964);}let _0x12a33f=window[_0x10281d(0x3a5)];window['item']=undefined,window[_0x10281d(0x3a5)]=undefined;if(isNaN(_0x12a33f))_0x12a33f=0x0;return Math[_0x10281d(0x4c1)](_0x12a33f);}else return this[_0x10281d(0x16b)][_0x10281d(0xd2)][_0x10281d(0x364)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x10281d(0x154)]());}},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x154)]=function(){const _0x395777=_0x354d50;return this[_0x395777(0x16b)][_0x395777(0x3a5)]*this[_0x395777(0x2e0)]();},Scene_Shop['prototype'][_0x354d50(0x2e0)]=function(){const _0x5f08cd=_0x354d50;return VisuMZ[_0x5f08cd(0x122)][_0x5f08cd(0x1c3)]['ShopScene'][_0x5f08cd(0x4ce)];},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x351)]=function(){const _0x1bfad3=_0x354d50;if(!this[_0x1bfad3(0x2ed)]())return![];if(!this[_0x1bfad3(0x3b7)]())return![];if(!this['_sellWindow'])return![];if(!this['_sellWindow'][_0x1bfad3(0xc8)])return![];return this['updatedLayoutStyle']()&&this['isUseModernControls']();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x442)]=function(){const _0x549146=_0x354d50;if(this[_0x549146(0x351)]())return this[_0x549146(0x48b)]['maxCols']()===0x1?TextManager[_0x549146(0xd5)]('left',_0x549146(0xbd)):TextManager[_0x549146(0xd5)](_0x549146(0x13f),_0x549146(0xae));else{if(this[_0x549146(0x469)]&&this[_0x549146(0x469)]['active'])return TextManager[_0x549146(0xd5)](_0x549146(0x464),_0x549146(0xbd));}return Scene_MenuBase[_0x549146(0x384)][_0x549146(0x442)]['call'](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x3d7)]=function(){const _0x3a8882=_0x354d50;if(this[_0x3a8882(0x469)]&&this['_numberWindow'][_0x3a8882(0xc8)])return TextManager[_0x3a8882(0xd5)]('up',_0x3a8882(0x1ff));return Scene_MenuBase[_0x3a8882(0x384)][_0x3a8882(0x3d7)][_0x3a8882(0x46a)](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x4e8)]=function(){const _0x18f9e9=_0x354d50;if(this['buttonAssistItemListRequirement']())return VisuMZ[_0x18f9e9(0x122)][_0x18f9e9(0x1c3)][_0x18f9e9(0x17d)][_0x18f9e9(0x1ce)];else{if(this[_0x18f9e9(0x469)]&&this['_numberWindow'][_0x18f9e9(0xc8)])return VisuMZ[_0x18f9e9(0x122)][_0x18f9e9(0x1c3)]['ShopScene'][_0x18f9e9(0x283)];}return Scene_MenuBase[_0x18f9e9(0x384)][_0x18f9e9(0x4e8)][_0x18f9e9(0x46a)](this);},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x12d)]=function(){const _0x3be029=_0x354d50;if(this[_0x3be029(0x469)]&&this['_numberWindow'][_0x3be029(0xc8)])return VisuMZ[_0x3be029(0x122)]['Settings'][_0x3be029(0x1a7)][_0x3be029(0x493)];return Scene_MenuBase[_0x3be029(0x384)][_0x3be029(0x12d)][_0x3be029(0x46a)](this);},Scene_Shop[_0x354d50(0x384)]['resetShopSwitches']=function(){const _0x526ac2=_0x354d50;if(!SceneManager[_0x526ac2(0x18a)]())return;const _0x386b74=VisuMZ[_0x526ac2(0x122)][_0x526ac2(0x1c3)][_0x526ac2(0x1a7)];_0x386b74[_0x526ac2(0x3cb)]&&$gameSwitches[_0x526ac2(0x10f)](_0x386b74[_0x526ac2(0x3cb)],![]),_0x386b74[_0x526ac2(0xab)]&&$gameSwitches['setValue'](_0x386b74[_0x526ac2(0xab)],![]);},VisuMZ['ItemsEquipsCore']['Scene_Shop_doBuy']=Scene_Shop[_0x354d50(0x384)]['doBuy'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0x4d4)]=function(_0x2e69cf){const _0x58e1fa=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x58e1fa(0x41a)][_0x58e1fa(0x46a)](this,_0x2e69cf),this[_0x58e1fa(0x1d2)](this[_0x58e1fa(0x16b)],_0x2e69cf);if(_0x2e69cf<=0x0)return;const _0x3ca7ac=VisuMZ[_0x58e1fa(0x122)]['Settings'][_0x58e1fa(0x1a7)];_0x3ca7ac[_0x58e1fa(0x3cb)]&&$gameSwitches[_0x58e1fa(0x10f)](_0x3ca7ac['SwitchBuy'],!![]),this[_0x58e1fa(0x2fb)][_0x58e1fa(0x2cd)](),this['_sellWindow'][_0x58e1fa(0x2cd)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x1d2)]=function(_0x3f3d98,_0x126d94){const _0x29651e=_0x354d50;this[_0x29651e(0x13c)](_0x3f3d98,_0x126d94),$gameParty[_0x29651e(0x102)](_0x3f3d98,_0x126d94),$gameParty[_0x29651e(0x3db)](_0x126d94*this['buyingPrice']());},Scene_Shop['prototype'][_0x354d50(0x13c)]=function(_0x283485,_0x5619e0){const _0x277a05=_0x354d50;if(!_0x283485)return;if(!_0x5619e0)return;const _0x4e489d=VisuMZ[_0x277a05(0x122)]['ShopListingRegExp'],_0xf36e66=_0x283485[_0x277a05(0xd2)]||'';if(_0xf36e66[_0x277a05(0x364)](_0x4e489d[_0x277a05(0x1b1)])){const _0x40875c=String(RegExp['$1'])[_0x277a05(0x4b2)](',')[_0x277a05(0x49b)](_0x44161f=>Number(_0x44161f));for(const _0x2a03cb of _0x40875c){$gameSwitches[_0x277a05(0x10f)](_0x2a03cb,!![]);}}if(_0xf36e66[_0x277a05(0x364)](_0x4e489d[_0x277a05(0x2c5)])){const _0x42a1c0=String(RegExp['$1'])[_0x277a05(0x4b2)](',')[_0x277a05(0x49b)](_0x11cd0e=>Number(_0x11cd0e));for(const _0x1778f7 of _0x42a1c0){$gameSwitches[_0x277a05(0x10f)](_0x1778f7,![]);}}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x3f8)]=Scene_Shop[_0x354d50(0x384)]['doSell'],Scene_Shop[_0x354d50(0x384)][_0x354d50(0xeb)]=function(_0x420c12){const _0x7a16b4=_0x354d50;VisuMZ[_0x7a16b4(0x122)][_0x7a16b4(0x3f8)][_0x7a16b4(0x46a)](this,_0x420c12),this[_0x7a16b4(0x22d)](this[_0x7a16b4(0x16b)],_0x420c12);if(_0x420c12<=0x0)return;const _0x57f48d=VisuMZ['ItemsEquipsCore'][_0x7a16b4(0x1c3)][_0x7a16b4(0x1a7)];_0x57f48d[_0x7a16b4(0x3cb)]&&$gameSwitches[_0x7a16b4(0x10f)](_0x57f48d[_0x7a16b4(0xab)],!![]),this[_0x7a16b4(0x2fb)]['refresh'](),this['_sellWindow'][_0x7a16b4(0x2cd)]();},Scene_Shop[_0x354d50(0x384)][_0x354d50(0x22d)]=function(_0x36a1b2,_0x281430){const _0x2a871=_0x354d50;this['processShopCondListingOnSellItem'](_0x36a1b2,_0x281430),$gameParty['addShopTrackingItemSell'](_0x36a1b2,_0x281430),$gameParty[_0x2a871(0x443)](_0x281430*this[_0x2a871(0x4c6)]());},Scene_Shop['prototype'][_0x354d50(0x25d)]=function(_0x4e2162,_0x3ed05d){const _0x5485c4=_0x354d50;if(!_0x4e2162)return;if(!_0x3ed05d)return;const _0x57fa82=VisuMZ[_0x5485c4(0x122)][_0x5485c4(0x2d3)],_0x1e15a7=_0x4e2162['note']||'';if(_0x1e15a7[_0x5485c4(0x364)](_0x57fa82[_0x5485c4(0x2f3)])){const _0x1ef486=String(RegExp['$1'])[_0x5485c4(0x4b2)](',')[_0x5485c4(0x49b)](_0x452943=>Number(_0x452943));for(const _0x1a6997 of _0x1ef486){$gameSwitches[_0x5485c4(0x10f)](_0x1a6997,!![]);}}if(_0x1e15a7[_0x5485c4(0x364)](_0x57fa82[_0x5485c4(0x1dc)])){const _0x53a6fd=String(RegExp['$1'])[_0x5485c4(0x4b2)](',')['map'](_0x81ce9=>Number(_0x81ce9));for(const _0x158fc4 of _0x53a6fd){$gameSwitches[_0x5485c4(0x10f)](_0x158fc4,![]);}}};function Sprite_NewLabel(){const _0x33f8a3=_0x354d50;this[_0x33f8a3(0x1b4)](...arguments);}function _0x22a4(){const _0x91303a=['activateSellWindow','item-%1','getItemConsumableText','removeStateBuffChanges','onCategoryOk','allowShiftScrolling','DrawIcons','setHp','systemColor','adjustItemWidthByStatus','Scene_Shop_onBuyCancel','itemDataFontSize','setHelpWindowItem','mainAreaHeight','windowPadding','partyArtifactIDs','LabelRecoverHP','isBottomHelpMode','isEquipCommandEnabled','STR','CommandAddClear','goodsToItem','getItemHitTypeText','FontColor','removeBuff','hitType','_list','isCancelled','setStatusWindow','addShopTrackingItem','prototype','hide','sort','Window_EquipSlot_isEnabled','Window_Selectable_refresh','getItemDamageElementText','battleMembers','HP\x20RECOVERY','traitObjects','isPlaytest','maxItems','createCommandWindow','_newLabelSprites','_categoryWindow','CmdIconOptimize','onCategoryCancel','Window_EquipCommand_initialize','clear','getItemScopeText','buttonAssistText3','powerDownColor','%1-%2','Game_Actor_changeEquip','getItemDamageAmountLabelOriginal','getItemEffectsMpDamageLabel','_equips','postCreateItemWindowModernControls','Text','text','categoryStyle','changeEquipBase','addSellCommand','object','price','addBuyCommand','cursorDown','_newLabelOpacityUpperLimit','drawItemEquipType','textLocale','addCancelCommand','value1','ShowAnySwitches','StatusWindow','getNextAvailableEtypeId','Game_Actor_equips_artifacts','process_VisuMZ_ItemsEquipsCore_RegExp','tpGain','nonRemovableEtypes','equipSlots','getColor','createCategoryNameWindow','isUseModernControls','calcWindowHeight','categories','getShopTrackingItemSell','drawTextEx','colSpacing','meetsShopListingConditions','Parse_Notetags_EnableJS','0000','drawItemDamageElement','numItems','paramId','ParseItemNotetags','CmdIconSell','parseLocalizedText','drawItemEffectsHpRecovery','select','powerUpColor','ATK','nonOptimizeEtypes','SwitchBuy','commandSellItemsEquipsCore','isTroopArtifact','commandBuyItemsEquipsCore','getItemEffectsTpRecoveryLabel','HP\x20DAMAGE','427ebZKNK','_itemIDs','getItemEffectsTpDamageText','Scene_Shop_onSellOk','luk','possession','buttonAssistKey2','getItemEffectsAddedStatesBuffsText','checkShiftRemoveShortcut','drawItemStyleIcon','addShopTrackingGoldBuy','drawItemDarkRect','pop','Window_ShopBuy_item','1966hhSgjv','itypeId','newLabelEnabled','postCreateItemsEquipsCore','DrawItemData','getItemDamageElementLabel','background','onSellOk','contentsBack','getItemConsumableLabel','isShiftShortcutKeyForRemove','test','onTouchSelectModern','exit','NoEquipTypeResult','clearEquipments','Nonconsumable','bind','addClearCommand','maxBattleMembers','processTouchModernControls','ShowShopStatus','changeEquip','LUK','updateHelp','Scene_Shop_doSell','buttonAssistKey3','item','getItemEffectsHpDamageText','canSortListItemScene','version','EFFECT_REMOVE_DEBUFF','maxVisibleItems','CoreEngine','createSlotWindow','createCategoryWindow','getItemEffectsMpRecoveryLabel','versionId','drawParamText','FadeSpeed','mat','getEquipRequirements','anyEmptyEquipSlotsOfSameEtype','_newLabelOpacity','type','ScopeEnemyOrAlly','optimizeEquipments','onBuyCancelItemsEquipsCore','itemHasEquipLimit','Window_ItemCategory_setItemWindow','Enable','changePaintOpacity','getEquipDataStyle','PHA','blt','Scene_Shop_goldWindowRect','_commandNameWindow','paramValueFontSize','drawItemDamage','Scene_Shop_doBuy','initNewLabelSprites','prepare','Window_ItemList_makeItemList','paramPlusItemsEquipsCoreCustomJS','atk','keyItem','isVisuMzLocalizationEnabled','deactivate','Scene_Item','setMp','Game_Party_setupBattleTestItems_artifact','SpeedNeg2000','DoubleWeaponParameters','DrawEquipClassicData','DrawFaceJS','3021648mWhFZS','setText','updateSmoothScroll','AlreadyEquipMarker','iconIndex','processHandling','onMenuImageLoad','indexOf','needsNewTempActor','removeState','calcEquipItemPerformance','damageColor','consumable','equips','_getEquipRequirements','clamp','inBattle','n/a','drawEquipDataDouble','tradeItemWithParty','NonRemoveETypes','drawItemEffectsAddedStatesBuffs','_categoryNameWindow','getItemSpeedLabel','buttonAssistKey1','addShopTrackingGoldSell','CursedTextPopup','STRUCT','CannotEquipMarker','_buyWindowLastIndex','isItem','cursorPageup','drawEquipDataCompare','isNewItem','refreshCursor','formula','drawItemCost','description','_classIDs','items','canUse','itemTextAlign','categoryStyleCheck','Scene_Equip_onActorChange','getShopTrackingItem','name','Icon','sortListItemScene','processCursorMoveModernControls','buyWindowRectItemsEquipsCore','_scene','Scene_Equip_createSlotWindow','refreshActor','etypeId','Scene_Shop_numberWindowRect','fillRect','setNewItem','100%','left','W%1','forceResetEquipSlots','getItemRepeatsText','activateItemWindow','_numberWindow','call','textColor','getItemDamageAmountTextOriginal','drawPossession','Occasion%1','Scene_Equip_statusWindowRect','ItemQuantityFontSize','gainTP','Scene_Shop_onBuyOk','categoryNameWindowDrawBackground','_allowArtifactParamBase','getItemRepeatsLabel','callUpdateHelp','convertInitEquipsToItems','maxCols','mainFontSize','playEquip','isClearCommandAdded','playBuzzerSound','statusWindowRect','DrawEquipDoubleData','switchProxyItem','uiHelpPosition','isUseItemsEquipsCoreUpdatedLayout','MAXHP','buy','contents','Parse_Notetags_ParamJS','gold','sell','isShowNew','drawItemCustomEntries','meetsClassRequirements','_sellWindow','Game_Party_initialize','MP\x20RECOVERY','hasItem','LabelSelfGainTP','bestEquipItem','user','addItemCategories','buttonAssistLargeIncrement','Equip\x20the\x20strongest\x20available\x20equipment.','clearNewItem','Step3End','_bypassReleaseUnequippableItemsItemsEquipsCore','resetShopSwitches','_calculatingJSParameters','EFFECT_ADD_DEBUFF','map','ParseArmorNotetags','_category','Scene_Shop_prepare','toLowerCase','parameters','mainAreaBottom','drawParamName','_dummyWindow','_itemWindow','KeyItems','isClearEquipOk','canEquip','_skillIDs','Weapon\x20Type','elementId','Game_Actor_tradeItemWithParty','isKeyItem','SetupArtifactItemIDs','equip','Scene_Shop_categoryWindowRect','optKeyItemsNumber','HiddenItemB','split','EFFECT_REMOVE_STATE','activate','getItemEffectsMpDamageText','mainAreaTop','drawParamsItemsEquipsCore','replace','JSON','getItemIdWithName','some','isArtifact','setCategory','ScopeAllyOrEnemy','trim','limitedPageUpDownSceneCheck','floor','Scene_Item_createCategoryWindow','Scene_Shop_activateSellWindow','drawItemConsumable','Window_EquipItem_isEnabled','sellingPrice','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','value2','helpWindowRect','ELEMENT','_bypassProxy','_armorIDs','money','SellPriceRate','onDatabaseLoaded','CmdStyle','_handlers','currentExt','shift','doBuy','releaseUnequippableItems','getArmorIdWithName','sellWindowRectItemsEquipsCore','LabelElement','getEmptyEquipSlotOfSameEtype','updateMoneyAmount','classic','isPageChangeRequested','isOpen','AGI','innerHeight','partyArtifacts','Scene_Load_reloadMapIfUpdated','Scene_Shop_commandBuy','code','Window_ShopStatus_setItem','Scene_Shop_create','Window_ItemCategory_initialize','Window_ShopSell_isEnabled','buttonAssistText1','SwitchSell','BuyPriceJS','Scene_Equip_createCommandWindow','pagedown','getItemSuccessRateLabel','getItemsEquipsCoreBackColor1','resetTextColor','_shopStatusMenuAlly','Step1End','sortPriority','drawItemStyleIconText','PurifyParty','deselect','Game_Item_setObject','HiddenItemA','isBattleTest','armorTypes','equipCmdDesc','right','canShiftRemoveEquipment','_goodsCount','mhp','goldWindowRect','placeItemNewLabel','Scene_Item_createItemWindow','MANUAL','getParamValueClassicCore','CommandAddOptimize','Window_ItemList_maxCols','active','_paramPlus','WEAPON','getMatchingInitEquip','isRightInputMode','drawNewLabelText','params','_cache','getEtypeIDs','getItemEffects','note','SellPriceJS','OffsetY','getInputMultiButtonStrings','Scene_Shop_onSellCancel','getProxyItem','changeBuff','proxyItem','isOptimizeCommandAdded','ClassicWeaponParameters','Game_Party_gainItem_artifact','opacity','deepCopy','getWeaponIdWithName','commandNameWindowDrawBackground','actor','forceChangeEquipSlots','isStackableArtifact','consumeItem','_tempActor','toUpperCase','VisuMZ_1_SkillsStatesCore','paramBase','loadFaceImages','Window_ShopBuy_goodsToItem','doSell','LabelApply','equipAdjustHpMp','isDrawItemNumber','Step1Start','_tempActorA','agi','changeTextColor','Scene_Shop_sellingPrice','_customItemInfo','TextAlign','innerWidth','cursorRight','addWindow','value','statusWidth','middle','StatusWindowWidth','Game_Actor_isEquipChangeOk','hpRate','Scene_Shop_createCategoryWindow','VisuMZ_0_CoreEngine','UNDEFINED!','addShopTrackingItemBuy','REMOVED\x20EFFECTS','_goods','onCategoryCancelItemsEquipsCore','categoryWindowRect','drawUpdatedParamValueDiff','concat','addStateBuffChanges','Scene_Shop_onCategoryCancel','getClassIdWithName','ParamChangeFontSize','getParamValueClassicNoCore','paramJS','setValue','getPurifyTransformation','getItemEffectsSelfTpGainLabel','ItemMenuStatusBgType','categoryItemTypes','iconText','boxWidth','ScopeRandomEnemies','A%1','_cache_etypeIDs','Scene_Item_categoryWindowRect','traits','weapon-%1','Scene_ItemBase_activateItemWindow','QUANTITY','initNewItemsList','ARRAYFUNC','EquipDataStyle','%1%','ItemsEquipsCore','?????','drawItemQuantity','drawText','equipSlotIndex','ListWindowCols','gainItem','Window_ShopBuy_price','every','HideAnySwitches','LabelDamageTP','buttonAssistText2','FieldUsable','Game_Party_numItems','splice','WeaponType','actorId','_resetFontSize','Pick\x20and\x20choose\x20equipment\x20to\x20change.','refreshActorEquipSlotsIfUpdated','localeCompare','auto','width','commandStyleCheck','drawItemEffectsSelfTpGain','length','processShopCondListingOnBuyItem','revertGlobalNamespaceVariables','ScopeRandomAny','pageup','resetFontSettings','mdf','FontFace','_actor','random','selfTP','isSellCommandEnabled','dataId','lineHeight','getShopTrackingItemBuy','armors','List','buttonAssistSlotWindowShift','isCursedItem','alterSkillName','866fOkmYJ','isEquipItem','setItem','hideDisabledCommands','weapon','baseSellingPrice','addOptimizeCommand','Scene_Shop_buyingPrice','Parse_Notetags_ParamValues','isPartyArtifact','drawItemEquipSubType','isClicked','mainCommandWidth','Type','DrawEquipData','param','successRate','process_VisuMZ_ItemsEquipsCore_Notetags','ExtDisplayedParams','isShiftRemoveShortcutEnabled','isEquipChangeOk','TP\x20DAMAGE','drawItemScope','initShopTrackingData','getItemDamageAmountLabel','Scene_Shop_statusWindowRect','Window_EquipItem_includes','_checkEquipRequirements','_item','getItemEffectsTpRecoveryText','forceChangeEquip','CmdCancelRename','isArray','cursorLeft','isBuyCommandEnabled','iconHeight','getItemEffectsHpRecoveryText','getTextColor','getInputButtonString','textWidth','onSellCancel','DEF','rateHP','Scene_Equip_itemWindowRect','drawItemRepeats','EQUIP_DELAY_MS','ItemScene','getPrototypeOf','rateMP','MenuPortraits','AllWeapons','meetsEquipRequirements','_newItemsList','updateCommandNameWindow','Scope%1','helpAreaTop','ItemQuantityFmt','\x5cI[%1]','weaponTypes','isSceneShop','statusWindowRectItemsEquipsCore','ceil','ADDED\x20EFFECTS','removeDebuff','defaultItemMax','cursorPagedown','Scene_Boot_onDatabaseLoaded','update','ITEMS_EQUIPS_CORE','_newLabelOpacityChange','Game_BattlerBase_meetsItemConditions','Scene_Shop_buyWindowRect','addInnerChild','numberWindowRectItemsEquipsCore','isTriggered','createCommandNameWindow','MaxArmors','drawItemCustomEntryLine','IncludeShopItem','Scene_Equip_create','CmdIconClear','getEtypeIDsCache','SortBy','drawEquipDataClassic','CmdIconCancel','getItemsEquipsCoreBackColor2','onSlotOkAutoSelect','allowCreateStatusWindow','ShopScene','EFFECT_RECOVER_MP','characterName','processCursorSpecialCheckModernControls','SCOPE','VisuMZ_1_MainMenuCore','×%1','getShopTrackingData','_commandWindow','isHoverEnabled','BuyTurnSwitchOn','setShopStatusWindowMode','MAT','initialize','paramchangeTextColor','drawItemEffectsRemovedStatesBuffs','_doubleTouch','Game_Actor_artifact','refreshDelay','onSlotOk','prepareNewEquipSlotsOnLoad','HideAllSwitches','drawItemEffectsTpDamage','CNT','prepareRefreshItemsEquipsCoreLayout','TCR','smoothScrollTo','constructor','Settings','double','processCursorHomeEndTrigger','height','addShopTrackingItemSell','uiInputPosition','reloadMapIfUpdated','updateChangedSlots','flatMP','troopArtifactIDs','drawItemEffectsMpRecovery','buttonAssistCategory','_itemData','Window_EquipStatus_refresh','KeyItemProtect','onBuyItem','NAME','changeEquipById','MaxIcons','atypeId','processDrawIcon','commandWindowRectItemsEquipsCore','adjustHiddenShownGoods','GRD','categoryWindowRectItemsEquipsCore','SellTurnSwitchOff','isCustomParameter','Scene_Item_itemWindowRect','processCursorMove','maxItemAmount','createBitmap','Parse_Notetags_Batch','actorParams','isEnabled','drawUpdatedParamName','getDamageStyle','MEV','filter','isCursorMovable','drawItem','postCreateSellWindowItemsEquipsCore','popScene','getItemHitTypeLabel','Scene_Battle','MaxWeapons','isUseParamNamesWithIcons','drawActorParamClassic','LabelConsume','Scene_Item_create','smoothSelect','2813760LcsAAT','SetupProxyItemGroup','occasion','_bypassNewLabel','helpDescriptionText','level','index','playCursorSound','ActorChangeEquipSlots','getItemDamageAmountLabelBattleCore','down','CONSUMABLE','LabelRemove','Game_BattlerBase_param','effects','includes','addCommand','getMenuImage','start','LayoutStyle','Game_Enemy_traitObjects_artifact','_allowArtifactTraitObjects','getItemSpeedText','VisuMZ_2_WeaponSwapSystem','buttonAssistOffset3','setItemWindow','ParseWeaponNotetags','cancel','Parse_Notetags_Sorting','MaxItems','currentSymbol','getItemDamageAmountTextBattleCore','Window_ItemList_colSpacing','troopArtifacts','EquipScene','createTempActorEquips','Window_ItemList_item','refreshItemsEquipsCoreNoMenuImage','DamageType%1','DAMAGE\x20MULTIPLIER','ShopMenuStatusStandard','sellWindowRect','MCR','currencyUnit','getItemOccasionText','Step3Start','Window_ItemList_updateHelp','BattleUsable','numberWindowRect','isLearnedSkill','buffIconIndex','drawItemActorMenuImage','placeNewLabel','meetsEquipRequirement','playCancel','CheckCursedItemMsg','onSellItem','CRI','setTempActor','isSoleWeaponType','getItemQuantityText','getItemSuccessRateText','top','Window_ShopBuy_refresh','CustomParamNames','clearNewLabelFromItem','EFFECT_REMOVE_BUFF','isProxyItem','status','damage','setupBattleTestItems','gaugeLineHeight','RegularItems','CmdTextAlign','members','itemPadding','Game_BattlerBase_paramPlus_artifact','hasOwnProperty','BatchShop','uiMenuStyle','find','Consumable','Parse_Notetags_EquipSlots','_forcedSlots','isWeapon','isPurifyItemSwapOk','Step2Start','getItemDamageAmountText','fontSize','commandBuy','getEtypeIdWithName','drawItemOccasion','commandSell','EquipParams','_data','addEquipCommand','canEquipArmor','compare','makeItemData','helpAreaHeight','7944HiQbgj','Scope1','QoL','addItemCategory','processShopCondListingOnSellItem','iconWidth','Game_Actor_paramPlus','_shopTrackingData','isDualWield','drawing','commandName','getSkillIdWithName','Whitelist','EFFECT_GAIN_TP','SwitchID','isPressed','isEquipCommandAdded','815664oSVBmR','Scene_Equip_commandEquip','Scene_Equip_commandWindowRect','allowCommandWindowCursorUp','_resetFontColor','MaxHP','onBuyCancel','drawUpdatedBeforeParamValue','center','ConvertNumberToString','create','isHandled','buyingPrice','_helpWindow','RegExp','discardEquip','Window_Selectable_update','hitIndex','DrawParamJS','Blacklist','shouldCommandWindowExist','drawRemoveItem','_slotWindow','isEquipAtypeOk','SPEED','buttonAssistSmallIncrement','drawActorCharacter','LabelRecoverMP','isArmor','smallParamFontSize','format','show','gaugeBackColor','drawActorParamDifference','DrawBackRect','MP\x20DAMAGE','foreground','getItemEffectsMpRecoveryText','_slotId','drawCustomShopGraphic','mmp','helpDesc','Scene_Equip_slotWindowRect','itemLineRect','ShowAllSwitches','isOptimizeCommandEnabled','Scene_Shop_helpWindowRect','BackRectColor','New','push','BorderRegExp','Parse_Notetags_Category','Scene_Shop_commandSell','onSlotCancel','_scrollDuration','equipItems','categoryNameWindowCenter','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYSTR','getClassRequirements','MAXMP','values','drawItemEffectsHpDamage','repeats','\x5cb%1\x5cb','sellPriceOfItem','LabelHitType','===','onTouchOk','categoryList','registerCommand','ARRAYJSON','HIT\x20TYPE','paramPlus','addLoadListener','setBackgroundType','postCreateSlotWindowItemsEquipsCore','getItemEffectsAddedStatesBuffsLabel','slotWindowRect','_tempActorB','isEquipTypeSealed','drawUpdatedAfterParamValue','Scene_Shop_createSellWindow','flatHP','Scene_Equip_helpWindowRect','Window_Selectable_initialize','loadPicture','commandStyle','ItemSceneAdjustItemList','isHovered','LabelDamageHP','BuyTurnSwitchOff','modifiedBuyPriceItemsEquipsCore','paintOpacity','equip2','round','Step2End','EVA','HRG','refresh','isMainMenuCoreMenuImageOptionAvailable','makeItemList','FUNC','CmdIconEquip','drawItemName','ShopListingRegExp','fill','REPEAT','translucentOpacity','Window_Selectable_setHelpWindowItem','createSellWindow','nextActor','Slots','22649814MmIpEm','slotWindowRectItemsEquipsCore','updateCategoryNameWindow','isSoleArmorType','itemAt','sellPriceRate','addChild','wtypeId','ARRAYSTRUCT','AlwaysUsable','getItemEffectsSelfTpGainText','_etypeIDs','helpWindowRectItemsEquipsCore','+%1','itemWindowRectItemsEquipsCore','setObject','makeCommandList','ParseClassNotetags','updatedLayoutStyle','USER\x20TP\x20GAIN','drawItemEffects','visible','icon','English','SellTurnSwitchOn','drawEquipData','drawCustomShopGraphicLoad','removeBattleTestArtifacts','_weaponIDs','PurifyActors','MultiplierStandard','FDR','_buyWindow','Game_Party_consumeItem','armor-%1','createStatusWindow','Window_ShopCommand_initialize','purifyCursedEquips','setItemDelay','LabelRepeats','getItemEffectsRemovedStatesBuffsLabel','makeDeepCopy','drawIcon','+%1%','Game_Party_gainItem','CmdHideDisabled','parse','AllArmors','drawItemKeyData','_getClassRequirements','drawItemEffectsTpRecovery','PDR','onTouchSelectModernControls','log','optimize','equipTypes','updateNewLabelOpacity','5427894FyRqeo','Scene_Shop_sellWindowRect','Param','Speed2000','EnableLayout','onTouchSelect','OffsetX','ARRAYNUM','commandWindowRect','getItemEffectsHpRecoveryLabel','remove','MDR','EFFECT_ADD_BUFF','VisuMZ_1_BattleCore','createNewLabelSprite','\x5cI[%1]%2','Game_Actor_discardEquip','_purchaseOnly','_statusWindow','Game_BattlerBase_param_artifact','setHelpWindow','isOpenAndActive','createItemWindow','Scene_Equip','SortByIDandPriority','Scene_Equip_onSlotOk','MDF','geUpdatedLayoutStatusWidth','artifactIDs','onSellOkItemsEquipsCore','Scene_Shop_commandWindowRect','addState','setHandler','initEquips','textSizeEx','Categories','commandEquip','isOptimizeEquipOk','_shopStatusMenuMode','postCreateCategoryWindowItemsEquipsCore','fontSizeRatio','REC','drawItemNumber','getItemEffectsHpDamageLabel','isRepeated','itemEnableJS','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','isCommandEnabled','getItemEffectsRemovedStatesBuffsText','Actors','ConvertParams','SetupProxyItemGroups','itemWindowRect','bitmap','paramValueByName','prepareItemCustomData','artifacts','DoubleArmorParameters','meetsItemConditionsJS','isEquipWtypeOk','drawItemData','buttonAssistItemListRequirement','onActorChange','Parse_Notetags_Prices','max','commandNameWindowDrawText','checkItemConditionsSwitchNotetags','Game_Actor_forceChangeEquip','AllItems','currentClass','canConsumeItem','playOkSound','commandNameWindowCenter','scrollTo','NeverUsable','loadSystem','DrawPortraitJS','min','processDownCursorSpecialCheckModernControls','setupItemDamageTempActors','match','buyWindowRect'];_0x22a4=function(){return _0x91303a;};return _0x22a4();}Sprite_NewLabel[_0x354d50(0x384)]=Object[_0x354d50(0x274)](Sprite[_0x354d50(0x384)]),Sprite_NewLabel[_0x354d50(0x384)][_0x354d50(0x1c2)]=Sprite_NewLabel,Sprite_NewLabel[_0x354d50(0x384)][_0x354d50(0x1b4)]=function(){const _0x20b9af=_0x354d50;Sprite[_0x20b9af(0x384)][_0x20b9af(0x1b4)][_0x20b9af(0x46a)](this),this[_0x20b9af(0x1e1)]();},Sprite_NewLabel[_0x354d50(0x384)][_0x354d50(0x1e1)]=function(){const _0x2ce2e0=_0x354d50,_0x106679=ImageManager[_0x2ce2e0(0x25e)],_0x1cdc19=ImageManager[_0x2ce2e0(0x172)];this[_0x2ce2e0(0x349)]=new Bitmap(_0x106679,_0x1cdc19),this['drawNewLabelIcon'](),this[_0x2ce2e0(0xcd)]();},Sprite_NewLabel[_0x354d50(0x384)]['drawNewLabelIcon']=function(){const _0x486d25=_0x354d50,_0x3df612=VisuMZ[_0x486d25(0x122)][_0x486d25(0x1c3)]['New'][_0x486d25(0x458)];if(_0x3df612<=0x0)return;const _0x509847=ImageManager[_0x486d25(0x35f)]('IconSet'),_0x5283df=ImageManager['iconWidth'],_0x1be17d=ImageManager[_0x486d25(0x172)],_0x4cea45=_0x3df612%0x10*_0x5283df,_0xf8a717=Math[_0x486d25(0x4c1)](_0x3df612/0x10)*_0x1be17d;this['bitmap'][_0x486d25(0x415)](_0x509847,_0x4cea45,_0xf8a717,_0x5283df,_0x1be17d,0x0,0x0);},Sprite_NewLabel['prototype']['drawNewLabelText']=function(){const _0xe8c304=_0x354d50,_0x2a7640=VisuMZ[_0xe8c304(0x122)]['Settings'][_0xe8c304(0x29a)],_0x2f1527=_0x2a7640[_0xe8c304(0x39f)];if(_0x2f1527==='')return;const _0x3141bc=ImageManager[_0xe8c304(0x25e)],_0x3c18da=ImageManager['iconHeight'];this[_0xe8c304(0x349)]['fontFace']=_0x2a7640[_0xe8c304(0x142)]||$gameSystem['mainFontFace'](),this[_0xe8c304(0x349)][_0xe8c304(0x46b)]=this[_0xe8c304(0x174)](),this[_0xe8c304(0x349)]['fontSize']=_0x2a7640['FontSize'],this[_0xe8c304(0x349)][_0xe8c304(0x125)](_0x2f1527,0x0,_0x3c18da/0x2,_0x3141bc,_0x3c18da/0x2,_0xe8c304(0x272));},Sprite_NewLabel[_0x354d50(0x384)][_0x354d50(0x174)]=function(){const _0x214148=_0x354d50,_0x5e602e=VisuMZ[_0x214148(0x122)]['Settings'][_0x214148(0x29a)][_0x214148(0x37d)];return _0x5e602e[_0x214148(0x364)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x214148(0x46b)](_0x5e602e);},Window_Base[_0x354d50(0x384)][_0x354d50(0x2d2)]=function(_0x36e293,_0x2b64a6,_0x9a6678,_0x347e7f){const _0x15706e=_0x354d50;if(_0x36e293){const _0x4e1a41=_0x9a6678+(this[_0x15706e(0x148)]()-ImageManager[_0x15706e(0x172)])/0x2,_0x1f4f74=ImageManager[_0x15706e(0x25e)]+0x4,_0x4371b5=Math[_0x15706e(0x354)](0x0,_0x347e7f-_0x1f4f74);this[_0x15706e(0xf2)](ColorManager['getItemColor'](_0x36e293)),this['drawIcon'](_0x36e293['iconIndex'],_0x2b64a6,_0x4e1a41),this['drawText'](_0x36e293['name'],_0x2b64a6+_0x1f4f74,_0x9a6678,_0x4371b5),this[_0x15706e(0xb1)]();}},Window_Base['prototype'][_0x354d50(0x33e)]=function(_0x39f616,_0x250186,_0x3075e4,_0x6c460e){const _0x5be702=_0x354d50;if(this[_0x5be702(0xee)](_0x39f616)){this[_0x5be702(0x140)]();const _0x248d08=VisuMZ[_0x5be702(0x122)][_0x5be702(0x1c3)][_0x5be702(0x17d)],_0x4ce13b=_0x248d08['ItemQuantityFmt'],_0x5809d5=_0x4ce13b[_0x5be702(0x288)]($gameParty['numItems'](_0x39f616));this[_0x5be702(0x484)][_0x5be702(0x24d)]=_0x248d08[_0x5be702(0x470)],this['drawText'](_0x5809d5,_0x250186,_0x3075e4,_0x6c460e,_0x5be702(0xbd)),this[_0x5be702(0x140)]();}},Window_Base[_0x354d50(0x384)][_0x354d50(0xee)]=function(_0x4e9d15){const _0x5e6027=_0x354d50;if(DataManager['isKeyItem'](_0x4e9d15))return $dataSystem[_0x5e6027(0x4b0)];return!![];},Window_Base['prototype']['drawItemDarkRect']=function(_0x3b58e4,_0x3506f8,_0x7217d3,_0xf9de60,_0xf45c01){const _0x5c2f2c=_0x354d50;_0xf45c01=Math[_0x5c2f2c(0x354)](_0xf45c01||0x1,0x1);while(_0xf45c01--){_0xf9de60=_0xf9de60||this[_0x5c2f2c(0x148)](),this[_0x5c2f2c(0x3e7)][_0x5c2f2c(0x2c7)]=0xa0;const _0x4403c1=ColorManager[_0x5c2f2c(0x28a)]();this[_0x5c2f2c(0x3e7)][_0x5c2f2c(0x461)](_0x3b58e4+0x1,_0x3506f8+0x1,_0x7217d3-0x2,_0xf9de60-0x2,_0x4403c1),this[_0x5c2f2c(0x3e7)][_0x5c2f2c(0x2c7)]=0xff;}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x2bf)]=Window_Selectable[_0x354d50(0x384)][_0x354d50(0x1b4)],Window_Selectable[_0x354d50(0x384)][_0x354d50(0x1b4)]=function(_0x562446){const _0x183790=_0x354d50;this[_0x183790(0x41b)](),VisuMZ[_0x183790(0x122)][_0x183790(0x2bf)][_0x183790(0x46a)](this,_0x562446);},Window_Selectable[_0x354d50(0x384)][_0x354d50(0x41b)]=function(){const _0x597aee=_0x354d50;this[_0x597aee(0x390)]={},this[_0x597aee(0x40a)]=0xff,this[_0x597aee(0x194)]=VisuMZ[_0x597aee(0x122)][_0x597aee(0x1c3)]['New'][_0x597aee(0x406)],this['_newLabelOpacityUpperLimit']=VisuMZ['ItemsEquipsCore'][_0x597aee(0x1c3)][_0x597aee(0x29a)]['FadeLimit'];},Window_Selectable['prototype'][_0x354d50(0x488)]=function(){return![];},VisuMZ[_0x354d50(0x122)]['Window_Selectable_setHelpWindowItem']=Window_Selectable[_0x354d50(0x384)][_0x354d50(0x372)],Window_Selectable[_0x354d50(0x384)][_0x354d50(0x372)]=function(_0x5218b1){const _0x18a6ec=_0x354d50;VisuMZ[_0x18a6ec(0x122)][_0x18a6ec(0x2d7)]['call'](this,_0x5218b1);if(this['isShowNew']())this[_0x18a6ec(0x236)](_0x5218b1);},Window_Selectable[_0x354d50(0x384)]['clearNewLabelFromItem']=function(_0xe8d6f5){const _0x15f0e5=_0x354d50;if(!_0xe8d6f5)return;$gameParty['clearNewItem'](_0xe8d6f5);let _0xf395f3='';if(DataManager[_0x15f0e5(0x448)](_0xe8d6f5))_0xf395f3=_0x15f0e5(0x367)[_0x15f0e5(0x288)](_0xe8d6f5['id']);else{if(DataManager[_0x15f0e5(0x249)](_0xe8d6f5))_0xf395f3=_0x15f0e5(0x11b)[_0x15f0e5(0x288)](_0xe8d6f5['id']);else{if(DataManager[_0x15f0e5(0x286)](_0xe8d6f5))_0xf395f3=_0x15f0e5(0x2fd)[_0x15f0e5(0x288)](_0xe8d6f5['id']);else return;}}const _0x2dd8b7=this['_newLabelSprites'][_0xf395f3];if(_0x2dd8b7)_0x2dd8b7[_0x15f0e5(0x385)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x388)]=Window_Selectable[_0x354d50(0x384)][_0x354d50(0x2cd)],Window_Selectable[_0x354d50(0x384)][_0x354d50(0x2cd)]=function(){const _0x570a9c=_0x354d50;this['hideNewLabelSprites'](),VisuMZ[_0x570a9c(0x122)]['Window_Selectable_refresh'][_0x570a9c(0x46a)](this);},Window_Selectable['prototype']['hideNewLabelSprites']=function(){const _0x2aea85=_0x354d50;for(const _0xe23510 of Object[_0x2aea85(0x2a7)](this[_0x2aea85(0x390)])){_0xe23510['hide']();}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x27a)]=Window_Selectable[_0x354d50(0x384)][_0x354d50(0x192)],Window_Selectable[_0x354d50(0x384)][_0x354d50(0x192)]=function(){const _0x551203=_0x354d50;this[_0x551203(0x313)](),VisuMZ[_0x551203(0x122)]['Window_Selectable_update'][_0x551203(0x46a)](this);},Window_Selectable[_0x354d50(0x384)][_0x354d50(0x313)]=function(){const _0x496c64=_0x354d50;if(!this[_0x496c64(0x488)]())return;const _0x15a421=this[_0x496c64(0x3a8)];this[_0x496c64(0x40a)]+=this[_0x496c64(0x194)];(this[_0x496c64(0x40a)]>=_0x15a421||this[_0x496c64(0x40a)]<=0x0)&&(this[_0x496c64(0x194)]*=-0x1);this[_0x496c64(0x40a)]=this['_newLabelOpacity'][_0x496c64(0x439)](0x0,_0x15a421);for(const _0x5bcce2 of Object[_0x496c64(0x2a7)](this[_0x496c64(0x390)])){_0x5bcce2[_0x496c64(0xdd)]=this['_newLabelOpacity'];}},Window_Selectable[_0x354d50(0x384)][_0x354d50(0x322)]=function(_0x38fd2c){const _0x4f74b2=_0x354d50,_0x27ddbb=this[_0x4f74b2(0x390)];if(_0x27ddbb[_0x38fd2c])return _0x27ddbb[_0x38fd2c];else{const _0x385316=new Sprite_NewLabel();return _0x27ddbb[_0x38fd2c]=_0x385316,this[_0x4f74b2(0x197)](_0x385316),_0x385316;}},Window_Selectable['prototype'][_0x354d50(0x229)]=function(_0x2c235a,_0x38eacb,_0x1c8338){const _0xe55bf1=_0x354d50;let _0x1902f6='';if(DataManager[_0xe55bf1(0x448)](_0x2c235a))_0x1902f6=_0xe55bf1(0x367)[_0xe55bf1(0x288)](_0x2c235a['id']);else{if(DataManager[_0xe55bf1(0x249)](_0x2c235a))_0x1902f6='weapon-%1'['format'](_0x2c235a['id']);else{if(DataManager[_0xe55bf1(0x286)](_0x2c235a))_0x1902f6=_0xe55bf1(0x2fd)[_0xe55bf1(0x288)](_0x2c235a['id']);else return;}}const _0x3b7c29=this[_0xe55bf1(0x322)](_0x1902f6);_0x3b7c29['move'](_0x38eacb,_0x1c8338),_0x3b7c29[_0xe55bf1(0x289)](),_0x3b7c29[_0xe55bf1(0xdd)]=this[_0xe55bf1(0x40a)];},Window_ItemCategory[_0x354d50(0x2af)]=VisuMZ['ItemsEquipsCore'][_0x354d50(0x1c3)]['Categories'][_0x354d50(0x14b)],Window_ItemCategory[_0x354d50(0x113)]=[_0x354d50(0xb9),'HiddenItemB',_0x354d50(0x3ef),_0x354d50(0x246),_0x354d50(0x2e4),'BattleUsable',_0x354d50(0x12e),'NeverUsable'],VisuMZ[_0x354d50(0x122)][_0x354d50(0x4e6)]=Window_ItemCategory['prototype'][_0x354d50(0x1b4)],Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x1b4)]=function(_0x23c96e){const _0x53576a=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x53576a(0x4e6)]['call'](this,_0x23c96e),this[_0x53576a(0x3b6)](_0x23c96e);},Window_ItemCategory['prototype'][_0x354d50(0x3b6)]=function(_0x91e75e){const _0x286317=_0x354d50,_0x3e893b=new Rectangle(0x0,0x0,_0x91e75e[_0x286317(0x138)],_0x91e75e[_0x286317(0x1c6)]);this[_0x286317(0x440)]=new Window_Base(_0x3e893b),this[_0x286317(0x440)][_0x286317(0xdd)]=0x0,this[_0x286317(0x2e1)](this[_0x286317(0x440)]),this[_0x286317(0x2dd)]();},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x3b7)]=function(){const _0x1f8b06=_0x354d50;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand['prototype']['isUseModernControls'][_0x1f8b06(0x46a)](this);},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x1c5)]=function(){},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x35b)]=function(){const _0x46d753=_0x354d50;if(!this[_0x46d753(0x3b7)]())Window_HorzCommand['prototype']['playOkSound'][_0x46d753(0x46a)](this);},Window_ItemCategory['prototype'][_0x354d50(0x478)]=function(){const _0x16721f=_0x354d50;return this[_0x16721f(0x380)]?this[_0x16721f(0x38e)]():0x4;},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x192)]=function(){const _0x5df6d0=_0x354d50;Window_HorzCommand[_0x5df6d0(0x384)][_0x5df6d0(0x192)][_0x5df6d0(0x46a)](this),this['_itemWindow']&&this[_0x5df6d0(0x4a4)]['setCategory'](this[_0x5df6d0(0x4d2)]());},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x45a)]=function(){const _0x574604=_0x354d50;if(this[_0x574604(0x1e9)]()){const _0x4ce5e9=this[_0x574604(0x1fb)]();if(this[_0x574604(0x4a4)]&&this[_0x574604(0x4a4)][_0x574604(0x478)]()<=0x1)Input['isRepeated'](_0x574604(0xbd))&&this[_0x574604(0xf7)](Input[_0x574604(0x199)]('right')),Input[_0x574604(0x340)](_0x574604(0x464))&&this[_0x574604(0x170)](Input['isTriggered'](_0x574604(0x464)));else this[_0x574604(0x4a4)]&&this[_0x574604(0x4a4)][_0x574604(0x478)]()>0x1&&(Input[_0x574604(0x340)]('pagedown')&&!Input[_0x574604(0x268)](_0x574604(0x4d3))&&this['cursorRight'](Input[_0x574604(0x199)](_0x574604(0xae))),Input[_0x574604(0x340)]('pageup')&&!Input[_0x574604(0x268)](_0x574604(0x4d3))&&this[_0x574604(0x170)](Input[_0x574604(0x199)](_0x574604(0x13f))));this[_0x574604(0x1fb)]()!==_0x4ce5e9&&this['playCursorSound']();}},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x42f)]=function(){const _0x2d9ef8=_0x354d50;if(this[_0x2d9ef8(0x3b7)]())return;Window_HorzCommand[_0x2d9ef8(0x384)][_0x2d9ef8(0x42f)][_0x2d9ef8(0x46a)](this);},Window_ItemCategory[_0x354d50(0x384)]['isHoverEnabled']=function(){const _0x5ce3a6=_0x354d50;return this[_0x5ce3a6(0x3b7)]()?![]:Window_HorzCommand[_0x5ce3a6(0x384)][_0x5ce3a6(0x1b0)]['call'](this);},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x3f3)]=function(){const _0x20e3a1=_0x354d50;if(this[_0x20e3a1(0x329)]()){TouchInput[_0x20e3a1(0x199)]()&&this['onTouchSelect'](!![]);if(TouchInput[_0x20e3a1(0x15a)]())this[_0x20e3a1(0x2ae)]();else TouchInput[_0x20e3a1(0x381)]()&&this['onTouchCancel']();}},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x319)]=function(_0x14b410){const _0x3b021f=_0x354d50;this[_0x3b021f(0x3b7)]()?this['onTouchSelectModern'](!![]):Window_HorzCommand['prototype'][_0x3b021f(0x319)][_0x3b021f(0x46a)](this,_0x14b410);},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x3eb)]=function(_0x2cc63d){const _0x1b0c76=_0x354d50;this[_0x1b0c76(0x1b7)]=![];if(this[_0x1b0c76(0x1e9)]()){const _0x1de9aa=this[_0x1b0c76(0x1fb)](),_0x264133=this[_0x1b0c76(0x27b)]();_0x264133>=0x0&&_0x264133!==this['index']()&&this[_0x1b0c76(0x3c7)](_0x264133),_0x2cc63d&&this[_0x1b0c76(0x1fb)]()!==_0x1de9aa&&this[_0x1b0c76(0x1fc)]();}},Window_ItemCategory[_0x354d50(0x384)]['makeCommandList']=function(){const _0x15301b=_0x354d50;this[_0x15301b(0x492)](),this['select'](this[_0x15301b(0x1fb)]());},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x492)]=function(){const _0x279717=_0x354d50;for(const _0x28bd5a of Window_ItemCategory[_0x279717(0x2af)]){this['addItemCategory'](_0x28bd5a);}},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x25c)]=function(_0xc794a1){const _0x403293=_0x354d50,_0x5efbc2=_0xc794a1[_0x403293(0x15c)],_0x175617=_0xc794a1[_0x403293(0x458)],_0x53ca0c=_0xc794a1[_0x403293(0x267)]||0x0;if(_0x53ca0c>0x0&&!$gameSwitches['value'](_0x53ca0c))return;let _0x541a39='',_0x309a94='category',_0x183bc9=_0x5efbc2;if(_0x5efbc2[_0x403293(0x364)](/Category:(.*)/i))_0x541a39=String(RegExp['$1'])['trim']();else{if(Window_ItemCategory[_0x403293(0x113)][_0x403293(0x204)](_0x5efbc2))_0x541a39=VisuMZ[_0x403293(0x122)][_0x403293(0x1c3)]['Categories'][_0x5efbc2];else{if([_0x403293(0x358),'RegularItems'][_0x403293(0x204)](_0x5efbc2))_0x541a39=TextManager[_0x403293(0x3fa)];else{if(_0x5efbc2==='KeyItems')_0x541a39=TextManager[_0x403293(0x420)];else{if(_0x5efbc2===_0x403293(0x181))_0x541a39=TextManager[_0x403293(0x153)];else{if(_0x5efbc2===_0x403293(0x30a))_0x541a39=TextManager['armor'];else{if(_0x5efbc2[_0x403293(0x364)](/WTYPE:(\d+)/i))_0x541a39=$dataSystem['weaponTypes'][Number(RegExp['$1'])]||'';else{if(_0x5efbc2['match'](/ATYPE:(\d+)/i))_0x541a39=$dataSystem[_0x403293(0xbb)][Number(RegExp['$1'])]||'';else _0x5efbc2[_0x403293(0x364)](/ETYPE:(\d+)/i)&&(_0x541a39=$dataSystem[_0x403293(0x312)][Number(RegExp['$1'])]||'');}}}}}}}if(TextManager[_0x403293(0x3c5)]&&TextManager[_0x403293(0x421)]()){const _0xe98dbb=_0x541a39[_0x403293(0x49f)]()[_0x403293(0x4bf)]();if($dataLocalization[_0xe98dbb]&&_0xe98dbb[_0x403293(0x13b)]>0x0){const _0x518bc1=ConfigManager[_0x403293(0x3aa)]||_0x403293(0x2f2);_0x541a39=$dataLocalization[_0xe98dbb][_0x518bc1]||_0x403293(0x101);}}_0x175617>0x0&&this['categoryStyle']()!=='text'&&(_0x541a39=_0x403293(0x323)[_0x403293(0x288)](_0x175617,_0x541a39)),this[_0x403293(0x205)](_0x541a39,_0x309a94,!![],_0x183bc9);},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x453)]=function(){const _0x4bd902=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x4bd902(0x1c3)][_0x4bd902(0x337)][_0x4bd902(0xf5)];},Window_ItemCategory[_0x354d50(0x384)]['drawItem']=function(_0x221ee2){const _0x4542af=_0x354d50,_0x28851b=this[_0x4542af(0x454)](_0x221ee2);if(_0x28851b===_0x4542af(0x114))this[_0x4542af(0xb5)](_0x221ee2);else _0x28851b===_0x4542af(0x2f1)?this[_0x4542af(0x3da)](_0x221ee2):Window_HorzCommand[_0x4542af(0x384)]['drawItem']['call'](this,_0x221ee2);},Window_ItemCategory['prototype'][_0x354d50(0x3a1)]=function(){const _0x4a5429=_0x354d50;return VisuMZ[_0x4a5429(0x122)]['Settings'][_0x4a5429(0x337)]['Style'];},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x454)]=function(_0x23082f){const _0x3fac2b=_0x354d50;if(_0x23082f<0x0)return _0x3fac2b(0x3a0);const _0x154693=this[_0x3fac2b(0x3a1)]();if(_0x154693!=='auto')return _0x154693;else{const _0x5d7963=this[_0x3fac2b(0x263)](_0x23082f);if(_0x5d7963[_0x3fac2b(0x364)](/\\I\[(\d+)\]/i)){const _0x3ce4c5=this[_0x3fac2b(0x295)](_0x23082f),_0x50fa00=this[_0x3fac2b(0x336)](_0x5d7963)[_0x3fac2b(0x138)];return _0x50fa00<=_0x3ce4c5['width']?_0x3fac2b(0x114):_0x3fac2b(0x2f1);}else return _0x3fac2b(0x3a0);}},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0xb5)]=function(_0x578205){const _0x37b21e=_0x354d50,_0x4ef64f=this[_0x37b21e(0x295)](_0x578205),_0x24308e=this[_0x37b21e(0x263)](_0x578205),_0x33445e=this[_0x37b21e(0x336)](_0x24308e)[_0x37b21e(0x138)];this[_0x37b21e(0x412)](this['isCommandEnabled'](_0x578205));const _0x24645c=this[_0x37b21e(0x453)]();if(_0x24645c==='right')this[_0x37b21e(0x3bb)](_0x24308e,_0x4ef64f['x']+_0x4ef64f[_0x37b21e(0x138)]-_0x33445e,_0x4ef64f['y'],_0x33445e);else{if(_0x24645c==='center'){const _0x2be9a3=_0x4ef64f['x']+Math['floor']((_0x4ef64f[_0x37b21e(0x138)]-_0x33445e)/0x2);this[_0x37b21e(0x3bb)](_0x24308e,_0x2be9a3,_0x4ef64f['y'],_0x33445e);}else this[_0x37b21e(0x3bb)](_0x24308e,_0x4ef64f['x'],_0x4ef64f['y'],_0x33445e);}},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x3da)]=function(_0x3e99db){const _0xc71f38=_0x354d50,_0x9e45db=this[_0xc71f38(0x263)](_0x3e99db);if(_0x9e45db[_0xc71f38(0x364)](/\\I\[(\d+)\]/i)){const _0x4ddfd1=Number(RegExp['$1'])||0x0,_0x5c9fb2=this['itemLineRect'](_0x3e99db),_0x26ead5=_0x5c9fb2['x']+Math['floor']((_0x5c9fb2[_0xc71f38(0x138)]-ImageManager[_0xc71f38(0x25e)])/0x2),_0x3ae089=_0x5c9fb2['y']+(_0x5c9fb2[_0xc71f38(0x1c6)]-ImageManager['iconHeight'])/0x2;this['drawIcon'](_0x4ddfd1,_0x26ead5,_0x3ae089);}},VisuMZ['ItemsEquipsCore']['Window_ItemCategory_setItemWindow']=Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x20e)],Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x20e)]=function(_0x198d9f){const _0x3b4550=_0x354d50;VisuMZ[_0x3b4550(0x122)][_0x3b4550(0x410)][_0x3b4550(0x46a)](this,_0x198d9f),_0x198d9f['_categoryWindow']=this;},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x476)]=function(){const _0x431863=_0x354d50;Window_HorzCommand['prototype'][_0x431863(0x476)][_0x431863(0x46a)](this);if(this[_0x431863(0x440)])this[_0x431863(0x2dd)]();},Window_ItemCategory['prototype'][_0x354d50(0x2dd)]=function(){const _0x1c5f56=_0x354d50,_0x202c96=this[_0x1c5f56(0x440)];_0x202c96[_0x1c5f56(0x484)][_0x1c5f56(0x395)]();const _0x34831a=this[_0x1c5f56(0x454)](this['index']());if(_0x34831a===_0x1c5f56(0x2f1)){const _0x4076a4=this[_0x1c5f56(0x295)](this['index']());let _0x51f1ea=this['commandName'](this[_0x1c5f56(0x1fb)]());_0x51f1ea=_0x51f1ea[_0x1c5f56(0x4b8)](/\\I\[(\d+)\]/gi,''),_0x202c96[_0x1c5f56(0x140)](),this[_0x1c5f56(0x473)](_0x51f1ea,_0x4076a4),this['categoryNameWindowDrawText'](_0x51f1ea,_0x4076a4),this['categoryNameWindowCenter'](_0x51f1ea,_0x4076a4);}},Window_ItemCategory[_0x354d50(0x384)][_0x354d50(0x473)]=function(_0x5eede0,_0x31d25e){},Window_ItemCategory[_0x354d50(0x384)]['categoryNameWindowDrawText']=function(_0x59d95b,_0xf752b4){const _0x25c0fb=_0x354d50,_0x115a71=this[_0x25c0fb(0x440)];_0x115a71['drawText'](_0x59d95b,0x0,_0xf752b4['y'],_0x115a71[_0x25c0fb(0xf6)],_0x25c0fb(0x272));},Window_ItemCategory['prototype'][_0x354d50(0x2a2)]=function(_0x67aeb0,_0x4427e3){const _0x548dae=_0x354d50,_0x257368=this[_0x548dae(0x440)],_0x209b57=$gameSystem[_0x548dae(0x374)](),_0x26455a=_0x4427e3['x']+Math[_0x548dae(0x4c1)](_0x4427e3[_0x548dae(0x138)]/0x2)+_0x209b57;_0x257368['x']=_0x257368['width']/-0x2+_0x26455a,_0x257368['y']=Math[_0x548dae(0x4c1)](_0x4427e3['height']/0x2);},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x45a)]=function(){const _0x55236f=_0x354d50;if(this[_0x55236f(0x1e9)]()){const _0xd56f13=this[_0x55236f(0x1fb)]();if(this[_0x55236f(0x478)]()<=0x1)!this['isHandled'](_0x55236f(0xae))&&Input['isTriggered']('pagedown')&&this[_0x55236f(0x190)](),!this[_0x55236f(0x275)](_0x55236f(0x13f))&&Input[_0x55236f(0x199)](_0x55236f(0x13f))&&this['cursorPageup']();else this['maxCols']()>0x1&&(Input['isRepeated'](_0x55236f(0xbd))&&this[_0x55236f(0xf7)](Input[_0x55236f(0x199)](_0x55236f(0xbd))),Input[_0x55236f(0x340)](_0x55236f(0x464))&&this['cursorLeft'](Input['isTriggered'](_0x55236f(0x464))),this[_0x55236f(0x4c0)]()?(Input[_0x55236f(0x199)](_0x55236f(0xae))&&Input[_0x55236f(0x268)](_0x55236f(0x4d3))&&this[_0x55236f(0x190)](),Input[_0x55236f(0x199)]('pageup')&&Input['isPressed'](_0x55236f(0x4d3))&&this[_0x55236f(0x449)]()):(Input[_0x55236f(0x199)]('pagedown')&&this[_0x55236f(0x190)](),Input[_0x55236f(0x199)](_0x55236f(0x13f))&&this['cursorPageup']()));Input[_0x55236f(0x340)](_0x55236f(0x1ff))&&(Input['isPressed'](_0x55236f(0x4d3))&&this['allowShiftScrolling']()?this[_0x55236f(0x190)]():this[_0x55236f(0x3a7)](Input[_0x55236f(0x199)](_0x55236f(0x1ff)))),Input['isRepeated']('up')&&(Input[_0x55236f(0x268)](_0x55236f(0x4d3))&&this[_0x55236f(0x36b)]()?this[_0x55236f(0x449)]():this['cursorUp'](Input['isTriggered']('up'))),Imported['VisuMZ_0_CoreEngine']&&this[_0x55236f(0x1c5)](),this[_0x55236f(0x1fb)]()!==_0xd56f13&&this[_0x55236f(0x1fc)]();}},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x4c0)]=function(){const _0x2b869c=_0x354d50,_0x3fb9e5=SceneManager[_0x2b869c(0x45c)],_0x53e052=[Scene_Item,Scene_Shop];return _0x53e052['includes'](_0x3fb9e5[_0x2b869c(0x1c2)]);},Window_ItemList['prototype'][_0x354d50(0x4b4)]=function(){const _0x2296c8=_0x354d50;Window_Selectable[_0x2296c8(0x384)][_0x2296c8(0x4b4)][_0x2296c8(0x46a)](this),this[_0x2296c8(0x391)]&&this[_0x2296c8(0x391)][_0x2296c8(0x3b7)]()&&this['_categoryWindow'][_0x2296c8(0x4b4)]();},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x422)]=function(){const _0xe955b8=_0x354d50;Window_Selectable[_0xe955b8(0x384)][_0xe955b8(0x422)][_0xe955b8(0x46a)](this),this['_categoryWindow']&&this[_0xe955b8(0x391)]['isUseModernControls']()&&this[_0xe955b8(0x391)]['deactivate']();},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x4bd)]=function(_0x5810e3){const _0x199661=_0x354d50;this[_0x199661(0x49d)]!==_0x5810e3&&(this['_category']=_0x5810e3,this[_0x199661(0x2cd)](),this[_0x199661(0x391)]&&this[_0x199661(0x391)][_0x199661(0x3b7)]()?this['smoothSelect'](0x0):this[_0x199661(0x35d)](0x0,0x0));},VisuMZ['ItemsEquipsCore'][_0x354d50(0xc7)]=Window_ItemList[_0x354d50(0x384)]['maxCols'],Window_ItemList[_0x354d50(0x384)][_0x354d50(0x478)]=function(){const _0x3504a0=_0x354d50;if(SceneManager['_scene'][_0x3504a0(0x1c2)]===Scene_Battle)return VisuMZ[_0x3504a0(0x122)]['Window_ItemList_maxCols']['call'](this);else return SceneManager[_0x3504a0(0x45c)]['constructor']===Scene_Map?VisuMZ['ItemsEquipsCore']['Window_ItemList_maxCols'][_0x3504a0(0x46a)](this):VisuMZ[_0x3504a0(0x122)]['Settings'][_0x3504a0(0x17d)][_0x3504a0(0x127)];},VisuMZ['ItemsEquipsCore'][_0x354d50(0x215)]=Window_ItemList[_0x354d50(0x384)]['colSpacing'],Window_ItemList[_0x354d50(0x384)][_0x354d50(0x3bc)]=function(){const _0xe83452=_0x354d50;return this['maxCols']()<=0x1?Window_Selectable[_0xe83452(0x384)]['colSpacing'][_0xe83452(0x46a)](this):VisuMZ[_0xe83452(0x122)][_0xe83452(0x215)][_0xe83452(0x46a)](this);},Window_ItemList[_0x354d50(0x384)]['includes']=function(_0x5647cf){const _0x4a9014=_0x354d50;switch(this['_category']){case'AllItems':return DataManager[_0x4a9014(0x448)](_0x5647cf);case _0x4a9014(0x23d):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x3e0)]===0x1;case _0x4a9014(0x4a5):return DataManager['isItem'](_0x5647cf)&&_0x5647cf['itypeId']===0x2;case _0x4a9014(0xb9):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x3e0)]===0x3;case _0x4a9014(0x4b1):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&_0x5647cf['itypeId']===0x4;case _0x4a9014(0x246):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x436)];case _0x4a9014(0x3ef):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&!_0x5647cf['consumable'];case _0x4a9014(0x2e4):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&[0x0][_0x4a9014(0x204)](_0x5647cf['occasion']);case _0x4a9014(0x224):return DataManager['isItem'](_0x5647cf)&&[0x0,0x1]['includes'](_0x5647cf[_0x4a9014(0x1f7)]);case _0x4a9014(0x12e):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&[0x0,0x2]['includes'](_0x5647cf[_0x4a9014(0x1f7)]);case _0x4a9014(0x35e):return DataManager[_0x4a9014(0x448)](_0x5647cf)&&[0x3][_0x4a9014(0x204)](_0x5647cf[_0x4a9014(0x1f7)]);case'AllWeapons':return DataManager['isWeapon'](_0x5647cf);case _0x4a9014(0x30a):return DataManager['isArmor'](_0x5647cf);default:if(this[_0x4a9014(0x49d)][_0x4a9014(0x364)](/WTYPE:(\d+)/i))return DataManager[_0x4a9014(0x249)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x2e2)]===Number(RegExp['$1']);else{if(this[_0x4a9014(0x49d)][_0x4a9014(0x364)](/WTYPE:(.*)/i)){const _0xd21e3d=$dataSystem[_0x4a9014(0x189)][_0x4a9014(0x431)](String(RegExp['$1'])[_0x4a9014(0x4bf)]());return DataManager[_0x4a9014(0x249)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x2e2)]===_0xd21e3d;}else{if(this[_0x4a9014(0x49d)]['match'](/ATYPE:(\d+)/i))return DataManager[_0x4a9014(0x286)](_0x5647cf)&&_0x5647cf['atypeId']===Number(RegExp['$1']);else{if(this[_0x4a9014(0x49d)]['match'](/ATYPE:(.*)/i)){const _0x3c71d8=$dataSystem['armorTypes'][_0x4a9014(0x431)](String(RegExp['$1'])[_0x4a9014(0x4bf)]());return DataManager[_0x4a9014(0x286)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x1d6)]===_0x3c71d8;}else{if(this[_0x4a9014(0x49d)][_0x4a9014(0x364)](/ETYPE:(\d+)/i))return!!_0x5647cf&&_0x5647cf[_0x4a9014(0x45f)]===Number(RegExp['$1']);else{if(this['_category'][_0x4a9014(0x364)](/ETYPE:(.*)/i)){const _0x540603=$dataSystem[_0x4a9014(0x312)][_0x4a9014(0x431)](String(RegExp['$1'])[_0x4a9014(0x4bf)]());return DataManager[_0x4a9014(0x286)](_0x5647cf)&&_0x5647cf[_0x4a9014(0x45f)]===_0x540603;}else{if(this[_0x4a9014(0x49d)][_0x4a9014(0x364)](/Category:(.*)/i))return!!_0x5647cf&&_0x5647cf[_0x4a9014(0x3b9)][_0x4a9014(0x204)](String(RegExp['$1'])['toUpperCase']()['trim']());}}}}}}}return![];},VisuMZ[_0x354d50(0x122)][_0x354d50(0x41d)]=Window_ItemList[_0x354d50(0x384)]['makeItemList'],Window_ItemList['prototype'][_0x354d50(0x2cf)]=function(){const _0x1a7c64=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x1a7c64(0x41d)]['call'](this);if(this[_0x1a7c64(0x3fc)]())this['sortListItemScene']();},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x3fc)]=function(){const _0x4d9414=_0x354d50,_0x1efa28=[_0x4d9414(0x1ee),_0x4d9414(0x423),_0x4d9414(0x32b),'Scene_Shop'],_0x2bd3f5=SceneManager[_0x4d9414(0x45c)];return _0x1efa28[_0x4d9414(0x204)](_0x2bd3f5[_0x4d9414(0x1c2)][_0x4d9414(0x457)]);},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x459)]=function(){const _0x592200=_0x354d50,_0xb29277=Window_ItemCategory['categoryList'],_0x4f9e62=_0xb29277[_0x592200(0x245)](_0x13a8e0=>_0x13a8e0[_0x592200(0x15c)]===this['_category']);if(!_0x4f9e62){VisuMZ[_0x592200(0x122)][_0x592200(0x32c)](this[_0x592200(0x253)]);return;}const _0x47d1fb=((_0x4f9e62[_0x592200(0x1a1)]??'ID')||'ID')[_0x592200(0xe6)]()[_0x592200(0x4bf)]();_0x47d1fb===_0x592200(0x1d3)?this[_0x592200(0x253)][_0x592200(0x386)]((_0x77b7a7,_0x3c1341)=>{const _0x459787=_0x592200;if(!!_0x77b7a7&&!!_0x3c1341)return _0x77b7a7[_0x459787(0x457)][_0x459787(0x136)](_0x3c1341[_0x459787(0x457)]);return 0x0;}):VisuMZ[_0x592200(0x122)]['SortByIDandPriority'](this[_0x592200(0x253)]);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x32c)]=function(_0x385228){const _0x29d4af=_0x354d50;return _0x385228[_0x29d4af(0x386)]((_0x2a987c,_0x4228fe)=>{const _0x228676=_0x29d4af;if(!!_0x2a987c&&!!_0x4228fe){if(_0x2a987c[_0x228676(0xb4)]===undefined)VisuMZ[_0x228676(0x122)][_0x228676(0x211)](_0x2a987c);if(_0x4228fe[_0x228676(0xb4)]===undefined)VisuMZ[_0x228676(0x122)][_0x228676(0x211)](_0x4228fe);const _0x35a5f1=_0x2a987c[_0x228676(0xb4)],_0x2c6c16=_0x4228fe[_0x228676(0xb4)];if(_0x35a5f1!==_0x2c6c16)return _0x2c6c16-_0x35a5f1;return _0x2a987c['id']-_0x4228fe['id'];}return 0x0;}),_0x385228;},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x488)]=function(){return!![];},VisuMZ['ItemsEquipsCore']['Window_ItemList_drawItem']=Window_ItemList['prototype']['drawItem'],Window_ItemList[_0x354d50(0x384)][_0x354d50(0x1ea)]=function(_0x3f2f3f){const _0x33df73=_0x354d50;VisuMZ[_0x33df73(0x122)]['Window_ItemList_drawItem'][_0x33df73(0x46a)](this,_0x3f2f3f),this[_0x33df73(0xc2)](_0x3f2f3f);},Window_ItemList['prototype']['drawItemNumber']=function(_0x4516de,_0x2ccea1,_0x3e14d1,_0x579f49){const _0x234554=_0x354d50;Window_Selectable[_0x234554(0x384)]['drawItemNumber'][_0x234554(0x46a)](this,_0x4516de,_0x2ccea1,_0x3e14d1,_0x579f49);},Window_ItemList['prototype'][_0x354d50(0xc2)]=function(_0x24b38c){const _0x5ae77a=_0x354d50,_0x280ad4=this[_0x5ae77a(0x2df)](_0x24b38c);if(!_0x280ad4||!this['isShowNew']())return;if(!$gameParty['isNewItem'](_0x280ad4))return;const _0x523dcb=this[_0x5ae77a(0x295)](_0x24b38c),_0x52619a=_0x523dcb['x'],_0x24f091=_0x523dcb['y']+(this[_0x5ae77a(0x148)]()-ImageManager[_0x5ae77a(0x172)])/0x2,_0x259b04=VisuMZ[_0x5ae77a(0x122)][_0x5ae77a(0x1c3)][_0x5ae77a(0x29a)][_0x5ae77a(0x31a)],_0x5021b3=VisuMZ['ItemsEquipsCore']['Settings'][_0x5ae77a(0x29a)][_0x5ae77a(0xd4)];this[_0x5ae77a(0x229)](_0x280ad4,_0x52619a+_0x259b04,_0x24f091+_0x5021b3);},Window_ItemList[_0x354d50(0x384)][_0x354d50(0x382)]=function(_0x2bae01){const _0x1f8706=_0x354d50;this['_statusWindow']=_0x2bae01,this[_0x1f8706(0x476)]();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x223)]=Window_ItemList['prototype'][_0x354d50(0x3f7)],Window_ItemList['prototype'][_0x354d50(0x3f7)]=function(){const _0x24ec5e=_0x354d50;VisuMZ[_0x24ec5e(0x122)]['Window_ItemList_updateHelp'][_0x24ec5e(0x46a)](this),this[_0x24ec5e(0x326)]&&this[_0x24ec5e(0x326)][_0x24ec5e(0x1c2)]===Window_ShopStatus&&this[_0x24ec5e(0x326)][_0x24ec5e(0x151)](this[_0x24ec5e(0x3fa)]());},Window_BattleItem[_0x354d50(0x384)][_0x354d50(0x1e4)]=function(_0x187ad1){const _0xbc6196=_0x354d50;return BattleManager[_0xbc6196(0xe1)]()?BattleManager[_0xbc6196(0xe1)]()[_0xbc6196(0x452)](_0x187ad1):Window_ItemList[_0xbc6196(0x384)]['isEnabled'][_0xbc6196(0x46a)](this,_0x187ad1);},Window_EventItem[_0x354d50(0x384)][_0x354d50(0x488)]=function(){return![];},Window_EquipStatus[_0x354d50(0x384)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x47ebe1=_0x354d50;return VisuMZ[_0x47ebe1(0x122)][_0x47ebe1(0x1c3)][_0x47ebe1(0x217)][_0x47ebe1(0x318)];},VisuMZ['ItemsEquipsCore'][_0x354d50(0x1d0)]=Window_EquipStatus['prototype'][_0x354d50(0x2cd)],Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x2cd)]=function(){const _0xbd8986=_0x354d50;this['hideAdditionalSprites'](),this[_0xbd8986(0x140)]();if(this[_0xbd8986(0x143)])this[_0xbd8986(0x143)][_0xbd8986(0x2cd)]();this[_0xbd8986(0x481)]()?this[_0xbd8986(0x1bf)]():VisuMZ[_0xbd8986(0x122)][_0xbd8986(0x1d0)][_0xbd8986(0x46a)](this);},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x1bf)]=function(){const _0x3ac3b2=_0x354d50;this[_0x3ac3b2(0x484)][_0x3ac3b2(0x395)]();if(!this[_0x3ac3b2(0x143)])return;if(this[_0x3ac3b2(0x2ce)]()){const _0x58732d=ImageManager['loadPicture'](this[_0x3ac3b2(0x143)][_0x3ac3b2(0x206)]());_0x58732d[_0x3ac3b2(0x2b4)](this[_0x3ac3b2(0x430)][_0x3ac3b2(0x3f0)](this));}else this[_0x3ac3b2(0x21a)]();},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x2ce)]=function(){const _0x355391=_0x354d50;return Imported[_0x355391(0x1ac)]&&this[_0x355391(0x143)][_0x355391(0x206)]()!==''&&VisuMZ[_0x355391(0x122)][_0x355391(0x1c3)]['EquipScene'][_0x355391(0x180)];},Window_EquipStatus[_0x354d50(0x384)]['onMenuImageLoad']=function(){const _0x58028d=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x58028d(0x1c3)]['EquipScene'][_0x58028d(0x360)][_0x58028d(0x46a)](this),this[_0x58028d(0x4b7)]();},Window_EquipStatus['prototype'][_0x354d50(0x21a)]=function(){const _0x7117bf=_0x354d50;VisuMZ[_0x7117bf(0x122)][_0x7117bf(0x1c3)][_0x7117bf(0x217)][_0x7117bf(0x429)]['call'](this),this[_0x7117bf(0x4b7)]();},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x4b7)]=function(){const _0x4f4d14=_0x354d50;this['resetFontSettings'](),VisuMZ['ItemsEquipsCore'][_0x4f4d14(0x1c3)][_0x4f4d14(0x217)][_0x4f4d14(0x27c)][_0x4f4d14(0x46a)](this);},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x228)]=function(_0xa49c56,_0x18fe83,_0x3bb4c7,_0x14052d,_0x4686d8){const _0x364520=_0x354d50,_0x45cfd8=ImageManager[_0x364520(0x2c0)](_0xa49c56[_0x364520(0x206)]()),_0x30e69b=this[_0x364520(0xf6)]-_0x45cfd8['width'];_0x18fe83+=_0x30e69b/0x2;if(_0x30e69b<0x0)_0x14052d-=_0x30e69b;Window_StatusBase[_0x364520(0x384)]['drawItemActorMenuImage']['call'](this,_0xa49c56,_0x18fe83,_0x3bb4c7,_0x14052d,_0x4686d8);},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x1e3)]=function(){const _0x4aea98=_0x354d50;return Imported[_0x4aea98(0x100)]?VisuMZ['CoreEngine'][_0x4aea98(0x1c3)][_0x4aea98(0x316)][_0x4aea98(0x161)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x418)]=function(){const _0x904d35=_0x354d50;return VisuMZ[_0x904d35(0x122)][_0x904d35(0x1c3)][_0x904d35(0x217)]['ParamValueFontSize'];},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x1f0)]=function(){const _0x3a3bf7=_0x354d50;return Imported[_0x3a3bf7(0x100)]&&VisuMZ['CoreEngine']['Settings']['Param']['DrawIcons'];},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x1e5)]=function(_0x5a89fa,_0xbb3936,_0x354804,_0x4ae4cc){const _0x78cda6=_0x354d50,_0x4f2d31=this[_0x78cda6(0x240)]();Imported[_0x78cda6(0x100)]?this[_0x78cda6(0x405)](_0xbb3936+_0x4f2d31,_0x354804,_0x4ae4cc,_0x5a89fa,![]):this['drawText'](TextManager[_0x78cda6(0x15e)](_0x5a89fa),_0xbb3936+_0x4f2d31,_0x354804,_0x4ae4cc);},Window_EquipStatus['prototype'][_0x354d50(0x271)]=function(_0x40b875,_0x5ad6f3,_0x3c5395,_0x27a962){const _0x2c87ae=_0x354d50,_0x8eccc2=this[_0x2c87ae(0x240)]();let _0x40dd27=0x0;Imported[_0x2c87ae(0x100)]?_0x40dd27=this[_0x2c87ae(0x143)][_0x2c87ae(0x34a)](_0x40b875,!![]):_0x40dd27=this[_0x2c87ae(0x143)]['param'](_0x40b875);const _0x504d2c=_0x40dd27;this[_0x2c87ae(0x125)](_0x40dd27,_0x5ad6f3,_0x3c5395,_0x27a962-_0x8eccc2,_0x2c87ae(0xbd));},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x2bb)]=function(_0xf757ca,_0x563f5a,_0x5ec75e,_0x470c11){const _0x329055=_0x354d50,_0x331103=this[_0x329055(0x240)]();let _0x429ecc=0x0,_0x597c11=0x0,_0x13bc4e='';if(this[_0x329055(0xe5)]){Imported['VisuMZ_0_CoreEngine']?(_0x429ecc=this['_actor'][_0x329055(0x34a)](_0xf757ca,![]),_0x597c11=this['_tempActor'][_0x329055(0x34a)](_0xf757ca,![]),_0x13bc4e=this[_0x329055(0xe5)][_0x329055(0x34a)](_0xf757ca,!![])):(_0x429ecc=this[_0x329055(0x143)][_0x329055(0x15e)](_0xf757ca),_0x597c11=this['_tempActor']['param'](_0xf757ca),_0x13bc4e=this[_0x329055(0xe5)]['param'](_0xf757ca));const _0x4e39b8=_0x429ecc,_0x41181b=_0x597c11;diffValue=_0x41181b-_0x4e39b8,this['changeTextColor'](ColorManager[_0x329055(0x1b5)](diffValue)),this['drawText'](_0x13bc4e,_0x563f5a,_0x5ec75e,_0x470c11-_0x331103,_0x329055(0xbd));}},Window_EquipStatus[_0x354d50(0x384)][_0x354d50(0x107)]=function(_0x2de048,_0x137c90,_0x346776,_0x4eceae){const _0x32b3e2=_0x354d50,_0x168db9=this[_0x32b3e2(0x240)]();let _0x480472=0x0,_0x1fee33=0x0,_0x5f0827=![];if(this[_0x32b3e2(0xe5)]){Imported[_0x32b3e2(0x100)]?(_0x480472=this[_0x32b3e2(0x143)][_0x32b3e2(0x34a)](_0x2de048,![]),_0x1fee33=this[_0x32b3e2(0xe5)][_0x32b3e2(0x34a)](_0x2de048,![]),_0x5f0827=String(this[_0x32b3e2(0x143)]['paramValueByName'](_0x2de048,!![]))[_0x32b3e2(0x364)](/([%％])/i)):(_0x480472=this['_actor'][_0x32b3e2(0x15e)](_0x2de048),_0x1fee33=this['_tempActor'][_0x32b3e2(0x15e)](_0x2de048),_0x5f0827=_0x480472%0x1!==0x0||_0x1fee33%0x1!==0x0);const _0x499891=_0x480472,_0x1693b2=_0x1fee33,_0x10674b=_0x1693b2-_0x499891;let _0x5aa2a8=_0x10674b;if(_0x5f0827)_0x5aa2a8=Math[_0x32b3e2(0x2c9)](_0x10674b*0x64)+'%';_0x10674b!==0x0&&(this[_0x32b3e2(0xf2)](ColorManager[_0x32b3e2(0x1b5)](_0x10674b)),_0x5aa2a8=(_0x10674b>0x0?'(+%1)':'(%1)')[_0x32b3e2(0x288)](_0x5aa2a8),this['drawText'](_0x5aa2a8,_0x137c90+_0x168db9,_0x346776,_0x4eceae,_0x32b3e2(0x464)));}},Window_EquipStatus['prototype'][_0x354d50(0x3dc)]=function(_0x4974fc,_0x410b6d,_0x51cc43,_0x53eb1c,_0x58019d){const _0x16fd0e=_0x354d50;if(VisuMZ[_0x16fd0e(0x122)][_0x16fd0e(0x1c3)][_0x16fd0e(0x217)][_0x16fd0e(0x28c)]===![])return;_0x58019d=Math[_0x16fd0e(0x354)](_0x58019d||0x1,0x1);while(_0x58019d--){_0x53eb1c=_0x53eb1c||this[_0x16fd0e(0x148)](),this[_0x16fd0e(0x484)]['paintOpacity']=0xa0;const _0x5d4cbf=ColorManager[_0x16fd0e(0x1a4)]();this['contents'][_0x16fd0e(0x461)](_0x4974fc+0x1,_0x410b6d+0x1,_0x51cc43-0x2,_0x53eb1c-0x2,_0x5d4cbf),this[_0x16fd0e(0x484)]['paintOpacity']=0xff;}},ColorManager['getItemsEquipsCoreBackColor2']=function(){const _0x5208a9=_0x354d50,_0x45f20b=VisuMZ[_0x5208a9(0x122)][_0x5208a9(0x1c3)][_0x5208a9(0x217)];let _0x47a8a6=_0x45f20b[_0x5208a9(0x299)]!==undefined?_0x45f20b[_0x5208a9(0x299)]:0x13;return ColorManager[_0x5208a9(0x3b5)](_0x47a8a6);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x394)]=Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x1b4)],Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x1b4)]=function(_0x2d21dd){const _0x48209d=_0x354d50;VisuMZ['ItemsEquipsCore'][_0x48209d(0x394)][_0x48209d(0x46a)](this,_0x2d21dd),this[_0x48209d(0x19a)](_0x2d21dd);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x19a)]=function(_0x1c4cf6){const _0x4bdd86=_0x354d50,_0xa2cb04=new Rectangle(0x0,0x0,_0x1c4cf6['width'],_0x1c4cf6[_0x4bdd86(0x1c6)]);this[_0x4bdd86(0x417)]=new Window_Base(_0xa2cb04),this[_0x4bdd86(0x417)]['opacity']=0x0,this[_0x4bdd86(0x2e1)](this[_0x4bdd86(0x417)]),this[_0x4bdd86(0x184)]();},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x476)]=function(){const _0x4c80fd=_0x354d50;Window_HorzCommand[_0x4c80fd(0x384)][_0x4c80fd(0x476)]['call'](this);if(this[_0x4c80fd(0x417)])this[_0x4c80fd(0x184)]();},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x184)]=function(){const _0x335ea1=_0x354d50,_0x50c87f=this[_0x335ea1(0x417)];_0x50c87f[_0x335ea1(0x484)][_0x335ea1(0x395)]();const _0x558a87=this[_0x335ea1(0x139)](this[_0x335ea1(0x1fb)]());if(_0x558a87===_0x335ea1(0x2f1)){const _0x2589bb=this[_0x335ea1(0x295)](this['index']());let _0x5b84b0=this[_0x335ea1(0x263)](this['index']());_0x5b84b0=_0x5b84b0['replace'](/\\I\[(\d+)\]/gi,''),_0x50c87f[_0x335ea1(0x140)](),this[_0x335ea1(0xe0)](_0x5b84b0,_0x2589bb),this['commandNameWindowDrawText'](_0x5b84b0,_0x2589bb),this[_0x335ea1(0x35c)](_0x5b84b0,_0x2589bb);}},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0xe0)]=function(_0x475da4,_0x4a89b2){},Window_EquipCommand[_0x354d50(0x384)]['commandNameWindowDrawText']=function(_0x781cba,_0x2b8f8e){const _0xb5e1dd=_0x354d50,_0x386f5b=this['_commandNameWindow'];_0x386f5b[_0xb5e1dd(0x125)](_0x781cba,0x0,_0x2b8f8e['y'],_0x386f5b[_0xb5e1dd(0xf6)],_0xb5e1dd(0x272));},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x35c)]=function(_0x1f82c9,_0x19c546){const _0x1c00c2=_0x354d50,_0x55b35a=this[_0x1c00c2(0x417)],_0x5962ec=$gameSystem[_0x1c00c2(0x374)](),_0x187954=_0x19c546['x']+Math['floor'](_0x19c546[_0x1c00c2(0x138)]/0x2)+_0x5962ec;_0x55b35a['x']=_0x55b35a[_0x1c00c2(0x138)]/-0x2+_0x187954,_0x55b35a['y']=Math['floor'](_0x19c546[_0x1c00c2(0x1c6)]/0x2);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x3b7)]=function(){const _0xb939c0=_0x354d50;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand['prototype'][_0xb939c0(0x3b7)]['call'](this);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x35b)]=function(){const _0x462c2d=_0x354d50;if(this[_0x462c2d(0x213)]()==='equip')Window_HorzCommand['prototype']['playOkSound'][_0x462c2d(0x46a)](this);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x45a)]=function(){const _0x9b728c=_0x354d50;!this[_0x9b728c(0x1aa)]()&&Window_HorzCommand[_0x9b728c(0x384)][_0x9b728c(0x45a)]['call'](this);},Window_EquipCommand[_0x354d50(0x384)]['processCursorSpecialCheckModernControls']=function(){const _0x556805=_0x354d50;if(!this[_0x556805(0x1e9)]())return![];if(SceneManager[_0x556805(0x45c)][_0x556805(0x1c2)]!==Scene_Equip)return![];return Input[_0x556805(0x199)](_0x556805(0x1ff))&&this[_0x556805(0x362)](),![];},Window_EquipCommand['prototype'][_0x354d50(0x362)]=function(){const _0x1e6da1=_0x354d50;this[_0x1e6da1(0x1fc)](),SceneManager[_0x1e6da1(0x45c)][_0x1e6da1(0x338)](),SceneManager[_0x1e6da1(0x45c)]['_slotWindow'][_0x1e6da1(0x1f4)](-0x1);},Window_EquipCommand['prototype'][_0x354d50(0x478)]=function(){const _0x17d531=_0x354d50;return this[_0x17d531(0x380)]?this['_list']['length']:0x3;},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x3f3)]=function(){const _0x519e14=_0x354d50;if(this[_0x519e14(0x4dd)]()&&this[_0x519e14(0x2f0)]&&SceneManager[_0x519e14(0x45c)][_0x519e14(0x1c2)]===Scene_Equip){if(this[_0x519e14(0x1b0)]()&&TouchInput[_0x519e14(0x2c3)]())this['onTouchSelectModernControls'](![]);else TouchInput[_0x519e14(0x199)]()&&this['onTouchSelectModernControls'](!![]);TouchInput[_0x519e14(0x15a)]()&&this[_0x519e14(0x2ae)]();}},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x30f)]=function(_0x3e4f68){const _0x3152e2=_0x354d50;this[_0x3152e2(0x1b7)]=![];const _0x7027e3=this[_0x3152e2(0x1fb)](),_0x27be90=this[_0x3152e2(0x27b)](),_0x19ea1e=SceneManager[_0x3152e2(0x45c)][_0x3152e2(0x280)];if(_0x19ea1e[_0x3152e2(0x4dd)]()&&_0x19ea1e[_0x3152e2(0x2f0)]){if(_0x27be90>=0x0)_0x27be90===this[_0x3152e2(0x1fb)]()&&(this[_0x3152e2(0x1b7)]=!![]),this[_0x3152e2(0x4b4)](),this['select'](_0x27be90);else _0x19ea1e[_0x3152e2(0x27b)]()>=0x0&&(this['deactivate'](),this[_0x3152e2(0xb7)]());}_0x3e4f68&&this['index']()!==_0x7027e3&&this[_0x3152e2(0x1fc)]();},Window_EquipCommand[_0x354d50(0x384)]['makeCommandList']=function(){this['addEquipCommand'](),this['addOptimizeCommand'](),this['addClearCommand']();},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x2cd)]=function(){const _0x1da3a9=_0x354d50;Window_HorzCommand[_0x1da3a9(0x384)]['refresh'][_0x1da3a9(0x46a)](this),this[_0x1da3a9(0x44c)]();},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x254)]=function(){const _0x33887d=_0x354d50;if(!this[_0x33887d(0x269)]())return;const _0x205c89=this[_0x33887d(0x2c1)](),_0x544da7=VisuMZ[_0x33887d(0x122)][_0x33887d(0x1c3)][_0x33887d(0x217)][_0x33887d(0x2d1)],_0x44799f=_0x205c89===_0x33887d(0x3a0)?TextManager[_0x33887d(0x2c8)]:_0x33887d(0x323)[_0x33887d(0x288)](_0x544da7,TextManager[_0x33887d(0x2c8)]),_0x44d6df=this[_0x33887d(0x378)]();this[_0x33887d(0x205)](_0x44799f,'equip',_0x44d6df);},Window_EquipCommand[_0x354d50(0x384)]['isEquipCommandAdded']=function(){const _0x1d98d3=_0x354d50;return!this[_0x1d98d3(0x3b7)]();},Window_EquipCommand['prototype'][_0x354d50(0x378)]=function(){return!![];},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x155)]=function(){const _0x1c0567=_0x354d50;if(!this[_0x1c0567(0xda)]())return;const _0x3b2ef5=this['commandStyle'](),_0x1661b1=VisuMZ[_0x1c0567(0x122)][_0x1c0567(0x1c3)][_0x1c0567(0x217)][_0x1c0567(0x392)],_0x387113=_0x3b2ef5===_0x1c0567(0x3a0)?TextManager[_0x1c0567(0x311)]:_0x1c0567(0x323)['format'](_0x1661b1,TextManager[_0x1c0567(0x311)]),_0x383716=this[_0x1c0567(0x297)]();this['addCommand'](_0x387113,_0x1c0567(0x311),_0x383716);},Window_EquipCommand['prototype'][_0x354d50(0xda)]=function(){const _0x3a6037=_0x354d50;return VisuMZ[_0x3a6037(0x122)][_0x3a6037(0x1c3)][_0x3a6037(0x217)][_0x3a6037(0xc6)];},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x297)]=function(){return!![];},Window_EquipCommand['prototype'][_0x354d50(0x3f1)]=function(){const _0x150af7=_0x354d50;if(!this[_0x150af7(0x47b)]())return;const _0x475e88=this[_0x150af7(0x2c1)](),_0x232cc7=VisuMZ[_0x150af7(0x122)][_0x150af7(0x1c3)][_0x150af7(0x217)][_0x150af7(0x19f)],_0x1b05ba=_0x475e88===_0x150af7(0x3a0)?TextManager[_0x150af7(0x395)]:_0x150af7(0x323)[_0x150af7(0x288)](_0x232cc7,TextManager[_0x150af7(0x395)]),_0x104c0e=this['isClearCommandEnabled']();this[_0x150af7(0x205)](_0x1b05ba,_0x150af7(0x395),_0x104c0e);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x47b)]=function(){const _0x561d2d=_0x354d50;return VisuMZ[_0x561d2d(0x122)][_0x561d2d(0x1c3)]['EquipScene'][_0x561d2d(0x37a)];},Window_EquipCommand['prototype']['isClearCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x453)]=function(){const _0x4735ba=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x4735ba(0x1c3)][_0x4735ba(0x217)]['CmdTextAlign'];},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x1ea)]=function(_0x6165d8){const _0x24a53e=_0x354d50,_0x2161f3=this['commandStyleCheck'](_0x6165d8);if(_0x2161f3===_0x24a53e(0x114))this['drawItemStyleIconText'](_0x6165d8);else _0x2161f3===_0x24a53e(0x2f1)?this[_0x24a53e(0x3da)](_0x6165d8):Window_HorzCommand[_0x24a53e(0x384)][_0x24a53e(0x1ea)]['call'](this,_0x6165d8);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x2c1)]=function(){const _0x5bf48e=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x5bf48e(0x1c3)]['EquipScene'][_0x5bf48e(0x4d0)];},Window_EquipCommand[_0x354d50(0x384)]['commandStyleCheck']=function(_0x327127){const _0x74aa24=_0x354d50;if(_0x327127<0x0)return _0x74aa24(0x3a0);const _0x3d8c71=this[_0x74aa24(0x2c1)]();if(_0x3d8c71!==_0x74aa24(0x137))return _0x3d8c71;else{if(this['maxItems']()>0x0){const _0xa5a95b=this[_0x74aa24(0x263)](_0x327127);if(_0xa5a95b[_0x74aa24(0x364)](/\\I\[(\d+)\]/i)){const _0x18ca46=this[_0x74aa24(0x295)](_0x327127),_0x5a50b6=this[_0x74aa24(0x336)](_0xa5a95b)[_0x74aa24(0x138)];return _0x5a50b6<=_0x18ca46[_0x74aa24(0x138)]?_0x74aa24(0x114):_0x74aa24(0x2f1);}}}return _0x74aa24(0x3a0);},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0xb5)]=function(_0xfcd294){const _0x32ca32=_0x354d50,_0x302f15=this[_0x32ca32(0x295)](_0xfcd294),_0x17d080=this['commandName'](_0xfcd294),_0x32fa16=this[_0x32ca32(0x336)](_0x17d080)[_0x32ca32(0x138)];this['changePaintOpacity'](this[_0x32ca32(0x343)](_0xfcd294));const _0xe85efb=this[_0x32ca32(0x453)]();if(_0xe85efb===_0x32ca32(0xbd))this['drawTextEx'](_0x17d080,_0x302f15['x']+_0x302f15['width']-_0x32fa16,_0x302f15['y'],_0x32fa16);else{if(_0xe85efb===_0x32ca32(0x272)){const _0x2a7a0b=_0x302f15['x']+Math['floor']((_0x302f15[_0x32ca32(0x138)]-_0x32fa16)/0x2);this[_0x32ca32(0x3bb)](_0x17d080,_0x2a7a0b,_0x302f15['y'],_0x32fa16);}else this['drawTextEx'](_0x17d080,_0x302f15['x'],_0x302f15['y'],_0x32fa16);}},Window_EquipCommand['prototype'][_0x354d50(0x3da)]=function(_0x5b65eb){const _0x33278b=_0x354d50;this[_0x33278b(0x263)](_0x5b65eb)[_0x33278b(0x364)](/\\I\[(\d+)\]/i);const _0x1e4066=Number(RegExp['$1'])||0x0,_0x45a39c=this[_0x33278b(0x295)](_0x5b65eb),_0x59ad8e=_0x45a39c['x']+Math[_0x33278b(0x4c1)]((_0x45a39c[_0x33278b(0x138)]-ImageManager[_0x33278b(0x25e)])/0x2),_0x24d3e8=_0x45a39c['y']+(_0x45a39c[_0x33278b(0x1c6)]-ImageManager['iconHeight'])/0x2;this[_0x33278b(0x305)](_0x1e4066,_0x59ad8e,_0x24d3e8);},Window_EquipCommand['prototype'][_0x354d50(0xe1)]=function(){const _0x53401e=_0x354d50,_0x46e762=SceneManager[_0x53401e(0x45c)];if(_0x46e762&&_0x46e762[_0x53401e(0x491)])return _0x46e762[_0x53401e(0x491)]();return null;},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x3f7)]=function(){const _0x1af7fd=_0x354d50;Window_Command[_0x1af7fd(0x384)][_0x1af7fd(0x3f7)][_0x1af7fd(0x46a)](this),this['_helpWindow'][_0x1af7fd(0x42b)](this[_0x1af7fd(0x1f9)]());},Window_EquipCommand[_0x354d50(0x384)][_0x354d50(0x1f9)]=function(){const _0x130ffd=_0x354d50,_0x27b303=this[_0x130ffd(0x213)]();switch(_0x27b303){case _0x130ffd(0x4ae):return TextManager[_0x130ffd(0x193)][_0x130ffd(0x293)][_0x130ffd(0x4ae)];case _0x130ffd(0x311):return TextManager['ITEMS_EQUIPS_CORE'][_0x130ffd(0x293)][_0x130ffd(0x311)];case'clear':return TextManager[_0x130ffd(0x193)][_0x130ffd(0x293)]['clear'];default:return'';}},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x3b7)]=function(){const _0x3aca32=_0x354d50;return Imported[_0x3aca32(0x100)]&&Window_HorzCommand[_0x3aca32(0x384)]['isUseModernControls'][_0x3aca32(0x46a)](this);},Window_EquipSlot[_0x354d50(0x384)]['activate']=function(){const _0x34e228=_0x354d50;Window_StatusBase[_0x34e228(0x384)][_0x34e228(0x4b4)][_0x34e228(0x46a)](this),this[_0x34e228(0x476)]();},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x1df)]=function(){const _0x419fc3=_0x354d50;Window_StatusBase['prototype'][_0x419fc3(0x1df)][_0x419fc3(0x46a)](this),this[_0x419fc3(0x3d9)]();},Window_EquipSlot['prototype']['checkShiftRemoveShortcut']=function(){const _0x3ff01a=_0x354d50;if(!this[_0x3ff01a(0x162)]())return;if(Input[_0x3ff01a(0x199)](_0x3ff01a(0x4d3))&&this[_0x3ff01a(0x3fa)]()){const _0x38775a=SceneManager[_0x3ff01a(0x45c)][_0x3ff01a(0x143)];_0x38775a&&(this[_0x3ff01a(0xbe)](this[_0x3ff01a(0x1fb)]())?(this['processShiftRemoveShortcut'](),this[_0x3ff01a(0x3f7)]()):this[_0x3ff01a(0x47c)]());}},Window_EquipSlot[_0x354d50(0x384)]['canShiftRemoveEquipment']=function(_0x5a2fd8){const _0x2da5a9=_0x354d50,_0x52f400=SceneManager['_scene'][_0x2da5a9(0x143)];if(!_0x52f400)return;if(!_0x52f400[_0x2da5a9(0x163)](_0x5a2fd8))return![];const _0x38edcb=_0x52f400['equipSlots']()[_0x5a2fd8];if(_0x52f400[_0x2da5a9(0x3b3)]()['includes'](_0x38edcb))return![];return!![];;},Window_EquipSlot[_0x354d50(0x384)]['processShiftRemoveShortcut']=function(){const _0x2f29fa=_0x354d50;SoundManager[_0x2f29fa(0x47a)]();const _0x16d834=SceneManager['_scene'][_0x2f29fa(0x143)];_0x16d834[_0x2f29fa(0x3f5)](this[_0x2f29fa(0x1fb)](),null),this[_0x2f29fa(0x2cd)](),this[_0x2f29fa(0x4a4)][_0x2f29fa(0x2cd)](),this['callUpdateHelp']();const _0x27bcf2=SceneManager[_0x2f29fa(0x45c)][_0x2f29fa(0x326)];if(_0x27bcf2)_0x27bcf2[_0x2f29fa(0x2cd)]();},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x162)]=function(){const _0x1fb94d=_0x354d50;if(!this[_0x1fb94d(0xc8)])return![];if(!VisuMZ[_0x1fb94d(0x122)][_0x1fb94d(0x1c3)]['EquipScene']['ShiftShortcutKey'])return![];return!![];},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x45a)]=function(){const _0x472391=_0x354d50;!this[_0x472391(0x1aa)]()&&Window_StatusBase[_0x472391(0x384)]['processCursorMoveModernControls'][_0x472391(0x46a)](this);},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x1aa)]=function(){const _0x2d8d60=_0x354d50;if(!this[_0x2d8d60(0x1e9)]())return![];if(SceneManager[_0x2d8d60(0x45c)][_0x2d8d60(0x1c2)]!==Scene_Equip)return![];if(this[_0x2d8d60(0x26d)]())return this['playCursorSound'](),Input[_0x2d8d60(0x395)](),SceneManager[_0x2d8d60(0x45c)][_0x2d8d60(0x29f)](),![];else{if(Input['isRepeated'](_0x2d8d60(0x1ff))){const _0x4a7363=this[_0x2d8d60(0x1fb)]();return Input[_0x2d8d60(0x268)](_0x2d8d60(0x4d3))?this['cursorPagedown']():this['cursorDown'](Input[_0x2d8d60(0x199)](_0x2d8d60(0x1ff))),this[_0x2d8d60(0x1fb)]()!==_0x4a7363&&this['playCursorSound'](),!![];}else{if(this[_0x2d8d60(0x3e9)]()&&Input[_0x2d8d60(0x199)](_0x2d8d60(0x4d3)))return!![];}}return![];},Window_EquipSlot['prototype']['allowCommandWindowCursorUp']=function(){const _0x3898a8=_0x354d50;if(this['index']()!==0x0)return![];const _0x407c62=VisuMZ['ItemsEquipsCore'][_0x3898a8(0x1c3)][_0x3898a8(0x217)];if(!_0x407c62[_0x3898a8(0xc6)]&&!_0x407c62[_0x3898a8(0x37a)])return![];return Input[_0x3898a8(0x199)]('up');},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x3e9)]=function(){const _0x21ae43=_0x354d50;return VisuMZ[_0x21ae43(0x122)][_0x21ae43(0x1c3)][_0x21ae43(0x217)]['ShiftShortcutKey'];},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x3f3)]=function(){const _0x51d765=_0x354d50;if(this['isOpen']()&&this[_0x51d765(0x2f0)]&&SceneManager[_0x51d765(0x45c)][_0x51d765(0x1c2)]===Scene_Equip){if(this[_0x51d765(0x1b0)]()&&TouchInput[_0x51d765(0x2c3)]())this[_0x51d765(0x30f)](![]);else TouchInput[_0x51d765(0x199)]()&&this[_0x51d765(0x30f)](!![]);if(TouchInput[_0x51d765(0x15a)]())this[_0x51d765(0x2ae)]();else{if(TouchInput['isCancelled']()){const _0x1fef38=VisuMZ['ItemsEquipsCore']['Settings'][_0x51d765(0x217)];this[_0x51d765(0x3b7)]()&&this[_0x51d765(0xc8)]&&!_0x1fef38[_0x51d765(0xc6)]&&!_0x1fef38[_0x51d765(0x37a)]?(SoundManager[_0x51d765(0x22b)](),SceneManager['pop']()):this['onTouchCancel']();}}}},Window_EquipSlot[_0x354d50(0x384)]['onTouchSelectModernControls']=function(_0x4e9cbe){const _0x48f421=_0x354d50;this['_doubleTouch']=![];const _0x21f806=this['index'](),_0x842409=this[_0x48f421(0x27b)](),_0x5eacfe=SceneManager[_0x48f421(0x45c)][_0x48f421(0x1af)];if(_0x5eacfe[_0x48f421(0x4dd)]()&&_0x5eacfe[_0x48f421(0x2f0)]){if(_0x842409>=0x0)_0x842409===this[_0x48f421(0x1fb)]()&&(this[_0x48f421(0x1b7)]=!![]),this[_0x48f421(0x4b4)](),this[_0x48f421(0x3c7)](_0x842409),_0x5eacfe['deactivate']();else _0x5eacfe[_0x48f421(0x27b)]()>=0x0&&(this[_0x48f421(0x422)](),this[_0x48f421(0xb7)](),_0x5eacfe[_0x48f421(0x4b4)]());}_0x4e9cbe&&this[_0x48f421(0x1fb)]()!==_0x21f806&&this[_0x48f421(0x1fc)]();},Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x126)]=function(){return this['index']();},VisuMZ[_0x354d50(0x122)][_0x354d50(0x387)]=Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x1e4)],Window_EquipSlot[_0x354d50(0x384)][_0x354d50(0x1e4)]=function(_0x56a2b2){const _0xa2ca70=_0x354d50;if(this[_0xa2ca70(0x38e)]()<=0x0)return![];return VisuMZ[_0xa2ca70(0x122)][_0xa2ca70(0x387)][_0xa2ca70(0x46a)](this,_0x56a2b2);},VisuMZ[_0x354d50(0x122)][_0x354d50(0x169)]=Window_EquipItem[_0x354d50(0x384)][_0x354d50(0x204)],Window_EquipItem[_0x354d50(0x384)][_0x354d50(0x204)]=function(_0x4689aa){const _0x2e8756=_0x354d50;if(_0x4689aa===null&&this[_0x2e8756(0x3b3)]()[_0x2e8756(0x204)](this[_0x2e8756(0x45f)]()))return![];else{$gameTemp[_0x2e8756(0x16a)]=!![];let _0x25ed02=VisuMZ[_0x2e8756(0x122)]['Window_EquipItem_includes']['call'](this,_0x4689aa);if(!_0x25ed02&&_0x4689aa&&DataManager[_0x2e8756(0x286)](_0x4689aa)){const _0x2c6b02=_0x4689aa[_0x2e8756(0x1d6)]||0x0;if(this['_actor']&&this[_0x2e8756(0x143)][_0x2e8756(0x281)](_0x2c6b02)){const _0x60f73d=DataManager[_0x2e8756(0xd0)](_0x4689aa);_0x60f73d[_0x2e8756(0x204)](this[_0x2e8756(0x45f)]())&&(_0x25ed02=!![]);}}return $gameTemp[_0x2e8756(0x16a)]=undefined,_0x25ed02;}},VisuMZ[_0x354d50(0x122)][_0x354d50(0x4c5)]=Window_EquipItem['prototype'][_0x354d50(0x1e4)],Window_EquipItem['prototype'][_0x354d50(0x1e4)]=function(_0x3db768){const _0x3c445f=_0x354d50;if(_0x3db768&&this[_0x3c445f(0x143)]){if(this[_0x3c445f(0x40f)](_0x3db768))return![];if(this[_0x3c445f(0x230)](_0x3db768))return![];if(this['isSoleArmorType'](_0x3db768))return![];if(!this[_0x3c445f(0x143)][_0x3c445f(0x4a7)](_0x3db768))return![];}if(!_0x3db768)return!this['nonRemovableEtypes']()['includes'](this[_0x3c445f(0x45f)]());return VisuMZ['ItemsEquipsCore']['Window_EquipItem_isEnabled'][_0x3c445f(0x46a)](this,_0x3db768);},Window_EquipItem[_0x354d50(0x384)][_0x354d50(0x40f)]=function(_0x7d51ed){const _0x5e055a=_0x354d50,_0x5cd85f=_0x7d51ed[_0x5e055a(0xd2)];if(_0x5cd85f[_0x5e055a(0x364)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x19c13c=Number(RegExp['$1'])||0x1;let _0x25b3fe=0x0;const _0x85825b=this[_0x5e055a(0x143)][_0x5e055a(0x437)](),_0x25f19b=SceneManager[_0x5e055a(0x45c)][_0x5e055a(0x280)]['equipSlotIndex']();_0x85825b[_0x25f19b]=null;for(const _0x790516 of _0x85825b){if(!_0x790516)continue;if(DataManager[_0x5e055a(0x249)](_0x7d51ed)===DataManager[_0x5e055a(0x249)](_0x790516)){if(_0x7d51ed['id']===_0x790516['id'])_0x25b3fe+=0x1;}}return _0x25b3fe>=_0x19c13c;}else return![];},Window_EquipItem['prototype'][_0x354d50(0x230)]=function(_0x17cf25){const _0x45886f=_0x354d50;if(!DataManager[_0x45886f(0x249)](_0x17cf25))return![];const _0x2f9d5f=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x57282f=0x0;const _0x1f33fe=this[_0x45886f(0x143)]['equips'](),_0x212249=SceneManager['_scene'][_0x45886f(0x280)][_0x45886f(0x126)]();_0x1f33fe[_0x212249]=null;for(const _0x50eb8f of _0x1f33fe){if(!_0x50eb8f)continue;if(!DataManager['isWeapon'](_0x50eb8f))continue;if(_0x17cf25[_0x45886f(0x2e2)]===_0x50eb8f[_0x45886f(0x2e2)]){_0x57282f+=0x1;if(_0x17cf25[_0x45886f(0xd2)][_0x45886f(0x364)](_0x2f9d5f)){const _0x108376=Number(RegExp['$1'])||0x1;if(_0x57282f>=_0x108376)return!![];}if(_0x50eb8f[_0x45886f(0xd2)][_0x45886f(0x364)](_0x2f9d5f)){const _0x5ce946=Number(RegExp['$1'])||0x1;if(_0x57282f>=_0x5ce946)return!![];}}}return![];},Window_EquipItem[_0x354d50(0x384)][_0x354d50(0x2de)]=function(_0x2d0376){const _0x194210=_0x354d50;if(!DataManager['isArmor'](_0x2d0376))return![];const _0x12852c=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x3e2ec9=0x0;const _0x3c2bce=this[_0x194210(0x143)]['equips'](),_0x393d6d=SceneManager['_scene']['_slotWindow']['equipSlotIndex']();_0x3c2bce[_0x393d6d]=null;for(const _0x4b93ab of _0x3c2bce){if(!_0x4b93ab)continue;if(!DataManager[_0x194210(0x286)](_0x4b93ab))continue;if(_0x2d0376['atypeId']===_0x4b93ab['atypeId']){_0x3e2ec9+=0x1;if(_0x2d0376[_0x194210(0xd2)][_0x194210(0x364)](_0x12852c)){const _0x342b36=Number(RegExp['$1'])||0x1;if(_0x3e2ec9>=_0x342b36)return!![];}if(_0x4b93ab[_0x194210(0xd2)]['match'](_0x12852c)){const _0x279101=Number(RegExp['$1'])||0x1;if(_0x3e2ec9>=_0x279101)return!![];}}}return![];},Window_EquipItem[_0x354d50(0x384)][_0x354d50(0x3b3)]=function(){const _0x72f5ff=_0x354d50;return VisuMZ[_0x72f5ff(0x122)]['Settings'][_0x72f5ff(0x217)][_0x72f5ff(0x43e)];},Window_EquipItem[_0x354d50(0x384)][_0x354d50(0x1ea)]=function(_0x507b51){const _0x3d5635=_0x354d50,_0x1eb7f7=this[_0x3d5635(0x2df)](_0x507b51);_0x1eb7f7?Window_ItemList[_0x3d5635(0x384)][_0x3d5635(0x1ea)][_0x3d5635(0x46a)](this,_0x507b51):this[_0x3d5635(0x27f)](_0x507b51);},Window_EquipItem['prototype'][_0x354d50(0x27f)]=function(_0x57330f){const _0x268c7b=_0x354d50;this[_0x268c7b(0x412)](this['isEnabled'](null));const _0x45d015=VisuMZ[_0x268c7b(0x122)][_0x268c7b(0x1c3)][_0x268c7b(0x217)],_0x56b395=this[_0x268c7b(0x295)](_0x57330f),_0x5ec26d=_0x56b395['y']+(this[_0x268c7b(0x148)]()-ImageManager[_0x268c7b(0x172)])/0x2,_0x42699b=ImageManager[_0x268c7b(0x25e)]+0x4,_0x62b22a=Math[_0x268c7b(0x354)](0x0,_0x56b395[_0x268c7b(0x138)]-_0x42699b);this['resetTextColor'](),this['drawIcon'](_0x45d015['RemoveEquipIcon'],_0x56b395['x'],_0x5ec26d),this[_0x268c7b(0x125)](_0x45d015['RemoveEquipText'],_0x56b395['x']+_0x42699b,_0x56b395['y'],_0x62b22a),this[_0x268c7b(0x412)](!![]);},Window_EquipItem[_0x354d50(0x384)]['updateHelp']=function(){const _0x371749=_0x354d50;Window_ItemList[_0x371749(0x384)][_0x371749(0x3f7)][_0x371749(0x46a)](this);if(this[_0x371749(0x143)]&&this[_0x371749(0x326)]&&this[_0x371749(0x290)]>=0x0){const _0x566d9d=JsonEx['makeDeepCopy'](this[_0x371749(0x143)]);_0x566d9d[_0x371749(0xe5)]=!![],_0x566d9d[_0x371749(0x16d)](this['_slotId'],this[_0x371749(0x3fa)]()),this['_statusWindow'][_0x371749(0x22f)](_0x566d9d);}},VisuMZ[_0x354d50(0x122)]['Window_ShopCommand_initialize']=Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x1b4)],Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x1b4)]=function(_0x57a538){const _0x3c2ec3=_0x354d50;VisuMZ[_0x3c2ec3(0x122)][_0x3c2ec3(0x2ff)][_0x3c2ec3(0x46a)](this,_0x57a538),this[_0x3c2ec3(0x19a)](_0x57a538);},Window_ShopCommand[_0x354d50(0x384)]['createCommandNameWindow']=function(_0x8d02e2){const _0x236d96=_0x354d50,_0x1e1c07=new Rectangle(0x0,0x0,_0x8d02e2['width'],_0x8d02e2[_0x236d96(0x1c6)]);this[_0x236d96(0x417)]=new Window_Base(_0x1e1c07),this[_0x236d96(0x417)][_0x236d96(0xdd)]=0x0,this['addChild'](this[_0x236d96(0x417)]),this['updateCommandNameWindow']();},Window_ShopCommand[_0x354d50(0x384)]['callUpdateHelp']=function(){const _0x444246=_0x354d50;Window_HorzCommand[_0x444246(0x384)][_0x444246(0x476)][_0x444246(0x46a)](this);if(this[_0x444246(0x417)])this[_0x444246(0x184)]();},Window_ShopCommand[_0x354d50(0x384)]['updateCommandNameWindow']=function(){const _0x287685=_0x354d50,_0x56de52=this[_0x287685(0x417)];_0x56de52[_0x287685(0x484)]['clear']();const _0x5e05de=this[_0x287685(0x139)](this[_0x287685(0x1fb)]());if(_0x5e05de===_0x287685(0x2f1)){const _0x2af311=this['itemLineRect'](this[_0x287685(0x1fb)]());let _0x347584=this[_0x287685(0x263)](this[_0x287685(0x1fb)]());_0x347584=_0x347584[_0x287685(0x4b8)](/\\I\[(\d+)\]/gi,''),_0x56de52[_0x287685(0x140)](),this[_0x287685(0xe0)](_0x347584,_0x2af311),this[_0x287685(0x355)](_0x347584,_0x2af311),this[_0x287685(0x35c)](_0x347584,_0x2af311);}},Window_ShopCommand['prototype']['commandNameWindowDrawBackground']=function(_0x3d4c43,_0x1ef93c){},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x355)]=function(_0xc895d2,_0x46f0e8){const _0x132384=_0x354d50,_0x1c99ab=this[_0x132384(0x417)];_0x1c99ab[_0x132384(0x125)](_0xc895d2,0x0,_0x46f0e8['y'],_0x1c99ab[_0x132384(0xf6)],_0x132384(0x272));},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x35c)]=function(_0x355ed2,_0x109eb0){const _0x307e62=_0x354d50,_0x29a341=this[_0x307e62(0x417)],_0x49f5cc=$gameSystem['windowPadding'](),_0x474f3d=_0x109eb0['x']+Math[_0x307e62(0x4c1)](_0x109eb0[_0x307e62(0x138)]/0x2)+_0x49f5cc;_0x29a341['x']=_0x29a341[_0x307e62(0x138)]/-0x2+_0x474f3d,_0x29a341['y']=Math[_0x307e62(0x4c1)](_0x109eb0['height']/0x2);},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x478)]=function(){const _0x5c9c2a=_0x354d50;return this[_0x5c9c2a(0x380)]?this['_list'][_0x5c9c2a(0x13b)]:0x3;},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x152)]=function(){const _0x2f4c04=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x2f4c04(0x1c3)]['ShopScene'][_0x2f4c04(0x308)];},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x2eb)]=function(){const _0x319ac0=_0x354d50;this[_0x319ac0(0x3a6)](),this['addSellCommand'](),this[_0x319ac0(0x3ab)]();},Window_ShopCommand['prototype'][_0x354d50(0x2cd)]=function(){const _0x4c3d6a=_0x354d50;Window_HorzCommand[_0x4c3d6a(0x384)][_0x4c3d6a(0x2cd)][_0x4c3d6a(0x46a)](this),this[_0x4c3d6a(0x44c)]();},Window_ShopCommand['prototype'][_0x354d50(0x3a6)]=function(){const _0x37f87d=_0x354d50,_0xb62015=this[_0x37f87d(0x2c1)](),_0x42d881=VisuMZ[_0x37f87d(0x122)]['Settings'][_0x37f87d(0x1a7)]['CmdIconBuy'],_0x375ab2=_0xb62015===_0x37f87d(0x3a0)?TextManager[_0x37f87d(0x483)]:_0x37f87d(0x323)['format'](_0x42d881,TextManager[_0x37f87d(0x483)]),_0x16f30a=this['isBuyCommandEnabled']();if(this['hideDisabledCommands']()&&!_0x16f30a)return;this['addCommand'](_0x375ab2,'buy',_0x16f30a);},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x171)]=function(){const _0x264e80=_0x354d50;return SceneManager[_0x264e80(0x45c)][_0x264e80(0x1c2)]===Scene_Shop?SceneManager[_0x264e80(0x45c)][_0x264e80(0xbf)]>0x0:!![];},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x3a3)]=function(){const _0x530122=_0x354d50,_0x36687c=this[_0x530122(0x2c1)](),_0x588d34=VisuMZ[_0x530122(0x122)][_0x530122(0x1c3)][_0x530122(0x1a7)][_0x530122(0x3c4)],_0x51664d=_0x36687c===_0x530122(0x3a0)?TextManager[_0x530122(0x487)]:'\x5cI[%1]%2'[_0x530122(0x288)](_0x588d34,TextManager['sell']),_0x45716f=this['isSellCommandEnabled']();if(this[_0x530122(0x152)]()&&!_0x45716f)return;this[_0x530122(0x205)](_0x51664d,'sell',_0x45716f);},Window_ShopCommand['prototype'][_0x354d50(0x146)]=function(){const _0x1f0877=_0x354d50;return!this[_0x1f0877(0x325)];},Window_ShopCommand['prototype']['addCancelCommand']=function(){const _0x27cfbe=_0x354d50,_0x4369cb=this[_0x27cfbe(0x2c1)](),_0x491ae4=VisuMZ['ItemsEquipsCore']['Settings'][_0x27cfbe(0x1a7)][_0x27cfbe(0x1a3)],_0x393f56=VisuMZ[_0x27cfbe(0x122)]['Settings'][_0x27cfbe(0x1a7)][_0x27cfbe(0x16e)],_0x3b2086=_0x4369cb==='text'?_0x393f56:'\x5cI[%1]%2'[_0x27cfbe(0x288)](_0x491ae4,_0x393f56);this[_0x27cfbe(0x205)](_0x3b2086,'cancel');},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x453)]=function(){const _0x49da01=_0x354d50;return VisuMZ[_0x49da01(0x122)][_0x49da01(0x1c3)]['ShopScene'][_0x49da01(0x23e)];},Window_ShopCommand[_0x354d50(0x384)]['drawItem']=function(_0x26c3de){const _0x351489=_0x354d50,_0x6b40f3=this[_0x351489(0x139)](_0x26c3de);if(_0x6b40f3===_0x351489(0x114))this['drawItemStyleIconText'](_0x26c3de);else _0x6b40f3===_0x351489(0x2f1)?this['drawItemStyleIcon'](_0x26c3de):Window_HorzCommand[_0x351489(0x384)]['drawItem'][_0x351489(0x46a)](this,_0x26c3de);},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x2c1)]=function(){const _0x1c7913=_0x354d50;return VisuMZ[_0x1c7913(0x122)][_0x1c7913(0x1c3)][_0x1c7913(0x1a7)][_0x1c7913(0x4d0)];},Window_ShopCommand['prototype'][_0x354d50(0x139)]=function(_0x231ef3){const _0x4564f0=_0x354d50;if(_0x231ef3<0x0)return _0x4564f0(0x3a0);const _0x45526b=this['commandStyle']();if(_0x45526b!==_0x4564f0(0x137))return _0x45526b;else{if(this[_0x4564f0(0x38e)]()>0x0){const _0x2095f6=this['commandName'](_0x231ef3);if(_0x2095f6[_0x4564f0(0x364)](/\\I\[(\d+)\]/i)){const _0x140c1e=this[_0x4564f0(0x295)](_0x231ef3),_0x388181=this['textSizeEx'](_0x2095f6)[_0x4564f0(0x138)];return _0x388181<=_0x140c1e[_0x4564f0(0x138)]?_0x4564f0(0x114):'icon';}}}return _0x4564f0(0x3a0);},Window_ShopCommand[_0x354d50(0x384)]['drawItemStyleIconText']=function(_0x423c2c){const _0x239399=_0x354d50,_0x17ec30=this[_0x239399(0x295)](_0x423c2c),_0x543905=this[_0x239399(0x263)](_0x423c2c),_0x94628f=this[_0x239399(0x336)](_0x543905)[_0x239399(0x138)];this[_0x239399(0x412)](this[_0x239399(0x343)](_0x423c2c));const _0x44b7eb=this[_0x239399(0x453)]();if(_0x44b7eb===_0x239399(0xbd))this[_0x239399(0x3bb)](_0x543905,_0x17ec30['x']+_0x17ec30[_0x239399(0x138)]-_0x94628f,_0x17ec30['y'],_0x94628f);else{if(_0x44b7eb===_0x239399(0x272)){const _0x130621=_0x17ec30['x']+Math[_0x239399(0x4c1)]((_0x17ec30[_0x239399(0x138)]-_0x94628f)/0x2);this[_0x239399(0x3bb)](_0x543905,_0x130621,_0x17ec30['y'],_0x94628f);}else this[_0x239399(0x3bb)](_0x543905,_0x17ec30['x'],_0x17ec30['y'],_0x94628f);}},Window_ShopCommand[_0x354d50(0x384)][_0x354d50(0x3da)]=function(_0x4e4315){const _0x5d7d68=_0x354d50;this[_0x5d7d68(0x263)](_0x4e4315)['match'](/\\I\[(\d+)\]/i);const _0x2064e8=Number(RegExp['$1'])||0x0,_0x428124=this[_0x5d7d68(0x295)](_0x4e4315),_0x10fb6e=_0x428124['x']+Math[_0x5d7d68(0x4c1)]((_0x428124[_0x5d7d68(0x138)]-ImageManager[_0x5d7d68(0x25e)])/0x2),_0x4aeaa8=_0x428124['y']+(_0x428124[_0x5d7d68(0x1c6)]-ImageManager[_0x5d7d68(0x172)])/0x2;this[_0x5d7d68(0x305)](_0x2064e8,_0x10fb6e,_0x4aeaa8);},VisuMZ['ItemsEquipsCore'][_0x354d50(0x234)]=Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x2cd)],Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x2cd)]=function(){const _0x42d2a1=_0x354d50;this['updateMoneyAmount'](),VisuMZ[_0x42d2a1(0x122)][_0x42d2a1(0x234)][_0x42d2a1(0x46a)](this);},Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x4da)]=function(){const _0x559318=_0x354d50;SceneManager[_0x559318(0x45c)]['constructor']===Scene_Shop&&(this['_money']=SceneManager[_0x559318(0x45c)][_0x559318(0x4cd)]());},VisuMZ[_0x354d50(0x122)][_0x354d50(0x129)]=Window_ShopBuy['prototype'][_0x354d50(0x3a5)],Window_ShopBuy['prototype'][_0x354d50(0x3a5)]=function(_0xeae68d){const _0x41215e=_0x354d50;if(!_0xeae68d)return 0x0;let _0x28d516=VisuMZ['ItemsEquipsCore'][_0x41215e(0x129)][_0x41215e(0x46a)](this,_0xeae68d);return Math[_0x41215e(0x354)](0x0,this[_0x41215e(0x2c6)](_0xeae68d,_0x28d516));},Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x2c6)]=function(_0x12278f,_0x6a6cec){const _0xc8661d=_0x354d50,_0x59fcc9=_0x12278f[_0xc8661d(0xd2)]||'';if(_0x59fcc9[_0xc8661d(0x364)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x4b69ef=String(RegExp['$1']);window[_0xc8661d(0x3a5)]=_0x6a6cec,window['item']=_0x12278f;try{eval(_0x4b69ef);}catch(_0x4fc64a){if($gameTemp['isPlaytest']())console[_0xc8661d(0x310)](_0x4fc64a);}_0x6a6cec=window[_0xc8661d(0x3a5)],window['price']=undefined,window['item']=undefined;}_0x6a6cec=VisuMZ[_0xc8661d(0x122)][_0xc8661d(0x1c3)]['ShopScene'][_0xc8661d(0xac)][_0xc8661d(0x46a)](this,_0x12278f,_0x6a6cec);if(isNaN(_0x6a6cec))_0x6a6cec=0x0;return Math['floor'](_0x6a6cec);},VisuMZ[_0x354d50(0x122)][_0x354d50(0xea)]=Window_ShopBuy[_0x354d50(0x384)]['goodsToItem'],Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x37b)]=function(_0x43c1ce){const _0x4828df=_0x354d50,_0x2f3338=VisuMZ[_0x4828df(0x122)]['Window_ShopBuy_goodsToItem'][_0x4828df(0x46a)](this,_0x43c1ce);return _0x2f3338&&!this[_0x4828df(0x3bd)](_0x2f3338)?null:_0x2f3338;},VisuMZ[_0x354d50(0x122)][_0x354d50(0x2d3)]={'ShowAllSwitches':/<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'ShowAnySwitches':/<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'HideAllSwitches':/<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'HideAnySwitches':/<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOn':/<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOff':/<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOn':/<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOff':/<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i},Window_ShopBuy[_0x354d50(0x384)][_0x354d50(0x3bd)]=function(_0x43d40f){const _0x4c70c4=_0x354d50;if(!_0x43d40f)return![];const _0x1699c2=VisuMZ[_0x4c70c4(0x122)][_0x4c70c4(0x2d3)],_0xb209fb=_0x43d40f?_0x43d40f[_0x4c70c4(0xd2)]||'':'';if(_0xb209fb[_0x4c70c4(0x364)](_0x1699c2[_0x4c70c4(0x296)])){const _0x29dd58=String(RegExp['$1'])[_0x4c70c4(0x4b2)](',')['map'](_0x18f658=>Number(_0x18f658));if(_0x29dd58['some'](_0x3c9665=>!$gameSwitches[_0x4c70c4(0xf9)](_0x3c9665)))return![];}if(_0xb209fb[_0x4c70c4(0x364)](_0x1699c2[_0x4c70c4(0x3ad)])){const _0x5f2e3d=String(RegExp['$1'])[_0x4c70c4(0x4b2)](',')[_0x4c70c4(0x49b)](_0x1160d3=>Number(_0x1160d3));if(_0x5f2e3d[_0x4c70c4(0x12a)](_0x238c63=>!$gameSwitches[_0x4c70c4(0xf9)](_0x238c63)))return![];}if(_0xb209fb['match'](_0x1699c2[_0x4c70c4(0x1bc)])){const _0x52f12d=String(RegExp['$1'])[_0x4c70c4(0x4b2)](',')['map'](_0x34767b=>Number(_0x34767b));if(_0x52f12d[_0x4c70c4(0x12a)](_0x10c213=>$gameSwitches[_0x4c70c4(0xf9)](_0x10c213)))return![];}if(_0xb209fb[_0x4c70c4(0x364)](_0x1699c2[_0x4c70c4(0x12b)])){const _0x4aea14=String(RegExp['$1'])[_0x4c70c4(0x4b2)](',')[_0x4c70c4(0x49b)](_0xd8fd1=>Number(_0xd8fd1));if(_0x4aea14[_0x4c70c4(0x4bb)](_0xf00e68=>$gameSwitches[_0x4c70c4(0xf9)](_0xf00e68)))return![];}return!![];},Window_ShopBuy['prototype']['drawItem']=function(_0x2512ad){const _0x3572b1=_0x354d50;this['resetFontSettings']();const _0x9c9ff3=this[_0x3572b1(0x2df)](_0x2512ad),_0x4da90c=this[_0x3572b1(0x295)](_0x2512ad),_0x333c9a=_0x4da90c[_0x3572b1(0x138)];this[_0x3572b1(0x412)](this[_0x3572b1(0x1e4)](_0x9c9ff3)),this[_0x3572b1(0x2d2)](_0x9c9ff3,_0x4da90c['x'],_0x4da90c['y'],_0x333c9a),this[_0x3572b1(0x44e)](_0x9c9ff3,_0x4da90c),this[_0x3572b1(0x412)](!![]);},Window_ShopBuy[_0x354d50(0x384)]['drawItemCost']=function(_0x106414,_0x409614){const _0x223250=_0x354d50,_0x99953e=this[_0x223250(0x3a5)](_0x106414);this['drawCurrencyValue'](_0x99953e,TextManager[_0x223250(0x220)],_0x409614['x'],_0x409614['y'],_0x409614[_0x223250(0x138)]);},Window_ShopSell[_0x354d50(0x384)]['maxCols']=function(){const _0xe540cc=_0x354d50;return SceneManager[_0xe540cc(0x45c)][_0xe540cc(0x481)]()?0x1:0x2;},VisuMZ[_0x354d50(0x122)][_0x354d50(0x4e7)]=Window_ShopSell[_0x354d50(0x384)][_0x354d50(0x1e4)],Window_ShopSell[_0x354d50(0x384)]['isEnabled']=function(_0x5947bf){const _0x1623f5=_0x354d50;if(!_0x5947bf)return![];const _0x291fad=_0x5947bf['note'];if(_0x291fad[_0x1623f5(0x364)](/<CANNOT SELL>/i))return![];if(_0x291fad[_0x1623f5(0x364)](/<CAN SELL>/i))return!![];if(_0x291fad[_0x1623f5(0x364)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3321f3=JSON[_0x1623f5(0x309)]('['+RegExp['$1'][_0x1623f5(0x364)](/\d+/g)+']');for(const _0x6019a7 of _0x3321f3){if(!$gameSwitches[_0x1623f5(0xf9)](_0x6019a7))return![];}}if(_0x291fad[_0x1623f5(0x364)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2fad80=JSON[_0x1623f5(0x309)]('['+RegExp['$1'][_0x1623f5(0x364)](/\d+/g)+']');for(const _0x17b1c9 of _0x2fad80){if(!$gameSwitches[_0x1623f5(0xf9)](_0x17b1c9))return![];}}if(_0x291fad[_0x1623f5(0x364)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2f88d1=JSON[_0x1623f5(0x309)]('['+RegExp['$1'][_0x1623f5(0x364)](/\d+/g)+']');for(const _0x568fdc of _0x2f88d1){if($gameSwitches[_0x1623f5(0xf9)](_0x568fdc))return![];}}return VisuMZ[_0x1623f5(0x122)][_0x1623f5(0x4e7)][_0x1623f5(0x46a)](this,_0x5947bf);},Window_ShopStatus['EQUIP_DELAY_MS']=VisuMZ[_0x354d50(0x122)][_0x354d50(0x1c3)][_0x354d50(0x3ae)]['EquipDelayMS']??0xf0,VisuMZ['ItemsEquipsCore'][_0x354d50(0x4e4)]=Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x151)],Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x151)]=function(_0x45d0e5){const _0x450076=_0x354d50;_0x45d0e5=DataManager['getProxyItem'](_0x45d0e5),DataManager[_0x450076(0x249)](_0x45d0e5)||DataManager[_0x450076(0x286)](_0x45d0e5)?this[_0x450076(0x301)](_0x45d0e5):VisuMZ[_0x450076(0x122)][_0x450076(0x4e4)][_0x450076(0x46a)](this,_0x45d0e5);},Window_ShopStatus[_0x354d50(0x384)]['setItemDelay']=function(_0x4d15c3){const _0x597405=_0x354d50;this['_item']=_0x4d15c3;const _0x372c38=Window_ShopStatus[_0x597405(0x17c)];setTimeout(this[_0x597405(0x1b9)][_0x597405(0x3f0)](this,_0x4d15c3),_0x372c38);},Window_ShopStatus[_0x354d50(0x384)]['refreshDelay']=function(_0x3240d3){const _0x30fe04=_0x354d50;this[_0x30fe04(0x16b)]===_0x3240d3&&this['refresh']();},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x4dc)]=function(){return![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0xe9)]=function(){const _0x4a5906=_0x354d50;Window_StatusBase[_0x4a5906(0x384)][_0x4a5906(0xe9)]['call'](this);for(const _0x17f98f of $gameParty[_0x4a5906(0x23f)]()){ImageManager['loadCharacter'](_0x17f98f[_0x4a5906(0x1a9)]());}},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x2d6)]=function(){const _0x1eed17=_0x354d50;return VisuMZ[_0x1eed17(0x122)]['Settings'][_0x1eed17(0x3ae)]['Translucent'];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x2cd)]=function(){const _0x4d8a26=_0x354d50;this[_0x4d8a26(0x484)][_0x4d8a26(0x395)](),this['contentsBack'][_0x4d8a26(0x395)](),this[_0x4d8a26(0x16b)]&&(this[_0x4d8a26(0x140)](),this['changePaintOpacity'](!![]),this[_0x4d8a26(0x34b)](),this[_0x4d8a26(0x150)]()?this[_0x4d8a26(0x2f4)]():this[_0x4d8a26(0x350)](),this[_0x4d8a26(0x291)]());},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x46d)]=function(_0x27f5bf,_0x30b981){const _0xbf042e=_0x354d50;if(!this[_0xbf042e(0x150)]()&&!DataManager[_0xbf042e(0x448)](this[_0xbf042e(0x16b)]))return;const _0x908c0a=this[_0xbf042e(0xf6)]-this[_0xbf042e(0x240)]()-_0x27f5bf,_0x3a7081=this[_0xbf042e(0x176)](_0xbf042e(0x3bf));this[_0xbf042e(0xf2)](ColorManager[_0xbf042e(0x36e)]()),this['drawText'](TextManager['possession'],_0x27f5bf+this[_0xbf042e(0x240)](),_0x30b981,_0x908c0a-_0x3a7081),this['resetTextColor'](),this[_0xbf042e(0x33e)](this[_0xbf042e(0x16b)],_0x27f5bf,_0x30b981,_0x908c0a);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x3dc)]=function(_0x397700,_0x50029e,_0x1d1d05,_0x552070,_0x18aa82){const _0x2878f3=_0x354d50;if(VisuMZ[_0x2878f3(0x122)][_0x2878f3(0x1c3)][_0x2878f3(0x3ae)]['DrawBackRect']===![])return;_0x18aa82=Math[_0x2878f3(0x354)](_0x18aa82||0x1,0x1);while(_0x18aa82--){_0x552070=_0x552070||this[_0x2878f3(0x148)](),this[_0x2878f3(0x3e7)][_0x2878f3(0x2c7)]=0xa0;const _0x314dd6=ColorManager[_0x2878f3(0xb0)]();this['contentsBack'][_0x2878f3(0x461)](_0x397700+0x1,_0x50029e+0x1,_0x1d1d05-0x2,_0x552070-0x2,_0x314dd6),this['contentsBack'][_0x2878f3(0x2c7)]=0xff;}},ColorManager[_0x354d50(0xb0)]=function(){const _0x54d409=_0x354d50,_0x1c5ead=VisuMZ[_0x54d409(0x122)][_0x54d409(0x1c3)][_0x54d409(0x3ae)];let _0xfa39d4=_0x1c5ead['BackRectColor']!==undefined?_0x1c5ead[_0x54d409(0x299)]:0x13;return ColorManager[_0x54d409(0x3b5)](_0xfa39d4);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x2f4)]=function(){const _0x322340=_0x354d50,_0x1806c4=this[_0x322340(0x413)]();if(_0x1806c4==='compare')this[_0x322340(0x44a)]();else _0x1806c4===_0x322340(0x1c4)?this['drawEquipDataDouble']():this[_0x322340(0x1a2)]();},Window_ShopStatus[_0x354d50(0x384)]['getEquipDataStyle']=function(){const _0x2b9f7c=_0x354d50;return VisuMZ[_0x2b9f7c(0x122)][_0x2b9f7c(0x1c3)]['StatusWindow'][_0x2b9f7c(0x120)]??_0x2b9f7c(0x256);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x44a)]=function(){const _0x67aa26=_0x354d50;this[_0x67aa26(0xe5)]=null;if(VisuMZ[_0x67aa26(0x122)][_0x67aa26(0x1c3)][_0x67aa26(0x3ae)][_0x67aa26(0x15d)]){VisuMZ[_0x67aa26(0x122)][_0x67aa26(0x1c3)][_0x67aa26(0x3ae)][_0x67aa26(0x15d)][_0x67aa26(0x46a)](this);return;}const _0x39acaf=this[_0x67aa26(0x148)](),_0x2964a4=this[_0x67aa26(0x23c)]()+0x8;let _0x211cf2=0x0,_0x3ca165=0x0,_0x2f3355=this[_0x67aa26(0xf6)],_0x4e275f=this[_0x67aa26(0x4df)],_0x4ea354=Math[_0x67aa26(0x4c1)](_0x2f3355/0x2),_0x142e8a=_0x211cf2+_0x2f3355-_0x4ea354;this['drawItemName'](this[_0x67aa26(0x16b)],_0x211cf2+this[_0x67aa26(0x240)](),_0x3ca165,_0x2f3355-this[_0x67aa26(0x240)]()*0x2),this['drawItemDarkRect'](_0x211cf2,_0x3ca165,_0x2f3355),_0x3ca165+=_0x39acaf;if(this[_0x67aa26(0x3a9)](_0x211cf2,_0x3ca165,_0x4ea354))_0x3ca165+=0x0;if(this[_0x67aa26(0x124)](_0x142e8a,_0x3ca165,_0x4ea354))_0x3ca165+=_0x39acaf;const _0x4a66ff=this['actorParams'](),_0x4e06ce=_0x3ca165;_0x3ca165=_0x4e275f-_0x4a66ff[_0x67aa26(0x13b)]*_0x2964a4-0x4;let _0x29f4f3=_0x211cf2,_0x327c38=0x0,_0x21d4c6=_0x3ca165;for(const _0xe85fe2 of _0x4a66ff){_0x327c38=Math['max'](this[_0x67aa26(0x4a2)](_0xe85fe2,_0x211cf2+0x4,_0x3ca165+0x4,_0x2f3355),_0x327c38),_0x3ca165+=_0x2964a4;}const _0x5965a5=$gameParty[_0x67aa26(0x3f2)](),_0xfdfe48=Math[_0x67aa26(0x4c1)]((_0x2f3355-_0x327c38)/_0x5965a5);_0x327c38=_0x2f3355-_0xfdfe48*_0x5965a5;for(const _0x544c9c of $gameParty[_0x67aa26(0x38a)]()){const _0xa7e570=$gameParty['battleMembers']()[_0x67aa26(0x431)](_0x544c9c),_0x552013=_0x29f4f3+_0x327c38+_0xa7e570*_0xfdfe48;this[_0x67aa26(0x412)](_0x544c9c[_0x67aa26(0x4a7)](this[_0x67aa26(0x16b)])),this[_0x67aa26(0x284)](_0x544c9c,_0x552013+_0xfdfe48/0x2,_0x21d4c6);let _0x544545=_0x21d4c6;for(const _0xc3ac3d of _0x4a66ff){const _0x43e933=_0x544545-(_0x39acaf-_0x2964a4)/0x2;this[_0x67aa26(0x28b)](_0x544c9c,_0xc3ac3d,_0x552013,_0x43e933,_0xfdfe48),_0x544545+=_0x2964a4;}}this[_0x67aa26(0x3dc)](_0x29f4f3,_0x4e06ce,_0x327c38,_0x21d4c6-_0x4e06ce);for(let _0x5a7817=0x0;_0x5a7817<_0x5965a5;_0x5a7817++){const _0x4d0469=_0x29f4f3+_0x327c38+_0x5a7817*_0xfdfe48;this[_0x67aa26(0x3dc)](_0x4d0469,_0x4e06ce,_0xfdfe48,_0x21d4c6-_0x4e06ce);}for(const _0x1f4cb6 of _0x4a66ff){this['drawItemDarkRect'](_0x29f4f3,_0x21d4c6,_0x327c38,_0x2964a4);for(let _0x220294=0x0;_0x220294<_0x5965a5;_0x220294++){const _0x2e2a71=_0x29f4f3+_0x327c38+_0x220294*_0xfdfe48;this[_0x67aa26(0x3dc)](_0x2e2a71,_0x21d4c6,_0xfdfe48,_0x2964a4);}_0x21d4c6+=_0x2964a4;}},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x1a2)]=function(){const _0x4a7a23=_0x354d50;this[_0x4a7a23(0xe5)]=null;if(VisuMZ[_0x4a7a23(0x122)]['Settings'][_0x4a7a23(0x3ae)][_0x4a7a23(0x428)]){VisuMZ[_0x4a7a23(0x122)][_0x4a7a23(0x1c3)][_0x4a7a23(0x3ae)][_0x4a7a23(0x428)][_0x4a7a23(0x46a)](this);return;}const _0x216746=this[_0x4a7a23(0x148)]();let _0x29876f=0x0,_0x4d29e5=0x0,_0xad546e=this[_0x4a7a23(0xf6)],_0xfa002e=this['innerHeight'],_0x154f63=Math[_0x4a7a23(0x4c1)](_0xad546e/0x2),_0x572cb9=_0x29876f+_0xad546e-_0x154f63;this[_0x4a7a23(0x2d2)](this[_0x4a7a23(0x16b)],_0x29876f+this[_0x4a7a23(0x240)](),_0x4d29e5,_0xad546e-this[_0x4a7a23(0x240)]()*0x2),this[_0x4a7a23(0x3dc)](_0x29876f,_0x4d29e5,_0xad546e),_0x4d29e5+=_0x216746;if(this[_0x4a7a23(0x3a9)](_0x29876f,_0x4d29e5,_0x154f63))_0x4d29e5+=0x0;if(this[_0x4a7a23(0x124)](_0x572cb9,_0x4d29e5,_0x154f63))_0x4d29e5+=_0x216746;if(this['drawItemEquipSubType'](_0x29876f,_0x4d29e5,_0xad546e))_0x4d29e5+=_0x216746;const _0x2084da=this[_0x4a7a23(0x1e3)]();for(const _0x1e44c5 of _0x2084da){if(this[_0x4a7a23(0x1dd)](_0x1e44c5))continue;this[_0x4a7a23(0x1f1)](_0x1e44c5,_0x29876f,_0x4d29e5,_0xad546e),_0x4d29e5+=_0x216746;}_0x4d29e5=this[_0x4a7a23(0x489)](_0x29876f,_0x4d29e5,_0xad546e),this['drawItemDarkRect'](_0x29876f,_0x4d29e5,_0xad546e,_0xfa002e-_0x4d29e5);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x43c)]=function(){const _0x2c621a=_0x354d50;this[_0x2c621a(0xe5)]=null;if(VisuMZ['ItemsEquipsCore'][_0x2c621a(0x1c3)][_0x2c621a(0x3ae)][_0x2c621a(0x47e)]){VisuMZ[_0x2c621a(0x122)][_0x2c621a(0x1c3)][_0x2c621a(0x3ae)][_0x2c621a(0x47e)][_0x2c621a(0x46a)](this);return;}const _0x493752=this[_0x2c621a(0x148)]();let _0x379679=0x0,_0x4acad6=0x0,_0x52ac47=this['innerWidth'],_0xd6d0cd=this['innerHeight'],_0x22a15a=Math[_0x2c621a(0x4c1)](_0x52ac47/0x2),_0x268bf3=_0x379679+_0x52ac47-_0x22a15a;this[_0x2c621a(0x2d2)](this['_item'],_0x379679+this[_0x2c621a(0x240)](),_0x4acad6,_0x52ac47-this['itemPadding']()*0x2),this[_0x2c621a(0x3dc)](_0x379679,_0x4acad6,_0x52ac47),_0x4acad6+=_0x493752;if(this['drawItemEquipType'](_0x379679,_0x4acad6,_0x22a15a))_0x4acad6+=0x0;if(this[_0x2c621a(0x124)](_0x268bf3,_0x4acad6,_0x22a15a))_0x4acad6+=_0x493752;if(this[_0x2c621a(0x159)](_0x379679,_0x4acad6,_0x52ac47))_0x4acad6+=_0x493752;const _0x417f5c=this[_0x2c621a(0x1e3)]();for(const _0x464e81 of _0x417f5c){if(this[_0x2c621a(0x1dd)](_0x464e81))continue;this['drawActorParamClassic'](_0x464e81,_0x379679,_0x4acad6,_0x22a15a),_0x379679===_0x22a15a?(_0x4acad6+=_0x493752,_0x379679=0x0):_0x379679=_0x22a15a;}_0x379679===_0x22a15a&&(this[_0x2c621a(0x3dc)](_0x22a15a,_0x4acad6,_0x22a15a,_0x493752),_0x4acad6+=_0x493752,_0x379679=0x0),_0x4acad6=this[_0x2c621a(0x489)](_0x379679,_0x4acad6,_0x52ac47),this[_0x2c621a(0x3dc)](_0x379679,_0x4acad6,_0x52ac47,_0xd6d0cd-_0x4acad6);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x3a9)]=function(_0x3178bc,_0x227d03,_0x2e1b15){const _0xf9bc54=_0x354d50;if(!this[_0xf9bc54(0x150)]())return![];const _0x3667b5=$dataSystem[_0xf9bc54(0x312)][this[_0xf9bc54(0x16b)][_0xf9bc54(0x45f)]];return this[_0xf9bc54(0x30b)](_0x3667b5,_0x3178bc,_0x227d03,_0x2e1b15,!![]),this[_0xf9bc54(0x3dc)](_0x3178bc,_0x227d03,_0x2e1b15),this[_0xf9bc54(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x159)]=function(_0x2aa68d,_0x252a22,_0x3200ef){const _0x512733=_0x354d50;if(!this[_0x512733(0x150)]())return![];let _0x54db60='',_0x5ee2fd='';const _0xbbe945=VisuMZ[_0x512733(0x122)][_0x512733(0x1c3)][_0x512733(0x3ae)];return DataManager[_0x512733(0x249)](this[_0x512733(0x16b)])?(_0x54db60=_0xbbe945[_0x512733(0x131)]??_0x512733(0x4a9),_0x5ee2fd=$dataSystem[_0x512733(0x189)][this[_0x512733(0x16b)][_0x512733(0x2e2)]]||_0xbbe945[_0x512733(0x3ed)]||'-'):(_0x54db60=_0xbbe945['ArmorType']??'Armor\x20Type',_0x5ee2fd=$dataSystem[_0x512733(0xbb)][this[_0x512733(0x16b)][_0x512733(0x1d6)]]||_0xbbe945['NoEquipTypeResult']||'-'),this[_0x512733(0x30b)](_0x54db60,_0x2aa68d,_0x252a22,_0x3200ef,!![]),this[_0x512733(0x30b)](_0x5ee2fd,_0x2aa68d,_0x252a22,_0x3200ef,![],_0x512733(0xbd)),this[_0x512733(0x3dc)](_0x2aa68d,_0x252a22,_0x3200ef),this[_0x512733(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x231)]=function(){const _0x197631=_0x354d50,_0x2cd19d=VisuMZ[_0x197631(0x122)][_0x197631(0x1c3)][_0x197631(0x17d)][_0x197631(0x187)];return _0x2cd19d['format']($gameParty['numItems'](this[_0x197631(0x16b)]));},Window_ShopStatus['prototype']['actorParams']=function(){const _0x133f0c=_0x354d50;let _0x5551e3=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];if(Imported[_0x133f0c(0x100)]){_0x5551e3=VisuMZ[_0x133f0c(0x400)]['Settings'][_0x133f0c(0x316)]['ExtDisplayedParams'];const _0x400d7c=VisuMZ['ItemsEquipsCore'][_0x133f0c(0x1c3)][_0x133f0c(0x3ae)];if(this[_0x133f0c(0x413)]()===_0x133f0c(0x4db)){if(DataManager[_0x133f0c(0x249)](this['_item']))_0x5551e3=_0x5551e3[_0x133f0c(0x108)](_0x400d7c[_0x133f0c(0xdb)]||[]);if(DataManager[_0x133f0c(0x286)](this[_0x133f0c(0x16b)]))_0x5551e3=_0x5551e3[_0x133f0c(0x108)](_0x400d7c['ClassicArmorParameters']||[]);}else{if(this[_0x133f0c(0x413)]()===_0x133f0c(0x1c4)){if(DataManager[_0x133f0c(0x249)](this[_0x133f0c(0x16b)]))_0x5551e3=_0x5551e3[_0x133f0c(0x108)](_0x400d7c[_0x133f0c(0x427)]||[]);if(DataManager[_0x133f0c(0x286)](this['_item']))_0x5551e3=_0x5551e3[_0x133f0c(0x108)](_0x400d7c[_0x133f0c(0x34d)]||[]);}}}return _0x5551e3=_0x5551e3[_0x133f0c(0x49b)](_0x325441=>typeof _0x325441==='number'?_0x325441:_0x325441[_0x133f0c(0xe6)]()[_0x133f0c(0x4bf)]()),_0x5551e3;},Window_ShopStatus['prototype'][_0x354d50(0x287)]=function(){const _0x38a535=_0x354d50;return VisuMZ[_0x38a535(0x122)]['Settings'][_0x38a535(0x3ae)][_0x38a535(0x10c)];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x4a2)]=function(_0x5cf6f8,_0x35b2f0,_0xf1f7fb,_0x48782b){const _0x5db00f=_0x354d50;this['resetFontSettings'](),this[_0x5db00f(0x484)][_0x5db00f(0x24d)]=this[_0x5db00f(0x287)]();let _0x360909=this[_0x5db00f(0x176)](TextManager['param'](_0x5cf6f8))+0x4+_0x35b2f0;return Imported[_0x5db00f(0x100)]?(this[_0x5db00f(0x405)](_0x35b2f0,_0xf1f7fb,_0x48782b,_0x5cf6f8,!![]),VisuMZ[_0x5db00f(0x400)][_0x5db00f(0x1c3)][_0x5db00f(0x316)][_0x5db00f(0x36c)]&&(_0x360909+=ImageManager[_0x5db00f(0x25e)]+0x4)):(this[_0x5db00f(0xf2)](ColorManager[_0x5db00f(0x36e)]()),this[_0x5db00f(0x125)](TextManager[_0x5db00f(0x15e)](_0x5cf6f8),_0x35b2f0,_0xf1f7fb,_0x48782b)),this['resetFontSettings'](),_0x360909;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x28b)]=function(_0x31dfd5,_0x3b6f0e,_0x16a4f8,_0x3bfd74,_0x521267){const _0x34b2b7=_0x354d50;_0x16a4f8+=this[_0x34b2b7(0x240)](),_0x521267-=this[_0x34b2b7(0x240)]()*0x2;const _0x4b5872=VisuMZ['ItemsEquipsCore'][_0x34b2b7(0x1c3)]['StatusWindow'];this[_0x34b2b7(0x484)][_0x34b2b7(0x24d)]=_0x4b5872['ParamChangeFontSize'],this[_0x34b2b7(0x412)](_0x31dfd5[_0x34b2b7(0x4a7)](this[_0x34b2b7(0x16b)]));if(_0x31dfd5['isEquipped'](this['_item'])&&!_0x31dfd5[_0x34b2b7(0x409)](this[_0x34b2b7(0x16b)])){const _0x50bfa2=_0x4b5872[_0x34b2b7(0x42d)];this[_0x34b2b7(0x125)](_0x50bfa2,_0x16a4f8,_0x3bfd74,_0x521267,'center');}else{if(_0x31dfd5[_0x34b2b7(0x4a7)](this[_0x34b2b7(0x16b)])){const _0x2eb790=this[_0x34b2b7(0x218)](_0x31dfd5);let _0x215d91=0x0,_0xb7f5e=0x0,_0x44a611=0x0;Imported[_0x34b2b7(0x100)]?(_0x215d91=_0x2eb790[_0x34b2b7(0x34a)](_0x3b6f0e),_0xb7f5e=_0x215d91-_0x31dfd5[_0x34b2b7(0x34a)](_0x3b6f0e),this[_0x34b2b7(0xf2)](ColorManager[_0x34b2b7(0x1b5)](_0xb7f5e)),_0x44a611=(_0xb7f5e>=0x0?'+':'')+VisuMZ[_0x34b2b7(0x273)](_0xb7f5e,0x0,_0x3b6f0e)):(_0x215d91=_0x2eb790[_0x34b2b7(0x15e)](_0x3b6f0e),_0xb7f5e=_0x215d91-_0x31dfd5[_0x34b2b7(0x15e)](_0x3b6f0e),this[_0x34b2b7(0xf2)](ColorManager[_0x34b2b7(0x1b5)](_0xb7f5e)),_0x44a611=(_0xb7f5e>=0x0?'+':'')+_0xb7f5e),_0x44a611==='+0'&&(_0x44a611=_0x4b5872['NoChangeMarker']),this[_0x34b2b7(0x125)](_0x44a611,_0x16a4f8,_0x3bfd74,_0x521267,_0x34b2b7(0x272));}else{const _0x153155=_0x4b5872[_0x34b2b7(0x446)];this[_0x34b2b7(0x125)](_0x153155,_0x16a4f8,_0x3bfd74,_0x521267,_0x34b2b7(0x272));}}this[_0x34b2b7(0x140)](),this[_0x34b2b7(0x412)](!![]);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x218)]=function(_0x2c9e28){const _0x55fada=_0x354d50;if(this[_0x55fada(0x432)](_0x2c9e28)){const _0x4e8191=JsonEx['makeDeepCopy'](_0x2c9e28);_0x4e8191[_0x55fada(0xe5)]=!![];const _0x9fb0c9=_0x4e8191[_0x55fada(0x4d9)](this[_0x55fada(0x16b)]);_0x9fb0c9>=0x0&&_0x4e8191[_0x55fada(0x16d)](_0x9fb0c9,this[_0x55fada(0x16b)]),this[_0x55fada(0xe5)]=_0x4e8191;}return this['_tempActor'];},Window_ShopStatus[_0x354d50(0x384)]['needsNewTempActor']=function(_0xbb30a4){const _0x453be2=_0x354d50;if(!this[_0x453be2(0xe5)])return!![];return this[_0x453be2(0xe5)][_0x453be2(0x132)]()!==_0xbb30a4[_0x453be2(0x132)]();},Game_Actor[_0x354d50(0x384)][_0x354d50(0x409)]=function(_0x70c5c8){const _0xf382ba=_0x354d50;if(!_0x70c5c8)return![];const _0x462fdf=_0x70c5c8[_0xf382ba(0x45f)],_0x315b35=this[_0xf382ba(0x3b4)]();for(let _0x306d82=0x0;_0x306d82<_0x315b35[_0xf382ba(0x13b)];_0x306d82++){const _0x18df78=_0x315b35[_0x306d82];if(_0x18df78!==_0x462fdf)continue;if(!this['equips']()[_0x306d82])return!![];}return![];},Game_Actor[_0x354d50(0x384)][_0x354d50(0x4d9)]=function(_0x47ccdc){const _0x2d06f2=_0x354d50;if(!_0x47ccdc)return-0x1;const _0xa0b6f5=_0x47ccdc[_0x2d06f2(0x45f)],_0x5973cf=this[_0x2d06f2(0x3b4)]();let _0x567f15=-0x1;for(let _0x4ec970=0x0;_0x4ec970<_0x5973cf[_0x2d06f2(0x13b)];_0x4ec970++){const _0x1d5266=_0x5973cf[_0x4ec970];if(_0x1d5266!==_0xa0b6f5)continue;if(!this[_0x2d06f2(0x437)]()[_0x4ec970])return _0x4ec970;if(_0x567f15<0x0)_0x567f15=_0x4ec970;}return _0x567f15;},Window_ShopStatus['prototype'][_0x354d50(0x1f1)]=function(_0x15fd67,_0x58cbf8,_0x30cba4,_0x2eadaf){const _0x26aa0e=_0x354d50,_0xb6716e=TextManager[_0x26aa0e(0x15e)](_0x15fd67);this[_0x26aa0e(0x30b)](_0xb6716e,_0x58cbf8,_0x30cba4,_0x2eadaf,!![]);let _0x5e7172='+0';Imported['VisuMZ_0_CoreEngine']?_0x5e7172=this['getParamValueClassicCore'](_0x15fd67):_0x5e7172=this['getParamValueClassicNoCore'](_0x15fd67),this[_0x26aa0e(0x30b)](_0x5e7172,_0x58cbf8,_0x30cba4,_0x2eadaf,![],_0x26aa0e(0xbd)),this['drawItemDarkRect'](_0x58cbf8,_0x30cba4,_0x2eadaf);},Window_ShopStatus['prototype'][_0x354d50(0x1dd)]=function(_0x1f3ea9){const _0x10d2fa=_0x354d50;return Imported[_0x10d2fa(0x100)]?!!VisuMZ[_0x10d2fa(0x400)][_0x10d2fa(0x235)][_0x1f3ea9]:![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0xc5)]=function(_0x2d8f59){const _0x2bae9d=_0x354d50;if(this[_0x2bae9d(0xf4)][_0x2d8f59])return this[_0x2bae9d(0xf4)][_0x2d8f59];const _0x20d421=[_0x2bae9d(0x482),_0x2bae9d(0x2a6),_0x2bae9d(0x3c9),_0x2bae9d(0x178),_0x2bae9d(0x1b3),_0x2bae9d(0x32e),_0x2bae9d(0x4de),_0x2bae9d(0x3f6)],_0x462308=['HIT',_0x2bae9d(0x2cb),_0x2bae9d(0x22e),'CEV',_0x2bae9d(0x1e7),'MRF',_0x2bae9d(0x1be),_0x2bae9d(0x2cc),'MRG','TRG'],_0x439ba7=['TGR',_0x2bae9d(0x1da),_0x2bae9d(0x33d),_0x2bae9d(0x414),_0x2bae9d(0x21f),_0x2bae9d(0x1c0),'PDR',_0x2bae9d(0x31f),_0x2bae9d(0x2fa),'EXR'];if(_0x20d421[_0x2bae9d(0x204)](_0x2d8f59)){const _0x2429a2=_0x20d421[_0x2bae9d(0x431)](_0x2d8f59),_0x469081=this['_item'][_0x2bae9d(0xce)][_0x2429a2]||0x0;return this[_0x2bae9d(0xf2)](ColorManager[_0x2bae9d(0x1b5)](_0x469081)),(_0x469081>=0x0?'+':'')+String(_0x469081);}else{if(_0x462308[_0x2bae9d(0x204)](_0x2d8f59)){const _0x4c9850=_0x462308[_0x2bae9d(0x431)](_0x2d8f59);let _0x1e2f9c=0x0;for(const _0x471b51 of this[_0x2bae9d(0x16b)]['traits']){if(_0x471b51[_0x2bae9d(0x4e3)]!==0x16)continue;_0x471b51[_0x2bae9d(0x147)]===_0x4c9850&&(_0x1e2f9c+=_0x471b51[_0x2bae9d(0xf9)]||0x0);}return this[_0x2bae9d(0xf2)](ColorManager[_0x2bae9d(0x1b5)](_0x1e2f9c)),_0x1e2f9c*=0x64,(_0x1e2f9c>=0x0?'+':'')+String(_0x1e2f9c)+'%';}else{if(_0x439ba7['includes'](_0x2d8f59)){const _0x2db47e=_0x439ba7[_0x2bae9d(0x431)](_0x2d8f59);let _0x7aeeda=0x1;for(const _0x1bb4e1 of this[_0x2bae9d(0x16b)][_0x2bae9d(0x11a)]){if(_0x1bb4e1['code']!==0x17)continue;_0x1bb4e1[_0x2bae9d(0x147)]===_0x2db47e&&(_0x7aeeda*=_0x1bb4e1[_0x2bae9d(0xf9)]||0x0);}let _0x16f11d=0x1;if(['TGR',_0x2bae9d(0x21f),_0x2bae9d(0x30e),_0x2bae9d(0x31f),_0x2bae9d(0x2fa)][_0x2bae9d(0x204)](_0x2d8f59))_0x16f11d=-0x1;return this[_0x2bae9d(0xf2)](ColorManager[_0x2bae9d(0x1b5)]((_0x7aeeda-0x1)*_0x16f11d)),_0x7aeeda*=0x64,String(_0x7aeeda)+'%';}}}return'';},Window_ShopStatus['prototype'][_0x354d50(0x10d)]=function(_0x1af037){const _0x7cf864=_0x354d50,_0x552fcd=[_0x7cf864(0x482),_0x7cf864(0x2a6),_0x7cf864(0x3c9),_0x7cf864(0x178),_0x7cf864(0x1b3),'MDF',_0x7cf864(0x4de),_0x7cf864(0x3f6)],_0x2a0c7c=_0x552fcd[_0x1af037]||_0x7cf864(0x43b);if(this[_0x7cf864(0xf4)][_0x2a0c7c])return this[_0x7cf864(0xf4)][_0x2a0c7c];const _0x37505c=Number(this[_0x7cf864(0x16b)][_0x7cf864(0xce)][_0x1af037]||0x0);return this[_0x7cf864(0xf2)](ColorManager[_0x7cf864(0x1b5)](_0x37505c)),(_0x37505c>=0x0?'+':'')+String(_0x37505c);},Window_ShopStatus[_0x354d50(0x384)]['drawItemData']=function(){const _0x458226=_0x354d50;VisuMZ[_0x458226(0x122)]['Settings'][_0x458226(0x3ae)][_0x458226(0x3e3)]['call'](this);},Window_ShopStatus['prototype'][_0x354d50(0x2d2)]=function(_0x515641,_0x5e063f,_0x5c71dc,_0x4658d4){const _0x1d2d49=_0x354d50,_0x530cae=DataManager['isSkill'](_0x515641,_0x5e063f,_0x5c71dc,_0x4658d4)&&Imported[_0x1d2d49(0xe7)],_0x57e71d=_0x515641?_0x515641['name']:'';if(_0x530cae)Window_SkillList['prototype'][_0x1d2d49(0x14e)][_0x1d2d49(0x46a)](this,_0x515641);Window_Base['prototype']['drawItemName']['call'](this,_0x515641,_0x5e063f,_0x5c71dc,_0x4658d4);if(_0x530cae)_0x515641[_0x1d2d49(0x457)]=_0x57e71d;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x34b)]=function(){const _0x1fbd6e=_0x354d50;this[_0x1fbd6e(0xf4)]={};if(!this[_0x1fbd6e(0x16b)])return;const _0x43f526=this[_0x1fbd6e(0x16b)][_0x1fbd6e(0xd2)];if(_0x43f526[_0x1fbd6e(0x364)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x572dd0=String(RegExp['$1'])[_0x1fbd6e(0x4b2)](/[\r\n]+/);for(const _0x39de3c of _0x572dd0){if(_0x39de3c[_0x1fbd6e(0x364)](/(.*):[ ](.*)/i)){const _0x9f2ed6=String(RegExp['$1'])[_0x1fbd6e(0xe6)]()['trim'](),_0x580af4=String(RegExp['$2'])['trim']();this['_customItemInfo'][_0x9f2ed6]=_0x580af4;}}}},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x371)]=function(){const _0xf96854=_0x354d50;return Math[_0xf96854(0x354)](0x1,$gameSystem[_0xf96854(0x479)]()-0x4);},Window_ShopStatus[_0x354d50(0x384)]['resetFontSettings']=function(){const _0x4a6172=_0x354d50;Window_StatusBase[_0x4a6172(0x384)][_0x4a6172(0x140)]['call'](this),this[_0x4a6172(0x484)][_0x4a6172(0x24d)]=this[_0x4a6172(0x133)]||this[_0x4a6172(0x484)][_0x4a6172(0x24d)],this[_0x4a6172(0x484)][_0x4a6172(0x46b)]=this['_resetFontColor']||this[_0x4a6172(0x484)]['textColor'];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x33c)]=function(){const _0x3f7c91=_0x354d50;return this[_0x3f7c91(0x484)]['fontSize']/$gameSystem[_0x3f7c91(0x479)]();},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x305)]=function(_0x42597d,_0x367fdb,_0x242e3f){const _0x405e5e=_0x354d50,_0x680e02=ImageManager['loadSystem']('IconSet'),_0x5513ca=ImageManager[_0x405e5e(0x25e)],_0x5a1655=ImageManager[_0x405e5e(0x172)],_0x4b0afc=_0x42597d%0x10*_0x5513ca,_0x4d9e17=Math[_0x405e5e(0x4c1)](_0x42597d/0x10)*_0x5a1655,_0x5bade9=Math['ceil'](_0x5513ca*this[_0x405e5e(0x33c)]()),_0x137c99=Math[_0x405e5e(0x18c)](_0x5a1655*this[_0x405e5e(0x33c)]());this['contents'][_0x405e5e(0x415)](_0x680e02,_0x4b0afc,_0x4d9e17,_0x5513ca,_0x5a1655,_0x367fdb,_0x242e3f,_0x5bade9,_0x137c99);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x1d7)]=function(_0x3ee73d,_0x180fbd){const _0x1fb3b4=_0x354d50;_0x180fbd[_0x1fb3b4(0x262)]&&this['drawIcon'](_0x3ee73d,_0x180fbd['x'],_0x180fbd['y']+0x2);_0x180fbd['x']+=Math[_0x1fb3b4(0x18c)](ImageManager['iconWidth']*this[_0x1fb3b4(0x33c)]());if(this['fontSizeRatio']()===0x1)_0x180fbd['x']+=0x4;},Window_ShopStatus['prototype'][_0x354d50(0x30b)]=function(_0x351cbd,_0x193b4c,_0x40ab9b,_0x12dfc4,_0x48f2f6,_0x43c329){const _0x5d3c9f=_0x354d50;_0x351cbd=_0x351cbd||'',_0x43c329=_0x43c329||_0x5d3c9f(0x464),this[_0x5d3c9f(0x133)]=this[_0x5d3c9f(0x371)](),this[_0x5d3c9f(0x26e)]=_0x48f2f6?ColorManager['systemColor']():this[_0x5d3c9f(0x484)]['textColor'],_0x193b4c+=this[_0x5d3c9f(0x240)](),_0x12dfc4-=this[_0x5d3c9f(0x240)]()*0x2;const _0x49bdc1=this[_0x5d3c9f(0x336)](_0x351cbd);if(_0x43c329===_0x5d3c9f(0x272))_0x193b4c=_0x193b4c+Math[_0x5d3c9f(0x4c1)]((_0x12dfc4-_0x49bdc1[_0x5d3c9f(0x138)])/0x2);else _0x43c329===_0x5d3c9f(0xbd)&&(_0x193b4c=_0x193b4c+_0x12dfc4-_0x49bdc1[_0x5d3c9f(0x138)]);_0x40ab9b+=(this[_0x5d3c9f(0x148)]()-_0x49bdc1[_0x5d3c9f(0x1c6)])/0x2,this[_0x5d3c9f(0x3bb)](_0x351cbd,_0x193b4c,_0x40ab9b,_0x12dfc4),this[_0x5d3c9f(0x133)]=undefined,this[_0x5d3c9f(0x26e)]=undefined,this['resetFontSettings']();},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x4c4)]=function(_0x1d1d91,_0x92a8d7,_0x2d0c93){const _0x13752e=_0x354d50;if(!DataManager[_0x13752e(0x448)](this['_item']))return![];const _0x29fea7=this[_0x13752e(0x3e8)]();this['drawItemKeyData'](_0x29fea7,_0x1d1d91,_0x92a8d7,_0x2d0c93,!![]);const _0xa6d5a=this[_0x13752e(0x368)]();return this['drawItemKeyData'](_0xa6d5a,_0x1d1d91,_0x92a8d7,_0x2d0c93,![],'right'),this[_0x13752e(0x3dc)](_0x1d1d91,_0x92a8d7,_0x2d0c93),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x3e8)]=function(){const _0x566ca5=_0x354d50;return VisuMZ[_0x566ca5(0x122)]['Settings']['StatusWindow'][_0x566ca5(0x1f2)];},Window_ShopStatus[_0x354d50(0x384)]['getItemConsumableText']=function(){const _0xda47a9=_0x354d50,_0x47b072=_0xda47a9(0x200);if(this[_0xda47a9(0xf4)][_0x47b072])return this[_0xda47a9(0xf4)][_0x47b072];return this[_0xda47a9(0x35a)]()?VisuMZ[_0xda47a9(0x122)][_0xda47a9(0x1c3)][_0xda47a9(0x3ae)][_0xda47a9(0x246)]:VisuMZ[_0xda47a9(0x122)][_0xda47a9(0x1c3)]['StatusWindow']['NotConsumable'];},Window_ShopStatus[_0x354d50(0x384)]['canConsumeItem']=function(){const _0x1a333d=_0x354d50;return VisuMZ['CoreEngine']&&VisuMZ[_0x1a333d(0x400)][_0x1a333d(0x1c3)][_0x1a333d(0x25b)][_0x1a333d(0x1d1)]&&DataManager[_0x1a333d(0x4ac)](this[_0x1a333d(0x16b)])?![]:this['_item'][_0x1a333d(0x436)];},Window_ShopStatus[_0x354d50(0x384)]['drawItemQuantity']=function(_0x1bd0d2,_0x8c7d63,_0x324305){const _0x146de6=_0x354d50;if(!this[_0x146de6(0x150)]()&&!DataManager[_0x146de6(0x448)](this[_0x146de6(0x16b)]))return![];if(DataManager[_0x146de6(0x4ac)](this[_0x146de6(0x16b)])&&!$dataSystem[_0x146de6(0x4b0)]){const _0x41f7b0=TextManager[_0x146de6(0x420)];this['drawItemKeyData'](_0x41f7b0,_0x1bd0d2,_0x8c7d63,_0x324305,!![],_0x146de6(0x272));}else{const _0x7605f1=TextManager[_0x146de6(0x3d6)];this[_0x146de6(0x30b)](_0x7605f1,_0x1bd0d2,_0x8c7d63,_0x324305,!![]);const _0x2b923d=this[_0x146de6(0x231)]();this[_0x146de6(0x30b)](_0x2b923d,_0x1bd0d2,_0x8c7d63,_0x324305,![],'right');}return this[_0x146de6(0x3dc)](_0x1bd0d2,_0x8c7d63,_0x324305),this[_0x146de6(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x231)]=function(){const _0x31ac79=_0x354d50,_0x1bba12=_0x31ac79(0x11d);if(this[_0x31ac79(0xf4)][_0x1bba12])return this['_customItemInfo'][_0x1bba12];const _0x59da9d=VisuMZ[_0x31ac79(0x122)]['Settings'][_0x31ac79(0x17d)]['ItemQuantityFmt'];return _0x59da9d[_0x31ac79(0x288)]($gameParty[_0x31ac79(0x3c1)](this[_0x31ac79(0x16b)]));},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x250)]=function(_0x477a3e,_0x47f18e,_0x11bf9d){const _0x18c18e=_0x354d50,_0x2b6d1f=this['getItemOccasionText']();return this[_0x18c18e(0x30b)](_0x2b6d1f,_0x477a3e,_0x47f18e,_0x11bf9d,![],_0x18c18e(0x272)),this['drawItemDarkRect'](_0x477a3e,_0x47f18e,_0x11bf9d),this[_0x18c18e(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x221)]=function(){const _0x3ee8be=_0x354d50,_0x403c7e='OCCASION';if(this['_customItemInfo'][_0x403c7e])return this[_0x3ee8be(0xf4)][_0x403c7e];const _0x234405=VisuMZ[_0x3ee8be(0x122)][_0x3ee8be(0x1c3)][_0x3ee8be(0x3ae)],_0x5784b4=_0x3ee8be(0x46e)[_0x3ee8be(0x288)](this[_0x3ee8be(0x16b)][_0x3ee8be(0x1f7)]);return _0x234405[_0x5784b4];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x165)]=function(_0x25dee5,_0x2688aa,_0x455c2a){const _0x52730b=_0x354d50,_0xf69095=this[_0x52730b(0x396)]();return this['drawItemKeyData'](_0xf69095,_0x25dee5,_0x2688aa,_0x455c2a,![],_0x52730b(0x272)),this[_0x52730b(0x3dc)](_0x25dee5,_0x2688aa,_0x455c2a),this[_0x52730b(0x140)](),!![];},Window_ShopStatus['prototype'][_0x354d50(0x396)]=function(){const _0x4fc5b8=_0x354d50,_0x5d8c91=_0x4fc5b8(0x1ab);if(this[_0x4fc5b8(0xf4)][_0x5d8c91])return this[_0x4fc5b8(0xf4)][_0x5d8c91];const _0x3d0ff8=VisuMZ[_0x4fc5b8(0x122)]['Settings'][_0x4fc5b8(0x3ae)];if(Imported['VisuMZ_1_BattleCore']){const _0x1e3bbe=this[_0x4fc5b8(0x16b)][_0x4fc5b8(0xd2)];if(_0x1e3bbe[_0x4fc5b8(0x364)](/<TARGET:[ ](.*)>/i)){const _0x30a46e=String(RegExp['$1']);if(_0x30a46e[_0x4fc5b8(0x364)](/(\d+) RANDOM ANY/i))return _0x3d0ff8[_0x4fc5b8(0x13e)][_0x4fc5b8(0x288)](Number(RegExp['$1']));else{if(_0x30a46e['match'](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x3d0ff8[_0x4fc5b8(0x116)]['format'](Number(RegExp['$1']));else{if(_0x30a46e['match'](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x3d0ff8['ScopeRandomAllies'][_0x4fc5b8(0x288)](Number(RegExp['$1']));else{if(_0x30a46e[_0x4fc5b8(0x364)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x3d0ff8['ScopeAlliesButUser'];else{if(_0x30a46e[_0x4fc5b8(0x364)](/ALLY OR ENEMY/i))return _0x3d0ff8[_0x4fc5b8(0x4be)]||_0x3d0ff8['Scope7'];else{if(_0x30a46e[_0x4fc5b8(0x364)](/ENEMY OR ALLY/i))return _0x3d0ff8[_0x4fc5b8(0x40c)]||_0x3d0ff8[_0x4fc5b8(0x25a)];}}}}}}}const _0x39b39d=_0x4fc5b8(0x185)[_0x4fc5b8(0x288)](this[_0x4fc5b8(0x16b)]['scope']);return _0x3d0ff8[_0x39b39d];},Window_ShopStatus[_0x354d50(0x384)]['drawItemSpeed']=function(_0x4dc097,_0x26b393,_0x1fa2da){const _0x82d83=_0x354d50,_0x40db46=this[_0x82d83(0x441)]();this[_0x82d83(0x30b)](_0x40db46,_0x4dc097,_0x26b393,_0x1fa2da,!![]);const _0x35374d=this[_0x82d83(0x20b)]();return this['drawItemKeyData'](_0x35374d,_0x4dc097,_0x26b393,_0x1fa2da,![],_0x82d83(0xbd)),this['drawItemDarkRect'](_0x4dc097,_0x26b393,_0x1fa2da),this[_0x82d83(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)]['getItemSpeedLabel']=function(){const _0x3f7561=_0x354d50;return VisuMZ[_0x3f7561(0x122)]['Settings'][_0x3f7561(0x3ae)]['LabelSpeed'];},Window_ShopStatus['prototype'][_0x354d50(0x20b)]=function(){const _0x357c74=_0x354d50,_0x278b16=_0x357c74(0x282);if(this['_customItemInfo'][_0x278b16])return this['_customItemInfo'][_0x278b16];const _0x1f96f2=this['_item']['speed'];if(_0x1f96f2>=0x7d0)return VisuMZ[_0x357c74(0x122)]['Settings'][_0x357c74(0x3ae)][_0x357c74(0x317)];else{if(_0x1f96f2>=0x3e8)return VisuMZ[_0x357c74(0x122)][_0x357c74(0x1c3)][_0x357c74(0x3ae)]['Speed1000'];else{if(_0x1f96f2>0x0)return VisuMZ['ItemsEquipsCore'][_0x357c74(0x1c3)][_0x357c74(0x3ae)]['Speed1'];else{if(_0x1f96f2===0x0)return VisuMZ[_0x357c74(0x122)][_0x357c74(0x1c3)][_0x357c74(0x3ae)]['Speed0'];else{if(_0x1f96f2>-0x3e8)return VisuMZ[_0x357c74(0x122)][_0x357c74(0x1c3)]['StatusWindow']['SpeedNeg999'];else{if(_0x1f96f2>-0x7d0)return VisuMZ[_0x357c74(0x122)][_0x357c74(0x1c3)]['StatusWindow']['SpeedNeg1999'];else return _0x1f96f2<=-0x7d0?VisuMZ[_0x357c74(0x122)][_0x357c74(0x1c3)][_0x357c74(0x3ae)][_0x357c74(0x426)]:_0x357c74(0x123);}}}}}},Window_ShopStatus[_0x354d50(0x384)]['drawItemSuccessRate']=function(_0x101486,_0x46dc9f,_0x29f189){const _0x1346eb=_0x354d50,_0x1c1889=this[_0x1346eb(0xaf)]();this[_0x1346eb(0x30b)](_0x1c1889,_0x101486,_0x46dc9f,_0x29f189,!![]);const _0x57fd8b=this[_0x1346eb(0x232)]();return this[_0x1346eb(0x30b)](_0x57fd8b,_0x101486,_0x46dc9f,_0x29f189,![],_0x1346eb(0xbd)),this[_0x1346eb(0x3dc)](_0x101486,_0x46dc9f,_0x29f189),this[_0x1346eb(0x140)](),!![];},Window_ShopStatus['prototype'][_0x354d50(0xaf)]=function(){const _0x3f748f=_0x354d50;return VisuMZ[_0x3f748f(0x122)][_0x3f748f(0x1c3)][_0x3f748f(0x3ae)]['LabelSuccessRate'];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x232)]=function(){const _0x373871=_0x354d50,_0x587a00='SUCCESS\x20RATE';if(this[_0x373871(0xf4)][_0x587a00])return this[_0x373871(0xf4)][_0x587a00];if(Imported[_0x373871(0x321)]){const _0x2a03db=this[_0x373871(0x16b)][_0x373871(0xd2)];if(_0x2a03db[_0x373871(0x364)](/<ALWAYS HIT>/i))return _0x373871(0x463);else{if(_0x2a03db['match'](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x373871(0x121)[_0x373871(0x288)](Number(RegExp['$1']));}}return _0x373871(0x121)['format'](this['_item'][_0x373871(0x15f)]);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x17b)]=function(_0x504da1,_0x3b45e6,_0x3fbca3){const _0xca27f9=_0x354d50,_0x2b46a3=this[_0xca27f9(0x475)]();this['drawItemKeyData'](_0x2b46a3,_0x504da1,_0x3b45e6,_0x3fbca3,!![]);const _0xc4b3e6=this[_0xca27f9(0x467)]();return this['drawItemKeyData'](_0xc4b3e6,_0x504da1,_0x3b45e6,_0x3fbca3,![],_0xca27f9(0xbd)),this[_0xca27f9(0x3dc)](_0x504da1,_0x3b45e6,_0x3fbca3),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x475)]=function(){const _0x2fd18f=_0x354d50;return VisuMZ[_0x2fd18f(0x122)][_0x2fd18f(0x1c3)][_0x2fd18f(0x3ae)][_0x2fd18f(0x302)];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x467)]=function(){const _0x30e827=_0x354d50,_0x4bcda1=_0x30e827(0x2d5);if(this['_customItemInfo'][_0x4bcda1])return this[_0x30e827(0xf4)][_0x4bcda1];const _0x485ae9=_0x30e827(0x1ad);return _0x485ae9['format'](this[_0x30e827(0x16b)][_0x30e827(0x2a9)]);},Window_ShopStatus[_0x354d50(0x384)]['drawItemHitType']=function(_0x3f5ed0,_0x5086df,_0x1071fb){const _0x4c7924=_0x354d50,_0x1528b9=this[_0x4c7924(0x1ed)]();this[_0x4c7924(0x30b)](_0x1528b9,_0x3f5ed0,_0x5086df,_0x1071fb,!![]);const _0x4126e8=this['getItemHitTypeText']();return this['drawItemKeyData'](_0x4126e8,_0x3f5ed0,_0x5086df,_0x1071fb,![],_0x4c7924(0xbd)),this[_0x4c7924(0x3dc)](_0x3f5ed0,_0x5086df,_0x1071fb),this[_0x4c7924(0x140)](),!![];},Window_ShopStatus['prototype'][_0x354d50(0x1ed)]=function(){const _0x1806cd=_0x354d50;return VisuMZ[_0x1806cd(0x122)][_0x1806cd(0x1c3)][_0x1806cd(0x3ae)][_0x1806cd(0x2ac)];},Window_ShopStatus['prototype'][_0x354d50(0x37c)]=function(){const _0x1e048c=_0x354d50,_0x3f30ff=_0x1e048c(0x2b2);if(this[_0x1e048c(0xf4)][_0x3f30ff])return this[_0x1e048c(0xf4)][_0x3f30ff];const _0x586502=VisuMZ[_0x1e048c(0x122)][_0x1e048c(0x1c3)][_0x1e048c(0x3ae)],_0x57fb08='HitType%1'[_0x1e048c(0x288)](this[_0x1e048c(0x16b)][_0x1e048c(0x37f)]);return _0x586502[_0x57fb08];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x419)]=function(_0x30a348,_0x26f3e3,_0x3e8593){const _0x366f7a=_0x354d50;if(this[_0x366f7a(0x16b)][_0x366f7a(0x23a)]['type']<=0x0)return _0x26f3e3;if(this['drawItemDamageElement'](_0x30a348,_0x26f3e3,_0x3e8593))_0x26f3e3+=this['lineHeight']();if(this['drawItemDamageAmount'](_0x30a348,_0x26f3e3,_0x3e8593))_0x26f3e3+=this[_0x366f7a(0x148)]();return this[_0x366f7a(0x140)](),_0x26f3e3;},Window_ShopStatus['prototype'][_0x354d50(0x3c0)]=function(_0x30f9f9,_0x10b5bc,_0x39af06){const _0x5a34c2=_0x354d50,_0x176959=this['getItemDamageElementLabel']();this['drawItemKeyData'](_0x176959,_0x30f9f9,_0x10b5bc,_0x39af06,!![]);const _0x18ac6c=this[_0x5a34c2(0x389)]();return this[_0x5a34c2(0x30b)](_0x18ac6c,_0x30f9f9,_0x10b5bc,_0x39af06,![],_0x5a34c2(0xbd)),this['drawItemDarkRect'](_0x30f9f9,_0x10b5bc,_0x39af06),this[_0x5a34c2(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x3e4)]=function(){const _0x516d39=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x516d39(0x1c3)][_0x516d39(0x3ae)][_0x516d39(0x4d8)];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x389)]=function(){const _0x587552=_0x354d50,_0x526221=_0x587552(0x4ca);if(this[_0x587552(0xf4)][_0x526221])return this['_customItemInfo'][_0x526221];if(this['_item'][_0x587552(0x23a)]['elementId']<=-0x1)return VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow']['ElementWeapon'];else return this[_0x587552(0x16b)][_0x587552(0x23a)][_0x587552(0x4aa)]===0x0?VisuMZ[_0x587552(0x122)][_0x587552(0x1c3)]['StatusWindow']['ElementNone']:$dataSystem['elements'][this['_item'][_0x587552(0x23a)][_0x587552(0x4aa)]];},Window_ShopStatus['prototype']['drawItemDamageAmount']=function(_0x3565df,_0x240b23,_0x5348be){const _0x507c49=_0x354d50,_0x53e57b=this[_0x507c49(0x167)]();this[_0x507c49(0x30b)](_0x53e57b,_0x3565df,_0x240b23,_0x5348be,!![]),this[_0x507c49(0x363)]();const _0x274fbf=this[_0x507c49(0x24c)](),_0x5b8dd2=ColorManager['damageColor']([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x507c49(0x16b)][_0x507c49(0x23a)][_0x507c49(0x40b)]]);return this['changeTextColor'](_0x5b8dd2),this[_0x507c49(0x30b)](_0x274fbf,_0x3565df,_0x240b23,_0x5348be,![],_0x507c49(0xbd)),this[_0x507c49(0x3dc)](_0x3565df,_0x240b23,_0x5348be),this[_0x507c49(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x167)]=function(){const _0x5c439d=_0x354d50;return Imported[_0x5c439d(0x321)]&&DataManager[_0x5c439d(0x1e6)](this[_0x5c439d(0x16b)])!==_0x5c439d(0xc4)?this[_0x5c439d(0x1fe)]():this[_0x5c439d(0x39b)]();},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x39b)]=function(){const _0xb8a0f2=_0x354d50,_0x1b179e=VisuMZ[_0xb8a0f2(0x122)]['Settings'][_0xb8a0f2(0x3ae)],_0x156a3c=_0xb8a0f2(0x21b)['format'](this['_item']['damage'][_0xb8a0f2(0x40b)]),_0x5f29ba=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this['_item']['damage'][_0xb8a0f2(0x40b)]];return _0x1b179e[_0x156a3c][_0xb8a0f2(0x288)](_0x5f29ba);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x363)]=function(){const _0xd6497d=_0x354d50,_0x186e9c=$gameActors[_0xd6497d(0xe1)](0x1);this['_tempActorA']=JsonEx[_0xd6497d(0x304)](_0x186e9c),this[_0xd6497d(0x2b9)]=JsonEx[_0xd6497d(0x304)](_0x186e9c);},Window_ShopStatus['prototype'][_0x354d50(0x24c)]=function(){const _0x293f77=_0x354d50,_0x2777eb=_0x293f77(0x21c);if(this['_customItemInfo'][_0x2777eb])return this[_0x293f77(0xf4)][_0x2777eb];return Imported['VisuMZ_1_BattleCore']&&DataManager['getDamageStyle'](this[_0x293f77(0x16b)])!=='MANUAL'?this[_0x293f77(0x214)]():this[_0x293f77(0x46c)]();},Window_ShopStatus[_0x354d50(0x384)]['getItemDamageAmountTextOriginal']=function(){const _0x58e342=_0x354d50;window['a']=this['_tempActorA'],window['b']=this[_0x58e342(0x2b9)],this[_0x58e342(0xf0)][_0x58e342(0x1b2)](!![]),this[_0x58e342(0x2b9)][_0x58e342(0x1b2)]([0x3,0x4][_0x58e342(0x204)](this[_0x58e342(0x16b)][_0x58e342(0x23a)][_0x58e342(0x40b)]));let _0x51f2ee=this[_0x58e342(0x16b)][_0x58e342(0x23a)][_0x58e342(0x44d)];try{const _0x56c838=Math['max'](eval(_0x51f2ee),0x0)/window['a'][_0x58e342(0x41f)];return this[_0x58e342(0x13d)](),isNaN(_0x56c838)?_0x58e342(0x123):_0x58e342(0x121)['format'](Math[_0x58e342(0x2c9)](_0x56c838*0x64));}catch(_0x441897){return $gameTemp[_0x58e342(0x38d)]()&&(console[_0x58e342(0x310)]('Damage\x20Formula\x20Error\x20for\x20%1'[_0x58e342(0x288)](this[_0x58e342(0x16b)]['name'])),console[_0x58e342(0x310)](_0x441897)),this[_0x58e342(0x13d)](),_0x58e342(0x123);}},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x13d)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x2ef)]=function(_0x1f2f60,_0x26ab13,_0x2a843b){const _0x1bca1a=_0x354d50;if(!this[_0x1bca1a(0x257)]())return _0x26ab13;if(this[_0x1bca1a(0x3c6)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();if(this[_0x1bca1a(0x1cd)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this['lineHeight']();if(this[_0x1bca1a(0x30d)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();if(this[_0x1bca1a(0x2a8)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();if(this['drawItemEffectsMpDamage'](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();if(this[_0x1bca1a(0x1bd)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();if(this[_0x1bca1a(0x13a)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();if(this[_0x1bca1a(0x43f)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this['lineHeight']();if(this[_0x1bca1a(0x1b6)](_0x1f2f60,_0x26ab13,_0x2a843b))_0x26ab13+=this[_0x1bca1a(0x148)]();return this[_0x1bca1a(0x140)](),_0x26ab13;},Window_ShopStatus[_0x354d50(0x384)]['getItemEffects']=function(){const _0x5a3963=_0x354d50;return this[_0x5a3963(0x16b)][_0x5a3963(0x203)];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x257)]=function(){const _0x5f2cb5=_0x354d50;let _0xb94579=![];this[_0x5f2cb5(0x1cf)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x14299d=this[_0x5f2cb5(0xd1)]();for(const _0xee15ba of _0x14299d){switch(_0xee15ba[_0x5f2cb5(0x4e3)]){case Game_Action['EFFECT_RECOVER_HP']:this[_0x5f2cb5(0x1cf)]['rateHP']+=_0xee15ba[_0x5f2cb5(0x3ac)],this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x2bd)]+=_0xee15ba['value2'],_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x1a8)]:this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x17f)]+=_0xee15ba[_0x5f2cb5(0x3ac)],this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x1cb)]+=_0xee15ba[_0x5f2cb5(0x4c8)],_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x266)]:this['_itemData']['gainTP']+=_0xee15ba[_0x5f2cb5(0x3ac)],_0xb94579=!![];break;case Game_Action['EFFECT_ADD_STATE']:this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x333)]['push'](_0xee15ba[_0x5f2cb5(0x147)]),_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x4b3)]:this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x433)][_0x5f2cb5(0x29b)](_0xee15ba[_0x5f2cb5(0x147)]),this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x369)]=!![],_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x320)]:this['_itemData']['changeBuff'][_0xee15ba[_0x5f2cb5(0x147)]]+=0x1,_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x49a)]:this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0xd8)][_0xee15ba[_0x5f2cb5(0x147)]]-=0x1,_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x237)]:this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x37e)][_0x5f2cb5(0x29b)](_0xee15ba[_0x5f2cb5(0x147)]),this['_itemData'][_0x5f2cb5(0x369)]=!![],_0xb94579=!![];break;case Game_Action[_0x5f2cb5(0x3fe)]:this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x18e)][_0x5f2cb5(0x29b)](_0xee15ba[_0x5f2cb5(0x147)]),this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x369)]=!![],_0xb94579=!![];break;}}if(this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x333)][_0x5f2cb5(0x13b)]>0x0)this['_itemData'][_0x5f2cb5(0x109)]=!![];for(let _0x574ddc=0x0;_0x574ddc<this['_itemData'][_0x5f2cb5(0xd8)][_0x5f2cb5(0x13b)];_0x574ddc++){if(this['_itemData'][_0x5f2cb5(0xd8)][_0x574ddc]!==0x0)this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x109)]=!![];}this[_0x5f2cb5(0x16b)][_0x5f2cb5(0x3b2)]!==0x0&&(this[_0x5f2cb5(0x1cf)][_0x5f2cb5(0x145)]=this[_0x5f2cb5(0x16b)][_0x5f2cb5(0x3b2)],_0xb94579=!![]);const _0x2c2a25=['HP\x20RECOVERY',_0x5f2cb5(0x48d),'TP\x20RECOVERY',_0x5f2cb5(0x3d0),_0x5f2cb5(0x28d),_0x5f2cb5(0x164),_0x5f2cb5(0x2ee),_0x5f2cb5(0x18d),_0x5f2cb5(0x103)];for(const _0x48de5b of _0x2c2a25){if(this[_0x5f2cb5(0xf4)][_0x48de5b]){_0xb94579=!![];break;}}return _0xb94579;},Window_ShopStatus[_0x354d50(0x384)]['drawItemEffectsHpRecovery']=function(_0x3d9e4f,_0x583443,_0x61267d){const _0x8d9ee=_0x354d50,_0x39fd5e=_0x8d9ee(0x38b);if(this[_0x8d9ee(0x1cf)][_0x8d9ee(0x179)]<=0x0&&this[_0x8d9ee(0x1cf)][_0x8d9ee(0x2bd)]<=0x0&&!this[_0x8d9ee(0xf4)][_0x39fd5e])return![];const _0x59f5f2=this[_0x8d9ee(0x31d)]();this['drawItemKeyData'](_0x59f5f2,_0x3d9e4f,_0x583443,_0x61267d,!![]);const _0x329076=this[_0x8d9ee(0x173)]();return this[_0x8d9ee(0xf2)](ColorManager[_0x8d9ee(0x435)](0x1)),this['drawItemKeyData'](_0x329076,_0x3d9e4f,_0x583443,_0x61267d,![],_0x8d9ee(0xbd)),this[_0x8d9ee(0x3dc)](_0x3d9e4f,_0x583443,_0x61267d),this[_0x8d9ee(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x31d)]=function(){const _0x21a030=_0x354d50,_0x58a9c8=VisuMZ['ItemsEquipsCore'][_0x21a030(0x1c3)][_0x21a030(0x3ae)][_0x21a030(0x376)];return _0x58a9c8[_0x21a030(0x288)](TextManager['hp']);},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsHpRecoveryText']=function(){const _0x4eb69a=_0x354d50,_0x11824b=_0x4eb69a(0x38b);if(this[_0x4eb69a(0xf4)][_0x11824b])return this['_customItemInfo'][_0x11824b];let _0x5cd5df='';if(this[_0x4eb69a(0x1cf)]['rateHP']>0x0)_0x5cd5df+=_0x4eb69a(0x306)[_0x4eb69a(0x288)](Math[_0x4eb69a(0x4c1)](this[_0x4eb69a(0x1cf)][_0x4eb69a(0x179)]*0x64));if(this[_0x4eb69a(0x1cf)][_0x4eb69a(0x179)]>0x0&&this[_0x4eb69a(0x1cf)]['flatHP']>0x0)_0x5cd5df+='\x20';if(this[_0x4eb69a(0x1cf)][_0x4eb69a(0x2bd)]>0x0)_0x5cd5df+=_0x4eb69a(0x2e8)['format'](this[_0x4eb69a(0x1cf)][_0x4eb69a(0x2bd)]);return _0x5cd5df;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x1cd)]=function(_0x1432da,_0x340adf,_0x2dc32f){const _0x44c211=_0x354d50,_0x138c7c=_0x44c211(0x48d);if(this[_0x44c211(0x1cf)][_0x44c211(0x17f)]<=0x0&&this[_0x44c211(0x1cf)]['flatMP']<=0x0&&!this[_0x44c211(0xf4)][_0x138c7c])return![];const _0x205957=this['getItemEffectsMpRecoveryLabel']();this[_0x44c211(0x30b)](_0x205957,_0x1432da,_0x340adf,_0x2dc32f,!![]);const _0x3e1a3a=this[_0x44c211(0x28f)]();return this[_0x44c211(0xf2)](ColorManager[_0x44c211(0x435)](0x3)),this[_0x44c211(0x30b)](_0x3e1a3a,_0x1432da,_0x340adf,_0x2dc32f,![],_0x44c211(0xbd)),this[_0x44c211(0x3dc)](_0x1432da,_0x340adf,_0x2dc32f),this[_0x44c211(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x403)]=function(){const _0xad4222=_0x354d50,_0x5777f6=VisuMZ[_0xad4222(0x122)]['Settings'][_0xad4222(0x3ae)][_0xad4222(0x285)];return _0x5777f6['format'](TextManager['mp']);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x28f)]=function(){const _0x9a3b87=_0x354d50,_0x3be63d=_0x9a3b87(0x48d);if(this['_customItemInfo'][_0x3be63d])return this[_0x9a3b87(0xf4)][_0x3be63d];let _0xa3ed00='';if(this[_0x9a3b87(0x1cf)][_0x9a3b87(0x17f)]>0x0)_0xa3ed00+=_0x9a3b87(0x306)[_0x9a3b87(0x288)](Math['floor'](this[_0x9a3b87(0x1cf)][_0x9a3b87(0x17f)]*0x64));if(this[_0x9a3b87(0x1cf)][_0x9a3b87(0x17f)]>0x0&&this['_itemData']['flatMP']>0x0)_0xa3ed00+='\x20';if(this['_itemData'][_0x9a3b87(0x1cb)]>0x0)_0xa3ed00+=_0x9a3b87(0x2e8)['format'](this[_0x9a3b87(0x1cf)][_0x9a3b87(0x1cb)]);return _0xa3ed00;},Window_ShopStatus['prototype'][_0x354d50(0x30d)]=function(_0x235c21,_0x3b37f6,_0x4256b7){const _0x1bbfbc=_0x354d50,_0x232909='TP\x20RECOVERY';if(this[_0x1bbfbc(0x1cf)][_0x1bbfbc(0x471)]<=0x0&&!this[_0x1bbfbc(0xf4)][_0x232909])return![];const _0x5c501d=this['getItemEffectsTpRecoveryLabel']();this[_0x1bbfbc(0x30b)](_0x5c501d,_0x235c21,_0x3b37f6,_0x4256b7,!![]);const _0xc90295=this[_0x1bbfbc(0x16c)]();return this['changeTextColor'](ColorManager[_0x1bbfbc(0x3c8)]()),this[_0x1bbfbc(0x30b)](_0xc90295,_0x235c21,_0x3b37f6,_0x4256b7,![],'right'),this[_0x1bbfbc(0x3dc)](_0x235c21,_0x3b37f6,_0x4256b7),this[_0x1bbfbc(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x3cf)]=function(){const _0x13b859=_0x354d50,_0x46f325=VisuMZ['ItemsEquipsCore'][_0x13b859(0x1c3)][_0x13b859(0x3ae)]['LabelRecoverTP'];return _0x46f325['format'](TextManager['tp']);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x16c)]=function(){const _0x3365b6=_0x354d50,_0xf7a165='TP\x20RECOVERY';if(this['_customItemInfo'][_0xf7a165])return this['_customItemInfo'][_0xf7a165];let _0x4d63bf='';return _0x4d63bf+=_0x3365b6(0x2e8)[_0x3365b6(0x288)](this[_0x3365b6(0x1cf)]['gainTP']),_0x4d63bf;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x13a)]=function(_0x1e9710,_0x3e2869,_0x3ae21f){const _0x5d8f45=_0x354d50,_0x44bf24=_0x5d8f45(0x2ee);if(this[_0x5d8f45(0x1cf)][_0x5d8f45(0x145)]===0x0&&!this['_customItemInfo'][_0x44bf24])return![];const _0x35d792=this[_0x5d8f45(0x111)]();this[_0x5d8f45(0x30b)](_0x35d792,_0x1e9710,_0x3e2869,_0x3ae21f,!![]);const _0x3ef419=this[_0x5d8f45(0x2e5)]();return this[_0x5d8f45(0x1cf)]['selfTP']>0x0?this[_0x5d8f45(0xf2)](ColorManager[_0x5d8f45(0x3c8)]()):this['changeTextColor'](ColorManager[_0x5d8f45(0x398)]()),this[_0x5d8f45(0x30b)](_0x3ef419,_0x1e9710,_0x3e2869,_0x3ae21f,![],_0x5d8f45(0xbd)),this[_0x5d8f45(0x3dc)](_0x1e9710,_0x3e2869,_0x3ae21f),this[_0x5d8f45(0x140)](),!![];},Window_ShopStatus['prototype'][_0x354d50(0x111)]=function(){const _0x571ed9=_0x354d50,_0x3bec17=VisuMZ[_0x571ed9(0x122)]['Settings']['StatusWindow'][_0x571ed9(0x48f)];return _0x3bec17[_0x571ed9(0x288)](TextManager['tp']);},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsSelfTpGainText']=function(){const _0x482409=_0x354d50,_0x54b1b3=_0x482409(0x2ee);if(this[_0x482409(0xf4)][_0x54b1b3])return this['_customItemInfo'][_0x54b1b3];let _0x5f525d='';return this['_itemData'][_0x482409(0x145)]>0x0?_0x5f525d+=_0x482409(0x2e8)[_0x482409(0x288)](this[_0x482409(0x1cf)][_0x482409(0x145)]):_0x5f525d+='%1'[_0x482409(0x288)](this[_0x482409(0x1cf)][_0x482409(0x145)]),_0x5f525d;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x2a8)]=function(_0xc503f7,_0x348795,_0x1786be){const _0xf34a18=_0x354d50,_0x3c3473=_0xf34a18(0x3d0);if(this[_0xf34a18(0x1cf)][_0xf34a18(0x179)]>=0x0&&this[_0xf34a18(0x1cf)][_0xf34a18(0x2bd)]>=0x0&&!this[_0xf34a18(0xf4)][_0x3c3473])return![];const _0x2666df=this['getItemEffectsHpDamageLabel']();this[_0xf34a18(0x30b)](_0x2666df,_0xc503f7,_0x348795,_0x1786be,!![]);const _0xa30cfe=this[_0xf34a18(0x3fb)]();return this['changeTextColor'](ColorManager['damageColor'](0x0)),this[_0xf34a18(0x30b)](_0xa30cfe,_0xc503f7,_0x348795,_0x1786be,![],'right'),this[_0xf34a18(0x3dc)](_0xc503f7,_0x348795,_0x1786be),this[_0xf34a18(0x140)](),!![];},Window_ShopStatus['prototype'][_0x354d50(0x33f)]=function(){const _0x58d620=_0x354d50,_0x3c8e0f=VisuMZ[_0x58d620(0x122)][_0x58d620(0x1c3)]['StatusWindow'][_0x58d620(0x2c4)];return _0x3c8e0f[_0x58d620(0x288)](TextManager['hp']);},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x3fb)]=function(){const _0x323166=_0x354d50,_0x2affe1='HP\x20DAMAGE';if(this[_0x323166(0xf4)][_0x2affe1])return this[_0x323166(0xf4)][_0x2affe1];let _0x2f5bf4='';if(this['_itemData'][_0x323166(0x179)]<0x0)_0x2f5bf4+=_0x323166(0x121)[_0x323166(0x288)](Math[_0x323166(0x4c1)](this[_0x323166(0x1cf)][_0x323166(0x179)]*0x64));if(this[_0x323166(0x1cf)][_0x323166(0x179)]<0x0&&this[_0x323166(0x1cf)]['flatHP']<0x0)_0x2f5bf4+='\x20';if(this[_0x323166(0x1cf)]['flatHP']<0x0)_0x2f5bf4+='%1'[_0x323166(0x288)](this['_itemData'][_0x323166(0x2bd)]);return _0x2f5bf4;},Window_ShopStatus['prototype']['drawItemEffectsMpDamage']=function(_0x408e6f,_0x4a047e,_0x201610){const _0x36aeba=_0x354d50,_0x3fcc9e='MP\x20DAMAGE';if(this[_0x36aeba(0x1cf)][_0x36aeba(0x17f)]>=0x0&&this[_0x36aeba(0x1cf)][_0x36aeba(0x1cb)]>=0x0&&!this['_customItemInfo'][_0x3fcc9e])return![];const _0x157388=this[_0x36aeba(0x39c)]();this[_0x36aeba(0x30b)](_0x157388,_0x408e6f,_0x4a047e,_0x201610,!![]);const _0x5cc1a0=this[_0x36aeba(0x4b5)]();return this[_0x36aeba(0xf2)](ColorManager[_0x36aeba(0x435)](0x2)),this[_0x36aeba(0x30b)](_0x5cc1a0,_0x408e6f,_0x4a047e,_0x201610,![],_0x36aeba(0xbd)),this['drawItemDarkRect'](_0x408e6f,_0x4a047e,_0x201610),this[_0x36aeba(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsMpDamageLabel']=function(){const _0x2dbcbb=_0x354d50,_0x4a6b0d=VisuMZ['ItemsEquipsCore'][_0x2dbcbb(0x1c3)]['StatusWindow']['LabelDamageMP'];return _0x4a6b0d[_0x2dbcbb(0x288)](TextManager['mp']);},Window_ShopStatus['prototype'][_0x354d50(0x4b5)]=function(){const _0x26df66=_0x354d50,_0x25648e=_0x26df66(0x28d);if(this[_0x26df66(0xf4)][_0x25648e])return this[_0x26df66(0xf4)][_0x25648e];let _0x4f10a5='';if(this[_0x26df66(0x1cf)][_0x26df66(0x17f)]<0x0)_0x4f10a5+=_0x26df66(0x121)[_0x26df66(0x288)](Math[_0x26df66(0x4c1)](this[_0x26df66(0x1cf)]['rateMP']*0x64));if(this[_0x26df66(0x1cf)][_0x26df66(0x17f)]<0x0&&this[_0x26df66(0x1cf)][_0x26df66(0x1cb)]<0x0)_0x4f10a5+='\x20';if(this[_0x26df66(0x1cf)][_0x26df66(0x1cb)]<0x0)_0x4f10a5+='%1'[_0x26df66(0x288)](this[_0x26df66(0x1cf)][_0x26df66(0x1cb)]);return _0x4f10a5;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x1bd)]=function(_0x3578b6,_0x4d582a,_0x3b84cc){const _0x497b76=_0x354d50,_0x504ef8=_0x497b76(0x164);if(this[_0x497b76(0x1cf)][_0x497b76(0x471)]>=0x0&&!this[_0x497b76(0xf4)][_0x504ef8])return![];const _0x14fa17=this['getItemEffectsTpDamageLabel']();this['drawItemKeyData'](_0x14fa17,_0x3578b6,_0x4d582a,_0x3b84cc,!![]);const _0x4ab386=this[_0x497b76(0x3d3)]();return this[_0x497b76(0xf2)](ColorManager[_0x497b76(0x398)]()),this[_0x497b76(0x30b)](_0x4ab386,_0x3578b6,_0x4d582a,_0x3b84cc,![],_0x497b76(0xbd)),this[_0x497b76(0x3dc)](_0x3578b6,_0x4d582a,_0x3b84cc),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsTpDamageLabel']=function(){const _0x47ac42=_0x354d50,_0x2bca2e=VisuMZ[_0x47ac42(0x122)]['Settings'][_0x47ac42(0x3ae)][_0x47ac42(0x12c)];return _0x2bca2e[_0x47ac42(0x288)](TextManager['tp']);},Window_ShopStatus['prototype']['getItemEffectsTpDamageText']=function(){const _0x16e744=_0x354d50,_0x56c3b0=_0x16e744(0x164);if(this['_customItemInfo'][_0x56c3b0])return this['_customItemInfo'][_0x56c3b0];let _0x2c2a7a='';return _0x2c2a7a+='%1'['format'](this[_0x16e744(0x1cf)]['gainTP']),_0x2c2a7a;},Window_ShopStatus['prototype'][_0x354d50(0x43f)]=function(_0x2bca91,_0x4ba098,_0x3662ef){const _0x2699dc=_0x354d50,_0x56ed88='ADDED\x20EFFECTS';if(!this['_itemData'][_0x2699dc(0x109)]&&!this[_0x2699dc(0xf4)][_0x56ed88])return![];const _0x47b1d0=this[_0x2699dc(0x3d8)]();if(_0x47b1d0[_0x2699dc(0x13b)]<=0x0)return![];const _0x37f1cc=this[_0x2699dc(0x2b7)]();return this[_0x2699dc(0x30b)](_0x37f1cc,_0x2bca91,_0x4ba098,_0x3662ef,!![]),this[_0x2699dc(0x30b)](_0x47b1d0,_0x2bca91,_0x4ba098,_0x3662ef,![],_0x2699dc(0xbd)),this[_0x2699dc(0x3dc)](_0x2bca91,_0x4ba098,_0x3662ef),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsAddedStatesBuffsLabel']=function(){const _0x2b9081=_0x354d50;return VisuMZ['ItemsEquipsCore'][_0x2b9081(0x1c3)][_0x2b9081(0x3ae)][_0x2b9081(0xec)];},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsAddedStatesBuffsText']=function(){const _0x941ac6=_0x354d50,_0x22fe1e=_0x941ac6(0x18d);if(this['_customItemInfo'][_0x22fe1e])return this[_0x941ac6(0xf4)][_0x22fe1e];let _0x3fe4f3='',_0x33bdd5=0x0;const _0x12173a=0x8;for(const _0x1c4070 of this[_0x941ac6(0x1cf)][_0x941ac6(0x333)]){const _0x397a5e=$dataStates[_0x1c4070];if(_0x397a5e&&_0x397a5e['iconIndex']>0x0){_0x3fe4f3+=_0x941ac6(0x188)[_0x941ac6(0x288)](_0x397a5e[_0x941ac6(0x42e)]),_0x33bdd5++;if(_0x33bdd5>=_0x12173a)return _0x3fe4f3;}}for(let _0x526e3d=0x0;_0x526e3d<this['_itemData'][_0x941ac6(0xd8)][_0x941ac6(0x13b)];_0x526e3d++){const _0x38aaa6=this[_0x941ac6(0x1cf)][_0x941ac6(0xd8)][_0x526e3d],_0x36e734=Game_BattlerBase[_0x941ac6(0x384)][_0x941ac6(0x227)](_0x38aaa6,_0x526e3d);if(_0x36e734>0x0){_0x3fe4f3+=_0x941ac6(0x188)[_0x941ac6(0x288)](_0x36e734),_0x33bdd5++;if(_0x33bdd5>=_0x12173a)return _0x3fe4f3;}}return _0x3fe4f3;},Window_ShopStatus['prototype'][_0x354d50(0x1b6)]=function(_0x5cf8d2,_0x434939,_0x40f80b){const _0x102a39=_0x354d50,_0x1a61a9=_0x102a39(0x103);if(!this[_0x102a39(0x1cf)][_0x102a39(0x369)]&&!this['_customItemInfo'][_0x1a61a9])return![];const _0x5ca23b=this[_0x102a39(0x303)]();this['drawItemKeyData'](_0x5ca23b,_0x5cf8d2,_0x434939,_0x40f80b,!![]);const _0x32eadb=this[_0x102a39(0x344)]();return this[_0x102a39(0x30b)](_0x32eadb,_0x5cf8d2,_0x434939,_0x40f80b,![],'right'),this[_0x102a39(0x3dc)](_0x5cf8d2,_0x434939,_0x40f80b),this[_0x102a39(0x140)](),!![];},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsRemovedStatesBuffsLabel']=function(){const _0x46e94b=_0x354d50;return VisuMZ[_0x46e94b(0x122)]['Settings'][_0x46e94b(0x3ae)][_0x46e94b(0x201)];},Window_ShopStatus[_0x354d50(0x384)]['getItemEffectsRemovedStatesBuffsText']=function(){const _0x1a7ee9=_0x354d50,_0x18449a='REMOVED\x20EFFECTS';if(this[_0x1a7ee9(0xf4)][_0x18449a])return this[_0x1a7ee9(0xf4)][_0x18449a];let _0x3a5cfe='',_0x54220b=0x0;const _0x1f5b5a=VisuMZ[_0x1a7ee9(0x122)][_0x1a7ee9(0x1c3)][_0x1a7ee9(0x3ae)][_0x1a7ee9(0x1d5)];for(const _0x2e9223 of this[_0x1a7ee9(0x1cf)][_0x1a7ee9(0x433)]){const _0xf1e770=$dataStates[_0x2e9223];if(_0xf1e770&&_0xf1e770[_0x1a7ee9(0x42e)]>0x0){_0x3a5cfe+=_0x1a7ee9(0x188)[_0x1a7ee9(0x288)](_0xf1e770[_0x1a7ee9(0x42e)]),_0x54220b++;if(_0x54220b>=_0x1f5b5a)return _0x3a5cfe;}}for(let _0x34850c=0x0;_0x34850c<this[_0x1a7ee9(0x1cf)][_0x1a7ee9(0x37e)][_0x1a7ee9(0x13b)];_0x34850c++){const _0x4c032d=this[_0x1a7ee9(0x1cf)][_0x1a7ee9(0x37e)][_0x34850c],_0x2dead6=Game_BattlerBase[_0x1a7ee9(0x384)]['buffIconIndex'](0x1,_0x4c032d);if(_0x2dead6>0x0){_0x3a5cfe+=_0x1a7ee9(0x188)[_0x1a7ee9(0x288)](_0x2dead6),_0x54220b++;if(_0x54220b>=_0x1f5b5a)return _0x3a5cfe;}}for(let _0x200e8e=0x0;_0x200e8e<this[_0x1a7ee9(0x1cf)][_0x1a7ee9(0x18e)][_0x1a7ee9(0x13b)];_0x200e8e++){const _0x5355fb=this[_0x1a7ee9(0x1cf)][_0x1a7ee9(0x18e)][_0x200e8e],_0x4a057d=Game_BattlerBase[_0x1a7ee9(0x384)]['buffIconIndex'](-0x1,_0x5355fb);if(_0x4a057d>0x0){_0x3a5cfe+='\x5cI[%1]'[_0x1a7ee9(0x288)](_0x4a057d),_0x54220b++;if(_0x54220b>=_0x1f5b5a)return _0x3a5cfe;}}return _0x3a5cfe;},Window_ShopStatus['prototype']['drawItemCustomEntries']=function(_0x5b06a5,_0x51d329,_0x363609){const _0xfe0637=_0x354d50;if(this['_item'][_0xfe0637(0xd2)][_0xfe0637(0x364)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x19469d=String(RegExp['$1'])[_0xfe0637(0x4b2)](/[\r\n]+/);for(const _0x3f4d34 of _0x19469d){if(_0x3f4d34['match'](/(.*):[ ](.*)/i)){const _0x27fff9=String(RegExp['$1'])['trim'](),_0x590480=String(RegExp['$2'])[_0xfe0637(0x4bf)]();this[_0xfe0637(0x19c)](_0x27fff9,_0x590480,_0x5b06a5,_0x51d329,_0x363609),_0x51d329+=this[_0xfe0637(0x148)]();}}}return this['resetFontSettings'](),_0x51d329;},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x19c)]=function(_0x5e5b94,_0x5886f3,_0x591142,_0x406454,_0x1462d5){const _0x19eebd=_0x354d50;this['drawItemKeyData'](_0x5e5b94,_0x591142,_0x406454,_0x1462d5,!![]),this['drawItemKeyData'](_0x5886f3,_0x591142,_0x406454,_0x1462d5,![],'right'),this[_0x19eebd(0x3dc)](_0x591142,_0x406454,_0x1462d5),this[_0x19eebd(0x140)]();},Window_ShopStatus[_0x354d50(0x384)][_0x354d50(0x291)]=function(){const _0x887c7e=_0x354d50;if(!this['_item'])return;const _0x5c06e6=this[_0x887c7e(0x16b)][_0x887c7e(0xd2)],_0x5af2e2=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x3ea77d=_0x5c06e6[_0x887c7e(0x364)](_0x5af2e2);if(_0x3ea77d)for(const _0x3b6447 of _0x3ea77d){_0x3b6447[_0x887c7e(0x364)](_0x5af2e2);const _0x6375db=String(RegExp['$1'])[_0x887c7e(0x4bf)]()||'';if(_0x6375db==='')continue;const _0x4cff7c=ImageManager['loadPicture'](_0x6375db);_0x4cff7c['addLoadListener'](this[_0x887c7e(0x2f5)]['bind'](this,_0x4cff7c,this['_item']));}},Window_ShopStatus[_0x354d50(0x384)]['drawCustomShopGraphicLoad']=function(_0x4fcddd,_0x55bca8){const _0x42d116=_0x354d50;if(this[_0x42d116(0x16b)]!==_0x55bca8)return;if(!_0x4fcddd)return;if(_0x4fcddd[_0x42d116(0x138)]<=0x0||_0x4fcddd[_0x42d116(0x1c6)]<=0x0)return;const _0x2f8340=_0x55bca8[_0x42d116(0xd2)];let _0x1f2baa=_0x42d116(0x3e5);_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x1f2baa=_0x42d116(0x28e));const _0x1b3ae6=_0x1f2baa===_0x42d116(0x3e5)?this[_0x42d116(0x3e7)]:this[_0x42d116(0x484)];let _0x4d7a01=this[_0x42d116(0xf6)],_0x16ae2b=this[_0x42d116(0x4df)];_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x4d7a01=Number(RegExp['$1']));_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x16ae2b=Number(RegExp['$1']));_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x4d7a01=Number(RegExp['$1']),_0x16ae2b=Number(RegExp['$2']));const _0x19533d=Math[_0x42d116(0x361)](0x1,_0x4d7a01/_0x4fcddd[_0x42d116(0x138)],_0x16ae2b/_0x4fcddd[_0x42d116(0x1c6)]);let _0x35c91d=0x0,_0x4b91db=0x0,_0x56f321=Math[_0x42d116(0x4c1)](_0x4fcddd['width']*_0x19533d),_0x5aff0f=Math[_0x42d116(0x4c1)](_0x4fcddd['height']*_0x19533d),_0x106653=_0x42d116(0x272);_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x106653=String(RegExp['$1'])[_0x42d116(0x49f)]()[_0x42d116(0x4bf)]());if(_0x106653===_0x42d116(0x464))_0x35c91d=0x0;else _0x106653===_0x42d116(0x272)?_0x35c91d=Math[_0x42d116(0x2c9)]((this['innerWidth']-_0x56f321)/0x2):_0x35c91d=this[_0x42d116(0xf6)]-_0x56f321;let _0x201533=_0x42d116(0xfb);_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x201533=String(RegExp['$1'])[_0x42d116(0x49f)]()[_0x42d116(0x4bf)]());if(_0x201533===_0x42d116(0x233))_0x4b91db=0x0;else _0x201533===_0x42d116(0xfb)?_0x4b91db=Math[_0x42d116(0x2c9)]((this['innerHeight']-_0x5aff0f)/0x2):_0x4b91db=this['innerHeight']-_0x5aff0f;_0x2f8340['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x35c91d+=Number(RegExp['$1']));_0x2f8340['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x4b91db+=Number(RegExp['$1']));_0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x35c91d+=Number(RegExp['$1']),_0x4b91db+=Number(RegExp['$2']));let _0x49ebdd=0xff;if(_0x2f8340['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x49ebdd=Number(RegExp['$1']);else _0x2f8340[_0x42d116(0x364)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x49ebdd=Math['round'](Number(RegExp['$1'])*0.01*0xff)[_0x42d116(0x439)](0x0,0xff));_0x1b3ae6[_0x42d116(0x2c7)]=_0x49ebdd,_0x1b3ae6[_0x42d116(0x415)](_0x4fcddd,0x0,0x0,_0x4fcddd[_0x42d116(0x138)],_0x4fcddd[_0x42d116(0x1c6)],_0x35c91d,_0x4b91db,_0x56f321,_0x5aff0f),_0x1b3ae6[_0x42d116(0x2c7)]=0xff;},VisuMZ[_0x354d50(0x122)][_0x354d50(0xde)]=function(_0x286b84){const _0x63d222=_0x354d50;if(_0x286b84===null||typeof _0x286b84!==_0x63d222(0x3a4))return _0x286b84;const _0x18c292=Array[_0x63d222(0x16f)](_0x286b84)?[]:Object[_0x63d222(0x274)](Object[_0x63d222(0x17e)](_0x286b84));for(const _0x4386f0 in _0x286b84){Object[_0x63d222(0x384)][_0x63d222(0x242)][_0x63d222(0x46a)](_0x286b84,_0x4386f0)&&(_0x18c292[_0x4386f0]=typeof _0x286b84[_0x4386f0]===_0x63d222(0x3a4)&&_0x286b84[_0x4386f0]!==null?VisuMZ[_0x63d222(0x122)][_0x63d222(0xde)](_0x286b84[_0x4386f0]):_0x286b84[_0x4386f0]);}return _0x18c292;};