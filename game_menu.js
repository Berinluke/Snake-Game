class c_Home_Screen
    {
        constructor(l_Start_Single_player_Button_Xpos, l_Start_Single_player_Button_Ypos, l_Start_Multi_player_Button_Xpos,l_Start_Multi_player_Button_Ypos, l_Instruction_Button_Xpos, l_Instruction_Button_Ypos )
        {
            this.Start_Single_player_Button_Xpos = l_Start_Single_player_Button_Xpos;
            this.Start_Single_player_Button_Ypos = l_Start_Single_player_Button_Ypos;
            this.Start_Single_player_Button_Width = 330;
            this.Start_Single_player_Button_Height = 50;
            
            this.Start_Multi_player_Button_Xpos = l_Start_Multi_player_Button_Xpos;
            this.Start_Multi_player_Button_Ypos = l_Start_Multi_player_Button_Ypos;
            this.Start_Multi_player_Button_Width =310;
            this.Start_Multi_player_Button_Height = 50;
            
            this.Instruction_Button_Xpos = l_Instruction_Button_Xpos;
            this.Instruction_Button_Ypos = l_Instruction_Button_Ypos;
            this.Instruction_Button_Width = 300;
            this.Instruction_Button_Height = 50;
            
            this.Home_Screen_Button_Color = "#000000";
            this.Home_Screen_Button_Text_Color="#fafafa";
            
        }
        m_Draw_Home_Screen(l_Context)
        {
             l_Context.font="100px Arial";
            l_Context.fillStyle="#000000";
            l_Context.fillText(" Snake Game ",430,200);
            
            l_Context.fillStyle=this.Home_Screen_Button_Color;
            l_Context.strokeStyle="#ffffff";
            
            l_Context.strokeRect(this.Start_Single_player_Button_Xpos, this.Start_Single_player_Button_Ypos, this.Start_Single_player_Button_Width, this.Start_Single_player_Button_Height); l_Context.fillRect(this.Start_Single_player_Button_Xpos, this.Start_Single_player_Button_Ypos, this.Start_Single_player_Button_Width, this.Start_Single_player_Button_Height); 
            
            l_Context.strokeRect(this.Start_Multi_player_Button_Xpos, this.Start_Multi_player_Button_Ypos, this.Start_Multi_player_Button_Width, this.Start_Multi_player_Button_Height); l_Context.fillRect(this.Start_Multi_player_Button_Xpos, this.Start_Multi_player_Button_Ypos, this.Start_Multi_player_Button_Width, this.Start_Multi_player_Button_Height); 
          
            l_Context.strokeRect(this.Instruction_Button_Xpos, this.Instruction_Button_Ypos, this.Instruction_Button_Width, this.Instruction_Button_Height);
            l_Context.fillRect(this.Instruction_Button_Xpos, this.Instruction_Button_Ypos, this.Instruction_Button_Width, this.Instruction_Button_Height);
            
            l_Context.fillStyle=this.Home_Screen_Button_Text_Color;
            l_Context.font="40px Arial";
            l_Context.fillText("SINGLE PLAYER", this.Start_Single_player_Button_Xpos + 10, this.Start_Single_player_Button_Ypos + (this.Start_Single_player_Button_Height-10)); 
            l_Context.fillText("MULTI-PLAYER", this.Start_Multi_player_Button_Xpos + 10, this.Start_Multi_player_Button_Ypos + (this.Start_Multi_player_Button_Height-10));
            l_Context.fillText("INSTRUCTION", this.Instruction_Button_Xpos+10,this.Instruction_Button_Ypos+(this.Instruction_Button_Height-10));
            
            
					
        }
        
        
    }
