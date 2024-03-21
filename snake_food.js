class c_snake_food
    {
        constructor(l_Xpos,l_Ypos,l_color)
        {
            this.Snake_Food_Xpos=l_Xpos;
            this.Snake_Food_Ypos=l_Ypos;
            this.Snake_Food_Size=40;
            this.Snake_Food_Color=l_color;
        }
        m_Draw_Snake_Food(l_context)
        {
            
            l_context.fillStyle=this.Snake_Food_Color;
            l_context.fillRect(this.Snake_Food_Xpos,this.Snake_Food_Ypos,this.Snake_Food_Size,this.Snake_Food_Size);
        }
        
    }