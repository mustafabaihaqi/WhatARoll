//==============================================================================
// * ModifyYEP.js
//   Scripter : Kyonides Arkanthes
//   Date: 2023-07-03
//==============================================================================
/*:
 * @plugindesc Centers text of Window_BattleLog Messages and prevents
 * YEP_BattleEngineCore from displaying any MP Damage Popup Sprite on screen.
 * @author Kyonides
 * @help Date: 2023-07-03
 * It removes the MP Damage check by overriding Game_Battler.startDamagePopup
 * function.
 * I got to say that it's pretty much a slight modification of YEP's code. =_=¡
 * 
 * @param Center Text
 * @type switch
 * @default 0
 * @desc Default Switch ID 0 - Unreachable!
 * 
 * @param Font Name
 * @type string
 * @default GameFont
 * @desc Default Font Face for Western Games is GameFont
 * 
 * @param Font Size
 * @type number
 * @default 36
 * @desc Default Value is 36
 * 
 * @param Font Color
 * @type number
 * @default 0
 * @desc 0 means default color
 * 
 * @param Line Height
 * @type number
 * @default 36
 * @desc Default Value is 36
 */

function ModifyYEP() {
  throw new Error('This is a static class');
}

ModifyYEP.parameters = PluginManager.parameters('ModifyYEP');
ModifyYEP.switch_id = Number(ModifyYEP.parameters['Center Text']);
ModifyYEP.battlelog_font_name = ModifyYEP.parameters['Font Name'];
ModifyYEP.battlelog_font_size = Number(ModifyYEP.parameters['Font Size']);
ModifyYEP.battlelog_font_color = Number(ModifyYEP.parameters['Font Color']);
ModifyYEP.battlelog_line_height = Number(ModifyYEP.parameters['Line Height']);
ModifyYEP.battlelog_draw_line_text = Window_BattleLog.prototype.drawLineText;

Game_Battler.prototype.startDamagePopup = function() {
  let result = this.result();
  if (result.missed || result.evaded) {
    let copyResult = JsonEx.makeDeepCopy(result);
    copyResult.hpAffected = false;
    copyResult.mpDamage = 0;
    this._damagePopup.push(copyResult);
  }
  if (result.hpAffected) {
    let copyResult = JsonEx.makeDeepCopy(result);
    copyResult.mpDamage = 0;
    this._damagePopup.push(copyResult);
  }
};

Window_BattleLog.prototype.resetFontSettings = function() {
  this.contents.fontFace = ModifyYEP.battlelog_font_name;
  this.contents.fontSize = ModifyYEP.battlelog_font_size;
  this.resetTextColor();
};

Window_BattleLog.prototype.resetTextColor = function() {
  let color = this.textColor(ModifyYEP.battlelog_font_color);
  this.changeTextColor(color);
};

Window_BattleLog.prototype.lineHeight = function() {
  return ModifyYEP.battlelog_line_height;
};

Window_BattleLog.prototype.drawLineText = function(index) {
  if ( $gameSwitches.value(ModifyYEP.switch_id) ) {
    this.drawSwitchCenterLine(index);
  } else {
    ModifyYEP.battlelog_draw_line_text.call(this, index);
  }
};

Window_BattleLog.prototype.drawSwitchCenterLine = function(index) {
  let text = this._lines[index];
  let rect = this.itemRectForText(index);
  this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
  let tw = this.textWidthEx(text);
  let wx = rect.x + (rect.width - tw) / 2;
  this.resetFontSettings();
  this.drawTextEx(text, wx, rect.y);
};