class c_Instruction_Screen
    {
        constructor(l_Close_Button_Xpos, l_Close_Button_Ypos)
        {
            this.Close_Button_Xpos = l_Close_Button_Xpos;
            this.Close_Button_Ypos = l_Close_Button_Ypos;
            this.Close_Button_Width = 40;
            this.Close_Button_Height = 40;
            this.Instruction_Screen_Button_Color = "#000000";
            this.Instruction_Screen_Button_Text_Color="#fafafa";
        }
        
        m_Draw_Instruction_Screen(l_Context)
        {
            l_Context.fillStyle=this.Instruction_Screen_Button_Color;
           l_Context.strokeStyle="#ffffff"; l_Context.fillRect(this.Close_Button_Xpos,this.Close_Button_Ypos,this.Close_Button_Width,this.Close_Button_Height);
            l_Context.strokeRect(this.Close_Button_Xpos,this.Close_Button_Ypos,this.Close_Button_Width,this.Close_Button_Height);
            
            l_Context.font="40px Arial";
            l_Context.fillStyle=this.Instruction_Screen_Button_Text_Color;
            l_Context.fillText("X",this.Close_Button_Xpos+5,this.Close_Button_Ypos+(this.Close_Button_Height-5));
            
            l_Context.font="50px Arial";
            l_Context.fillStyle="#000000";
            l_Context.fillText("INSTRUCTION",650,100);
            l_Context.font="25px Arial";
            l_Context.fillText("Single Player : ",550,150);
            l_Context.font="20px Arial";
            l_Context.fillText("Press Up Arrow to move up ",650,200);
            l_Context.fillText("Press Down Arrow to move down ",650,250);
            l_Context.fillText("Press Left Arrow to move left ",650,300);
            l_Context.fillText("Press Right Arrow to move right ",650,350);
            l_Context.font="25px Arial";
            l_Context.fillText("Multiplayer Player : ",550,400);
            l_Context.font="20px Arial";
            l_Context.fillText("Press W to move up ",650,450);
            l_Context.fillText("Press S to move down ",650,500);
            l_Context.fillText("Press A to move left ",650,550);
            l_Context.fillText("Press D to move right ",650,600);
            
					
        }
        
        
    }

class c_Game_End_Screen
    {
        constructor(l_Home_Button_Xpos, l_Home_Button_Ypos, l_Restart_Button_Xpos, l_Restart_Button_Ypos)
        {
            this.Home_Button_Xpos = l_Home_Button_Xpos;
            this.Home_Button_Ypos = l_Home_Button_Ypos;
            this.Home_Button_Width = 140;
            this.Home_Button_Height = 50;
            this.Restart_Button_Xpos = l_Restart_Button_Xpos;
            this.Restart_Button_Ypos = l_Restart_Button_Ypos;
            this.Restart_Button_Width = 200;
            this.Restart_Button_Height = 50;
            
            this.Game_End_Screen_Button_Color = "#b78787";
            this.Game_End_Screen_Text_Color="#fafafa";
            
        }
        
        m_Draw_Game_End_Screen(l_Context)
        {
             l_Context.font="100px Arial";
            l_Context.fillStyle="#000000";
            l_Context.fillText(" GAME OVER ",400,200);
            
            l_Context.fillStyle=this.Game_End_Screen_Button_Color;
            l_Context.strokeStyle="#ffffff";
            l_Context.strokeRect(this.Home_Button_Xpos, this.Home_Button_Ypos, this.Home_Button_Width, this.Home_Button_Height); l_Context.fillRect(this.Home_Button_Xpos, this.Home_Button_Ypos, this.Home_Button_Width, this.Home_Button_Height); 
          
            l_Context.strokeRect(this.Restart_Button_Xpos, this.Restart_Button_Ypos, this.Restart_Button_Width, this.Restart_Button_Height);
            l_Context.fillRect(this.Restart_Button_Xpos, this.Restart_Button_Ypos, this.Restart_Button_Width, this.Restart_Button_Height);
            
            l_Context.fillStyle=this.Game_End_Screen_Text_Color;
            l_Context.font="40px Arial";
            l_Context.fillText("HOME", this.Home_Button_Xpos+10,this.Home_Button_Ypos+(this.Home_Button_Height-10));
            l_Context.fillText("RESTART", this.Restart_Button_Xpos+10,this.Restart_Button_Ypos+(this.Restart_Button_Height-10));
            
            
					
        }
        
        
    }