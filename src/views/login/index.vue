<template>
    <div class="login-container">
        <el-form class="login-form">
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <el-form-item>
                <span class="svg-container">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                </span>
                <el-input placeholder="username" name="username" type="text"></el-input>
            </el-form-item>
            <el-form-item>
                <span class="svg-container">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                </span>
                <el-input placeholder="password" name="password"></el-input>
                <span class="show-pwd"></span>
            </el-form-item>

            <el-button type="primary" style="width: 100%; margin-bottoom: 30px;">
                登陆
            </el-button>
        </el-form>
    </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
import {} from 'vue'
</script>

<style lang="scss" scoped>

</style>
