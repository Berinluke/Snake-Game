class c_Box
    {
        constructor(l_Xpos,l_Ypos,l_Size, l_color)
        {
            this.Xpos=l_Xpos;
            this.Ypos=l_Ypos;
            this.Size=l_Size;
            this.Snake_Color=l_color;
            
        }
        m_Draw_Box(l_context)
        {
            l_context.fillStyle=this.Snake_Color;
            l_context.fillRect(this.Xpos,this.Ypos,this.Size,this.Size);
            l_context.strokeRect(this.Xpos,this.Ypos,this.Size,this.Size);
        }
        m_Draw_Circle(l_context)
        {
            
            l_context.fillStyle="#000000";
            l_context.beginPath();
            l_context.arc(this.Xpos+(this.Size/2),this.Ypos+(this.Size),this.Size/2,0,2*Math.PI);
            l_context.closePath();
            l_context.fill();
        }
        
    }