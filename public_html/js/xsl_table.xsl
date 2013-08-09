<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : xsl_table.xsl
    Created on : 7. August 2013, 15:22
    Author     : recbjo, goevol, kaltal
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>xsl_table.xsl</title>
            </head>
            <body>
                <h2>OEE Report volkan</h2>
                <table border="1">
            
                    <tr bgcolor="#9acd32">
                        <xsl:for-each select="/BI_ARBPL/Line[1]/*">  
                            <th>
                                <xsl:value-of select="@name"/>
                            </th>
                        </xsl:for-each>
                    </tr>
                    <xsl:for-each select="/BI_ARBPL/Line">
                        <tr>
                            <xsl:for-each select="./*">
                                <td>
                                    <xsl:value-of select="."/>
                                </td>
                            </xsl:for-each>
                        </tr>
                    </xsl:for-each> 
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
